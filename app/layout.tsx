import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const poppins = Poppins({
	weight: "500",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Tech Ventura",
	description: "Tech Ventura Offical Website",
	icons: {
		icon: [
			{
				url: "/tvLogo2.png",
				href: "/tvLogo2.png",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.className}`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
