import React from 'react';
import { Link } from 'react-router-dom';

export default function MedicalRecords() {
  return (
    <>
      
{/*  TopAppBar from Shared Components  */}
<header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-blue-600 dark:text-blue-400 font-manrope antialiased docked full-width top-0 sticky z-50 border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm">
<div className="flex justify-between items-center px-6 py-3 w-full max-w-8xl mx-auto">
<div className="text-2xl font-bold tracking-tight text-blue-600 dark:text-blue-400">EasyCare</div>
<nav className="hidden md:flex items-center space-x-8">
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-500 font-label-md text-label-md transition-all duration-200" href="#">Home</a>
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-500 font-label-md text-label-md transition-all duration-200" href="#">Dashboard</a>
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-500 font-label-md text-label-md transition-all duration-200" href="#">Doctors</a>
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-500 font-label-md text-label-md transition-all duration-200" href="#">Services</a>
<a className="text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 font-label-md text-label-md transition-all duration-200" href="#">Medical Records</a>
<a className="text-slate-600 dark:text-slate-400 hover:text-blue-500 font-label-md text-label-md transition-all duration-200" href="#">About</a>
</nav>

</div>
</header>
<main className="flex-grow w-full max-w-7xl mx-auto px-6 py-10">
{/*  Page Header  */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
<div>
<h1 className="font-display-lg text-display-lg text-text-primary mb-2">Medical Records</h1>
<p className="text-text-secondary font-body-lg text-body-lg">Manage and view your clinical history, lab results, and prescriptions.</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary text-primary font-label-md text-label-md hover:bg-primary/5 transition-colors">
<span className="material-symbols-outlined" data-icon="file_upload">file_upload</span>
                    Upload Results
                </button>
<button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white font-label-md text-label-md shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
<span className="material-symbols-outlined" data-icon="print">print</span>
                    Export PDF
                </button>
</div>
</div>
{/*  Bento Filter Grid  */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
<div className="md:col-span-2 glass-card p-4 rounded-xl border border-white/40 shadow-sm flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
<span className="material-symbols-outlined" data-icon="calendar_month">calendar_month</span>
</div>
<div className="flex-grow">
<span className="text-label-sm font-label-sm text-text-secondary uppercase">Date Range</span>
<select className="w-full bg-transparent border-none p-0 focus:ring-0 font-label-md text-label-md text-text-primary">
<option>Last 12 Months</option>
<option>Current Year</option>
<option>All Time</option>
</select>
</div>
</div>
<div className="glass-card p-4 rounded-xl border border-white/40 shadow-sm flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary">
<span className="material-symbols-outlined" data-icon="stethoscope">stethoscope</span>
</div>
<div className="flex-grow">
<span className="text-label-sm font-label-sm text-text-secondary uppercase">Specialty</span>
<select className="w-full bg-transparent border-none p-0 focus:ring-0 font-label-md text-label-md text-text-primary">
<option>All Specialties</option>
<option>Cardiology</option>
<option>Dermatology</option>
</select>
</div>
</div>
<div className="glass-card p-4 rounded-xl border border-white/40 shadow-sm flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined" data-icon="folder_shared">folder_shared</span>
</div>
<div className="flex-grow">
<span className="text-label-sm font-label-sm text-text-secondary uppercase">Status</span>
<select className="w-full bg-transparent border-none p-0 focus:ring-0 font-label-md text-label-md text-text-primary">
<option>All Status</option>
<option>Finalized</option>
<option>Pending</option>
</select>
</div>
</div>
</div>
{/*  Medical Records List  */}
<div className="space-y-4">
{/*  Record 1  */}
<div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
<div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-6">
<div className="text-center bg-surface-container-low px-4 py-2 rounded-xl border border-slate-100">
<span className="block font-headline-md text-headline-md text-primary">24</span>
<span className="block text-label-sm font-label-sm text-text-secondary uppercase">Oct 2023</span>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<h3 className="font-headline-md text-headline-md text-text-primary">Annual Cardiovascular Check-up</h3>
<span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">Completed</span>
</div>
<div className="flex flex-wrap gap-4 text-text-secondary font-label-md text-label-md">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-base" data-icon="person">person</span>
                                    Dr. Sarah Jenkins
                                </span>
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-base" data-icon="health_and_safety">health_and_safety</span>
                                    Cardiology
                                </span>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="px-6 py-2 rounded-full border border-slate-200 text-text-primary font-label-md text-label-md hover:bg-slate-50 transition-colors flex items-center gap-2">
                            View Details
                            <span className="material-symbols-outlined transition-transform group-hover:translate-y-0.5" data-icon="expand_more">expand_more</span>
</button>
</div>
</div>
{/*  Expanded Detail View (Visible)  */}
<div className="px-6 pb-8 pt-2 border-t border-slate-50 bg-slate-50/30">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<h4 className="text-label-sm font-label-sm text-text-secondary uppercase mb-3 flex items-center gap-2">
<span className="material-symbols-outlined text-base text-primary" data-icon="description">description</span>
                                Diagnosis Summary
                            </h4>
<p className="font-body-md text-body-md text-text-primary">Patient exhibits normal sinus rhythm. Cholesterol levels show slight improvement from previous visit. Recommended continuing current exercise regimen and diet plan.</p>
</div>
<div>
<h4 className="text-label-sm font-label-sm text-text-secondary uppercase mb-3 flex items-center gap-2">
<span className="material-symbols-outlined text-base text-secondary" data-icon="medication">medication</span>
                                Prescribed Medications
                            </h4>
<ul className="space-y-2">
<li className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-100">
<span className="font-label-md text-label-md">Atorvastatin 20mg</span>
<span className="text-label-sm font-label-sm text-text-secondary">1x Daily</span>
</li>
<li className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-100">
<span className="font-label-md text-label-md">Lisinopril 10mg</span>
<span className="text-label-sm font-label-sm text-text-secondary">As needed</span>
</li>
</ul>
</div>
<div>
<h4 className="text-label-sm font-label-sm text-text-secondary uppercase mb-3 flex items-center gap-2">
<span className="material-symbols-outlined text-base text-tertiary" data-icon="biotech">biotech</span>
                                Required Tests
                            </h4>
<div className="space-y-2">
<div className="p-3 rounded-lg bg-white border border-slate-100 flex items-center gap-3">
<span className="material-symbols-outlined text-blue-500" data-icon="check_circle" data-weight="fill" style={{"fontVariationSettings":"&quot"}}>check_circle</span>
<div>
<p className="font-label-md text-label-md leading-tight">Full Blood Count</p>
<p className="text-[10px] text-text-secondary">Results available in portal</p>
</div>
</div>
<div className="p-3 rounded-lg bg-white border border-slate-100 flex items-center gap-3">
<span className="material-symbols-outlined text-warning" data-icon="schedule">schedule</span>
<div>
<p className="font-label-md text-label-md leading-tight">Stress ECG</p>
<p className="text-[10px] text-text-secondary">Scheduled for Nov 15</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Record 2  */}
<div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
<div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-6">
<div className="text-center bg-surface-container-low px-4 py-2 rounded-xl border border-slate-100">
<span className="block font-headline-md text-headline-md text-primary">12</span>
<span className="block text-label-sm font-label-sm text-text-secondary uppercase">Aug 2023</span>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<h3 className="font-headline-md text-headline-md text-text-primary">Dermatological Consultation</h3>
<span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">Completed</span>
</div>
<div className="flex flex-wrap gap-4 text-text-secondary font-label-md text-label-md">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-base" data-icon="person">person</span>
                                    Dr. Michael Chen
                                </span>
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-base" data-icon="health_and_safety">health_and_safety</span>
                                    Dermatology
                                </span>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="px-6 py-2 rounded-full border border-slate-200 text-text-primary font-label-md text-label-md hover:bg-slate-50 transition-colors flex items-center gap-2">
                            View Details
                            <span className="material-symbols-outlined" data-icon="expand_more">expand_more</span>
</button>
</div>
</div>
</div>
{/*  Record 3  */}
<div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow group opacity-80">
<div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-6">
<div className="text-center bg-surface-container-low px-4 py-2 rounded-xl border border-slate-100">
<span className="block font-headline-md text-headline-md text-primary">05</span>
<span className="block text-label-sm font-label-sm text-text-secondary uppercase">Jun 2023</span>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<h3 className="font-headline-md text-headline-md text-text-primary">General Physical Wellness</h3>
<span className="bg-surface-container-highest text-text-secondary text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">Archived</span>
</div>
<div className="flex flex-wrap gap-4 text-text-secondary font-label-md text-label-md">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-base" data-icon="person">person</span>
                                    Dr. Elena Rodriguez
                                </span>
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-base" data-icon="health_and_safety">health_and_safety</span>
                                    General Practice
                                </span>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="px-6 py-2 rounded-full border border-slate-200 text-text-primary font-label-md text-label-md hover:bg-slate-50 transition-colors flex items-center gap-2">
                            View Details
                            <span className="material-symbols-outlined" data-icon="expand_more">expand_more</span>
</button>
</div>
</div>
</div>
</div>
{/*  Pagination or Load More  */}
<div className="mt-12 flex justify-center">
<button className="px-10 py-3 rounded-full border-2 border-primary text-primary font-headline-md text-headline-md hover:bg-primary hover:text-white transition-all">
                Load More Records
            </button>
</div>
</main>
{/*  Footer from Shared Components  */}
<footer className="bg-slate-50 dark:bg-slate-950 w-full py-12 mt-auto border-t border-slate-200 dark:border-slate-800">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
<div className="col-span-1 md:col-span-1">
<div className="font-bold text-slate-900 dark:text-white mb-4 text-headline-md">EasyCare Health</div>
<p className="font-manrope text-xs text-slate-500 mb-6">Innovative healthcare solutions at your fingertips. Providing premium clinical management and patient-centric portals.</p>
<div className="flex gap-4">
<span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer" data-icon="public">public</span>
<span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer" data-icon="hub">hub</span>
<span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer" data-icon="share">share</span>
</div>
</div>
<div>
<h5 className="font-bold text-slate-900 dark:text-white mb-4 uppercase text-[10px] tracking-widest">Platform</h5>
<ul className="space-y-2">
<li className=""><a className="font-manrope text-xs text-slate-500 hover:text-teal-500 underline decoration-teal-500 underline-offset-4" href="#">Doctors</a></li>
<li className=""><a className="font-manrope text-xs text-slate-500 hover:text-teal-500 underline decoration-teal-500 underline-offset-4" href="#">Services</a></li>
<li className=""><a className="font-manrope text-xs text-slate-500 hover:text-teal-500 underline decoration-teal-500 underline-offset-4" href="#">Mobile App</a></li>
</ul>
</div>
<div>
<h5 className="font-bold text-slate-900 dark:text-white mb-4 uppercase text-[10px] tracking-widest">Company</h5>
<ul className="space-y-2">
<li className=""><a className="font-manrope text-xs text-slate-500 hover:text-teal-500 underline decoration-teal-500 underline-offset-4 text-blue-600 font-bold" href="#">Privacy Policy</a></li>
<li className=""><a className="font-manrope text-xs text-slate-500 hover:text-teal-500 underline decoration-teal-500 underline-offset-4" href="#">Terms of Service</a></li>
<li className=""><a className="font-manrope text-xs text-slate-500 hover:text-teal-500 underline decoration-teal-500 underline-offset-4" href="#">Contact Us</a></li>
<li className=""><a className="font-manrope text-xs text-slate-500 hover:text-teal-500 underline decoration-teal-500 underline-offset-4" href="#">Careers</a></li>
</ul>
</div>
<div>
<h5 className="font-bold text-slate-900 dark:text-white mb-4 uppercase text-[10px] tracking-widest">Newsletter</h5>
<div className="flex rounded-full overflow-hidden border border-slate-200">
<input className="bg-white px-4 py-2 text-xs border-none focus:ring-0 w-full" placeholder="Your email" type="email" />
<button className="bg-primary px-4 text-white">
<span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-8 mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
<p className="font-manrope text-xs text-slate-500">© 2024 EasyCare Health. All rights reserved.</p>
</div>
</footer>



    </>
  );
}
