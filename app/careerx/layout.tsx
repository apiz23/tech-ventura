import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "CareerX | Tech Ventura",
	description: "CareerX Event | Tech Ventura Official Website",
	icons: {
		icon: [
			{
				url: "/tvLogo2.png",
				href: "/tvLogo2.png",
			},
		],
	},
};

export default function CareerXLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <section className="min-h-screen">{children}</section>;
}
