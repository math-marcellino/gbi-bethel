import { useEffect, useRef } from "react";

export default function VideoHero() {
	const videoRef = useRef<HTMLVideoElement>(null);

	// Performance optimization: Intersection Observer for lazy loading
	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Start playing when visible
						video.play().catch(() => {
							// Autoplay might be blocked, handle silently
						});
					} else {
						// Pause when not visible to save resources
						video.pause();
					}
				});
			},
			{ threshold: 0.25 },
		);

		observer.observe(video);

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<section className="w-full flex flex-col items-center bg-background">
			{/* Spacer for navbar - gives the navbar its own dedicated space */}
			<div className="h-20 md:h-24 lg:h-[100px] w-full shrink-0" />

			{/* Video container */}
			<div className="w-full max-w-[1400px] px-3 sm:px-4 md:px-6 flex justify-center items-start">
				{/* Video wrapper - maintains 16:9 aspect ratio with hole effect */}
				<div
					className="relative w-full min-h-[70vh] md:min-h-0 aspect-video rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden"
					style={{
						background:
							"linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(20, 20, 30, 0.95) 100%)",
						boxShadow:
							"inset 0 4px 20px rgba(0, 0, 0, 0.8), inset 0 2px 6px rgba(0, 0, 0, 0.6), 0 -2px 10px rgba(255, 255, 255, 0.05)",
					}}
				>
					<video
						ref={videoRef}
						className="absolute inset-0 w-full h-full object-cover animate-in fade-in zoom-in-[1.02] duration-700"
						autoPlay
						loop
						muted
						playsInline
						preload="metadata"
						aria-label="GBI Bethel promotional video"
					>
						<source src="/bumper-video.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>

					{/* Inner shadow overlay - creates the "inside a hole" depth effect */}
					<div
						className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl pointer-events-none"
						style={{
							boxShadow:
								"inset 0 0 150px 40px rgba(0, 0, 0, 0.6), inset 0 0 60px 20px rgba(0, 0, 0, 0.4), inset 0 8px 30px rgba(0, 0, 0, 0.7), inset 0 -4px 20px rgba(0, 0, 0, 0.3)",
						}}
					/>

					{/* Top edge highlight - simulates light hitting the edge of the hole */}
					<div
						className="absolute inset-x-0 top-0 h-1 rounded-t-xl sm:rounded-t-2xl lg:rounded-t-3xl pointer-events-none"
						style={{
							background:
								"linear-gradient(to bottom, rgba(255, 255, 255, 0.15), transparent)",
						}}
					/>
				</div>
			</div>
		</section>
	);
}
