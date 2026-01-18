import { motion } from "motion/react";
import { TextAnimate } from "./ui/text-animate";

export default function JourneySection() {
	return (
		<section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden py-12 md:py-20">
			{/* Background Image with Parallax effect */}
			<div className="absolute inset-0 z-0">
				<motion.div
					className="absolute inset-0"
					initial={{ scale: 1.1 }}
					whileInView={{ scale: 1 }}
					transition={{ duration: 10, ease: "easeOut" }}
					viewport={{ once: true }}
				>
					<img
						src="/our-journey.jpg"
						alt="Our Journey Background"
						className="w-full h-full object-cover"
					/>
				</motion.div>
				<div className="absolute inset-0 bg-black/70" />
				{/* Gradient Overlay for better text readability */}
				<div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-black/30" />
			</div>

			<div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8">
				{/* Title */}
				<div className="overflow-hidden">
					<TextAnimate
						as="h2"
						animation="blurInUp"
						by="character"
						className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-2"
					>
						Our Journey
					</TextAnimate>
				</div>

				{/* Divider */}
				<motion.div
					initial={{ width: 0, opacity: 0 }}
					whileInView={{ width: "100px", opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4, duration: 0.8 }}
					className="h-1 bg-blue-500 mx-auto rounded-full"
				/>

				{/* Description */}
				<TextAnimate
					as="p"
					animation="fadeIn"
					delay={0.6}
					className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto font-light"
				>
					Dari awal yang sederhana di Tasikmalaya, GBI Bethel berkembang menjadi
					jaringan pelayanan yang hidup di Bandung dan Jakarta. Kami percaya,
					pelayanan harus terus relevan. Lewat media digital dan komunitas yang
					hangat, kami rindu menjadi tempat di mana iman Anda bertumbuh dan
					hidup Anda dipulihkan oleh kasih Kristus.
				</TextAnimate>

				{/* Buttons */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.8, duration: 0.6 }}
					className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
				>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-900/20 transition-all duration-300 min-w-[200px]"
					>
						Join Our Services
					</motion.button>
					<motion.button
						whileHover={{
							scale: 1.05,
							backgroundColor: "rgba(255, 255, 255, 0.1)",
						}}
						whileTap={{ scale: 0.95 }}
						className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-lg backdrop-blur-sm transition-all duration-300 min-w-[200px]"
					>
						Learn More
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
}
