import { MapPin } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { TextAnimate } from "./ui/text-animate";

// Campus data with addresses
const campusesData = {
	Bandung: [
		{
			name: "GBI Bethel Stairway from Heaven",
			address: "Komp. Mekar Wangi. Jl. Mekar Laksana No.8. Bandung",
		},
		{
			name: "GBI Bethel Paskal Hyper Square",
			address: "Paskal Hyper Square. Jl. Pasirkaliki No. 23 Ruko Blok B-81",
		},
		{
			name: "GBI Bethel Summarecon",
			address: "Jl. Magna Timur, Summarecon Bandung",
		},
		{
			name: "GBI Bethel Kings",
			address: "Jl. Kepatihan Bandung, Gedung Parkir Kings Lt. 14-15",
		},
		{
			name: "GBI Bethel Kopo",
			address: "Taman Kopo Indah III Ruko Blok E No.17-18",
		},
		{
			name: "GBI Bethel Cimahi",
			address: "Jl. Gatot Subroto No 57. Cimahi",
		},
	],
	Tasikmalaya: [
		{
			name: "GBI Bethel Tasikmalaya",
			address: "Jl. Tentara Pelajar 19, Tasikmalaya",
		},
	],
	Jakarta: [
		{
			name: "GBI Bethel Kelapa Gading",
			address:
				"Ruko Gading Bukit Indah Blok H7-10, Kelapa Gading, Jakarta Utara",
		},
		{
			name: "GBI Bethel Kedoya",
			address:
				"The Foodhall Kebon Jeruk Lt.3, Jl. Perjuangan No. 11, Kebon Jeruk - Jakarta Barat",
		},
	],
	Bekasi: [
		{
			name: "GBI Bethel Harapan Indah",
			address: "Ruko Mega Boulevard Blok RV 2 No. 01A, Bekasi",
		},
	],
};

const cities = Object.keys(campusesData) as (keyof typeof campusesData)[];

export default function CampusesSection() {
	const [activeCity, setActiveCity] =
		useState<keyof typeof campusesData>("Bandung");

	return (
		<section className="w-full py-24 bg-background">
			<div className="container mx-auto px-4 max-w-6xl">
				{/* Title */}
				<div className="text-center mb-16 space-y-4">
					<TextAnimate
						as="h2"
						animation="blurInUp"
						by="word"
						className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
					>
						Our Campuses
					</TextAnimate>
					<div className="w-20 h-1.5 bg-primary/20 mx-auto rounded-full overflow-hidden">
						<motion.div
							className="h-full bg-primary"
							initial={{ width: 0 }}
							whileInView={{ width: "100%" }}
							viewport={{ once: true }}
							transition={{ delay: 0.5, duration: 0.8 }}
						/>
					</div>
				</div>

				<div className="flex flex-col md:flex-row gap-8 bg-background/50 backdrop-blur-3xl rounded-3xl border border-border/50 p-6 md:p-8 shadow-xl">
					{/* City Tabs - Left Column */}
					<div className="w-full md:w-1/4 md:border-r md:border-border/50 md:pr-4 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
						{cities.map((city) => (
							<button
								key={city}
								onClick={() => setActiveCity(city)}
								className={cn(
									"w-full text-left px-6 py-4 rounded-xl text-sm font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary whitespace-nowrap",
									activeCity === city
										? "bg-primary/10 text-primary border-r-4 border-primary rounded-r-none"
										: "text-muted-foreground hover:bg-muted/50 hover:text-foreground md:border-r-4 md:border-transparent",
								)}
							>
								{city}
							</button>
						))}
					</div>

					{/* Campus List - Right Column */}
					<div className="w-full md:w-3/4 min-h-[400px]">
						<AnimatePresence mode="wait">
							<motion.div
								key={activeCity}
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ duration: 0.3 }}
								className="grid gap-4"
							>
								{campusesData[activeCity].map((campus, index) => (
									<motion.div
										key={campus.name}
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1 }}
										className="group relative p-6 rounded-2xl border border-border/50 bg-card/30 hover:bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
									>
										<h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
											{campus.name}
										</h3>
										<div className="flex items-start gap-2 text-muted-foreground text-sm md:text-base">
											<MapPin size={18} className="shrink-0 mt-0.5" />
											<p>{campus.address}</p>
										</div>
									</motion.div>
								))}
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</section>
	);
}
