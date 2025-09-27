"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Card, CardContent } from "@/components/ui/card";

export default function Page() {
    const projectData = [
        {
            id: 1,
            title: "PresenceNFC",
            category: "Attendance System",
            description:
                "Smart attendance system using NFC technology for seamless tracking and management",
            fullDescription:
                "PresenceNFC revolutionizes attendance tracking with cutting-edge NFC technology. Our system provides real-time monitoring, detailed analytics, and seamless integration with existing university systems. Designed specifically for UTHM's needs, it eliminates manual processes and provides accurate, tamper-proof attendance records.",
            imageSrc: "/projects/Presence-NFC.png",
            features: [
                "Real-time attendance tracking",
                "NFC card integration",
                "Analytics dashboard",
                "Mobile app support",
                "Automated reports",
                "Multi-location support",
            ],
            technologies: [
                "React",
                "Node.js",
                "NFC Technology",
                "MongoDB",
                "Express.js",
                "JWT",
            ],
            link: "#",
            stats: {
                satisfaction: "95%",
                uptime: "100%",
                rating: "4.8/5",
            },
            status: "Live",
        },
        {
            id: 2,
            title: "Tammy AI",
            category: "AI Assistant",
            description:
                "Intelligent chatbot to assist students and lecturers with academic queries and support",
            fullDescription:
                "Tammy AI is your 24/7 academic companion, powered by advanced machine learning algorithms. It provides instant support for course-related queries, resource recommendations, and administrative guidance. Tammy learns from interactions to continuously improve its assistance capabilities.",
            imageSrc: "/projects/Tammy-Ai.png",
            features: [
                "24/7 academic support",
                "Course guidance system",
                "Resource sharing platform",
                "Multi-language support",
                "Personalized learning paths",
                "Integration with LMS",
            ],
            technologies: [
                "Python",
                "Next.js",
                "OpenAI API",
                "TensorFlow",
                "PostgreSQL",
                "Redis",
            ],
            link: "#",
            stats: {
                satisfaction: "92%",
                uptime: "99.9%",
                rating: "4.6/5",
            },
            status: "Beta",
        },
        {
            id: 3,
            title: "FlexiPOS",
            category: "Retail System",
            description:
                "Flexible Point of Sale system designed for modern retail businesses and campus stores",
            fullDescription:
                "FlexiPOS offers a comprehensive retail management solution tailored for campus businesses. From inventory management to sales analytics, it provides everything needed to run a successful retail operation. Cloud-based and mobile-ready, it adapts to your business needs.",
            imageSrc: "/projects/Flexi-POS.png",
            features: [
                "Inventory management",
                "Sales analytics dashboard",
                "Multi-store support",
                "Cloud synchronization",
                "Payment integration",
                "Customer loyalty programs",
            ],
            technologies: [
                "TypeScript",
                "PostgreSQL",
                "Cloud Functions",
                "Payment APIs",
                "React Native",
                "Docker",
            ],
            link: "#",
            stats: {
                satisfaction: "97%",
                uptime: "100%",
                rating: "4.9/5",
            },
            status: "Live",
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="min-h-[60vh] md:min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
                {/* Background Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

                <div className="relative z-10 text-center px-4">
                    <Badge
                        variant="secondary"
                        className="mb-6 text-sm font-semibold px-4 py-2"
                    >
                        🚀 CareerX Project Showcase
                    </Badge>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight mb-6">
                        <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                            CareerX
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        Discover innovative projects built by UTHM students that
                        are
                        <span className="text-primary font-semibold">
                            {" "}
                            shaping the future{" "}
                        </span>
                        of technology and campus life
                    </p>
                </div>
            </section>

            {/* Projects Grid Section */}
            <section className="py-20 bg-gradient-to-b from-background to-muted/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge
                            variant="outline"
                            className="mb-4 text-primary border-primary text-sm"
                        >
                            Featured Projects
                        </Badge>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            <LineShadowText
                                className="italic"
                                shadowColor={"var(--primary)"}
                            >
                                Project Gallery
                            </LineShadowText>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Explore {projectData.length} innovative solutions
                            built with cutting-edge technology
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {projectData.map((project) => (
                            <Sheet key={project.id}>
                                <SheetTrigger asChild>
                                    <Card className="group cursor-pointer border-2 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-primary/50 hover:-translate-y-2">
                                        <div className="relative overflow-hidden rounded-t-lg">
                                            <Image
                                                src={project.imageSrc}
                                                alt={project.title}
                                                width={400}
                                                height={250}
                                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                            <div className="absolute top-3 left-3">
                                                <Badge
                                                    variant="secondary"
                                                    className="text-xs"
                                                >
                                                    {project.status}
                                                </Badge>
                                            </div>
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                        </div>
                                        <CardContent className="p-4 space-y-3">
                                            <div className="space-y-2">
                                                <Badge
                                                    variant="outline"
                                                    className="text-xs"
                                                >
                                                    {project.category}
                                                </Badge>
                                                <h3 className="font-bold text-lg leading-tight line-clamp-2">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                                                    {project.description}
                                                </p>
                                            </div>
                                            <div className="flex flex-wrap gap-1">
                                                {project.technologies
                                                    .slice(0, 3)
                                                    .map((tech, index) => (
                                                        <Badge
                                                            key={index}
                                                            variant="outline"
                                                            className="text-[10px] px-2 py-0"
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                {project.technologies.length >
                                                    3 && (
                                                    <Badge
                                                        variant="outline"
                                                        className="text-[10px] px-2 py-0"
                                                    >
                                                        +
                                                        {project.technologies
                                                            .length - 3}
                                                    </Badge>
                                                )}
                                            </div>
                                            <Button
                                                variant="outline"
                                                className="w-full text-xs h-8"
                                            >
                                                View Details
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </SheetTrigger>
                                <ProjectSheet project={project} />
                            </Sheet>
                        ))}
                    </div>

                    {/* Stats Summary */}
                    <div className="text-center">
                        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-4xl mx-auto">
                            <h3 className="text-2xl font-bold mb-4">
                                Project Impact
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary">
                                        {projectData.length}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Active Projects
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-accent">
                                        95%
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Avg. Satisfaction
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary">
                                        100%
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Uptime
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-accent">
                                        4.7/5
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Avg. Rating
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

interface Project {
    status: string;
    category: string;
    title: string;
    fullDescription: string;
    imageSrc: string;
    features: string[];
    technologies: string[];
    stats: {
        satisfaction: string | number;
        uptime: string | number;
        rating: string | number;
    };
    link: string;
}

const ProjectSheet = ({ project }: { project: Project }) => {
    return (
        <SheetContent className="w-full sm:max-w-2xl lg:max-w-4xl overflow-y-auto p-6">
            <SheetHeader className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                    <Badge variant="secondary">{project.status}</Badge>
                    <Badge variant="outline">{project.category}</Badge>
                </div>
                <SheetTitle className="text-3xl font-bold">
                    {project.title}
                </SheetTitle>
                <SheetDescription className="text-lg">
                    {project.fullDescription}
                </SheetDescription>
            </SheetHeader>

            <div className="space-y-6">
                {/* Project Image */}
                <div className="relative rounded-2xl overflow-hidden border-2">
                    <Image
                        src={project.imageSrc}
                        alt={project.title}
                        width={1080}
                        height={1920}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Features and Technologies */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Features */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold flex items-center gap-2">
                            <span className="w-3 h-3 bg-primary rounded-full"></span>
                            Key Features
                        </h4>
                        <ul className="space-y-2">
                            {project.features.map(
                                (feature: string, index: number) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3 text-muted-foreground"
                                    >
                                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                                        {feature}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold flex items-center gap-2">
                            <span className="w-3 h-3 bg-accent rounded-full"></span>
                            Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map(
                                (tech: string, index: number) => (
                                    <Badge
                                        key={index}
                                        variant="secondary"
                                        className="text-sm"
                                    >
                                        {tech}
                                    </Badge>
                                )
                            )}
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                            {project.stats.satisfaction}
                        </div>
                        <div className="text-xs text-muted-foreground">
                            Satisfaction
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-accent">
                            {project.stats.uptime}
                        </div>
                        <div className="text-xs text-muted-foreground">
                            Uptime
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                            {project.stats.rating}
                        </div>
                        <div className="text-xs text-muted-foreground">
                            Rating
                        </div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4 pt-4">
                    <Button asChild size="lg" className="flex-1">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Live Project
                        </a>
                    </Button>
                    <Button variant="outline" size="lg" className="flex-1">
                        View Source Code
                    </Button>
                </div>
            </div>
        </SheetContent>
    );
};
