"use client";

import Image from "next/image";
import tvLogo from "@/public/tvLogo.png";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

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
	return (
		<>
			<section className="min-h-[90vh]">
				<div className="md:max-w-[70vw] mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-3">
					<div className="order-2 md:order-1 block p-4 md:ps-32 py-24 md:pt-44 md:text-left text-center">
						<h1 className="scroll-m-20 text-5xl font-extrabold tracking-normal lg:text-7xl">
							Launch. Build. Elevate. At Tech Ventura
						</h1>
						<p className="leading-7 [&:not(:first-child)]:mt-4 text-neutral-500">
							We provide end-to-end support for aspiring tech talents at UTHM — from
							idea validation to development — including software solutions, project
							consulting, and startup guidance.
						</p>
						<Button variant="outline" className="my-5 bg-neutral-100">
							Explore Our Projects
						</Button>
					</div>
					<div className="order-1 md:order-2 pt-14 md:pt-44">
						<Image
							src={tvLogo}
							alt="tvLogo"
							className="mx-auto h-[20vh] md:h-[25vh] w-fit"
						/>
					</div>
				</div>
			</section>
		</>
	);
}
