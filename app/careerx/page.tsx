"use client";

import { Carousel } from "@/components/custom-carousel";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function Page() {
	const slideData = [
		{
			title: "PresenceNFC",
			button: "Click Here to View",
			src: "/projects/Presence-NFC.png",
		},
		{
			title: "Tammy",
			button: "Click Here to View",
			src: "/projects/Tammy-Ai.png",
		},
		{
			title: "FlexiPOS",
			button: "Click Here to View",
			src: "/projects/Flexi-POS.png",
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
