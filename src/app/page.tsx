import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Advantage from "@/components/Advantage";
import Approach from "@/components/Approach";
import Portfolio from "@/components/Portfolio";
// import Culture from "@/components/Culture"; // Uncomment when company video is ready
import Team from "@/components/Team";
// import News from "@/components/News"; // Uncomment when blog content is available
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Advantage />
        <Approach />
        <Portfolio />
        {/* <Culture /> */}
        <Team />
        {/* <News /> */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
