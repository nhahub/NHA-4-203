import React from 'react';
import { Link } from 'react-router-dom';

export default function MyAppointments() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 sticky top-0 z-50 shadow-sm">
<div className="flex justify-between items-center px-6 py-3 w-full max-w-8xl mx-auto">
<div className="text-2xl font-sora font-bold tracking-tight text-primary">EasyCare</div>
<nav className="hidden lg:flex items-center space-x-1">
<a className="px-3 py-2 text-slate-600 font-label-md hover:text-primary transition-all duration-200 rounded-lg" href="#">Home</a>
<a className="px-3 py-2 text-slate-600 font-label-md hover:text-primary transition-all duration-200 rounded-lg" href="#">Dashboard</a>
<a className="px-3 py-2 text-slate-600 font-label-md hover:text-primary transition-all duration-200 rounded-lg" href="#">Find Doctors</a>
<a className="px-3 py-2 text-primary font-sora font-semibold border-b-2 border-primary" href="#">My Appointments</a>
<a className="px-3 py-2 text-slate-600 font-label-md hover:text-primary transition-all duration-200 rounded-lg" href="#">Medical Records</a>
<a className="px-3 py-2 text-slate-600 font-label-md hover:text-primary transition-all duration-200 rounded-lg" href="#">Upload Results</a>
</nav>
<div className="flex items-center space-x-4">
<button className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-all">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary overflow-hidden">
<img alt="Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a friendly middle-aged man with short brown hair and a kind smile, set against a clean, softly lit studio background. The lighting is high-key and bright, evoking a trustworthy and accessible healthcare professional aesthetic. The image is crisp, modern, and perfectly suited for a premium medical portal profile." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOptAdhdDUjh6G0k6TVdd8ScnYzWYfzHGBCvl1vrfkTOXZdZrlN6ONd5sQhTUQ1a05JF45Ne3HnO8deMcH8MPiM-ObYPnfYLd5mnjQd1iuS0TyTcgvNAhE8yas5LoDVLZ-IF5qM9fOye2Aled8uCMHIvbQxKCUEJgjMjOJ-ksvL1gRYhHxlZweAO7H852aVwzwTOdGthihX9u-H9bC5sraT34bdIIZ-S5NUMv4I5evkivMnlSzLMzovG7Ks8ysH8YHH7PZkl3IJea5"/>
</div>
<button className="bg-primary text-white font-sora font-semibold px-5 py-2 rounded-full hover:shadow-lg transition-all active:scale-95 duration-150">
                    Book Appointment
                </button>
</div>
</div>
</header>
<main className="flex-grow max-w-7xl mx-auto w-full px-6 py-10">
{/*  Header Section  */}
<div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h1 className="font-headline-lg text-text-primary mb-2">My Appointments</h1>
<p className="text-text-secondary font-body-md">Manage your clinical visits and healthcare schedule in one place.</p>
</div>
{/*  Tab Navigation  */}
<div className="flex p-1 bg-surface-container rounded-full w-fit">
<button className="px-6 py-2 rounded-full font-label-md bg-white text-primary shadow-sm">Upcoming</button>
<button className="px-6 py-2 rounded-full font-label-md text-text-secondary hover:text-primary transition-colors">Past</button>
<button className="px-6 py-2 rounded-full font-label-md text-text-secondary hover:text-primary transition-colors">Cancelled</button>
</div>
</div>
{/*  Appointment Cards Container  */}
<div className="grid grid-cols-1 gap-6">
{/*  Appointment Card 1  */}
<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0px_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group">
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
<div className="flex items-center gap-5">
<div className="relative">
<img alt="Dr. Sarah Mitchell" className="w-16 h-16 rounded-full object-cover border-2 border-primary/10" data-alt="A professional portrait of a female doctor with glasses and a stethoscope, wearing a white lab coat. She has a confident and empathetic expression, set against a soft-focus modern clinic background with clean white walls and warm lighting. The aesthetic is clinical yet warm and approachable, using a bright, professional palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHcrbXLxEIHsoIVncXtqjaniKn1-KwP-o2qnJtYlWNAB6keGk3CZBmbgu6MAs5JzvKAwru_94Ad7lozCw5wdN1BahzZJ96ai9gVzcRtPG1q37f5-WPeTRa2i9w3_o8jbmB3NMy89u8b491VYMsoxWXPGB87xZIDu-TyFwNcqVGtYtWNcxWpfJVOeB7G31Z4ltqY4ulVSAuBa2-lxofcfo3n_FV17VoJ_RRkVS3MrH7BI6hSgiwsrfOruWPvkhcXmbqR4uwYJmgyU7Q"/>
<div className="absolute -bottom-1 -right-1 bg-secondary text-white p-1 rounded-full border-2 border-white">
<span className="material-symbols-outlined text-[14px]" data-icon="verified" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span>
</div>
</div>
<div>
<h3 className="font-headline-md text-text-primary mb-1">Dr. Sarah Mitchell</h3>
<div className="flex items-center gap-2 text-text-secondary font-label-md">
<span className="material-symbols-outlined text-[18px]" data-icon="medical_services">medical_services</span>
                                Senior Cardiologist
                            </div>
</div>
</div>
<div className="grid grid-cols-2 lg:flex items-center gap-8 lg:gap-12 flex-1 lg:justify-center">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined" data-icon="calendar_month">calendar_month</span>
</div>
<div>
<p className="text-text-secondary font-label-sm uppercase tracking-wider">Date</p>
<p className="font-dm-sans font-bold text-text-primary">Oct 24, 2024</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined" data-icon="schedule">schedule</span>
</div>
<div>
<p className="text-text-secondary font-label-sm uppercase tracking-wider">Time</p>
<p className="font-dm-sans font-bold text-text-primary">09:30 AM</p>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-4 w-full lg:w-auto">
<div className="bg-blue-50 text-primary px-4 py-1.5 rounded-full font-label-md flex items-center gap-2 whitespace-nowrap">
<span className="w-2 h-2 rounded-full bg-primary"></span>
                            Confirmed
                        </div>
<div className="flex gap-2 w-full sm:w-auto">
<button className="flex-1 sm:flex-none border border-primary text-primary font-label-md px-6 py-2 rounded-full hover:bg-primary/5 transition-colors">Reschedule</button>
<button className="flex-1 sm:flex-none bg-primary text-white font-label-md px-6 py-2 rounded-full hover:shadow-md transition-shadow">Details</button>
</div>
</div>
</div>
</div>
{/*  Appointment Card 2  */}
<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0px_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group">
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
<div className="flex items-center gap-5">
<div className="relative">
<img alt="Dr. James Wilson" className="w-16 h-16 rounded-full object-cover border-2 border-primary/10" data-alt="A portrait of a male dermatologist with a warm, friendly face, wearing clinical attire. He is standing in a brightly lit, modern medical office with minimalist decor. The lighting is soft and natural, creating a clean, professional, and comforting atmosphere. The color palette is dominated by whites and soft blues." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn93T5gF6EGxPlxvKwJlcPg5FudP3RlkF71DNWyrmHcvTUYcsZqXe0wLtiLP-tBJy0ASDqv3igmrIXszLBB8mA-wRKxQLZBssTptMTDfZg5_rCl4BSzOQI54eqPc15Q-h1uOF0Dwt8qJDdzhUv2VM5gklKXOb6fOc2vwtpfO0-1-6haM0472ba2UL3lxHCcdnKr1iUCSLs4MXzGUsiQhpStR6_qpxvlBGgPV0kiHZF3bfPu9p-FgwlBjndiyOrwxRmZ9Ne33Q1XfpY"/>
<div className="absolute -bottom-1 -right-1 bg-secondary text-white p-1 rounded-full border-2 border-white">
<span className="material-symbols-outlined text-[14px]" data-icon="verified" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span>
</div>
</div>
<div>
<h3 className="font-headline-md text-text-primary mb-1">Dr. James Wilson</h3>
<div className="flex items-center gap-2 text-text-secondary font-label-md">
<span className="material-symbols-outlined text-[18px]" data-icon="medical_services">medical_services</span>
                                Dermatologist
                            </div>
</div>
</div>
<div className="grid grid-cols-2 lg:flex items-center gap-8 lg:gap-12 flex-1 lg:justify-center">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined" data-icon="calendar_month">calendar_month</span>
</div>
<div>
<p className="text-text-secondary font-label-sm uppercase tracking-wider">Date</p>
<p className="font-dm-sans font-bold text-text-primary">Oct 28, 2024</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined" data-icon="schedule">schedule</span>
</div>
<div>
<p className="text-text-secondary font-label-sm uppercase tracking-wider">Time</p>
<p className="font-dm-sans font-bold text-text-primary">02:15 PM</p>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-4 w-full lg:w-auto">
<div className="bg-amber-50 text-warning px-4 py-1.5 rounded-full font-label-md flex items-center gap-2 whitespace-nowrap">
<span className="w-2 h-2 rounded-full bg-warning"></span>
                            Pending
                        </div>
<div className="flex gap-2 w-full sm:w-auto">
<button className="flex-1 sm:flex-none border border-primary text-primary font-label-md px-6 py-2 rounded-full hover:bg-primary/5 transition-colors">Reschedule</button>
<button className="flex-1 sm:flex-none bg-primary text-white font-label-md px-6 py-2 rounded-full hover:shadow-md transition-shadow">Details</button>
</div>
</div>
</div>
</div>
{/*  Appointment Card 3  */}
<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0px_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group">
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
<div className="flex items-center gap-5">
<div className="relative">
<img alt="Dr. Emily Chen" className="w-16 h-16 rounded-full object-cover border-2 border-primary/10" data-alt="A close-up professional photo of a female pediatrician with a gentle and welcoming smile. She is in a colorful but clean pediatric ward with soft-edged medical equipment visible in the background. The lighting is soft and cheerful, maintaining a high-end medical tech aesthetic with a focus on empathy and care." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYJtrguywNtBGecKZnZjt67l0NNsBSVWXfvalwBmZUadLf8kpKT_CY7B6rjJW_ty8uaej8C3cdcBniUO-viKGLHH2aO634fSilPDPM3NjHSuMKJDeTY2f4DXS3F-JVGySV8eXpL5CPTz2QyObA-E664hSYRJFjx3aM8UKnbzWFoGbR7d9sJX7Fnofq0L7rb52vmIs6pYgMWJCaVXqJ2oN6QY_Urp9Mk_VL1tEdRAZiOwiwTm8xP1zLCbD5_ekG5LPr9cSUlCrumxrL"/>
<div className="absolute -bottom-1 -right-1 bg-secondary text-white p-1 rounded-full border-2 border-white">
<span className="material-symbols-outlined text-[14px]" data-icon="verified" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span>
</div>
</div>
<div>
<h3 className="font-headline-md text-text-primary mb-1">Dr. Emily Chen</h3>
<div className="flex items-center gap-2 text-text-secondary font-label-md">
<span className="material-symbols-outlined text-[18px]" data-icon="medical_services">medical_services</span>
                                Pediatric Specialist
                            </div>
</div>
</div>
<div className="grid grid-cols-2 lg:flex items-center gap-8 lg:gap-12 flex-1 lg:justify-center">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined" data-icon="calendar_month">calendar_month</span>
</div>
<div>
<p className="text-text-secondary font-label-sm uppercase tracking-wider">Date</p>
<p className="font-dm-sans font-bold text-text-primary">Nov 05, 2024</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined" data-icon="schedule">schedule</span>
</div>
<div>
<p className="text-text-secondary font-label-sm uppercase tracking-wider">Time</p>
<p className="font-dm-sans font-bold text-text-primary">11:00 AM</p>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-4 w-full lg:w-auto">
<div className="bg-blue-50 text-primary px-4 py-1.5 rounded-full font-label-md flex items-center gap-2 whitespace-nowrap">
<span className="w-2 h-2 rounded-full bg-primary"></span>
                            Confirmed
                        </div>
<div className="flex gap-2 w-full sm:w-auto">
<button className="flex-1 sm:flex-none border border-primary text-primary font-label-md px-6 py-2 rounded-full hover:bg-primary/5 transition-colors">Reschedule</button>
<button className="flex-1 sm:flex-none bg-primary text-white font-label-md px-6 py-2 rounded-full hover:shadow-md transition-shadow">Details</button>
</div>
</div>
</div>
</div>
</div>
{/*  Sidebar / Supplemental Info (Asymmetric Layout)  */}
<div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 bg-primary/5 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 border border-primary/10">
<div className="w-20 h-20 bg-primary text-white rounded-2xl flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[40px]" data-icon="health_and_safety">health_and_safety</span>
</div>
<div>
<h4 className="font-headline-md text-primary mb-2">Telehealth Consultations</h4>
<p className="text-text-secondary font-body-md mb-4">Did you know you can see most of our doctors via a secure video call? Save travel time and book a virtual appointment today.</p>
<button className="text-primary font-bold font-label-md flex items-center gap-2 hover:translate-x-1 transition-transform">
                        Explore Telehealth Options <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
<div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col gap-6">
<h4 className="font-headline-md text-text-primary">Appointment Stats</h4>
<div className="grid grid-cols-2 gap-4">
<div className="bg-slate-50 p-4 rounded-xl">
<p className="text-text-secondary font-label-sm mb-1">Upcoming</p>
<p className="text-3xl font-bold text-primary">03</p>
</div>
<div className="bg-slate-50 p-4 rounded-xl">
<p className="text-text-secondary font-label-sm mb-1">Total Visits</p>
<p className="text-3xl font-bold text-text-primary">24</p>
</div>
</div>
<div className="bg-secondary/10 p-4 rounded-xl flex items-center gap-4">
<span className="material-symbols-outlined text-secondary" data-icon="event_available">event_available</span>
<p className="text-secondary font-label-md">Next: Cardiologist on Oct 24</p>
</div>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 w-full py-12 mt-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
<div className="col-span-1 md:col-span-1">
<div className="font-sora font-bold text-slate-900 dark:text-white text-xl mb-4">EasyCare</div>
<p className="text-slate-500 font-label-sm leading-relaxed mb-6">Innovative healthcare solutions for a modern lifestyle. We prioritize your well-being through advanced technology.</p>
</div>
<div>
<h5 className="font-sora font-bold text-slate-900 dark:text-white mb-4">Patient Links</h5>
<ul className="space-y-3">
<li><a className="text-slate-500 dark:text-slate-400 font-label-md hover:text-primary underline-offset-4 hover:underline transition-all" href="#">Privacy Policy</a></li>
<li><a className="text-slate-500 dark:text-slate-400 font-label-md hover:text-primary underline-offset-4 hover:underline transition-all" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h5 className="font-sora font-bold text-slate-900 dark:text-white mb-4">Support</h5>
<ul className="space-y-3">
<li><a className="text-slate-500 dark:text-slate-400 font-label-md hover:text-primary underline-offset-4 hover:underline transition-all" href="#">Contact Us</a></li>
<li><a className="text-slate-500 dark:text-slate-400 font-label-md hover:text-primary underline-offset-4 hover:underline transition-all" href="#">Careers</a></li>
</ul>
</div>
<div>
<h5 className="font-sora font-bold text-slate-900 dark:text-white mb-4">Language</h5>
<button className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-2 text-slate-600 font-label-md">
<span className="material-symbols-outlined text-[18px]" data-icon="language">language</span>
                    English (US)
                </button>
</div>
</div>
<div className="mt-12 pt-8 border-t border-slate-200/60 max-w-7xl mx-auto text-center">
<p className="font-dm-sans text-xs text-slate-500">© 2024 EasyCare Health. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
