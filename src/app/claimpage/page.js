import Footer from "../components/footer";
import ClaimDisplayScreen from "./components/claimdisplay";
import HeroClaimPage from "./components/heroandscroller";

export default function UpcomingProjects() {
  return (
    <main className="overflow-hidden">
      <HeroClaimPage />
      <ClaimDisplayScreen />
      <Footer />
    </main>
  );
}
