import {
  AboutSection,
  CTASection,
  FieldSurveySection,
  FooterSection,
  Header,
  HeroSection,
  PartnersSection,
} from "@/components/landing";

const Home = () => {
  return (
    <main className="bg-white text-black">
      <Header />
      <HeroSection />
      <AboutSection />
      <FieldSurveySection />
      <PartnersSection />
      <CTASection />
      <FooterSection />
    </main>
  );
};

export default Home;
