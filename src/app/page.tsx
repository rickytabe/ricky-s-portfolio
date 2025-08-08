import AboutSection from "@/component/about";
import ClientsSection from "@/component/companies&clients";
import ExpertiseSection from "@/component/expertise";
import HeroSection from "@/component/hero";
import ProjectsSection from "@/component/my-project";
import Navbar from "@/component/navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Navbar />
     <HeroSection />
     <AboutSection />
     <ExpertiseSection />
     <ClientsSection />
     <ProjectsSection />
    </div>
  );
}
