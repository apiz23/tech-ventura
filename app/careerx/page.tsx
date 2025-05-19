"use client";

import { Carousel } from "@/components/custom-carousel";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function Page() {
	const slideData = [
		{
			title: "Mystic Mountains",
			button: "Explore Component",
			src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			title: "Urban Dreams",
			button: "Explore Component",
			src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			title: "Neon Nights",
			button: "Explore Component",
			src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			title: "Desert Whispers",
			button: "Explore Component",
			src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
	];

	return (
		<>
			<div className="h-[40vh] md:min-h-[60vh] flex justify-center pt-32 md:pt-40">
				<h1 className="text-6xl md:text-[18vh] font-semibold uppercase tracking-wider">
					<PointerHighlight
						rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
						pointerClassName="text-yellow-500"
					>
						<span className="relative z-10">CareerX</span>
					</PointerHighlight>
				</h1>
				<div className="md:block hidden">
					<SmoothCursor />
				</div>
			</div>
			<div className="min-h-screen">
				<div className="relative overflow-hidden w-full h-full py-20">
					<Carousel slides={slideData} />
				</div>
			</div>
		</>
	);
}
