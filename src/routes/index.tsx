import { createFileRoute } from "@tanstack/react-router";
import CampusesSection from "@/components/CampusesSection";
import JourneySection from "@/components/JourneySection";
import PastorSection from "@/components/PastorSection";
import VideoHero from "@/components/VideoHero";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main>
			{/* Video Hero Section */}
			<VideoHero />

			{/* Pastor Section */}
			<PastorSection />

			{/* Journey Section */}
			<JourneySection />

			{/* Campuses Section */}
			<CampusesSection />
		</main>
	);
}
