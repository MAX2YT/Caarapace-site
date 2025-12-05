"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Search, Palette, Code, TestTube, Rocket } from "lucide-react";

const timelineData = [
    {
        title: "Step 1",
        image: "/Serviceprocess/Planing.png",
        content: (
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-[#BD0D46]/10">
                        <Search className="w-5 h-5 text-[#BD0D46]" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                        Strategy Planning
                    </h4>
                </div>
                <p className="text-gray-600 text-sm md:text-base mb-4">
                    Define the website's goals, target audience, technical requirements, and content structure.
                </p>
                <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#BD0D46]/10 text-[#BD0D46] text-sm font-medium">
                        1-2 Weeks
                    </span>
                </div>
                <div className="space-y-2">
                    <div className="flex gap-2 items-center text-gray-600 text-sm">
                        ✅ Sitemap & Wireframes
                    </div>
                    <div className="flex gap-2 items-center text-gray-600 text-sm">
                        ✅ Technology Stack Selection
                    </div>
                    <div className="flex gap-2 items-center text-gray-600 text-sm">
                        ✅ Project Scope Document
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Step 2",
        image: "/Serviceprocess/design.png",
        content: (
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-[#BD0D46]/10">
                        <Palette className="w-5 h-5 text-[#BD0D46]" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                        Design & Content Creation
                    </h4>
                </div>
                <p className="text-gray-600 text-sm md:text-base mb-4">
                    Develop the visual identity and generate all necessary content for your project.
                </p>
                <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#BD0D46]/10 text-[#BD0D46] text-sm font-medium">
                        3-4 Weeks
                    </span>
                </div>
                <div className="space-y-2">
                    <div className="flex gap-2 items-center text-gray-600 text-sm">
                        ✅ Finalized UI/UX Mockups
                    </div>
                    <div className="flex gap-2 items-center text-gray-600 text-sm">
                        ✅ Brand Style Guide
                    </div>
                    <div className="flex gap-2 items-center text-gray-600 text-sm">
                        ✅ All Website Copy & Content
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Step 3",
        image: "/Serviceprocess/integration.png",
        content: (
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-[#BD0D46]/10">
                        <Code className="w-5 h-5 text-[#BD0D46]" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                        Development & Integration
                    </h4>
                </div>
                <p className="text-gray-600 text-sm md:text-base mb-4">
                    Build the website based on approved designs and integrate all functionality.
                </p>
                <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#BD0D46]/10 text-[#BD0D46] text-sm font-medium">
                        4-6 Weeks
                    </span>
                </div>
                <div className="space-y-2">
                    <div className="flex gap-2 items-center text-gray-600 text-sm">
                        ✅ Front-end & Back-end Complete
                    </div>
                    <div className="flex gap-2 items-center text-gray-600 text-sm">
                        ✅ CMS Setup & SEO Config
                    </div>
                    <div className="flex gap-2 items-center text-gray-600 text-sm">
                        ✅ Tool Integrations (Forms, Analytics, CRM)
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Step 4",
        image: "/Serviceprocess/testing.png",
        content: (
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-[#BD0D46]/10">
                        <TestTube className="w-5 h-5 text-[#BD0D46]" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                        Testing & Quality Assurance
                    </h4>
                </div>
                <p className="text-gray-600 text-sm md:text-base mb-4">
                    Rigorously test the website for functionality, performance, and cross-browser compatibility.
                </p>
                <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#BD0D46]/10 text-[#BD0D46] text-sm font-medium">
                        1-2 Weeks
                    </span>
                </div>
                <div className="space-y-2">
                    <div className="flex gap-2 items-center text-gray-600 text-sm">
                        ✅ Bug/Issue Log (Zero Critical Errors)
                    </div>
                    <div className="flex gap-2 items-center text-gray-600 text-sm">
                        ✅ Load Speed Performance Reports
                    </div>
                    <div className="flex gap-2 items-center text-gray-600 text-sm">
                        ✅ Stakeholder Sign-off
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Step 5",
        image: "/Serviceprocess/deploy.png",
        content: (
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-[#BD0D46]/10">
                        <Rocket className="w-5 h-5 text-[#BD0D46]" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                        Deployment & Launch
                    </h4>
                </div>
                <p className="text-gray-600 text-sm md:text-base mb-4">
                    Final migration to the live production server and post-launch verification.
                </p>
                <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#BD0D46]/10 text-[#BD0D46] text-sm font-medium">
                        1-3 Days
                    </span>
                </div>
                <div className="space-y-2">
                    <div className="flex gap-2 items-center text-gray-600 text-sm">
                        ✅ Final Go-Live Deployment
                    </div>
                    <div className="flex gap-2 items-center text-gray-600 text-sm">
                        ✅ Google Analytics & Search Console
                    </div>
                    <div className="flex gap-2 items-center text-gray-600 text-sm">
                        ✅ Post-Launch Performance Monitoring
                    </div>
                </div>
            </div>
        ),
    },
];

export default function ServicesTimeline() {
    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Our Development Process
                </h2>
                <p className="text-gray-600 text-base md:text-lg max-w-2xl">
                    A structured, professional approach to bringing your vision to life—from initial concept to successful launch.
                </p>
            </div>
            <Timeline data={timelineData} />
        </div>
    );
}
