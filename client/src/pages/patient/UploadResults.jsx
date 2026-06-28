import React from 'react';
import { Link } from 'react-router-dom';

export default function UploadResults() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="flex justify-between items-center h-16 px-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm"><div className="max-w-[1440px] mx-auto w-full flex items-center justify-between h-full px-8"><div className="flex items-center gap-3"><div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center"><span className="material-symbols-outlined text-white text-2xl">medical_services</span></div><span className="text-xl font-bold text-text-primary tracking-tight">EasyCare</span></div><nav className="hidden lg:flex items-center gap-2"><a className="px-4 py-2 text-text-secondary hover:text-primary font-medium text-sm transition-colors" href="#">Home</a><a className="px-4 py-2 text-text-secondary hover:text-primary font-medium text-sm transition-colors" href="#">Dashboard</a><a className="px-4 py-2 text-text-secondary hover:text-primary font-medium text-sm transition-colors" href="#">Find Doctors</a><a className="px-4 py-2 text-text-secondary hover:text-primary font-medium text-sm transition-colors" href="#">My Appointments</a><a className="px-4 py-2 text-text-secondary hover:text-primary font-medium text-sm transition-colors" href="#">Medical Records</a><a className="px-4 py-2 text-primary font-bold text-sm bg-primary/5 rounded-full" href="#">Upload Results</a></nav><div className="flex items-center gap-6"><div className="flex items-center gap-4"><button className="w-10 h-10 flex items-center justify-center text-text-secondary hover:bg-surface-container rounded-full transition-colors relative"><span className="material-symbols-outlined">notifications</span><span className="absolute top-2.5 right-2.5 w-2 h-2 bg-error rounded-full border-2 border-white"></span></button><button className="w-10 h-10 flex items-center justify-center text-text-secondary hover:bg-surface-container rounded-full transition-colors"><span className="material-symbols-outlined">settings</span></button></div><div className="h-8 w-[1px] bg-outline-variant"></div><div className="flex items-center gap-3 bg-surface-container-low pl-1 pr-4 py-1 rounded-full border border-outline-variant hover:bg-surface-container transition-colors cursor-pointer"><img alt="User Avatar" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJdRX-_1Wr5BDVNYA3PsOmjmeSqURaslJGfnAAUEOF4S_gUB4bIrdt8uyzWYhybIgYXZdRJBLtbpdwde8_c9Pl5WpzkuOXJQ1f-YqktZLPMTAMxe07unPUeXYc06KNcpwcTmG6v2y3B0IigVt4QJGoSl1zN8_qHvxF_VRjIemVQaeWzPMrWpISrKaAoUsQ1FgE9d4K6qFHjZDUDng_ZqIuZYwX2G5Gv8VwnJubFTEKhsimw-HpqRlHwUSMUzZskPnCn6uDT7NKZxaQ" /><div className="flex flex-col"><p className="text-xs font-bold text-text-primary leading-none">Alex Johnson</p><p className="text-[10px] text-text-secondary font-medium mt-0.5">ID: PT-88210</p></div><span className="material-symbols-outlined text-text-secondary text-sm ml-1">expand_more</span></div></div></div></header>
{/*  Main Content Canvas  */}
<main className="flex-grow w-full max-w-7xl mx-auto px-6 py-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
{/*  Left Column: Upload Interface  */}
<div className="lg:col-span-7 space-y-8">
<div>
<h1 className="font-headline-lg text-headline-lg text-text-primary">Upload Lab Results</h1>
<p className="text-text-secondary font-body-md text-body-md mt-2">Securely share your laboratory reports with your medical team for faster diagnosis.</p>
</div>
{/*  Drag & Drop Zone  */}
<div className="relative group">
<div className="border-2 border-dashed border-primary/30 rounded-[16px] bg-white p-12 text-center transition-all duration-300 hover:border-primary hover:bg-primary/5 flex flex-col items-center justify-center cursor-pointer group-hover:shadow-lg">
<div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
<span className="material-symbols-outlined text-primary text-4xl">cloud_upload</span>
</div>
<h3 className="font-headline-md text-headline-md text-text-primary mb-2">Drag and drop files here</h3>
<p className="text-text-secondary text-body-md max-w-xs">Supported formats: PDF, JPEG, PNG (Max 10MB per file)</p>
<button className="mt-8 px-8 py-3 bg-primary text-white rounded-full font-label-md text-label-md hover:shadow-xl transition-all active:scale-95">Browse Files</button>
</div>
</div>
{/*  Form Details  */}
<div className="bg-white rounded-[16px] p-8 shadow-sm border border-slate-100">
<h4 className="font-headline-md text-headline-md text-text-primary mb-6">Report Details</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-label-md text-label-md text-text-primary ml-1">Test Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400" placeholder="e.g. Comprehensive Blood Panel" type="text" />
</div>
<div className="space-y-2">
<label className="font-label-md text-label-md text-text-primary ml-1">Related Appointment</label>
<select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white">
<option>Select an appointment</option>
<option>General Checkup - Dr. Sarah Miller (Oct 12)</option>
<option>Cardiology Follow-up - Dr. James Chen (Sep 28)</option>
<option>Not related to a recent visit</option>
</select>
</div>
</div>
<div className="mt-8 flex justify-end">
<button className="px-10 py-3 bg-primary text-white rounded-full font-label-md text-label-md hover:bg-primary-container transition-colors shadow-md">Complete Upload</button>
</div>
</div>
</div>
{/*  Right Column: Recently Uploaded  */}
<div className="lg:col-span-5 space-y-6">
<div className="flex items-center justify-between">
<h2 className="font-headline-md text-headline-md text-text-primary">Recently Uploaded</h2>
<a className="text-primary font-label-md text-label-md hover:underline decoration-2 underline-offset-4" href="#">View All</a>
</div>
<div className="space-y-4">
{/*  Recent Card 1  */}
<div className="bg-white rounded-[16px] p-4 border border-slate-100 shadow-sm flex items-center group hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4">
<span className="material-symbols-outlined text-primary">picture_as_pdf</span>
</div>
<div className="flex-grow">
<h5 className="font-label-md text-label-md text-text-primary">Lipid_Profile_Report.pdf</h5>
<p className="text-text-secondary font-label-sm text-label-sm">Uploaded on Oct 14, 2023</p>
</div>
<button className="p-2 text-text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined">download</span>
</button>
</div>
{/*  Recent Card 2  */}
<div className="bg-white rounded-[16px] p-4 border border-slate-100 shadow-sm flex items-center group hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mr-4">
<span className="material-symbols-outlined text-secondary">image</span>
</div>
<div className="flex-grow">
<h5 className="font-label-md text-label-md text-text-primary">Chest_Xray_Scan.jpg</h5>
<p className="text-text-secondary font-label-sm text-label-sm">Uploaded on Oct 02, 2023</p>
</div>
<button className="p-2 text-text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined">visibility</span>
</button>
</div>
{/*  Recent Card 3  */}
<div className="bg-white rounded-[16px] p-4 border border-slate-100 shadow-sm flex items-center group hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mr-4">
<span className="material-symbols-outlined text-warning">description</span>
</div>
<div className="flex-grow">
<h5 className="font-label-md text-label-md text-text-primary">Thyroid_Results_Final.pdf</h5>
<p className="text-text-secondary font-label-sm text-label-sm">Uploaded on Sep 22, 2023</p>
</div>
<button className="p-2 text-text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined">download</span>
</button>
</div>
</div>
{/*  Info Box  */}
<div className="bg-primary/5 rounded-[16px] p-6 border border-primary/10">
<div className="flex items-start space-x-3">
<span className="material-symbols-outlined text-primary mt-1">info</span>
<div>
<p className="font-label-md text-label-md text-text-primary mb-1">Privacy &amp; Security</p>
<p className="text-text-secondary font-label-sm text-label-sm leading-relaxed">Your data is encrypted end-to-end. Only your designated healthcare providers can access these files.</p>
</div>
</div>
</div>
{/*  Quick Actions Image  */}
<div className="rounded-[16px] overflow-hidden relative h-48 group shadow-lg">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A clean and modern hospital laboratory with high-tech equipment under soft bright blue clinical lighting. The scene shows glass partitions and white medical furniture, embodying a sophisticated medical-tech aesthetic. The atmosphere is professional, sterile, and calming, using a palette of whites and deep primary blues." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwemvVpI1W4GDhRi94c-G5DZ9p-_LbHH5XciGw_czDGYXxhrXhOIbprkekOpIoOv3Jq5DezMgMC7-eIdjcn0xViaaHqSp3ZZhPmrNy9D5P7D5DvjXA54zPERXRBQalEV19RW0Z7Jq-9pVTR65e8Of55GhQXNPAOOglKs7zaSl5VMI5BjorP8JFJzmIAIAO8Ts5fq9-19tzzcxESk3fXaKkcnahw4hIPkkGvVNiviFH7VejdJM4HZg7DfLEBR5K6kZ0NQnw6oRFPuPy" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
<div>
<p className="text-white font-headline-md text-headline-md">Need assistance?</p>
<p className="text-white/80 text-label-sm font-label-sm">Contact our support desk for help with your uploads.</p>
</div>
</div>
</div>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="w-full py-12 mt-auto bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
<div className="space-y-4">
<span className="font-bold text-slate-900 dark:text-white text-lg">EasyCare</span>
<p className="font-manrope text-xs text-slate-500 leading-relaxed">Advancing healthcare through technology. Your health journey, simplified and secured.</p>
</div>
<div>
<p className="font-label-md text-label-md text-text-primary mb-4">Patient Links</p>
<ul className="space-y-2">
<li className=""><a className="font-manrope text-xs text-slate-500 hover:text-teal-500 underline decoration-teal-500 underline-offset-4" href="#">My Appointments</a></li>
<li className=""><a className="font-manrope text-xs text-slate-500 hover:text-teal-500 underline decoration-teal-500 underline-offset-4" href="#">Medical Records</a></li>
<li className=""><a className="font-manrope text-xs text-slate-500 hover:text-teal-500 underline decoration-teal-500 underline-offset-4" href="#">Doctor Directory</a></li>
</ul>
</div>
<div>
<p className="font-label-md text-label-md text-text-primary mb-4">Support</p>
<ul className="space-y-2">
<li className=""><a className="font-manrope text-xs text-slate-500 hover:text-teal-500 underline decoration-teal-500 underline-offset-4" href="#">Help Center</a></li>
<li className=""><a className="font-manrope text-xs text-slate-500 hover:text-teal-500 underline decoration-teal-500 underline-offset-4" href="#">Contact Us</a></li>
<li className=""><a className="font-manrope text-xs text-slate-500 hover:text-teal-500 underline decoration-teal-500 underline-offset-4" href="#">Terms of Service</a></li>
</ul>
</div>
<div className="flex flex-col justify-between">
<div>
<p className="font-label-md text-label-md text-text-primary mb-4">Newsletter</p>
<div className="flex">
<input className="w-full px-3 py-2 text-xs rounded-l-lg border border-slate-200 outline-none" placeholder="Your email" type="email" />
<button className="bg-primary text-white px-3 py-2 rounded-r-lg text-xs font-bold transition-all active:scale-95">Join</button>
</div>
</div>
<p className="font-manrope text-xs text-slate-500 mt-6">© 2024 EasyCare Health. All rights reserved.</p>
</div>
</div>
</footer>





    </>
  );
}
