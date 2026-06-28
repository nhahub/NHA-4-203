import React from 'react';
import { Link } from 'react-router-dom';

export default function DoctorAppointments() {
  return (
    <>
      
{/*  SideNavBar (Execution from JSON)  */}
<aside className="fixed left-0 top-0 h-screen w-64 border-r border-slate-200 bg-slate-50 flex flex-col py-6 z-50">
<div className="px-6 mb-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center text-white">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>medical_services</span>
</div>
<div>
<h1 className="text-lg font-black tracking-tight text-blue-700">HealthCore</h1>
<p className="text-xs text-slate-500 font-medium">Medical Suite</p>
</div>
</div>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 px-4 py-3 transition-all" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-manrope text-sm">Dashboard</span>
</a>
<a className="flex items-center gap-3 bg-blue-50 text-blue-700 border-r-4 border-blue-600 font-semibold px-4 py-3" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>event_available</span>
<span className="font-manrope text-sm">Appointments</span>
</a>
<a className="flex items-center gap-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 px-4 py-3 transition-all" href="#">
<span className="material-symbols-outlined">medical_services</span>
<span className="font-manrope text-sm">Diagnosis</span>
</a>
<a className="flex items-center gap-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 px-4 py-3 transition-all" href="#">
<span className="material-symbols-outlined">folder_shared</span>
<span className="font-manrope text-sm">Patient Records</span>
</a>
<a className="flex items-center gap-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 px-4 py-3 transition-all" href="#">
<span className="material-symbols-outlined">biotech</span>
<span className="font-manrope text-sm">Lab Results</span>
</a>
<a className="flex items-center gap-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 px-4 py-3 transition-all" href="#">
<span className="material-symbols-outlined">query_stats</span>
<span className="font-manrope text-sm">Analytics</span>
</a>
</nav>
<div className="mt-auto border-t border-slate-200 pt-4 space-y-1">
<a className="flex items-center gap-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 px-4 py-3 transition-all" href="#">
<span className="material-symbols-outlined">help</span>
<span className="font-manrope text-sm">Help Center</span>
</a>
<a className="flex items-center gap-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 px-4 py-3 transition-all" href="#">
<span className="material-symbols-outlined">logout</span>
<span className="font-manrope text-sm">Logout</span>
</a>
</div>
</aside>
{/*  Main Content Area  */}
<main className="ml-64 min-h-screen">
{/*  TopAppBar (Execution from JSON)  */}
<header className="flex justify-between items-center w-full px-6 py-3 z-40 bg-white/80 backdrop-blur-md sticky top-0 border-b border-slate-100 shadow-sm">
<div className="flex items-center gap-4 flex-1">
<div className="relative max-w-md w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input className="w-full bg-slate-50 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500" placeholder="Search patients, appointments..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-4">
<button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors">
<span className="material-symbols-outlined">settings</span>
</button>
</div>
<div className="h-8 w-[1px] bg-slate-200"></div>
<div className="flex items-center gap-3">
<div className="text-right">
<p className="font-manrope text-sm font-semibold text-blue-700">Dr. Smith</p>
<p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Cardiologist</p>
</div>
<img alt="Dr. Smith Profile" className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" data-alt="Professional headshot of a smiling middle-aged male doctor in a white coat with a clean blue clinical background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJuQjnlcE8eiM041JbMDs3X8duuJBAGzJa-LBKqa8B9jZeXh2wKAP7eghkCknNE3MtTnR5-Cn0ul2RY5qeXBH__IUFljLPo5F07PH5DXDBykrtz5NWZF1Lulm_1_6zcXleJvtV3zbnwkGlTKgzLcpQGGlw1ldnPtEAlnHPA_e7loBGdYKhMq9A4Hk8ou3hofeJ9dPCJ5ysR-iXAR2nwJRuRZZM3ynuPKseUbZNEQWpcr9q7CPWKRbZuowB-_N9-8sEuKJROW7_opn1"/>
</div>
</div>
</header>
{/*  Page Header & Tabs  */}
<div className="px-8 py-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
<div>
<h2 className="font-headline-lg text-headline-lg text-text-primary mb-2">Doctor Appointments</h2>
<p className="font-body-md text-body-md text-text-secondary">Manage your daily schedule and patient clinical records.</p>
</div>
{/*  Custom Tabs Navigation  */}
<div className="inline-flex bg-surface-container-low p-1 rounded-full border border-slate-200">
<button className="px-6 py-2 rounded-full font-label-md text-label-md bg-white shadow-sm text-primary transition-all">Today</button>
<button className="px-6 py-2 rounded-full font-label-md text-label-md text-slate-500 hover:text-primary transition-all">Upcoming</button>
<button className="px-6 py-2 rounded-full font-label-md text-label-md text-slate-500 hover:text-primary transition-all">Past</button>
</div>
</div>
{/*  Search and Filter Bar  */}
<div className="glass-card rounded-xl p-4 border border-slate-100 shadow-sm flex flex-wrap gap-4 mb-8">
<div className="flex-1 min-w-[200px]">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">filter_list</span>
<input className="w-full bg-white border border-slate-200 rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Filter by patient name..." type="text"/>
</div>
</div>
<select className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm text-slate-600 focus:ring-1 focus:ring-blue-500 outline-none">
<option>All Status</option>
<option>Confirmed</option>
<option>Pending</option>
</select>
<select className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm text-slate-600 focus:ring-1 focus:ring-blue-500 outline-none">
<option>Sort by: Time (Soonest)</option>
<option>Sort by: Age</option>
<option>Sort by: Name</option>
</select>
</div>
{/*  Appointment List (Horizontal Cards)  */}
<div className="space-y-4">
{/*  Appointment Card 1  */}
<div className="glass-card rounded-2xl border border-slate-100 p-5 flex flex-col lg:flex-row lg:items-center gap-6 hover:shadow-md transition-shadow">
<div className="flex items-center gap-4 flex-1">
<img alt="Patient Avatar" className="w-16 h-16 rounded-full object-cover" data-alt="Close up portrait of a young woman with a friendly expression in soft natural daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzlp6vxHdk-nHmPnXg5lrnmoU3-USHyPaMYQIzCuTrQLK3H1l927444wWINVGMZArP9XfGUvhDCxJ36roHpgJviglwy9ZIMfio_btWpjylB6AolSjESJDhF73TNdX5Kba72EjU7sg3vpPFC0AYm7r4OXrfNh8EF_kCTYYNAGCrxabGRNq_Hmpg8cXPo67TPay52Z9F2LtRPLkUgkDRO66EPjbFY2l7nRBF7Vpdp0JLf657sFsjnoTGg_ECAdKBqb9YWR8e8N_upVro"/>
<div>
<h3 className="font-manrope font-bold text-lg text-slate-800">Sarah Jenkins</h3>
<div className="flex items-center gap-3 mt-1">
<span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-semibold">28 years</span>
<span className="text-xs text-slate-400 flex items-center gap-1">
<span className="material-symbols-outlined text-xs">history</span>
                                    Follow-up Visit
                                </span>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-8 px-6 lg:border-x border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
<span className="material-symbols-outlined">schedule</span>
</div>
<div>
<p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Time</p>
<p className="font-manrope text-sm font-bold text-slate-700">09:30 AM</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-secondary-fixed/20 flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
</div>
<div>
<p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Status</p>
<p className="font-manrope text-sm font-bold text-on-secondary-container">Confirmed</p>
</div>
</div>
</div>
<div className="flex flex-wrap gap-2 lg:ml-auto">
<button className="px-4 py-2 rounded-full border border-slate-200 text-slate-600 font-label-md text-label-md hover:bg-slate-50 transition-colors">View Record</button>
<button className="px-4 py-2 rounded-full border border-blue-200 text-blue-600 font-label-md text-label-md hover:bg-blue-50 transition-colors">Add Diagnosis</button>
<button className="px-6 py-2 rounded-full bg-primary text-white font-label-md text-label-md hover:bg-blue-700 transition-colors shadow-sm">Mark Complete</button>
</div>
</div>
{/*  Appointment Card 2  */}
<div className="glass-card rounded-2xl border border-slate-100 p-5 flex flex-col lg:flex-row lg:items-center gap-6 hover:shadow-md transition-shadow">
<div className="flex items-center gap-4 flex-1">
<img alt="Patient Avatar" className="w-16 h-16 rounded-full object-cover" data-alt="Portrait of an elderly man with a warm smile and spectacles, warm indoor lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbh7htPXcJem3eP6rLnxejZfPvv3wUeY8Qs_0jP5g8LDGuRM9LdsJBq8_2z_-mXxfDWAJbjj4eqViERBOebC4y82edfgCzU5Yq4XT9Pn4ayTSOx7GkuFY5et4XuXrmIGCugO6OLswl_3B9vQQsaWdiXleJ1GYSeRspdMYKi3bXaNXH6MTRYEWq4ohoXiQQyq9187xG5iv8F6xFfJ9poVlppMCB9LpOyjjU9uGvm-9N352zZKT2l4tt_x0Am2D67jXTO83oDVDD86C6"/>
<div>
<h3 className="font-manrope font-bold text-lg text-slate-800">Robert Miller</h3>
<div className="flex items-center gap-3 mt-1">
<span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-semibold">65 years</span>
<span className="text-xs text-slate-400 flex items-center gap-1">
<span className="material-symbols-outlined text-xs">biotech</span>
                                    Lab Review
                                </span>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-8 px-6 lg:border-x border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
<span className="material-symbols-outlined">schedule</span>
</div>
<div>
<p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Time</p>
<p className="font-manrope text-sm font-bold text-slate-700">10:15 AM</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center text-warning">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>pending</span>
</div>
<div>
<p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Status</p>
<p className="font-manrope text-sm font-bold text-warning">Pending</p>
</div>
</div>
</div>
<div className="flex flex-wrap gap-2 lg:ml-auto">
<button className="px-4 py-2 rounded-full border border-slate-200 text-slate-600 font-label-md text-label-md hover:bg-slate-50 transition-colors">View Record</button>
<button className="px-4 py-2 rounded-full border border-blue-200 text-blue-600 font-label-md text-label-md hover:bg-blue-50 transition-colors">Add Diagnosis</button>
<button className="px-6 py-2 rounded-full bg-primary text-white font-label-md text-label-md hover:bg-blue-700 transition-colors shadow-sm">Mark Complete</button>
</div>
</div>
{/*  Appointment Card 3  */}
<div className="glass-card rounded-2xl border border-slate-100 p-5 flex flex-col lg:flex-row lg:items-center gap-6 hover:shadow-md transition-shadow">
<div className="flex items-center gap-4 flex-1">
<img alt="Patient Avatar" className="w-16 h-16 rounded-full object-cover" data-alt="Portrait of a young Black woman with curly hair, wearing a casual shirt, neutral bright background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhCJpywMhEbXD7Cce4oj-8D8u9JQfueMs0e1G2S1q_M3eMqGoL6yg5IGCf9bY1fLUw98onk-ewJZW7O4ts5Sb5TrLxS4MY3RmmQEBeXLU_94i3PQJgjOAsOMmAHDw_hUUDXkCZjXAw5wP4j300jfpxDn4AqhTvAz2mrIgVKm-hsT9jgkKoCIKc5gA2oEzZ4VoFzFWNPtTcj8tX81ru5Zqu2rK9_zCy3BtgmGQ2X-IpHbSyhJwC710OU_nuMVkpde-18uEcmxqXVFni"/>
<div>
<h3 className="font-manrope font-bold text-lg text-slate-800">Elena Rodriguez</h3>
<div className="flex items-center gap-3 mt-1">
<span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-semibold">32 years</span>
<span className="text-xs text-slate-400 flex items-center gap-1">
<span className="material-symbols-outlined text-xs">emergency</span>
                                    New Consultation
                                </span>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-8 px-6 lg:border-x border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
<span className="material-symbols-outlined">schedule</span>
</div>
<div>
<p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Time</p>
<p className="font-manrope text-sm font-bold text-slate-700">11:00 AM</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-secondary-fixed/20 flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
</div>
<div>
<p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Status</p>
<p className="font-manrope text-sm font-bold text-on-secondary-container">Confirmed</p>
</div>
</div>
</div>
<div className="flex flex-wrap gap-2 lg:ml-auto">
<button className="px-4 py-2 rounded-full border border-slate-200 text-slate-600 font-label-md text-label-md hover:bg-slate-50 transition-colors">View Record</button>
<button className="px-4 py-2 rounded-full border border-blue-200 text-blue-600 font-label-md text-label-md hover:bg-blue-50 transition-colors">Add Diagnosis</button>
<button className="px-6 py-2 rounded-full bg-primary text-white font-label-md text-label-md hover:bg-blue-700 transition-colors shadow-sm">Mark Complete</button>
</div>
</div>
{/*  Appointment Card 4  */}
<div className="glass-card rounded-2xl border border-slate-100 p-5 flex flex-col lg:flex-row lg:items-center gap-6 hover:shadow-md transition-shadow">
<div className="flex items-center gap-4 flex-1">
<img alt="Patient Avatar" className="w-16 h-16 rounded-full object-cover" data-alt="Portrait of a handsome man with beard looking at camera, urban blurred background, soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3199QpbFd7Ffg5DCxlNy7QN5YdinUA07nDoeIWRCb-6CBClgjQco6d0XMfPKvVCL3cvXTyuGeQQN_44oYKE4ryPy0G88H3CS6zFP-TTuqIjmQ_K04X4NOQ5YU-VrmSYrcQuIdJm-hUWAon0zHM6DCg7DTKNeTAcFVgzphh13Zacx6Qmp5NM5xBiXaVrUqlEFIs1tHz7Hph2LgX8HVts7yTspbqT9he7RqkM6fPXREFELzVKIx26Gqm3jX8Q4bF8oYKtEk2SGVZ1zF"/>
<div>
<h3 className="font-manrope font-bold text-lg text-slate-800">David Chen</h3>
<div className="flex items-center gap-3 mt-1">
<span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-semibold">45 years</span>
<span className="text-xs text-slate-400 flex items-center gap-1">
<span className="material-symbols-outlined text-xs">ecg</span>
                                    Stress Test
                                </span>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-8 px-6 lg:border-x border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
<span className="material-symbols-outlined">schedule</span>
</div>
<div>
<p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Time</p>
<p className="font-manrope text-sm font-bold text-slate-700">01:30 PM</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-secondary-fixed/20 flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
</div>
<div>
<p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Status</p>
<p className="font-manrope text-sm font-bold text-on-secondary-container">Confirmed</p>
</div>
</div>
</div>
<div className="flex flex-wrap gap-2 lg:ml-auto">
<button className="px-4 py-2 rounded-full border border-slate-200 text-slate-600 font-label-md text-label-md hover:bg-slate-50 transition-colors">View Record</button>
<button className="px-4 py-2 rounded-full border border-blue-200 text-blue-600 font-label-md text-label-md hover:bg-blue-50 transition-colors">Add Diagnosis</button>
<button className="px-6 py-2 rounded-full bg-primary text-white font-label-md text-label-md hover:bg-blue-700 transition-colors shadow-sm">Mark Complete</button>
</div>
</div>
</div>
</div>
</main>
{/*  FAB for New Appointment (Contextual on Dashboard/Home)  */}
<button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all z-50">
<span className="material-symbols-outlined text-3xl">add</span>
</button>

    </>
  );
}
