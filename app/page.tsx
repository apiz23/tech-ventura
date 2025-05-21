"use client";

import Image from "next/image";
import tvLogo from "@/public/tvLogo.svg";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";
import { CarouselLink } from "@/components/custom-carousel-link";
import { LineShadowText } from "@/components/magicui/line-shadow-text";

export default function Home() {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const lenis = new Lenis();

		lenis.on("scroll", ScrollTrigger.update);

		const raf = (time: number) => {
			lenis.raf(time * 1000);
		};
		gsap.ticker.add(raf);
		gsap.ticker.lagSmoothing(0);

		return () => {
			gsap.ticker.remove(raf);
			lenis.destroy();
		};
	}, []);

	const slideData = [
		{
			title: "entrepreneurship carnival",
			button: "Click Here to View",
			link: "https://fsktm-entrepreneurship-carnival.vercel.app/",
			src: "/projects/entrepreneurship.png",
		},
		{
			title: "your fsktm candidate",
			button: "Click Here to View",
			link: "https://your-fsktm-candidates.vercel.app/",
			src: "/projects/fsktm-candidate.png",
		},
		{
			title: "Varsity X FSKTM",
			button: "Click Here to View",
			link: "https://fsktm-x-uthm-merc.vercel.app/",
			src: "/projects/varsity-corporate.png",
		},
	];

	return (
		<>
			<section className="min-h-[90vh]">
				<div className="md:max-w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-3">
					<div className="order-2 md:order-1 block p-4 md:ps-32 py-24 md:pt-44 md:text-left text-center">
						<h1 className="scroll-m-20 text-5xl font-extrabold tracking-normal lg:text-6xl">
							Launch. Build. Elevate. At Tech Ventura
						</h1>
						<p className="leading-7 [&:not(:first-child)]:mt-4 text-neutral-500 text-justify">
							We provide end-to-end support for aspiring tech talents at UTHM — from
							idea validation to development — including software solutions, project
							consulting, and startup guidance.
						</p>

						<Link
							href="#"
							className="group relative inline-block focus:ring-3 focus:outline-hidden mt-6"
						>
							<span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

							<span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-black uppercase">
								Explore Our Project
							</span>
						</Link>
					</div>
					<div className="order-1 md:order-2 pt-14 md:pt-40">
						<Image
							src={tvLogo}
							alt="tvLogo"
							className="mx-auto h-[20vh] md:h-[40vh] w-fit"
						/>
					</div>
				</div>
			</section>
			<div className="min-h-screen">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-center text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
						Our Past {" "}
						<LineShadowText className="italic" shadowColor={"black"}>
							Project
						</LineShadowText>
					</h1>
				</div>
				<div className="relative overflow-hidden w-full h-full py-20">
					<CarouselLink slides={slideData} />
				</div>
			</div>
		</>
	);
}
