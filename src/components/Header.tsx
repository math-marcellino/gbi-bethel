import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Campus data organized by region
const campusesData = {
	Bandung: [
		{ name: "GBI Bethel Stairway from Heaven", href: "/" },
		{ name: "GBI Bethel Paskal Hyper Square", href: "/" },
		{ name: "GBI Bethel Summarecon", href: "/" },
		{ name: "GBI Bethel Kings", href: "/" },
		{ name: "GBI Bethel Kopo", href: "/" },
		{ name: "GBI Bethel Cimahi", href: "/" },
	],
	Tasikmalaya: [{ name: "GBI Bethel Tasikmalaya", href: "/" }],
	Jakarta: [
		{ name: "GBI Bethel Kelapa Gading", href: "/" },
		{ name: "GBI Bethel Kedoya", href: "/" },
	],
	Bekasi: [{ name: "GBI Bethel Harapan Indah", href: "/" }],
};

const cities = Object.keys(campusesData) as (keyof typeof campusesData)[];

// About Us data
const aboutUsData = [
	{
		title: "Our Senior Pastor",
		name: "Pdt. Dr. Rubin Adi Abraham",
		href: "/",
	},
	{
		title: "Our Founder",
		name: "Pdt. DR. Julius Ishak Abraham, M.Sc.",
		href: "/",
	},
];

const menuItems = [
	{ name: "Home", href: "/", hasDropdown: false },
	{
		name: "Our Campuses",
		href: "/",
		hasDropdown: true,
		dropdownType: "campuses",
	},
	{ name: "About Us", href: "/", hasDropdown: true, dropdownType: "about" },
	{ name: "The Journey", href: "/", hasDropdown: false },
	{ name: "Gedor", href: "/", hasDropdown: false },
];

export default function Header() {
	const [menuState, setMenuState] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
	const [hoveredCity, setHoveredCity] =
		useState<keyof typeof campusesData>("Bandung");
	const mobileMenuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Close mobile menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				menuState &&
				mobileMenuRef.current &&
				!mobileMenuRef.current.contains(event.target as Node)
			) {
				setMenuState(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [menuState]);

	const toggleMobileAccordion = (name: string) => {
		setMobileAccordion(mobileAccordion === name ? null : name);
	};

	return (
		<header>
			{/* Overlay for mobile menu */}
			{/** biome-ignore lint/a11y/useKeyWithClickEvents: igniore */}
			<div
				className={cn(
					"fixed inset-0 bg-black/20 backdrop-blur-sm z-10 lg:hidden transition-opacity duration-300",
					menuState
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none",
				)}
				onClick={() => setMenuState(false)}
			/>

			<nav
				data-state={menuState && "active"}
				className="fixed z-20 w-full px-2"
			>
				<div
					ref={mobileMenuRef}
					className={cn(
						"mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
						isScrolled &&
							"bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5",
					)}
				>
					<div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
						<div className="flex w-full justify-between lg:w-auto">
							<Link
								to="/"
								aria-label="home"
								className="flex items-center space-x-2"
							>
								<img src="/gbi-bethel-icon.png" alt="GBI Bethel" width={150} />
							</Link>

							<button
								onClick={() => setMenuState(!menuState)}
								aria-label={menuState === true ? "Close Menu" : "Open Menu"}
								className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
							>
								<Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
								<X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
							</button>
						</div>

						{/* Desktop Navigation */}
						<div className="hidden lg:block">
							<ul className="flex gap-8 text-sm">
								{menuItems.map((item, index) => (
									<li
										key={index}
										className="relative"
										onMouseEnter={() => {
											if (item.hasDropdown) {
												setActiveDropdown(item.name);
												if (item.dropdownType === "campuses") {
													setHoveredCity("Bandung");
												}
											}
										}}
										onMouseLeave={() => setActiveDropdown(null)}
									>
										{item.hasDropdown ? (
											<>
												<button className="text-muted-foreground hover:text-accent-foreground flex items-center gap-1 duration-150">
													<span>{item.name}</span>
													<ChevronDown
														className={cn(
															"size-4 transition-transform duration-200",
															activeDropdown === item.name && "rotate-180",
														)}
													/>
												</button>

												{/* Dropdown Container */}
												<div
													className={cn(
														"absolute left-1/2 top-full pt-4 -translate-x-1/2 transition-all duration-300",
														activeDropdown === item.name
															? "opacity-100 translate-y-0 pointer-events-auto"
															: "opacity-0 -translate-y-2 pointer-events-none",
													)}
												>
													{item.dropdownType === "campuses" && (
														<div className="bg-background/95 backdrop-blur-xl rounded-2xl border shadow-2xl shadow-black/10 overflow-hidden min-w-[500px]">
															<div className="flex">
																{/* Cities List - Left Column */}
																<div className="border-r border-border/50 py-4">
																	{cities.map((city) => (
																		<button
																			key={city}
																			onMouseEnter={() => setHoveredCity(city)}
																			className={cn(
																				"w-full text-left px-6 py-3 text-sm font-medium transition-all duration-200",
																				hoveredCity === city
																					? "bg-primary/10 text-primary border-r-2 border-primary"
																					: "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
																			)}
																		>
																			{city}
																		</button>
																	))}
																</div>

																{/* Campuses List - Right Column */}
																<div className="p-6 min-w-[300px]">
																	<h3 className="text-foreground font-semibold text-sm mb-4">
																		{hoveredCity}
																	</h3>
																	<ul className="space-y-3">
																		{campusesData[hoveredCity].map(
																			(campus, idx) => (
																				<li key={idx}>
																					<Link
																						to={campus.href}
																						className="text-muted-foreground hover:text-foreground text-sm block transition-all duration-150 hover:translate-x-1"
																					>
																						{campus.name}
																					</Link>
																				</li>
																			),
																		)}
																	</ul>
																</div>
															</div>
														</div>
													)}

													{item.dropdownType === "about" && (
														<div className="bg-background/95 backdrop-blur-xl rounded-2xl border shadow-2xl shadow-black/10 p-6 min-w-[400px]">
															<div className="grid grid-cols-2 gap-8">
																{aboutUsData.map((person, idx) => (
																	<Link
																		key={idx}
																		to={person.href}
																		className="group block"
																	>
																		<h3 className="text-foreground font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
																			{person.title}
																		</h3>
																		<p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
																			{person.name}
																		</p>
																	</Link>
																))}
															</div>
														</div>
													)}
												</div>
											</>
										) : (
											<Link
												to={item.href}
												className="text-muted-foreground hover:text-accent-foreground block duration-150"
											>
												<span>{item.name}</span>
											</Link>
										)}
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Mobile Navigation */}
					<div
						className={cn(
							"lg:hidden overflow-hidden transition-all duration-300 ease-out",
							menuState
								? "max-h-[80vh] opacity-100 translate-y-0"
								: "max-h-0 opacity-0 -translate-y-4",
						)}
					>
						<div className="bg-background rounded-2xl border p-6 shadow-2xl shadow-zinc-300/20 mb-6 dark:shadow-none">
							<ul className="space-y-4 text-base">
								{menuItems.map((item, index) => (
									<li key={index}>
										{item.hasDropdown ? (
											<div>
												{/* Accordion Header */}
												<button
													onClick={() => toggleMobileAccordion(item.name)}
													className="text-muted-foreground hover:text-accent-foreground flex items-center justify-between w-full duration-150 py-2"
												>
													<span>{item.name}</span>
													<ChevronDown
														className={cn(
															"size-5 transition-transform duration-300",
															mobileAccordion === item.name && "rotate-180",
														)}
													/>
												</button>

												{/* Accordion Content */}
												<div
													className={cn(
														"overflow-hidden transition-all duration-300 ease-out",
														mobileAccordion === item.name
															? "max-h-[500px] opacity-100"
															: "max-h-0 opacity-0",
													)}
												>
													<div className="pt-2 pb-4 pl-4 border-l-2 border-muted ml-2">
														{item.dropdownType === "campuses" && (
															<div className="space-y-4">
																{Object.entries(campusesData).map(
																	([region, campuses]) => (
																		<div key={region}>
																			<h4 className="text-foreground font-semibold text-sm mb-2">
																				{region}
																			</h4>
																			<ul className="space-y-2">
																				{campuses.map((campus, idx) => (
																					<li key={idx}>
																						<Link
																							to={campus.href}
																							className="text-muted-foreground hover:text-foreground text-sm block transition-colors duration-150"
																						>
																							{campus.name}
																						</Link>
																					</li>
																				))}
																			</ul>
																		</div>
																	),
																)}
															</div>
														)}

														{item.dropdownType === "about" && (
															<div className="space-y-4">
																{aboutUsData.map((person, idx) => (
																	<Link
																		key={idx}
																		to={person.href}
																		className="group block"
																	>
																		<h4 className="text-foreground font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
																			{person.title}
																		</h4>
																		<p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
																			{person.name}
																		</p>
																	</Link>
																))}
															</div>
														)}
													</div>
												</div>
											</div>
										) : (
											<Link
												to={item.href}
												className="text-muted-foreground hover:text-accent-foreground block py-2 duration-150"
											>
												<span>{item.name}</span>
											</Link>
										)}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
