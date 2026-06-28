import React from 'react';
import { Link } from 'react-router-dom';

export default function MapSearch() {
  return (
    <>
      
{/*  TopAppBar from JSON  */}
<header className="flex justify-between items-center h-16 px-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm"><div className="max-w-[1440px] mx-auto w-full flex items-center justify-between h-full px-8"><div className="flex items-center gap-3"><div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center"><span className="material-symbols-outlined text-white text-2xl">medical_services</span></div><span className="text-xl font-bold text-text-primary tracking-tight">EasyCare</span></div><nav className="hidden lg:flex items-center gap-2"><a className="px-4 py-2 text-text-secondary hover:text-primary font-medium text-sm transition-colors" href="#">Home</a><a className="px-4 py-2 text-text-secondary hover:text-primary font-medium text-sm transition-colors" href="#">Dashboard</a><a className="px-4 py-2 text-primary font-bold text-sm bg-primary/5 rounded-full" href="#">Find Doctors</a><a className="px-4 py-2 text-text-secondary hover:text-primary font-medium text-sm transition-colors" href="#">My Appointments</a><a className="px-4 py-2 text-text-secondary hover:text-primary font-medium text-sm transition-colors" href="#">Medical Records</a><a className="px-4 py-2 text-text-secondary hover:text-primary font-medium text-sm transition-colors" href="#">Upload Results</a></nav><div className="flex items-center gap-6"><div className="flex items-center gap-4"><button className="w-10 h-10 flex items-center justify-center text-text-secondary hover:bg-surface-container rounded-full transition-colors relative"><span className="material-symbols-outlined">notifications</span><span className="absolute top-2.5 right-2.5 w-2 h-2 bg-error rounded-full border-2 border-white"></span></button><button className="w-10 h-10 flex items-center justify-center text-text-secondary hover:bg-surface-container rounded-full transition-colors"><span className="material-symbols-outlined">settings</span></button></div><div className="h-8 w-[1px] bg-outline-variant"></div><div className="flex items-center gap-3 bg-surface-container-low pl-1 pr-4 py-1 rounded-full border border-outline-variant hover:bg-surface-container transition-colors cursor-pointer"><img alt="User Avatar" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJdRX-_1Wr5BDVNYA3PsOmjmeSqURaslJGfnAAUEOF4S_gUB4bIrdt8uyzWYhybIgYXZdRJBLtbpdwde8_c9Pl5WpzkuOXJQ1f-YqktZLPMTAMxe07unPUeXYc06KNcpwcTmG6v2y3B0IigVt4QJGoSl1zN8_qHvxF_VRjIemVQaeWzPMrWpISrKaAoUsQ1FgE9d4K6qFHjZDUDng_ZqIuZYwX2G5Gv8VwnJubFTEKhsimw-HpqRlHwUSMUzZskPnCn6uDT7NKZxaQ" /><div className="flex flex-col"><p className="text-xs font-bold text-text-primary leading-none">Alex Johnson</p><p className="text-[10px] text-text-secondary font-medium mt-0.5">ID: PT-88210</p></div><span className="material-symbols-outlined text-text-secondary text-sm ml-1">expand_more</span></div></div></div></header>
{/*  Main Map Interface  */}
<main className="flex-grow flex pt-0 relative overflow-hidden h-[calc(100vh-64px)]">
{/*  Interactive Map Canvas  */}
<div className="absolute inset-0 z-0 map-gradient" data-location="New York City">
{/*  Simulated Map Markers  */}
{/*  Marker 1: Dr. Aris Thorne  */}
<div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
<div className="bg-primary text-white p-2 rounded-full shadow-lg ring-4 ring-white active:scale-90 transition-transform">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>medical_services</span>
</div>
{/*  Mini Profile Card (Hover/Open State)  */}
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-72 bg-surface backdrop-blur-xl bg-opacity-95 rounded-[16px] shadow-2xl p-4 border border-white/20 z-50">
<div className="flex gap-4">
<img alt="Dr. Aris Thorne" className="w-16 h-16 rounded-xl object-cover" data-alt="A professional portrait of a male cardiologist in a clean, white medical coat, looking friendly and approachable. The background is a minimalist medical office with high-key lighting. The style is sharp, clean, and clinical, reflecting expertise and trust within a modern healthcare ecosystem." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFbiMk23gX7q4wxKmgycH2eBcRWVEBRpzKVLohG20XyQxtj4CQhgfZYk8i0PhJz2YhrZfa51rxf1Mm8eU7L4nSEr5HZo7YHTAkks1rOYkL_L9V7LUgJ8PRvxzuzXyE01tR6-dv7sNvCE0HhllNZgLhZYdBtmhHQ9OjhrnUuAtWJxA-M7IlOXrPXVohYAMcYU5Rv0rC4Ot5dDslKXr1dCeVLa2kx9BbBJiX7oiqjZWS_vDYoB5fGt3ixmyGp4FN2XR88Rr3_I1MUpTw" />
<div className="flex-grow">
<h4 className="font-headline-md text-body-md text-primary leading-tight">Dr. Aris Thorne</h4>
<p className="font-label-sm text-text-secondary">Cardiologist</p>
<div className="flex items-center mt-1">
<span className="material-symbols-outlined text-warning text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="text-label-sm font-bold ml-1">4.9</span>
<span className="text-label-sm text-text-secondary ml-1">(124 reviews)</span>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between border-t pt-3">
<span className="text-label-sm text-text-secondary">Next: <span className="text-on-surface font-bold">Today, 2:30 PM</span></span>
<button className="bg-primary text-on-primary px-4 py-1.5 rounded-full text-label-md font-bold hover:bg-primary-container transition-all">Book</button>
</div>
</div>
</div>
{/*  Marker 2: Dr. Sarah Jenkins  */}
<div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
<div className="bg-primary/80 text-white p-2 rounded-full shadow-lg ring-4 ring-white/50 active:scale-90 transition-transform">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>medical_services</span>
</div>
</div>
{/*  Marker 3: Dr. Michael Chen  */}
<div className="absolute top-2/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
<div className="bg-primary/80 text-white p-2 rounded-full shadow-lg ring-4 ring-white/50 active:scale-90 transition-transform">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>medical_services</span>
</div>
</div>
</div>
{/*  Sidebar Filters Overlay  */}
<aside className="relative z-10 w-80 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-r border-slate-200 dark:border-slate-800 m-6 rounded-[16px] shadow-2xl flex flex-col overflow-hidden">
<div className="p-6 border-b border-slate-100 flex items-center justify-between">
<h2 className="font-headline-md text-headline-md text-on-surface">Filters</h2>
<button className="text-primary font-label-md hover:underline">Reset All</button>
</div>
<div className="p-6 space-y-8 overflow-y-auto">
{/*  Specialty Select  */}
<div className="space-y-3">
<label className="font-label-md text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">stethoscope</span>
                        Specialty
                    </label>
<div className="relative">
<select className="w-full bg-surface-container rounded-xl border-none p-3 text-body-md appearance-none focus:ring-2 focus:ring-primary">
<option>All Specialties</option>
<option>Cardiology</option>
<option>Dermatology</option>
<option>Neurology</option>
<option>Pediatrics</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-3 pointer-events-none">expand_more</span>
</div>
</div>
{/*  Distance Slider  */}
<div className="space-y-4">
<div className="flex justify-between items-center">
<label className="font-label-md text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">distance</span>
                            Distance
                        </label>
<span className="text-label-md font-bold text-primary">15 miles</span>
</div>
<input className="w-full h-2 bg-primary-fixed rounded-lg appearance-none cursor-pointer accent-primary" max="50" min="1" type="range" value="15" />
<div className="flex justify-between text-label-sm text-text-secondary">
<span className="">1 mile</span>
<span className="">50 miles</span>
</div>
</div>
{/*  Rating Filter  */}
<div className="space-y-3">
<label className="font-label-md text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">star</span>
                        Minimum Rating
                    </label>
<div className="flex gap-2">
<button className="flex-1 py-2 bg-primary text-on-primary rounded-lg font-label-md border border-primary">4.5+</button>
<button className="flex-1 py-2 bg-surface-container text-on-surface-variant rounded-lg font-label-md border border-outline-variant">4.0+</button>
<button className="flex-1 py-2 bg-surface-container text-on-surface-variant rounded-lg font-label-md border border-outline-variant">Any</button>
</div>
</div>
{/*  Availability Toggle  */}
<div className="flex items-center justify-between p-4 bg-primary-fixed/30 rounded-xl">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">event_available</span>
<span className="font-label-md">Available Today</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value="" />
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
<div className="mt-auto p-6 border-t border-slate-100">
<button className="w-full bg-primary text-on-primary py-4 rounded-xl font-headline-md text-body-md hover:shadow-lg hover:translate-y-[-1px] transition-all">
                    Show 42 Results
                </button>
</div>
</aside>
{/*  Floating UI Elements  */}
<div className="absolute top-6 right-6 z-20 flex flex-col gap-3">
{/*  Search Bar Floating  */}
<div className="bg-white/90 backdrop-blur-xl rounded-full shadow-2xl flex items-center p-2 border border-white/20 min-w-[320px]">
<div className="flex items-center gap-3 pl-4 flex-grow">
<span className="material-symbols-outlined text-text-secondary">search</span>
<input className="bg-transparent border-none focus:ring-0 text-body-md w-full" placeholder="Search by name or clinic..." type="text" />
</div>
<button className="bg-surface-container text-on-surface-variant p-2 rounded-full hover:bg-surface-dim transition-colors">
<span className="material-symbols-outlined">my_location</span>
</button>
</div>
{/*  View Toggle  */}
<div className="self-end">
<a className="flex items-center gap-2 bg-white/90 backdrop-blur-xl text-primary font-label-md px-6 py-3 rounded-full shadow-2xl border border-white/20 hover:bg-primary hover:text-on-primary transition-all group" href="#">
<span className="material-symbols-outlined">list</span>
                    Switch to List View
                </a>
</div>
</div>
{/*  Zoom Controls  */}
<div className="absolute bottom-6 right-6 z-20 flex flex-col gap-2">
<button className="w-12 h-12 bg-white/90 backdrop-blur-xl rounded-xl shadow-xl flex items-center justify-center text-on-surface hover:bg-slate-50 border border-white/20">
<span className="material-symbols-outlined">add</span>
</button>
<button className="w-12 h-12 bg-white/90 backdrop-blur-xl rounded-xl shadow-xl flex items-center justify-center text-on-surface hover:bg-slate-50 border border-white/20">
<span className="material-symbols-outlined">remove</span>
</button>
</div>
{/*  Map Navigation / Legend  */}
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-white/80 backdrop-blur-xl px-6 py-3 rounded-full shadow-2xl border border-white/20 flex items-center gap-8">
<div className="flex items-center gap-2">
<span className="w-3 h-3 bg-primary rounded-full"></span>
<span className="text-label-sm font-bold">General Practitioners</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 bg-secondary rounded-full"></span>
<span className="text-label-sm font-bold">Specialists</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 bg-tertiary-container rounded-full"></span>
<span className="text-label-sm font-bold">Emergency Care</span>
</div>
</div>
</main>
{/*  SideNavBar from JSON (Responsive Hidden)  */}
<div className="fixed left-0 top-0 h-full w-64 z-50 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 shadow-lg hidden">
<div className="flex flex-col h-full py-6 px-4">
<div className="mb-8 px-4">
<h3 className="text-xl font-black text-blue-600 dark:text-blue-400">EasyCare</h3>
<p className="text-xs text-slate-500">Patient Portal</p>
</div>
<nav className="flex-grow space-y-2">
<a className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-r-4 border-blue-600 font-semibold transition-all" href="#">
<span className="material-symbols-outlined">dashboard</span>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 transition-all" href="#">
<span className="material-symbols-outlined">description</span>
                    Medical Records
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 transition-all" href="#">
<span className="material-symbols-outlined">upload_file</span>
                    Lab Results
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 transition-all" href="#">
<span className="material-symbols-outlined">map</span>
                    Find Doctors
                </a>
</nav>
<div className="mt-auto space-y-2 border-t pt-6">
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 transition-all" href="#">
<span className="material-symbols-outlined">settings</span>
                    Settings
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 transition-all" href="#">
<span className="material-symbols-outlined">logout</span>
                    Logout
                </a>
</div>
</div>
</div>



    </>
  );
}
