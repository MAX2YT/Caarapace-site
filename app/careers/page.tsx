'use client';

import HeroScrollAnimation from "@/components/ui/hero-scroll-animation";
import { Briefcase, Heart, Rocket, GraduationCap, Upload, FileText, X } from 'lucide-react'
import {
    HoverSlider,
    HoverSliderImage,
    HoverSliderImageWrap,
    TextStaggerHover
} from "@/components/ui/animated-slideshow"
import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ModernRetroButton from '@/components/ui/modern-retro-button';
import emailjs from '@emailjs/browser';

const OPEN_ROLES = [
    {
        id: "role-1",
        title: "Web Development",
        imageUrl: "/web-development.webp",
    },
    {
        id: "role-2",
        title: "Digital Marketing",
        imageUrl: "/digital-marketing.webp",
    },
    {
        id: "role-3",
        title: "Application Development",
        imageUrl: "/application-development.webp",
    },
    {
        id: "role-4",
        title: "Full Stack Development",
        imageUrl: "/full-stack-development.webp",
    },
    {
        id: "role-5",
        title: "Management Roles",
        imageUrl: "/management-roles.webp",
    },
    {
        id: "role-6",
        title: "Game Development",
        imageUrl: "/game.webp",
    },
]

// TypeScript Interfaces
interface ApplicationFormData {
    firstName: string;
    lastName: string;
    email: string;
    qualification: string;
    experience: string;
    cgpa: string;
    aboutYourself: string;
    resume: File | null;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    qualification?: string;
    experience?: string;
    cgpa?: string;
    aboutYourself?: string;
    resume?: string;
    submit?: string;
}

// Experience options
const experienceOptions = [
    { value: '', label: 'Select Experience' },
    { value: 'fresher', label: 'Fresher (0 years)' },
    { value: 'junior', label: 'Junior (1-3 years)' },
    { value: 'mid', label: 'Mid-Level (3-5 years)' },
    { value: 'senior', label: 'Senior (5-8 years)' },
    { value: 'lead', label: 'Lead (8+ years)' },
];

// ✅ Cloudinary + EmailJS config (from env)
// ⚠️ For learning/demo only: values are hard-coded.
// Later you can move them to a .env file.

const CLOUDINARY_CLOUD_NAME = "dtl0gebhh";          // e.g. "dabc123"
const CLOUDINARY_UPLOAD_PRESET = "Resumes";  // e.g. "unsigned_resumes"

const EMAILJS_SERVICE_ID = "service_4coysl5";             // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_98qxjes";           // e.g. "template_xyz456"
const EMAILJS_PUBLIC_KEY = "44BIq6t6iWepbdl3_";             // from EmailJS dashboard

export default function CareersPage() {
    const benefits = [
        {
            icon: Briefcase,
            title: 'Competitive Compensation',
            description: 'Seriously good pay plus benefits that actually matter.',
        },
        {
            icon: Heart,
            title: 'Work-Life Balance',
            description: 'Work when and where you want. Life comes first, always.',
        },
        {
            icon: Rocket,
            title: 'Career Growth',
            description: 'Level up your skills and climb the ladder. We invest in your growth.',
        },
        {
            icon: GraduationCap,
            title: 'Learning & Development',
            description: 'Courses, conferences, mentorship—whatever helps you level up, we got it.',
        },
    ]

    // Form State
    const [formData, setFormData] = useState<ApplicationFormData>({
        firstName: '',
        lastName: '',
        email: '',
        qualification: '',
        experience: '',
        cgpa: '',
        aboutYourself: '',
        resume: null,
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isDragOver, setIsDragOver] = useState(false);

    // Check if fresher is selected
    const isFresher = formData.experience === 'fresher';

    // 🔑 Init EmailJS on client
    useEffect(() => {
        if (EMAILJS_PUBLIC_KEY) {
            emailjs.init(EMAILJS_PUBLIC_KEY);
        } else {
            console.warn("EmailJS public key is missing. Set NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in .env.local");
        }
    }, []);

    // ✅ Validation function
    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        } else if (formData.firstName.trim().length < 2) {
            newErrors.firstName = 'First name must be at least 2 characters';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        } else if (formData.lastName.trim().length < 2) {
            newErrors.lastName = 'Last name must be at least 2 characters';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.qualification.trim()) {
            newErrors.qualification = 'Qualification is required';
        }

        if (!formData.experience) {
            newErrors.experience = 'Please select your experience level';
        }

        // CGPA validation only for freshers
        if (isFresher && !formData.cgpa.trim()) {
            newErrors.cgpa = 'CGPA/Percentage is required for freshers';
        }

        if (!formData.aboutYourself.trim()) {
            newErrors.aboutYourself = 'Please tell us about yourself';
        } else if (formData.aboutYourself.trim().length < 50) {
            newErrors.aboutYourself = 'Please write at least 50 characters';
        }

        if (!formData.resume) {
            newErrors.resume = 'Please upload your resume';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // ✅ File validation
    const validateFile = (file: File): string | null => {
        const allowedTypes = [
            'application/pdf',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/msword',
        ];
        const maxSize = 5 * 1024 * 1024;

        if (!allowedTypes.includes(file.type)) {
            return 'Only PDF and DOCX files are allowed';
        }

        if (file.size > maxSize) {
            return 'File size must be less than 5MB';
        }

        return null;
    };

    // ✅ Handle input changes
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    // ✅ Handle file selection
    const handleFileSelect = useCallback((file: File) => {
        const error = validateFile(file);
        if (error) {
            setErrors((prev) => ({ ...prev, resume: error }));
            return;
        }
        setFormData((prev) => ({ ...prev, resume: file }));
        setErrors((prev) => ({ ...prev, resume: undefined }));
    }, [setFormData, setErrors]);

    // ✅ Handle file drop
    const handleDrop = useCallback(
        (e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault();
            setIsDragOver(false);
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                handleFileSelect(files[0]);
            }
        },
        [handleFileSelect]
    );

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const removeFile = () => {
        setFormData((prev) => ({ ...prev, resume: null }));
    };

    // ✅ Upload to Cloudinary
    const uploadToCloudinary = async (file: File): Promise<string> => {
        if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_UPLOAD_PRESET) {
            throw new Error("Cloudinary config missing. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET in .env.local");
        }

        const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`;

        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        // Optional: data.append("folder", "resumes");

        const res = await fetch(url, {
            method: "POST",
            body: data,
        });

        if (!res.ok) {
            throw new Error("Failed to upload resume to Cloudinary");
        }

        const json = await res.json();
        return json.secure_url as string;
    };

    // ✅ Handle form submission (Cloudinary + EmailJS)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors((prev) => ({ ...prev, submit: undefined }));

        if (!validateForm()) {
            return;
        }

        if (!formData.resume) {
            setErrors((prev) => ({ ...prev, resume: "Please upload your resume" }));
            return;
        }

        setIsSubmitting(true);

        try {
            // 1) Upload resume to Cloudinary
            const resumeUrl = await uploadToCloudinary(formData.resume);

            // 2) Send email via EmailJS with form data + resume link
            if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
                throw new Error("EmailJS config missing. Set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in .env.local");
            }

            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    // 🔁 These names must match your EmailJS template variables
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    email: formData.email,
                    qualification: formData.qualification,
                    experience: formData.experience,
                    cgpa: formData.cgpa || 'N/A',
                    about_yourself: formData.aboutYourself,
                    resume_link: resumeUrl,
                }
            );

            setIsSuccess(true);

            // Reset form after success
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                qualification: '',
                experience: '',
                cgpa: '',
                aboutYourself: '',
                resume: null,
            });

            setTimeout(() => {
                setIsSuccess(false);
            }, 3000);
        } catch (error: any) {
            console.error(error);
            setErrors((prev) => ({
                ...prev,
                submit: error?.message || "Something went wrong while submitting the application.",
            }));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen relative">
            {/* Hero with Scroll Animation */}
            <HeroScrollAnimation
                title="Careers"
                tagline="Join a team that's building"
                highlightedText="the Future"
                image="/careerhero.webp"
                imageAlt="Team collaboration"
            />

            <div className="container mx-auto px-6 py-16">
                {/* Benefits Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12">Why You'll Love Working Here</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon
                            return (
                                <div
                                    key={index}
                                    className="p-6 rounded-2xl border border-primary/10 bg-gradient-to-b from-primary/5 to-transparent hover:border-primary/20 transition-all duration-300">
                                    <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                                        <Icon className="size-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Open Roles - Animated Slideshow */}
                <HoverSlider className="min-h-[70vh] place-content-center py-16 px-6 md:px-12 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-3xl mb-20">
                    <h3 className="mb-8 text-xs font-medium uppercase tracking-widest text-primary">
                        / open roles
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-8 md:gap-12">
                        <div className="flex flex-col space-y-3 md:space-y-5">
                            {OPEN_ROLES.map((role, index) => (
                                <TextStaggerHover
                                    key={role.id}
                                    index={index}
                                    className="cursor-pointer text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-gray-900 whitespace-nowrap"
                                    text={role.title}
                                />
                            ))}
                        </div>
                        <HoverSliderImageWrap className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-lg mx-auto lg:mx-0">
                            {OPEN_ROLES.map((role, index) => (
                                <div key={role.id}>
                                    <HoverSliderImage
                                        index={index}
                                        imageUrl={role.imageUrl}
                                        src={role.imageUrl}
                                        alt={role.title}
                                        className="w-full h-auto max-h-96 object-cover"
                                        loading="eager"
                                        decoding="async"
                                    />
                                </div>
                            ))}
                        </HoverSliderImageWrap>
                    </div>
                </HoverSlider>

                {/* Application Form Section */}
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-primary/10"
                    >
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#BD0D46]">
                                Apply Now
                            </h2>
                            <p className="text-muted-foreground mt-2">
                                Don&apos;t see your dream role? Send us your resume and we&apos;ll keep you on our radar.
                            </p>
                        </div>

                        {/* Submit error (global) */}
                        {errors.submit && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-4 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700"
                            >
                                {errors.submit}
                            </motion.div>
                        )}

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* First Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="John"
                                        className={`
                                            w-full px-4 py-3 rounded-lg border transition-all duration-200
                                            focus:outline-none focus:ring-2 focus:ring-[#BD0D46]/20 focus:border-[#BD0D46]
                                            ${errors.firstName
                                                ? 'border-red-500 bg-red-50'
                                                : 'border-gray-300 hover:border-gray-400'
                                            }
                                        `}
                                    />
                                    {errors.firstName && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-500 text-sm mt-1"
                                        >
                                            {errors.firstName}
                                        </motion.p>
                                    )}
                                </div>

                                {/* Last Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Doe"
                                        className={`
                                            w-full px-4 py-3 rounded-lg border transition-all duration-200
                                            focus:outline-none focus:ring-2 focus:ring-[#BD0D46]/20 focus:border-[#BD0D46]
                                            ${errors.lastName
                                                ? 'border-red-500 bg-red-50'
                                                : 'border-gray-300 hover:border-gray-400'
                                            }
                                        `}
                                    />
                                    {errors.lastName && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-500 text-sm mt-1"
                                        >
                                            {errors.lastName}
                                        </motion.p>
                                    )}
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="john.doe@example.com"
                                    className={`
                                        w-full px-4 py-3 rounded-lg border transition-all duration-200
                                        focus:outline-none focus:ring-2 focus:ring-[#BD0D46]/20 focus:border-[#BD0D46]
                                        ${errors.email
                                            ? 'border-red-500 bg-red-50'
                                            : 'border-gray-300 hover:border-gray-400'
                                        }
                                    `}
                                />
                                {errors.email && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-500 text-sm mt-1"
                                    >
                                        {errors.email}
                                    </motion.p>
                                )}
                            </div>

                            {/* Qualification and Experience Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Highest Qualification - Text Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Highest Qualification <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="qualification"
                                        value={formData.qualification}
                                        onChange={handleInputChange}
                                        placeholder="e.g., B.Tech, MBA, B.Sc"
                                        className={`
                                            w-full px-4 py-3 rounded-lg border transition-all duration-200
                                            focus:outline-none focus:ring-2 focus:ring-[#BD0D46]/20 focus:border-[#BD0D46]
                                            ${errors.qualification
                                                ? 'border-red-500 bg-red-50'
                                                : 'border-gray-300 hover:border-gray-400'
                                            }
                                        `}
                                    />
                                    {errors.qualification && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-500 text-sm mt-1"
                                        >
                                            {errors.qualification}
                                        </motion.p>
                                    )}
                                </div>

                                {/* Experience Level - Dropdown */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Experience Level <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleInputChange}
                                        className={`
                                            w-full px-4 py-3 rounded-lg border transition-all duration-200 appearance-none
                                            bg-white bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')]
                                            bg-[length:12px] bg-[right_16px_center] bg-no-repeat
                                            focus:outline-none focus:ring-2 focus:ring-[#BD0D46]/20 focus:border-[#BD0D46]
                                            ${errors.experience
                                                ? 'border-red-500 bg-red-50'
                                                : 'border-gray-300 hover:border-gray-400'
                                            }
                                        `}
                                    >
                                        {experienceOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.experience && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-500 text-sm mt-1"
                                        >
                                            {errors.experience}
                                        </motion.p>
                                    )}
                                </div>
                            </div>

                            {/* CGPA Field - Only shown for Freshers */}
                            <AnimatePresence>
                                {isFresher && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            CGPA / Percentage <span className="text-red-500">*</span> (Last degree)
                                        </label>
                                        <input
                                            type="text"
                                            name="cgpa"
                                            value={formData.cgpa}
                                            onChange={handleInputChange}
                                            placeholder="e.g., 8.5 or 85"
                                            className={`
                                                w-full px-4 py-3 rounded-lg border transition-all duration-200
                                                focus:outline-none focus:ring-2 focus:ring-[#BD0D46]/20 focus:border-[#BD0D46]
                                                ${errors.cgpa
                                                    ? 'border-red-500 bg-red-50'
                                                    : 'border-gray-300 hover:border-gray-400'
                                                }
                                            `}
                                        />
                                        {errors.cgpa && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-red-500 text-sm mt-1"
                                            >
                                                {errors.cgpa}
                                            </motion.p>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* About Yourself */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Tell us about yourself and why you want to join us <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="aboutYourself"
                                    value={formData.aboutYourself}
                                    onChange={handleInputChange}
                                    rows={4}
                                    placeholder="Briefly describe your skills, projects, and motivation..."
                                    className={`
                                        w-full px-4 py-3 rounded-lg border transition-all duration-200 resize-y
                                        focus:outline-none focus:ring-2 focus:ring-[#BD0D46]/20 focus:border-[#BD0D46]
                                        ${errors.aboutYourself
                                            ? 'border-red-500 bg-red-50'
                                            : 'border-gray-300 hover:border-gray-400'
                                        }
                                    `}
                                />
                                {errors.aboutYourself && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-500 text-sm mt-1"
                                    >
                                        {errors.aboutYourself}
                                    </motion.p>
                                )}
                            </div>

                            {/* Resume Upload */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Upload Resume/CV (PDF or Docx) <span className="text-red-500">*</span>
                                </label>

                                {formData.resume ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg"
                                    >
                                        <div className="flex items-center gap-3">
                                            <FileText className="w-8 h-8 text-green-600" />
                                            <div>
                                                <p className="font-medium text-gray-900">{formData.resume.name}</p>
                                                <p className="text-sm text-gray-500">
                                                    {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={removeFile}
                                            className="p-2 hover:bg-red-100 rounded-full transition-colors"
                                        >
                                            <X className="w-5 h-5 text-red-500" />
                                        </button>
                                    </motion.div>
                                ) : (
                                    <div
                                        onDrop={handleDrop}
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        className={`
                                            relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 cursor-pointer
                                            ${isDragOver
                                                ? 'border-[#BD0D46] bg-[#BD0D46]/5'
                                                : errors.resume
                                                    ? 'border-red-300 bg-red-50'
                                                    : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                                            }
                                        `}
                                    >
                                        <input
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        />
                                        <Upload className={`w-12 h-12 mx-auto mb-3 ${isDragOver ? 'text-[#BD0D46]' : 'text-[#BD0D46]'}`} />
                                        <p className="text-gray-600">
                                            Drag and drop your resume here, or{' '}
                                            <span className="text-[#BD0D46] font-medium">click to browse</span>
                                        </p>
                                        <p className="text-sm text-gray-400 mt-1">PDF or DOCX, max 5MB</p>
                                    </div>
                                )}
                                {errors.resume && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-500 text-sm mt-1"
                                    >
                                        {errors.resume}
                                    </motion.p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <ModernRetroButton
                                    type="submit"
                                    label={isSuccess ? "Application Submitted!" : "Submit Application"}
                                    loadingLabel="Submitting..."
                                    isLoading={isSubmitting}
                                    disabled={isSubmitting || isSuccess}
                                    fullWidth={true}
                                    background={isSuccess ? "#22c55e" : "#BD0D46"}
                                    svgRect={isSuccess ? "#4ade80" : "#e83a6e"}
                                    svgRectFlicker={isSuccess ? "#16a34a" : "#ff1a5c"}
                                    boxShadow={isSuccess ? "0 0 0 0 #22c55e" : "0 0 0 0 #BD0D46"}
                                    boxShadowHover={isSuccess ? "0 0 20px 2px #22c55e" : "0 0 20px 2px #BD0D46"}
                                />
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
