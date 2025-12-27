import { createFileRoute } from "@tanstack/react-router";
import VideoHero from "@/components/VideoHero";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main>
			{/* Video Hero Section */}
			<VideoHero />
		</main>
	);
}

