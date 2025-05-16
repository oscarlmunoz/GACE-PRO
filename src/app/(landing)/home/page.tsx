import HomePageGradients from "./_components/HomePageGradients";
import LandingFeatures from "./_components/LandingFeatures";
import LandingHero from "./_components/LandingHero";
import LandingPricing from "./_components/LandingPricing";

export default function HomePage() {
  return (
    <>
      <HomePageGradients />
      <LandingHero />
      <LandingFeatures />
      <LandingPricing />
      {/* <LandingTestimonials /> */}
      {/* <LandingFAQ /> */}
    </>
  );
}
