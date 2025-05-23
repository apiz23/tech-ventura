"use client";

import Image from "next/image";
import Link from "next/link";
import tvLogo from "@/public/tvLogo.svg";
import { Button } from "./ui/button";
import {
	Drawer,
	DrawerTrigger,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerFooter,
	DrawerClose,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/careerx", label: "CareerX" },
];

export default function Header() {
	return (
		<div className="w-full py-5 border-b">
			<div className="max-w-6xl mx-auto flex justify-between items-center px-4">
				<Image src={tvLogo} alt="logotv" className="h-10 w-auto" />

				<div className="hidden md:block space-x-4">
					{navLinks.map((link) => (
						<Link key={link.href} href={link.href} className="hover:underline">
							{link.label}
						</Link>
					))}
				</div>

				<div className="hidden md:flex items-center gap-4">
					<Link href="http://wa.me/60102336374" target="_blank">
						<Button>Contact Us</Button>
					</Link>
				</div>

				<div className="md:hidden">
					<Drawer>
						<DrawerTrigger asChild>
							<Button variant="outline" size="icon">
								<Menu className="h-5 w-5" />
							</Button>
						</DrawerTrigger>
						<DrawerContent className="min-h-[40vh]">
							<DrawerHeader>
								<DrawerTitle>Tech Ventura Menu</DrawerTitle>
							</DrawerHeader>

							<div className="flex flex-col px-4 gap-3 pb-4">
								{navLinks.map((link) => (
									<DrawerClose asChild key={link.href}>
										<Link href={link.href} className="text-lg font-medium">
											{link.label}
										</Link>
									</DrawerClose>
								))}
							</div>

							<DrawerFooter>
								<Link href="http://wa.me/60102336374" target="_blank">
									<Button className="w-full">Contact Us</Button>
								</Link>
								<DrawerClose asChild>
									<Button variant="outline">Close</Button>
								</DrawerClose>
							</DrawerFooter>
						</DrawerContent>
					</Drawer>
				</div>
			</div>
		</div>
	);
}
