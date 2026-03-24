import {
  AboutSection,
  CTASection,
  FooterSection,
  Header,
  HeroSection,
  PartnersSection,
  ProjectsSection,
} from "@/components/landing";

const Home = () => {
  return (
    <main className="bg-white text-black">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <PartnersSection />
      <CTASection />
      <FooterSection />
    </main>
  );
};

export default Home;
