import Link from "next/link";

const links = [
	{
		group: "Home",
		items: [
			{
				title: "About",
				href: "#",
			},
		],
	},
	{
		group: "Campuses",
		items: [
			{
				title: "GBI Bethel Bandung",
				href: "#",
			},
			{
				title: "GBI Bethel Tasikmalaya",
				href: "#",
			},
			{
				title: "GBI Bethel Jakarta",
				href: "#",
			},
			{
				title: "GBI Bethel Bekasi",
				href: "#",
			},
		],
	},
	{
		group: "Links",
		items: [
			{
				title: "The Journey",
				href: "#",
			},
			{
				title: "STT Kharisma",
				href: "#",
			},
			{
				title: "Sinode GBI",
				href: "#",
			},
		],
	},
];

export default function FooterSection() {
	return (
		<footer className="border-b bg-white pt-20 dark:bg-transparent">
			<div className="mx-auto max-w-5xl px-6">
				<div className="grid gap-12 md:grid-cols-5">
					<div className="md:col-span-2">
						<Link href="/" aria-label="go home" className="block size-fit">
							<img
								src="/gbi-bethel-icon-plain.png"
								alt="gbi-bethel-icon-plain"
								className="w-36 opacity-60"
							/>
						</Link>
						<div className="mt-6 text-sm text-muted-foreground space-y-1">
							<p>Stairway from Heaven Building</p>
							<p>Komp. Mekar Wangi. Jl. Mekar Laksana No.8</p>
							<p>Bandung</p>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:col-span-3">
						{links.map((link, index) => (
							<div key={index} className="space-y-4 text-sm">
								<span className="block font-medium">{link.group}</span>
								{link.items.map((item, index) => (
									<Link
										key={index}
										href={item.href}
										className="text-muted-foreground hover:text-primary block duration-150"
									>
										<span>{item.title}</span>
									</Link>
								))}
							</div>
						))}
					</div>
				</div>
				<div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
					<span className="text-muted-foreground order-last block text-center text-sm md:order-first">
						© {new Date().getFullYear()} GBI Bethel, All rights reserved
					</span>
					<div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
						<Link
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"
							className="text-muted-foreground hover:text-primary block"
						>
							<svg
								className="size-6"
								xmlns="http://www.w3.org/2000/svg"
								width="1em"
								height="1em"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
								></path>
							</svg>
						</Link>
						<Link
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="YouTube"
							className="text-muted-foreground hover:text-primary block"
						>
							<svg
								className="size-6"
								xmlns="http://www.w3.org/2000/svg"
								width="100%"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
								/>
							</svg>
						</Link>
						<Link
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="TikTok"
							className="text-muted-foreground hover:text-primary block"
						>
							<svg
								className="size-6"
								xmlns="http://www.w3.org/2000/svg"
								width="1em"
								height="1em"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
								></path>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
