"use client";

import Image from "next/image";
import tvLogo from "@/public/tvLogo.svg";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LineShadowText } from "@/components/magicui/line-shadow-text";

export default function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 3;

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

    const projectData = [
        {
            title: "Entrepreneurship Carnival",
            description:
                "A platform showcasing FSKTM entrepreneurship events and activities",
            button: "View Project",
            link: "https://fsktm-entrepreneurship-carnival.vercel.app/",
            src: "/projects/entrepreneurship.png",
            tags: ["Event", "Platform"],
        },
        {
            title: "Your FSKTM Candidate",
            description: "Candidate information portal for FSKTM elections",
            button: "View Project",
            link: "https://your-fsktm-candidates.vercel.app/",
            src: "/projects/fsktm-candidate.png",
            tags: ["Election", "Portal"],
        },
        {
            title: "Varsity X FSKTM",
            description:
                "Collaboration platform between university and faculty",
            button: "View Project",
            link: "https://fsktm-x-uthm-merc.vercel.app/",
            src: "/projects/varsity-corporate.png",
            tags: ["Collaboration", "Corporate"],
        },
        {
            title: "Tech Summit 2024",
            description: "Annual technology conference and workshop series",
            button: "View Project",
            link: "#",
            src: "/projects/tech-summit.png",
            tags: ["Conference", "Workshop"],
        },
        {
            title: "Campus Connect",
            description: "Student networking and collaboration platform",
            button: "View Project",
            link: "#",
            src: "/projects/campus-connect.png",
            tags: ["Networking", "Social"],
        },
        {
            title: "Code Academy",
            description: "Programming courses and mentorship program",
            button: "View Project",
            link: "#",
            src: "/projects/code-academy.png",
            tags: ["Education", "Mentorship"],
        },
    ];

    // Calculate pagination
    const totalPages = Math.ceil(projectData.length / projectsPerPage);
    const startIndex = (currentPage - 1) * projectsPerPage;
    const currentProjects = projectData.slice(
        startIndex,
        startIndex + projectsPerPage
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Scroll to projects section when changing pages
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const renderPaginationButtons = () => {
        const buttons = [];

        // Previous button
        buttons.push(
            <Button
                key="prev"
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="gap-2"
            >
                <span>←</span>
                Previous
            </Button>
        );

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(
                <Button
                    key={i}
                    variant={currentPage === i ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(i)}
                    className={`min-w-[40px] ${
                        currentPage === i
                            ? "bg-primary text-primary-foreground"
                            : ""
                    }`}
                >
                    {i}
                </Button>
            );
        }

        // Next button
        buttons.push(
            <Button
                key="next"
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="gap-2"
            >
                Next
                <span>→</span>
            </Button>
        );

        return buttons;
    };

    return (
        <>
            {/* Improved Hero Section */}
            <section className="min-h-[70vh] flex items-center relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                            <Badge
                                variant="secondary"
                                className="text-sm font-semibold px-4 py-1"
                            >
                                🚀 Tech Innovation Hub
                            </Badge>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                                    Launch.{" "}
                                </span>
                                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                    Build.{" "}
                                </span>
                                <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                                    Elevate.
                                </span>
                            </h1>
                        </div>

                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                            Empowering UTHM{"'"}s tech talents with end-to-end
                            support — from
                            <span className="text-primary font-medium">
                                {" "}
                                idea validation{" "}
                            </span>
                            to
                            <span className="text-accent font-medium">
                                {" "}
                                development excellence
                            </span>
                            . We build solutions that matter.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button asChild size="lg" className="gap-2 group">
                                <Link href="#projects">
                                    <span>Explore Projects</span>
                                    <span className="group-hover:translate-x-1 transition-transform">
                                        →
                                    </span>
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link href="#contact">Get In Touch</Link>
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="flex justify-center lg:justify-start gap-8 pt-8">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">
                                    {projectData.length}+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Projects
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-accent">
                                    50+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Developers
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">
                                    3
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Years
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="relative group">
                            <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                            <Image
                                src={tvLogo}
                                alt="Tech Ventura Logo"
                                className="relative w-96 h-96 lg:w-[32rem] lg:h-[32rem] xl:w-[36rem] xl:h-[36rem] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                                priority
                            />
                            {/* Floating elements */}
                            <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary rounded-full animate-pulse" />
                            <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-accent rounded-full animate-pulse delay-1000" />
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
                    </div>
                </div>
            </section>

            {/* Improved Projects Section with Pagination */}
            <section
                id="projects"
                className="py-20 bg-gradient-to-b from-background to-muted/20"
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <Badge
                            variant="outline"
                            className="mb-4 text-primary border-primary"
                        >
                            Our Work
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Featured{" "}
                            <LineShadowText
                                className="italic"
                                shadowColor={"var(--primary)"}
                            >
                                Projects
                            </LineShadowText>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Innovative solutions crafted for the UTHM community
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {currentProjects.map((project, index) => (
                            <Card
                                key={startIndex + index}
                                className="p-0 group h-full border-2 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                            >
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <Image
                                        src={project.src}
                                        alt={project.title}
                                        width={1080}
                                        height={1920}
                                        className="w-full min-h-[30vh] object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute top-3 left-3">
                                        <Badge
                                            variant="secondary"
                                            className="text-xs"
                                        >
                                            Project {startIndex + index + 1}
                                        </Badge>
                                    </div>
                                </div>
                                <CardContent className="p-4 space-y-3">
                                    <div className="space-y-2">
                                        <h3 className="font-bold text-lg leading-tight line-clamp-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                        {project.tags.map((tag, tagIndex) => (
                                            <Badge
                                                key={tagIndex}
                                                variant="outline"
                                                className="text-xs px-2 py-0"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                    <Button
                                        asChild
                                        size="sm"
                                        variant="outline"
                                        className="w-full h-9"
                                    >
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1"
                                        >
                                            <span>View Project</span>
                                            <span>→</span>
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex justify-center items-center gap-2 mb-12">
                        {renderPaginationButtons()}
                    </div>

                    {/* Page Info */}
                    <div className="text-center text-sm text-muted-foreground mb-8">
                        Showing {startIndex + 1}-
                        {Math.min(
                            startIndex + projectsPerPage,
                            projectData.length
                        )}{" "}
                        of {projectData.length} projects
                    </div>
                </div>
            </section>
        </>
    );
}
