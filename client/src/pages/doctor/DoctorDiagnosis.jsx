import React from 'react';
import { Link } from 'react-router-dom';

export default function DoctorDiagnosis() {
  return (
    <>
      
{/*  SideNavBar  */}
<aside className="fixed left-0 top-0 h-screen w-64 border-r border-slate-200 bg-slate-50 flex flex-col py-6 z-50">
<div className="px-6 mb-10 flex items-center gap-3">
<div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>medical_services</span>
</div>
<div>
<h1 className="text-lg font-black tracking-tight text-blue-700">HealthCore</h1>
<p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Medical Suite</p>
</div>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 px-6 py-3 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-manrope text-sm">Dashboard</span>
</a>
<a className="flex items-center gap-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 px-6 py-3 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="event_available">event_available</span>
<span className="font-manrope text-sm">Appointments</span>
</a>
<a className="flex items-center gap-3 bg-blue-50 text-blue-700 border-r-4 border-blue-600 font-semibold px-6 py-3 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="medical_services">medical_services</span>
<span className="font-manrope text-sm">Diagnosis</span>
</a>
<a className="flex items-center gap-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 px-6 py-3 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="folder_shared">folder_shared</span>
<span className="font-manrope text-sm">Patient Records</span>
</a>
<a className="flex items-center gap-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 px-6 py-3 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="biotech">biotech</span>
<span className="font-manrope text-sm">Lab Results</span>
</a>
<a className="flex items-center gap-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 px-6 py-3 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="query_stats">query_stats</span>
<span className="font-manrope text-sm">Analytics</span>
</a>
</nav>
<div className="mt-auto pt-6 border-t border-slate-200">
<a className="flex items-center gap-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 px-6 py-3 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span>
<span className="font-manrope text-sm">Help Center</span>
</a>
<a className="flex items-center gap-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 px-6 py-3 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="font-manrope text-sm">Logout</span>
</a>
</div>
</aside>
<div className="ml-64 flex flex-col min-h-screen">
{/*  TopAppBar  */}
<header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-100 flex justify-between items-center w-full px-8 py-3 shadow-sm">
<div className="flex items-center gap-4 flex-1">
<div className="relative w-full max-w-md">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
<input className="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20" placeholder="Search patients or medical records..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<div className="h-8 w-px bg-slate-200 mx-2"></div>
<div className="flex items-center gap-3">
<div className="text-right">
<p className="font-manrope text-sm font-semibold text-slate-900">Dr. Smith</p>
<p className="font-manrope text-[11px] text-slate-500">Chief of Cardiology</p>
</div>
<img alt="Dr. Smith Profile" className="w-10 h-10 rounded-full object-cover border-2 border-primary/10" data-alt="professional portrait of a middle-aged male doctor with a kind expression wearing a white coat and stethoscope in a clean medical office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjFaJQJsRvVR5bYwd6fV3AfK897AyrX3FUunzRlUPtMEm50NeLTXHacpuvcYLANGj_48KE79hSoD1_QFgcCeQTzFlabAbJs5t9rCJ4eKyQ9XgkOyRchQfnBxzof5dgsvYIDB8nAyeHHqubAJ3yt9q-WkwXzdWNqSbw7xNC02rQb75tCn5jSp2yNQupaR8MF6gtFkHj5O5uAvRjb_k_T0gpAjiPkEyzfOTvkwHxQe1tjv4CQKTrj8I_hjQ6SKCW0-KeO6LTfkfFOm_X"/>
</div>
</div>
</header>
{/*  Main Content  */}
<main className="flex-1 p-8">
<div className="max-w-7xl mx-auto">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="font-headline-lg text-headline-lg text-text-primary">Diagnosis &amp; Prescription</h2>
<p className="font-body-md text-text-secondary">Create a new medical record for the current session.</p>
</div>
<div className="flex items-center gap-3">
<button className="px-6 py-2.5 rounded-full border border-primary text-primary font-semibold text-sm hover:bg-primary/5 transition-all">
                            Discard Draft
                        </button>
<button className="px-8 py-2.5 rounded-full bg-primary text-on-primary font-semibold text-sm shadow-md shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                            Save Record
                        </button>
</div>
</div>
<div className="grid grid-cols-12 gap-8 items-start">
{/*  Left Column: Patient Summary  */}
<section className="col-span-12 lg:col-span-4 space-y-6">
<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
<div className="flex items-center gap-4 mb-6">
<img alt="Patient Avatar" className="w-20 h-20 rounded-2xl object-cover" data-alt="close-up portrait of an elderly man with silver hair and gentle eyes, clean background, warm soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVV1dQ91I2WWKQUP5VjKOAhmDFu9O10Cmg4uej-CLkL_A-MMQW_oMeUedZd0BIK_GWry8rbYJRsu9c_PMn4j0KYxmQlRCgR7yFFXERW7Y09hmXW3W7UPdQm2Bs4kxylPWEEfifBvqNN4ym1iQSDmazKDSb9G4emJt6k1o_M6KbaL7-QtmdNcF8mCV80BMS1mAPXhD8CaSlcSMu63fDTseGjvVVu4KeNEy-7JI2Kyu_RaNhWwvhYgAO2jomekp0WcYIIpe3I9suJLAe"/>
<div>
<h3 className="font-headline-md text-headline-md text-text-primary">Robert Chen</h3>
<div className="flex items-center gap-2 mt-1">
<span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider">Patient ID: #8829</span>
<span className="text-slate-400 text-xs">•</span>
<span className="text-slate-500 text-sm font-medium">Male, 68 Years</span>
</div>
</div>
</div>
<div className="space-y-4 border-t border-slate-50 pt-6">
<div className="flex justify-between items-center">
<span className="text-slate-500 text-sm font-medium">Blood Type</span>
<span className="text-text-primary font-bold">A+ Positive</span>
</div>
<div className="flex justify-between items-center">
<span className="text-slate-500 text-sm font-medium">Weight/Height</span>
<span className="text-text-primary font-bold">78kg / 176cm</span>
</div>
<div className="flex justify-between items-center">
<span className="text-slate-500 text-sm font-medium">Last Visit</span>
<span className="text-text-primary font-bold">Oct 12, 2023</span>
</div>
</div>
</div>
{/*  Patient History Card  */}
<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
<h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2 uppercase tracking-wider">
<span className="material-symbols-outlined text-blue-600 text-lg">history</span>
                                Medical History
                            </h4>
<div className="space-y-4">
<div className="p-3 bg-slate-50 rounded-xl border-l-4 border-warning">
<p className="text-xs font-bold text-slate-400 mb-1">CHRONIC CONDITION</p>
<p className="text-sm font-semibold text-slate-800">Type 2 Diabetes Mellitus</p>
<p className="text-[11px] text-slate-500 mt-1">Diagnosed 2015 • Under Metformin</p>
</div>
<div className="p-3 bg-slate-50 rounded-xl border-l-4 border-danger">
<p className="text-xs font-bold text-slate-400 mb-1">ALLERGIES</p>
<p className="text-sm font-semibold text-slate-800">Penicillin, Peanuts</p>
</div>
<div className="p-3 bg-slate-50 rounded-xl border-l-4 border-secondary">
<p className="text-xs font-bold text-slate-400 mb-1">RECENT SURGERY</p>
<p className="text-sm font-semibold text-slate-800">Cataract Surgery (Right Eye)</p>
<p className="text-[11px] text-slate-500 mt-1">July 2023 • Successful recovery</p>
</div>
</div>
<button className="w-full mt-6 py-2 text-primary font-bold text-xs uppercase tracking-widest hover:bg-primary/5 rounded-lg transition-colors">
                                View Full Records
                            </button>
</div>
</section>
{/*  Right Column: Form  */}
<section className="col-span-12 lg:col-span-8 space-y-6">
<div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
<form className="space-y-8">
{/*  Diagnosis Section  */}
<div className="space-y-6">
<div className="flex items-center gap-2 pb-2 border-b border-slate-50">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>analytics</span>
<h3 className="font-headline-md text-headline-md text-text-primary">Clinical Assessment</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="md:col-span-2">
<label className="block text-sm font-bold text-slate-700 mb-2">Primary Diagnosis</label>
<textarea className="w-full rounded-xl border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm" placeholder="Enter clinical findings and final diagnosis..." rows="4"></textarea>
</div>
<div className="md:col-span-2">
<label className="block text-sm font-bold text-slate-700 mb-2">Tests Required</label>
<textarea className="w-full rounded-xl border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm" placeholder="List required lab tests, imaging, or screenings..." rows="3"></textarea>
</div>
</div>
</div>
{/*  Prescription Section  */}
<div className="space-y-6">
<div className="flex items-center justify-between pb-2 border-b border-slate-50">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>prescriptions</span>
<h3 className="font-headline-md text-headline-md text-text-primary">Prescription</h3>
</div>
<button className="flex items-center gap-1 text-sm font-bold text-primary hover:bg-primary/5 px-3 py-1.5 rounded-lg transition-colors" type="button">
<span className="material-symbols-outlined text-lg">add_circle</span>
                                            Add Medicine
                                        </button>
</div>
<div className="space-y-3">
{/*  Row 1  */}
<div className="grid grid-cols-12 gap-4 items-end bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
<div className="col-span-12 md:col-span-5">
<label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Medicine Name</label>
<input className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 text-sm" type="text" value="Metformin 500mg"/>
</div>
<div className="col-span-12 md:col-span-5">
<label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Dosage &amp; Frequency</label>
<input className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 text-sm" type="text" value="1 tablet twice daily after meals"/>
</div>
<div className="col-span-12 md:col-span-2 flex justify-end">
<button className="w-10 h-10 rounded-full flex items-center justify-center text-danger hover:bg-danger/5 transition-colors" type="button">
<span className="material-symbols-outlined">delete</span>
</button>
</div>
</div>
{/*  Row 2  */}
<div className="grid grid-cols-12 gap-4 items-end bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
<div className="col-span-12 md:col-span-5">
<label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Medicine Name</label>
<input className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 text-sm" type="text" value="Lisinopril 10mg"/>
</div>
<div className="col-span-12 md:col-span-5">
<label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Dosage &amp; Frequency</label>
<input className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 text-sm" type="text" value="1 tablet once daily in the morning"/>
</div>
<div className="col-span-12 md:col-span-2 flex justify-end">
<button className="w-10 h-10 rounded-full flex items-center justify-center text-danger hover:bg-danger/5 transition-colors" type="button">
<span className="material-symbols-outlined">delete</span>
</button>
</div>
</div>
{/*  Row 3 (Empty)  */}
<div className="grid grid-cols-12 gap-4 items-end border border-dashed border-slate-300 p-4 rounded-2xl">
<div className="col-span-12 md:col-span-5">
<label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Medicine Name</label>
<input className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 text-sm" placeholder="Enter medicine..." type="text"/>
</div>
<div className="col-span-12 md:col-span-5">
<label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Dosage &amp; Frequency</label>
<input className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 text-sm" placeholder="e.g. 2 times daily..." type="text"/>
</div>
<div className="col-span-12 md:col-span-2 flex justify-end">
<button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 transition-colors" type="button">
<span className="material-symbols-outlined">delete</span>
</button>
</div>
</div>
</div>
</div>
{/*  Footer Actions  */}
<div className="pt-8 border-t border-slate-50 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<input className="rounded border-slate-300 text-primary focus:ring-primary/20" id="urgent" type="checkbox"/>
<label className="text-sm font-semibold text-slate-700" htmlFor="urgent">Mark as Urgent</label>
</div>
<div className="flex items-center gap-2">
<input className="rounded border-slate-300 text-primary focus:ring-primary/20" id="lab-ref" type="checkbox"/>
<label className="text-sm font-semibold text-slate-700" htmlFor="lab-ref">Notify Lab Directly</label>
</div>
</div>
<div className="flex items-center gap-3">
<button className="px-6 py-2.5 rounded-full border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50 transition-all" type="button">
                                            Print Prescription
                                        </button>
<button className="px-10 py-2.5 rounded-full bg-primary text-on-primary font-bold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all" type="button">
                                            Save Record
                                        </button>
</div>
</div>
</form>
</div>
{/*  Quick Summary Grid (Glassmorphism Accent)  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-white/40 backdrop-blur-sm border border-white p-5 rounded-2xl flex flex-col items-center text-center">
<span className="material-symbols-outlined text-blue-500 mb-2 bg-blue-50 p-2 rounded-full">history_edu</span>
<p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Scripts</p>
<p className="text-xl font-extrabold text-slate-900">12</p>
</div>
<div className="bg-white/40 backdrop-blur-sm border border-white p-5 rounded-2xl flex flex-col items-center text-center">
<span className="material-symbols-outlined text-teal-500 mb-2 bg-teal-50 p-2 rounded-full">verified_user</span>
<p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Vitals Status</p>
<p className="text-xl font-extrabold text-teal-600">Stable</p>
</div>
<div className="bg-white/40 backdrop-blur-sm border border-white p-5 rounded-2xl flex flex-col items-center text-center">
<span className="material-symbols-outlined text-purple-500 mb-2 bg-purple-50 p-2 rounded-full">calendar_month</span>
<p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Next Follow-up</p>
<p className="text-xl font-extrabold text-slate-900">15 Days</p>
</div>
</div>
</section>
</div>
</div>
</main>
</div>

    </>
  );
}
