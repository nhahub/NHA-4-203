import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16">
<div className="flex items-center">
<div className="flex-shrink-0 flex items-center gap-2 mr-8">
<span className="text-xl font-bold text-blue-600 tracking-tight">EasyCare</span>
</div>
<div className="hidden lg:flex lg:space-x-4">
<a className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors border-b-2 border-transparent hover:border-blue-600" href="#">
            Home
          </a>
<a className="inline-flex items-center px-1 pt-1 text-sm font-bold text-blue-600 border-b-2 border-blue-600" href="#">
            Dashboard
          </a>
<a className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors border-b-2 border-transparent hover:border-blue-600" href="#">
            Find Doctors
          </a>
<a className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors border-b-2 border-transparent hover:border-blue-600" href="#">
            Appointments
          </a>
<a className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors border-b-2 border-transparent hover:border-blue-600" href="#">
            Records
          </a>
<a className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors border-b-2 border-transparent hover:border-blue-600" href="#">
            Upload
          </a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-4 border-r border-slate-200 pr-4 mr-2">
<button className="p-2 text-slate-500 hover:text-blue-600 rounded-full transition-colors">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<button className="p-2 text-slate-500 hover:text-blue-600 rounded-full transition-colors">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
</div>
<div className="flex items-center gap-3">
<div className="text-right hidden sm:block">
<p className="text-xs font-bold text-on-surface">Ahmed Khalil</p>
<p className="text-[10px] text-slate-400 font-label-sm uppercase">#EC-9842</p>
</div>
<div className="relative group">
<img alt="Profile" className="h-9 w-9 rounded-full border border-primary/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLo1anK3_lxg9iqy1ZwQO-hmVg1aG1J5l5HUE3Zz_u07z37m8HXWrvZNGXFAEfqC568gcGCFbw0Mzzeeuisbrg0L6omXIsgoJM0vUpL5SVpGaFYcoLxLUSBLYpEPJRELiQyI2TZwbfCsa47kxQ8B3MHVgDm1P3Y9myZ8p6lh4tfalK7J1mLUN-JdaXyRTv9eVVYJTGclTTQL8NMXsBWzKhhVchjD5gXzhgM_he_Hia7bJuNGyeD5vjPjwiFvEchz5v-Dcuz794sDcZ"/>
<div className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all py-2">
<a className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-50" href="#"><span className="material-symbols-outlined text-sm mr-2">person</span> My Profile</a>
<a className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-50" href="#"><span className="material-symbols-outlined text-sm mr-2">settings</span> Settings</a>
<div className="border-t border-slate-50 my-1"></div>
<a className="flex items-center px-4 py-2 text-sm text-danger hover:bg-red-50" href="#"><span className="material-symbols-outlined text-sm mr-2">logout</span> Logout</a>
</div>
</div>
</div>
<button className="lg:hidden p-2 text-slate-500">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
</div>
</div>
</nav>
<main className="p-8 min-h-screen">
<div className="max-w-6xl mx-auto space-y-8">
<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center gap-5 transition-all hover:scale-[1.02] hover:shadow-md cursor-pointer">
<div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
<span className="material-symbols-outlined text-3xl" data-icon="calendar_month" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>calendar_month</span>
</div>
<div>
<p className="text-slate-500 text-label-md font-medium">Upcoming Appointments</p>
<h3 className="text-3xl font-bold text-on-surface mt-1">2</h3>
</div>
</div>
<div className="bg-white p-6 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center gap-5 transition-all hover:scale-[1.02] hover:shadow-md cursor-pointer">
<div className="h-14 w-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
<span className="material-symbols-outlined text-3xl" data-icon="description" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>description</span>
</div>
<div>
<p className="text-slate-500 text-label-md font-medium">Medical Records</p>
<h3 className="text-3xl font-bold text-on-surface mt-1">5</h3>
</div>
</div>
<div className="bg-white p-6 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center gap-5 transition-all hover:scale-[1.02] hover:shadow-md cursor-pointer">
<div className="h-14 w-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600">
<span className="material-symbols-outlined text-3xl" data-icon="upload_file" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>upload_file</span>
</div>
<div>
<p className="text-slate-500 text-label-md font-medium">Uploaded Results</p>
<h3 className="text-3xl font-bold text-on-surface mt-1">3</h3>
</div>
</div>
</section>
<section className="space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-xl font-bold text-on-surface">Upcoming Appointments</h2>
<a className="text-blue-600 font-label-md hover:underline" href="#">See all appointments</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="bg-white p-6 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col md:flex-row md:items-center gap-6 group hover:border-blue-200 transition-colors">
<img alt="Dr. Sarah Johnson" className="h-20 w-20 rounded-2xl object-cover ring-4 ring-slate-50 group-hover:ring-blue-50 transition-all" data-alt="professional female doctor in white coat with stethoscope, confident expression, soft clinic background focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0yMdaJvVgXGJd8PclLxHd_Unm4KdVpdupL7YhbmmuSAjr5TUgiOFdu7iN3eEH0sTLX5-TkgDPLGGYiQwvj6SUlzcHuMICmLEFbas2f6ORaMktF4JqHJwYDT5BY9zx8aZ66NlEqatBeNAvGMVmAWUW1H9EltDArGU8QhFLBBi-0DgrMCYZidpAu8Qmu2DNmNUzHrUAmth94Fkg8PHu8kwhiVGuz9FUSLOzzJbASanjjNeGX5vJPdkQDP2jOD0HvRKzSYfhOy7c8cTf"/>
<div className="flex-1 space-y-1">
<div className="flex items-center gap-2">
<span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Confirmed</span>
<span className="text-slate-400 text-xs">• General Physician</span>
</div>
<h4 className="text-lg font-bold text-on-surface">Dr. Sarah Johnson</h4>
<div className="flex items-center gap-4 text-slate-500 text-sm">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-base" data-icon="calendar_today">calendar_today</span>
<span>Oct 24, 2023</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-base" data-icon="schedule">schedule</span>
<span>09:30 AM</span>
</div>
</div>
</div>
<button className="bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-label-md px-6 py-2.5 rounded-full transition-all">View Details</button>
</div>
<div className="bg-white p-6 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col md:flex-row md:items-center gap-6 group hover:border-blue-200 transition-colors">
<img alt="Dr. James Wilson" className="h-20 w-20 rounded-2xl object-cover ring-4 ring-slate-50 group-hover:ring-blue-50 transition-all" data-alt="male cardiologist in blue medical scrubs smiling, modern bright hospital environment background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHoIKNKEd9GB3OA14sxF46V6aOXhHRwq5hDuDVI6eUUk8sCli7We258LGq-GQSCgnX7v-TqW7AkZ5gxxE3dQTDkfLUntsND2FOL4NteCc-DUT7FcI89SxHuKHEb8MH2GVyX5B_1tiHa2Yzr-8nsVzDZIF5il4s6AOimD8QapMHcaBWyUwvNzwq51VmXaeOAEySwJxv_Jtg5SwHmcwAnrHDKa-KahNn9IBqT2ADdLqHOQa5QIJOAdB7mHNk2bFiSwfbg4xD67YcWuT3"/>
<div className="flex-1 space-y-1">
<div className="flex items-center gap-2">
<span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Confirmed</span>
<span className="text-slate-400 text-xs">• Cardiologist</span>
</div>
<h4 className="text-lg font-bold text-on-surface">Dr. James Wilson</h4>
<div className="flex items-center gap-4 text-slate-500 text-sm">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-base" data-icon="calendar_today">calendar_today</span>
<span>Oct 28, 2023</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-base" data-icon="schedule">schedule</span>
<span>02:15 PM</span>
</div>
</div>
</div>
<button className="bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-label-md px-6 py-2.5 rounded-full transition-all">View Details</button>
</div>
</div>
</section>
<section className="space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-xl font-bold text-on-surface">Recent Medical Records</h2>
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="more_horiz">more_horiz</span>
</button>
</div>
<div className="bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-slate-50">
<th className="px-6 py-4 text-label-sm text-slate-400 uppercase">Date</th>
<th className="px-6 py-4 text-label-sm text-slate-400 uppercase">Doctor</th>
<th className="px-6 py-4 text-label-sm text-slate-400 uppercase">Diagnosis Summary</th>
<th className="px-6 py-4 text-label-sm text-slate-400 uppercase text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-50">
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-5">
<p className="text-on-surface font-medium">Sep 12, 2023</p>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">SJ</div>
<p className="text-on-surface font-semibold">Dr. Sarah Johnson</p>
</div>
</td>
<td className="px-6 py-5 text-slate-500 text-body-md">
                                    Routine annual health checkup, Blood pressure stable.
                                </td>
<td className="px-6 py-5 text-right">
<button className="text-primary hover:bg-primary-fixed p-2 rounded-lg transition-colors">
<span className="material-symbols-outlined" data-icon="download">download</span>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-5">
<p className="text-on-surface font-medium">Aug 05, 2023</p>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-xs font-bold">JW</div>
<p className="text-on-surface font-semibold">Dr. James Wilson</p>
</div>
</td>
<td className="px-6 py-5 text-slate-500 text-body-md">
                                    ECG Report - Normal sinus rhythm, minor palpitations noted.
                                </td>
<td className="px-6 py-5 text-right">
<button className="text-primary hover:bg-primary-fixed p-2 rounded-lg transition-colors">
<span className="material-symbols-outlined" data-icon="download">download</span>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-5">
<p className="text-on-surface font-medium">Jul 18, 2023</p>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-xs font-bold">ML</div>
<p className="text-on-surface font-semibold">Dr. Michael Lee</p>
</div>
</td>
<td className="px-6 py-5 text-slate-500 text-body-md">
                                    Dermatology consultation for seasonal skin allergy.
                                </td>
<td className="px-6 py-5 text-right">
<button className="text-primary hover:bg-primary-fixed p-2 rounded-lg transition-colors">
<span className="material-symbols-outlined" data-icon="download">download</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
<section className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
<div className="relative z-10">
<h3 className="text-xl font-bold text-on-surface mb-2">Need a Specialist?</h3>
<p className="text-slate-500 mb-6 max-w-xs">Browse through our network of over 500+ verified doctors across all specialties.</p>
<button className="bg-primary text-white px-8 py-3 rounded-full font-label-md flex items-center gap-2 group-hover:scale-105 transition-transform">
                            Find Now <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<div className="absolute -right-8 -bottom-8 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-[180px]" data-icon="medical_services">medical_services</span>
</div>
</div>
<div className="bg-surface-bright p-8 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center space-y-4 hover:border-primary/40 transition-colors cursor-pointer">
<div className="h-16 w-16 bg-white rounded-full shadow-sm flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl" data-icon="cloud_upload">cloud_upload</span>
</div>
<div>
<h4 className="font-bold text-on-surface">Upload Lab Results</h4>
<p className="text-slate-500 text-sm">Drag and drop or browse files (PDF, JPG)</p>
</div>
</div>
</section>
</div>
</main>

    </>
  );
}
