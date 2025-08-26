// components/AppReviews.tsx
'use client';

import { useState, useEffect, JSX } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle, ChevronLeft, ChevronRight, X, Send } from 'lucide-react';
import Image from 'next/image';
import  supabase from '@/lib/supabase';
import { timeStamp } from 'console';

interface Review {
    id: string;
    name: string;
    job_title: string | null;
    avatar: string | null;
    rating: number;
    content: string;
    date: string;
    created_at: string;
}

interface RatingDistribution {
    stars: number;
    percentage: number;
    count: number;
}

const AppReviews = () => {
    const [currentReview, setCurrentReview] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [rating, setRating] = useState<number>(0);
    const [reviewName, setReviewName] = useState<string>('');
    const [reviewJobTitle, setReviewJobTitle] = useState<string>('');
    const [reviewContent, setReviewContent] = useState<string>('');
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [ratingDistribution, setRatingDistribution] = useState<RatingDistribution[]>([]);
    const [averageRating, setAverageRating] = useState<number>(0);
    const [totalReviews, setTotalReviews] = useState<number>(0);

    

    // Function to generate initials from name
    const generateInitials = (name: string): string => {
        return name
            .split(' ')
            .map(part => part[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    // Fetch reviews from Supabase
    const fetchReviews = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('reviews')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                throw error;
            }

            if (data) {
                const formattedReviews: Review[] = data.map(review => ({
                    id: review.id,
                    name: review.name,
                    job_title: review.job_title,
                    avatar: review.image,
                    rating: review.rating,
                    content: review.review_message,
                    date: formatDate(review.created_at),
                    created_at: review.timestamp
                }));
                setReviews(formattedReviews);
                
                // Calculate rating distribution
                calculateRatingDistribution(formattedReviews);
            }
        } catch (error) {
            console.error('Error fetching reviews:', error);
        } finally {
            setLoading(false);
        }
    };

    // Format date to exact date and time with day of week
    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        // Example: "Tuesday, Aug 26, 2025, 20:03"
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        };
        return date.toLocaleString(undefined, options);
    };

    // Calculate rating distribution
    const calculateRatingDistribution = (reviewsData: Review[]) => {
        const total = reviewsData.length;
        setTotalReviews(total);
        
        // Calculate average rating
        const avg = reviewsData.reduce((acc, review) => acc + review.rating, 0) / total;
        setAverageRating(avg);
        
        // Calculate distribution
        const distribution = [5, 4, 3, 2, 1].map(stars => {
            const count = reviewsData.filter(review => Math.round(review.rating) === stars).length;
            const percentage = total > 0 ? (count / total) * 100 : 0;
            return { stars, percentage, count };
        });
        
        setRatingDistribution(distribution);
    };

    // Auto-slide reviews
    useEffect(() => {
        if (reviews.length === 0) return;
        
        const interval = setInterval(() => {
            setCurrentReview((prev) => (prev + 1) % reviews.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [reviews.length]);

    // Fetch reviews on component mount
    useEffect(() => {
        fetchReviews();
    }, []);

    // Handle star rating selection
    const handleStarClick = (starValue: number): void => {
        setRating(starValue);
    };

    // Handle form submission
    const handleSubmitReview = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        
        try {
            const { data, error } = await supabase
                .from('reviews')
                .insert([
                    {
                        name: reviewName,
                        job_title: reviewJobTitle,
                        review_message: reviewContent,
                        rating: rating,
                        image: null,
                        timestamp: new Date().toISOString()
                    }
                ])
                .select();

            if (error) {
                throw error;
            }

            if (data) {
                // Refresh reviews
                await fetchReviews();
                setIsModalOpen(false);
                setRating(0);
                setReviewName('');
                setReviewJobTitle('');
                setReviewContent('');
            }
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    // Render star icons
    const renderStars = (rating: number, size: string = 'text-lg'): JSX.Element => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        return (
            <div className={`flex ${size} text-yellow-400`}>
                {[...Array(5)].map((_, i) => (
                    <span key={i}>
                        {i < fullStars ? (
                            <Star className="w-5 h-5 fill-current" />
                        ) : i === fullStars && hasHalfStar ? (
                            <div className="relative">
                                <Star className="w-5 h-5 text-gray-300" />
                                <div className="absolute inset-0 w-1/2 overflow-hidden">
                                    <Star className="w-5 h-5 fill-current" />
                                </div>
                            </div>
                        ) : (
                            <Star className="w-5 h-5 text-gray-300" />
                        )}
                    </span>
                ))}
            </div>
        );
    };

    // Navigate to next review
    const nextReview = (): void => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    // Navigate to previous review
    const prevReview = (): void => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <section id='reviews' className="relative overflow-hidden bg-black py-12 px-4 md:px-10 lg:px-20 w-full ">
            {/* Simplified background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-90"></div>

            {/* Section content */}
            <div className="relative max-w-7xl mx-auto">
                {/* Title */}
                <motion.div
                    className="mb-12 flex flex-col max-w-3xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-white">
                        <span className='text-blue-500'>#5</span> Reviews
                    </h2>
                    <motion.div
                        className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 mt-2 w-54"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    />
                    <p className="text-white/70 mt-4">
                        Hear from some of the people I&apos;ve worked with. I value every piece of feedback and continuously strive to improve.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Column - Rating Summary */}
                    <div className="md:col-span-1">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative h-full bg-gray-900/80 border border-white/10 hover:bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            <div className="text-center mb-6 flex flex-col items-center space-y-2">
                                <h2 className="text-4xl font-bold text-white">Average {averageRating.toFixed(1)}</h2>
                                {renderStars(averageRating, 'text-xl')}
                                <p className="text-gray-400 mt-2">Based on {totalReviews} reviews</p>
                            </div>

                            {/* Rating Breakdown */}
                            <div className="space-y-3 mt-8">
                                {ratingDistribution.map((item, index) => (
                                    <div key={index} className="flex items-center">
                                        <span className="text-gray-400 w-12">{item.stars}</span>
                                        <div className="flex-1 h-2 bg-gray-800 rounded-full mx-2">
                                            <div
                                                className="h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                                                style={{ width: `${item.percentage}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-gray-400 w-12 text-sm">{Math.round(item.percentage)}%</span>
                                    </div>
                                ))}
                            </div>


                            {/* Write Review Button */}
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="mt-8 w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Write me a Review
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Column - Reviews */}
                    <div className="md:col-span-2">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative h-full bg-gray-900/80 border border-white/10 hover:bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            <h2 className="text-2xl font-bold text-white mb-6">Recent Reviews</h2>

                            {loading ? (
                                <div className="flex justify-center items-center h-80">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                                </div>
                            ) : reviews.length === 0 ? (
                                <div className="flex justify-center items-center h-80">
                                    <p className="text-gray-400">No reviews yet. Be the first to leave one!</p>
                                </div>
                            ) : (
                                <>
                                    {/* Review Slider (Horizontal) */}
                                    <div className="w-full h-80 relative">
                                        <div
                                            className="flex transition-transform duration-500 ease-in-out"
                                            style={{ transform: `translateX(-${currentReview * 100}%)`}}
                                        >
                                            {reviews.map((review) => (
                                                <div key={review.id} className="w-full shrink-0 h-80 px-6">
                                                    <div className="flex items-center mb-4">
                                                        {review.avatar ? (
                                                            <img
                                                                className="h-10 w-10 rounded-full mr-3"
                                                                src={review.avatar}
                                                                alt={review.name}
                                                            />
                                                        ) : (
                                                            <div className="h-10 w-10 rounded-full mr-3 bg-blue-500 flex items-center justify-center text-white font-semibold">
                                                                {generateInitials(review.name)}
                                                            </div>
                                                        )}
                                                        <div>
                                                            <h4 className="font-semibold text-white">{review.name}</h4>
                                                            {review.job_title && (
                                                                <p className="text-gray-400 text-sm">{review.job_title}</p>
                                                            )}
                                                            {renderStars(review.rating)}
                                                        </div>
                                                    </div>
                                                
                                                    <p className="text-gray-300 whitespace-normal break-words overflow-y-auto max-h-32">
                                                        {review.content}
                                                    </p>
                                                    
                                                    <p className="text-gray-500 text-sm mt-4">Posted {formatDate(review.created_at)}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Slider Controls */}
                                    <div className="flex justify-center  space-x-4">
                                        <button
                                            onClick={prevReview}
                                            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors duration-300"
                                            aria-label="Previous review"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={nextReview}
                                            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors duration-300"
                                            aria-label="Next review"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Write Review Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-900/80 bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-gray-800 border border-white/10 rounded-2xl shadow-xl max-w-md w-full mx-4 overflow-hidden"
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-2xl font-bold text-white">Write a Review</h3>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-gray-400 hover:text-white transition-colors duration-300"
                                    aria-label="Close modal"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmitReview}>
                                <div className="my-6">
                                    <label className="block text-gray-300 mb-2">Rate your experience</label>
                                    <div className="flex justify-center space-x-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => handleStarClick(star)}
                                                className="text-2xl focus:outline-none transition-transform duration-300 hover:scale-110"
                                                aria-label={`Rate ${star} stars`}
                                            >
                                                {star <= rating ? (
                                                    <Star className="w-8 h-8 fill-current text-yellow-400" />
                                                ) : (
                                                    <Star className="w-8 h-8 text-gray-400" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-300 mb-2" htmlFor="review-name">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="review-name"
                                        value={reviewName}
                                        onChange={(e) => setReviewName(e.target.value)}
                                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-300 mb-2" htmlFor="review-job-title">
                                        Your Job Title (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        id="review-job-title"
                                        value={reviewJobTitle}
                                        onChange={(e) => setReviewJobTitle(e.target.value)}
                                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-300 mb-2" htmlFor="review-content">
                                        Your Review
                                    </label>
                                    <textarea
                                        id="review-content"
                                        rows={4}
                                        value={reviewContent}
                                        onChange={(e) => setReviewContent(e.target.value)}
                                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
                                >
                                    <Send className="w-5 h-5 mr-2" />
                                    Submit Review
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </section>
    );
};

export default AppReviews;