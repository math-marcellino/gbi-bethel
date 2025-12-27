import { createFileRoute } from "@tanstack/react-router";
import VideoHero from "@/components/VideoHero";
import PastorSection from "@/components/PastorSection";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main>
			{/* Video Hero Section */}
			<VideoHero />
			
			{/* Pastor Section */}
			<PastorSection />
		</main>
	);
}

