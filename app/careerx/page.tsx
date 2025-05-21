"use client";

import React from "react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { Card, Carousel } from "@/components/apple-layout-carousel";
import Image from "next/image";

export default function Page() {
	const slideData = [
		{
			category: "Project",
			title: "PresenceNFC",
			src: "/projects/Presence-NFC.png",
			content: (
				<SlideContent
					description="Smart attendance system using NFC"
					imageSrc="/projects/Presence-NFC.png"
				/>
			),
		},
		{
			category: "AI Assistant",
			title: "Tammy",
			src: "/projects/Tammy-Ai.png",
			content: (
				<SlideContent
					description="AI chatbot to assist students and lecturers"
					imageSrc="/projects/Tammy-Ai.png"
				/>
			),
		},
		{
			category: "Retail",
			title: "FlexiPOS",
			src: "/projects/Flexi-POS.png",
			content: (
				<SlideContent
					description="Flexible POS system for modern businesses"
					imageSrc="/projects/Flexi-POS.png"
				/>
			),
		},
	];

	const cards = slideData.map((slide, index) => (
		<Card key={slide.src} card={slide} index={index} />
	));

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

			<div className="min-h-screen w-full h-full py-20">
				<h2 className="max-w-6xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans text-center">
					Discover Featured Projects
				</h2>
				<Carousel items={cards} />
			</div>
		</>
	);
}

const SlideContent = ({
	description,
	imageSrc,
}: {
	description: string;
	imageSrc: string;
}) => (
	<div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
		<p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
			<span className="font-bold text-neutral-700 dark:text-neutral-200">
				{description}
			</span>
		</p>
		<div className="mt-8">
			<Image
				src={imageSrc}
				alt="Project screenshot"
				width={1200}
				height={800}
				className="w-full h-auto rounded-xl border border-neutral-200 dark:border-neutral-700 object-cover"
			/>
		</div>
	</div>
);
