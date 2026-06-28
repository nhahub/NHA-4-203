import React from 'react';
import { Link } from 'react-router-dom';

export default function DoctorDashboard() {
  return (
    <>
      
{/*  SideNavBar  */}
<aside className="fixed left-0 top-0 h-screen w-64 border-r border-slate-200 bg-slate-50 flex flex-col py-6 z-50">
<div className="px-6 mb-10 flex items-center gap-3">
<div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center">
<span className="material-symbols-outlined text-white" data-icon="medical_services">medical_services</span>
</div>
<div>
<h1 className="text-lg font-black tracking-tight text-blue-700">HealthCore</h1>
<p className="text-xs text-slate-500">Medical Suite</p>
</div>
</div>
<nav className="flex-1 space-y-1 px-2">
<a className="flex items-center gap-3 bg-blue-50 text-blue-700 border-r-4 border-blue-600 font-semibold px-4 py-3 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
<a className="flex items-center gap-3 text-slate-600 hover:bg-blue-50/50 hover:text-blue-600 px-4 py-3 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="event_available">event_available</span>
<span className="font-label-md text-label-md">Appointments</span>
</a>
<a className="flex items-center gap-3 text-slate-600 hover:bg-blue-50/50 hover:text-blue-600 px-4 py-3 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="medical_services">medical_services</span>
<span className="font-label-md text-label-md">Diagnosis</span>
</a>
<a className="flex items-center gap-3 text-slate-600 hover:bg-blue-50/50 hover:text-blue-600 px-4 py-3 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="folder_shared">folder_shared</span>
<span className="font-label-md text-label-md">Patient Records</span>
</a>
<a className="flex items-center gap-3 text-slate-600 hover:bg-blue-50/50 hover:text-blue-600 px-4 py-3 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="biotech">biotech</span>
<span className="font-label-md text-label-md">Lab Results</span>
</a>
<a className="flex items-center gap-3 text-slate-600 hover:bg-blue-50/50 hover:text-blue-600 px-4 py-3 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="query_stats">query_stats</span>
<span className="font-label-md text-label-md">Analytics</span>
</a>
</nav>
<div className="px-2 mt-auto border-t border-slate-200 pt-4 space-y-1">
<a className="flex items-center gap-3 text-slate-600 hover:bg-blue-50/50 hover:text-blue-600 px-4 py-3 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span>
<span className="font-label-md text-label-md">Help Center</span>
</a>
<a className="flex items-center gap-3 text-slate-600 hover:bg-blue-50/50 hover:text-blue-600 px-4 py-3 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="font-label-md text-label-md">Logout</span>
</a>
</div>
</aside>
<div className="ml-64 min-h-screen flex flex-col">
{/*  TopAppBar  */}
<header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 w-full px-6 py-3 border-b border-slate-100 flex justify-between items-center shadow-sm">
<div className="flex items-center flex-1 max-w-xl">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-icon="search">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-full text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all" placeholder="Search patients, records, or appointments..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="w-10 h-10 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-50 transition-colors active:scale-90">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-50 transition-colors active:scale-90">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
<div className="flex items-center gap-3 pl-2">
<div className="text-right hidden sm:block">
<p className="font-label-md text-label-md text-slate-900 leading-none">Dr. Sarah Smith</p>
<p className="text-[11px] text-slate-500 mt-1">Chief Surgeon</p>
</div>
<img alt="Dr. Smith Profile" className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" data-alt="Professional portrait of a female doctor in white coat with a friendly expression, soft hospital environment background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWaOVy2qg6t-sxlec7r15YDlwVWCX4QbZLFTJaAzLBKbI3dMXavZcoNTWzUzGhfS5-RAgAD4OYO1hNqkrSsXK1XDt4uS0FWfTXsNUlNFZdBPWSc6gFVTxmueuklaHcgGTNbsm7FnFDpRLp-uLoxsKylxkXiGLAmxMZVm6SA80tlFEIFI9UIsF6ZFBlm0YTT5lWPm-GaftN9pLxMnhUZbUHmaMMSx1wcg1zl7dFLk3NMj_8QrqiAZ-C-jkO3vS6Bw4kHSr1uBQOGeL9"/>
</div>
</div>
</header>
{/*  Main Content Area  */}
<main className="p-8 flex-1">
{/*  Header Section  */}
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="font-headline-lg text-headline-lg text-text-primary">Medical Dashboard</h2>
<p className="text-text-secondary mt-1">Welcome back, Dr. Smith. Here is your overview for today.</p>
</div>
<button className="bg-primary text-white px-6 py-2.5 rounded-full flex items-center gap-2 hover:shadow-lg transition-all active:scale-95 font-label-md text-label-md">
<span className="material-symbols-outlined text-[20px]" data-icon="add_circle">add_circle</span>
                    Create New Record
                </button>
</div>
{/*  Stats Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="bg-white p-6 rounded-[16px] shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex items-center gap-5">
<div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
<span className="material-symbols-outlined text-[28px]" data-icon="calendar_today">calendar_today</span>
</div>
<div>
<p className="text-text-secondary text-label-sm font-label-sm">Today's Appointments</p>
<p className="text-2xl font-bold text-text-primary">12</p>
</div>
</div>
<div className="bg-white p-6 rounded-[16px] shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex items-center gap-5">
<div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[28px]" data-icon="group">group</span>
</div>
<div>
<p className="text-text-secondary text-label-sm font-label-sm">Total Patients</p>
<p className="text-2xl font-bold text-text-primary">1,284</p>
</div>
</div>
<div className="bg-white p-6 rounded-[16px] shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex items-center gap-5">
<div className="w-12 h-12 bg-warning/10 rounded-2xl flex items-center justify-center text-warning">
<span className="material-symbols-outlined text-[28px]" data-icon="star_half" data-weight="fill">star_half</span>
</div>
<div>
<p className="text-text-secondary text-label-sm font-label-sm">Average Rating</p>
<p className="text-2xl font-bold text-text-primary">4.9</p>
</div>
</div>
<div className="bg-white p-6 rounded-[16px] shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex items-center gap-5">
<div className="w-12 h-12 bg-danger/10 rounded-2xl flex items-center justify-center text-danger">
<span className="material-symbols-outlined text-[28px]" data-icon="rate_review">rate_review</span>
</div>
<div>
<p className="text-text-secondary text-label-sm font-label-sm">Pending Reviews</p>
<p className="text-2xl font-bold text-text-primary">8</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/*  Timeline Section  */}
<div className="lg:col-span-8">
<div className="bg-white rounded-[16px] border border-slate-100 shadow-sm overflow-hidden flex flex-col h-full">
<div className="p-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
<h3 className="font-headline-md text-headline-md text-text-primary">Today's Schedule</h3>
<button className="text-blue-600 text-label-md font-label-md flex items-center gap-1 hover:underline">
                                View Full Calendar <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<div className="p-6 space-y-6">
{/*  Timeline Entry 1  */}
<div className="relative flex gap-6">
<div className="flex flex-col items-center">
<span className="font-label-md text-label-md text-slate-400 whitespace-nowrap">09:00 AM</span>
<div className="w-[2px] flex-1 bg-slate-100 my-2"></div>
</div>
<div className="flex-1 pb-6">
<div className="p-4 bg-blue-50/50 rounded-xl border-l-4 border-blue-600 flex justify-between items-center">
<div className="flex items-center gap-4">
<img alt="Patient Avatar" className="w-12 h-12 rounded-full object-cover" data-alt="Portrait of a young male patient with a friendly smile, clean neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuaUDB1ToptMVhfWlW9ldDgQCWGwUQ3sO_80FaQXM8nPvmRoFdx_--HjxZK_fHbkaPLEKKYiXCWHHMH5_F8bVuPpH1pzdt5fUpfpaaIfJPOwwhdezAXPUlez5oVryZdhtDzCqMe8uoXbguNw3ltLmxfgGrVB3eHkd1oam7NQ8kkgVxwd3lS1Q1WJTdEBWRKzyuFfUAdske3bRR68Gv0lbi3MSJPi5tv-GeBLMjC3xzL96RNKMsrK-pyNhfVxDm7GdBFAiTri6dbrum"/>
<div>
<p className="font-label-md text-label-md text-text-primary leading-tight">Alexander Wright</p>
<p className="text-xs text-text-secondary">Routine Health Checkup</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">Confirmed</span>
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
</div>
</div>
</div>
{/*  Timeline Entry 2  */}
<div className="relative flex gap-6">
<div className="flex flex-col items-center">
<span className="font-label-md text-label-md text-slate-400 whitespace-nowrap">10:30 AM</span>
<div className="w-[2px] flex-1 bg-slate-100 my-2"></div>
</div>
<div className="flex-1 pb-6">
<div className="p-4 bg-slate-50 rounded-xl border-l-4 border-slate-300 flex justify-between items-center">
<div className="flex items-center gap-4">
<img alt="Patient Avatar" className="w-12 h-12 rounded-full object-cover" data-alt="Close up portrait of a mature woman with professional glasses and silver hair" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuenABKfamsfQ9NhCeRIJ4XhVhJDRJWg3F1sW6wbxtqDeKba9SsMfNLcCERFjSKs4L0i7klFeb7R3SgL5qO3hN8DyIZl5TsRl_K0npLerNmTA1__JeP5cdeWtGMUbzzaXWrcDeXabCJeHEAXKZKkZZ2JvWXcPxtqaXQ7CZC217nlQAfKTPMXy7tQ5GWDCj9vGyM-nwyaqWK78DJrljQtzvCAjZmfllreOtiu_92vuycsn3kj5P42lMT0gB9_o8ELZhPzKhXnWgXZxZ"/>
<div>
<p className="font-label-md text-label-md text-text-primary leading-tight">Elena Rodriguez</p>
<p className="text-xs text-text-secondary">Post-surgery Consultation</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="bg-warning/10 text-warning px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">Pending</span>
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
</div>
</div>
</div>
{/*  Timeline Entry 3  */}
<div className="relative flex gap-6">
<div className="flex flex-col items-center">
<span className="font-label-md text-label-md text-slate-400 whitespace-nowrap">12:00 PM</span>
<div className="w-[2px] flex-1 bg-slate-100 my-2"></div>
</div>
<div className="flex-1 pb-6">
<div className="p-4 bg-secondary/5 rounded-xl border-l-4 border-secondary flex justify-between items-center">
<div className="flex items-center gap-4">
<img alt="Patient Avatar" className="w-12 h-12 rounded-full object-cover" data-alt="Smiling teenage boy portrait, cheerful lighting, warm colors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVgSyGY1nLpx0lCqWLJ-1PFSbd-RGdEyGlEUsMwB2_K8lu7_GAErnZ4q13aG2Jec9u3J22_flA07Mx8thCyYNG8TFXajLKhI6V4et3DQOriiD3i5CA_wLVEBTgP46hfpHNEWFUbqWoYvD87xU2Ma532v5e9BG-9feDUOipPeIuA2pq1ctJlSJVyG48L6PA7rG6efWpsqq2fMVIPrG5CAQGxNYj6CvhrjgymbDrdD6K6IA3DknO8kU6NG97EROX0KoiDM4UuSrVeZfm"/>
<div>
<p className="font-label-md text-label-md text-text-primary leading-tight">Marcus Chen</p>
<p className="text-xs text-text-secondary">Orthopedic Evaluation</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">Completed</span>
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Recent Patient Records  */}
<div className="lg:col-span-4">
<div className="bg-white rounded-[16px] border border-slate-100 shadow-sm overflow-hidden flex flex-col h-full">
<div className="p-6 border-b border-slate-50 bg-slate-50/30">
<h3 className="font-headline-md text-headline-md text-text-primary">Recent Records</h3>
</div>
<div className="p-4 space-y-4">
<div className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined" data-icon="description">description</span>
</div>
<div>
<p className="font-label-md text-label-md text-text-primary group-hover:text-blue-700 transition-colors">Lab_Result_X82.pdf</p>
<p className="text-[11px] text-text-secondary">James Cooper • 2h ago</p>
</div>
</div>
<span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors" data-icon="download">download</span>
</div>
<div className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-tertiary-container/10 flex items-center justify-center text-tertiary-container">
<span className="material-symbols-outlined" data-icon="radiology">radiology</span>
</div>
<div>
<p className="font-label-md text-label-md text-text-primary group-hover:text-blue-700 transition-colors">Chest_XRay_Sarah.jpg</p>
<p className="text-[11px] text-text-secondary">Sarah Miller • 5h ago</p>
</div>
</div>
<span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors" data-icon="visibility">visibility</span>
</div>
<div className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-secondary-container/10 flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined" data-icon="prescriptions">prescriptions</span>
</div>
<div>
<p className="font-label-md text-label-md text-text-primary group-hover:text-blue-700 transition-colors">Refill_Order_09.doc</p>
<p className="text-[11px] text-text-secondary">Robert Frost • Yesterday</p>
</div>
</div>
<span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors" data-icon="print">print</span>
</div>
{/*  Empty Space Graphic  */}
<div className="mt-4 p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-primary text-white text-center relative overflow-hidden">
<div className="relative z-10">
<p className="font-label-md text-label-md mb-2">Cloud Storage</p>
<div className="w-full h-1.5 bg-white/20 rounded-full mb-3">
<div className="w-3/4 h-full bg-white rounded-full"></div>
</div>
<p className="text-[11px] opacity-80">75GB of 100GB used</p>
<button className="mt-4 w-full py-2 bg-white text-primary rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-opacity-90 transition-all">Upgrade Plan</button>
</div>
<div className="absolute -right-4 -bottom-4 opacity-10">
<span className="material-symbols-outlined text-[100px]" data-icon="cloud">cloud</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
