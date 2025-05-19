import Link from "next/link";
import tvLogo from "@/public/tvLogo.png";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="w-full border-t border-neutral-200 dark:border-neutral-700 px-6 py-8 text-center text-sm text-gray-600 dark:text-gray-400">
			<div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center gap-2">
				<div className="flex items-center gap-2 mb-4">
					<Image src={tvLogo} alt="logotv" className="h-10 w-auto" />
					<Link
						href="/"
						className="text-lg font-semibold text-black dark:text-white hover:underline"
					>
						Tech Ventura
					</Link>
				</div>
				<p className="text-center">Universiti Tun Hussein Onn Malaysia</p>
				<p className="mt-2">
					© 2024{" "}
					<Link href="/" className="hover:underline">
						Tech Ventura
					</Link>
					. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
