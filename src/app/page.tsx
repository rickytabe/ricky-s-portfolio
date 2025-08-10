import AboutSection from "@/component/about";
import ClientsSection from "@/component/companies&clients";
import ExpertiseSection from "@/component/expertise";
import HeroSection from "@/component/hero";
import ProjectsSection from "@/component/pro";
import Navbar from "@/component/navbar";
import ContactSection from "@/component/contact";
import Footer from "@/component/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Navbar />
     <HeroSection />
     <AboutSection />
     <ExpertiseSection />
     <ClientsSection />
     <ProjectsSection />
     <ContactSection />
     <Footer />
    </div>
  );
}
