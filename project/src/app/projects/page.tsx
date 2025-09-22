"use client"
import MobileMenu from "@/components/navbar/mobileMenu";
import Navbar from "@/components/navbar/navbar";
import ProjectCard from "@/components/projectCard";
import React from "react";
import useEvents from "@/hooks/useEvents";

export default function Projects() {
    const { getEventsByType } = useEvents();
    const projects = getEventsByType("project");
    return (
        <div>
            <div className="fixed top-0 right-0 z-50">
                <MobileMenu className="origin-center"/>
            </div>
            
             <div className="flex flex-col">
                <Navbar />
                <p className="mx-10 my-10 text-6xl text-accent ">Projects</p>
            </div>

            <div className="mx-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index}
                        title={project.title}
                        description={project.description}
                        period={project.period}
                        thumbnailUrl={project.thumbnail}
                        tags={project.tags}
                        links={project.links}
                     />
                ))}
            </div>
        </div>
       
    );
}