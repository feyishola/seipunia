import CardSection from "./components/cardsection";
import Footer from "./components/footer";
import HeroSection from "./components/herosection";
import LaunchPad from "./components/launchpad";
import NavComponent from "./components/navbar";
import PartnersComponent from "./components/partners";
import Projects from "./components/projects";
import ReadyTeamComponent from "./components/readyteam";
import Stake from "./components/staking";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* <NavComponent /> */}
      <HeroSection />
      <LaunchPad />
      <CardSection />
      <Projects />
      <Stake />
      <ReadyTeamComponent />
      <PartnersComponent />
      <Footer />
    </main>
  );
}
