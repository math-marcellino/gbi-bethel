import { Facebook, Instagram, Music, Youtube } from "lucide-react";
import { motion } from "motion/react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TextAnimate } from "./ui/text-animate";

const pastors = [
	{
		id: 1,
		name: "Pdt. Dr. Rubin Adi Abraham",
		title: "Senior Pastor",
		description:
			"Pdt. Dr. Rubin Adi Abraham, M.Th adalah Gembala Sidang GBI Bethel, yang juga dikenal sebagai pembicara rohani di berbagai media dan konferensi nasional serta internasional (Asia, Australia, Eropa, dan Amerika). Beliau adalah sosok pemimpin rohani yang membawa pesan Tuhan ke banyak bangsa dengan kekuatan firman dan ketulusan hati.",
		image: "/pdt-rubin-adi-abraham.jpg", // Replace with actual image path
		socialLinks: {
			instagram: "#",
			youtube: "#",
			tiktok: "#",
			facebook: "#",
		},
	},
	{
		id: 2,
		name: "Pdt. DR. Julius Ishak Abraham",
		title: "Founding Pastor",
		description:
			"Gembala Pendiri GBI Bethel, pelayan Tuhan sejak tahun 1958 yang dikenal setia, rendah hati, dan penuh kuasa Roh Kudus. Pelayanannya telah menjangkau berbagai kota di Indonesia dan luar negeri, melintasi denominasi dan generasi.",
		image: "/pdt-julius-ishak-abraham.jpg", // Replace with actual image path
		socialLinks: null,
	},
];

export default function PastorSection() {
	return (
		<section className="w-full bg-background py-20 px-4 md:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				{/* Pastor Cards */}
				<div className="space-y-24">
					{pastors.map((pastor, index) => (
						<motion.div
							key={pastor.id}
							initial={{ opacity: 0, y: 60 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.7, delay: index * 0.2 }}
							className={`flex flex-col ${
								index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
							} gap-8 lg:gap-12 items-center`}
						>
							{/* Image Container with 3D Card */}
							<div className="w-full lg:w-5/12">
								<CardContainer containerClassName="py-0">
									<CardBody className="relative group w-full h-auto">
										<CardItem translateZ="100" className="w-full">
											<div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-linear-to-br from-primary/10 to-primary/5">
												{/* Animated gradient border */}
												<motion.div
													className="absolute inset-0 rounded-2xl bg-linear-to-r from-primary/50 via-primary to-primary/50 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
													style={{ padding: "2px" }}
												/>

												{/* Image */}
												<div className="relative h-full w-full overflow-hidden rounded-2xl">
													<img
														src={pastor.image}
														alt={pastor.name}
														className="w-full h-full object-cover"
													/>

													{/* Overlay gradient */}
													<div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
												</div>

												{/* Floating animation effect */}
												<motion.div
													className="absolute -z-10 inset-0 rounded-2xl bg-linear-to-br from-primary/20 to-transparent blur-2xl"
													animate={{
														scale: [1, 1.1, 1],
														opacity: [0.3, 0.5, 0.3],
													}}
													transition={{
														duration: 4,
														repeat: Number.POSITIVE_INFINITY,
														ease: "easeInOut",
													}}
												/>
											</div>
										</CardItem>
									</CardBody>
								</CardContainer>
							</div>

							{/* Content Container */}
							<div className="w-full lg:w-7/12 space-y-6">
								{/* Name */}

								<TextAnimate
									as="h3"
									animation="scaleUp"
									className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
								>
									{pastor.name}
								</TextAnimate>

								{/* Title */}
								<TextAnimate
									as="span"
									animation="blurInUp"
									className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm md:text-base font-semibold border border-primary/20"
								>
									{pastor.title}
								</TextAnimate>

								{/* Description */}
								<TextAnimate
									as="p"
									animation="scaleUp"
									className="text-base md:text-lg text-muted-foreground leading-relaxed"
								>
									{pastor.description}
								</TextAnimate>

								{/* Social Links */}
								{pastor.socialLinks && (
									<motion.div
										className="flex gap-4 pt-4"
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.6, delay: 0.6 }}
									>
										{pastor.socialLinks.instagram && (
											<motion.a
												href={pastor.socialLinks.instagram}
												className="w-12 h-12 rounded-full bg-linear-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center text-white hover:scale-110 transition-transform"
												whileHover={{ y: -4 }}
												whileTap={{ scale: 0.95 }}
											>
												<Instagram size={20} />
											</motion.a>
										)}
										{pastor.socialLinks.youtube && (
											<motion.a
												href={pastor.socialLinks.youtube}
												className="w-12 h-12 rounded-full bg-[#FF0000] flex items-center justify-center text-white hover:scale-110 transition-transform"
												whileHover={{ y: -4 }}
												whileTap={{ scale: 0.95 }}
											>
												<Youtube size={20} />
											</motion.a>
										)}
										{pastor.socialLinks.tiktok && (
											<motion.a
												href={pastor.socialLinks.tiktok}
												className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:scale-110 transition-transform"
												whileHover={{ y: -4 }}
												whileTap={{ scale: 0.95 }}
											>
												<Music size={20} />
											</motion.a>
										)}
										{pastor.socialLinks.facebook && (
											<motion.a
												href={pastor.socialLinks.facebook}
												className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform"
												whileHover={{ y: -4 }}
												whileTap={{ scale: 0.95 }}
											>
												<Facebook size={20} />
											</motion.a>
										)}
									</motion.div>
								)}

								{/* Decorative element */}
								<motion.div
									className="relative h-px w-full bg-linear-to-r from-transparent via-primary/30 to-transparent mt-8"
									initial={{ scaleX: 0 }}
									whileInView={{ scaleX: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.8, delay: 0.7 }}
								/>
							</div>
						</motion.div>
					))}
				</div>

				{/* Bottom decorative element */}
				<motion.div
					className="mt-24 relative"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1, delay: 0.5 }}
				>
					<div className="absolute inset-0 flex items-center">
						<div className="w-full border-t border-primary/10" />
					</div>
					<div className="relative flex justify-center">
						<motion.div
							className="bg-background px-4"
							animate={{
								scale: [1, 1.1, 1],
							}}
							transition={{
								duration: 3,
								repeat: Number.POSITIVE_INFINITY,
								ease: "easeInOut",
							}}
						>
							<div className="w-3 h-3 rounded-full bg-primary/50" />
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
