import React from 'react';
import { Link } from 'react-router-dom';

export default function DoctorResults() {
  return (
    <>
      
{/*  SideNavBar  */}
<aside className="fixed left-0 top-0 h-screen w-64 border-r border-slate-200 bg-slate-50 flex flex-col py-6 z-50">
<div className="px-6 mb-10 flex items-center gap-3">
<div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-on-primary-container">
<span className="material-symbols-outlined">medical_services</span>
</div>
<div>
<h1 className="text-lg font-black tracking-tight text-blue-700">HealthCore</h1>
<p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Medical Suite</p>
</div>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 text-slate-600 hover:bg-blue-50/50 px-6 py-3 transition-all" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
<a className="flex items-center gap-3 text-slate-600 hover:bg-blue-50/50 px-6 py-3 transition-all" href="#">
<span className="material-symbols-outlined">event_available</span>
<span className="font-label-md text-label-md">Appointments</span>
</a>
<a className="flex items-center gap-3 text-slate-600 hover:bg-blue-50/50 px-6 py-3 transition-all" href="#">
<span className="material-symbols-outlined">medical_services</span>
<span className="font-label-md text-label-md">Diagnosis</span>
</a>
<a className="flex items-center gap-3 text-slate-600 hover:bg-blue-50/50 px-6 py-3 transition-all" href="#">
<span className="material-symbols-outlined">folder_shared</span>
<span className="font-label-md text-label-md">Patient Records</span>
</a>
<a className="flex items-center gap-3 bg-blue-50 text-blue-700 border-r-4 border-blue-600 font-semibold px-6 py-3 transition-all" href="#">
<span className="material-symbols-outlined">biotech</span>
<span className="font-label-md text-label-md">Lab Results</span>
</a>
<a className="flex items-center gap-3 text-slate-600 hover:bg-blue-50/50 px-6 py-3 transition-all" href="#">
<span className="material-symbols-outlined">query_stats</span>
<span className="font-label-md text-label-md">Analytics</span>
</a>
</nav>
<div className="mt-auto px-6 space-y-1">
<a className="flex items-center gap-3 text-slate-600 hover:bg-blue-50/50 py-3 transition-all" href="#">
<span className="material-symbols-outlined">help</span>
<span className="font-label-md text-label-md">Help Center</span>
</a>
<a className="flex items-center gap-3 text-slate-600 hover:bg-blue-50/50 py-3 transition-all" href="#">
<span className="material-symbols-outlined">logout</span>
<span className="font-label-md text-label-md">Logout</span>
</a>
</div>
</aside>
<main className="ml-64 min-h-screen">
{/*  TopAppBar  */}
<header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-100 flex justify-between items-center w-full px-8 py-4 shadow-sm">
<div className="flex items-center gap-4 w-1/2">
<div className="relative w-full max-w-md">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-label-md focus:ring-2 focus:ring-primary/20" placeholder="Search patients or tests..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6">
<button className="relative text-slate-500 hover:text-primary transition-colors">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-danger rounded-full"></span>
</button>
<button className="text-slate-500 hover:text-primary transition-colors">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="flex items-center gap-3 pl-4 border-l border-slate-200">
<div className="text-right">
<p className="font-manrope text-sm font-bold text-slate-800">Dr. Smith</p>
<p className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">Oncology Resident</p>
</div>
<img alt="Dr. Smith Profile" className="w-10 h-10 rounded-full object-cover border-2 border-primary/10" data-alt="professional portrait of a male doctor in clinical attire with soft studio lighting and a clean background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzHmLSJLpLcNOWtb0RsQzt91B18POHgOzjJKztuA6QpfFUYMnQoh7PIgxsoaUtTgh3Vr6M1cqr9KLg97bkeJGeA2YKivd2DFFGSixFgsNoSf5BeAjaF2DA-Qlpxx-RpLHk7L5FQn6wQQ6gNSwMOIHlwcEUSPnOQQ-XTwGYxwk28IZPQJ6QvsJnIwQREyJsODCIRNbDg-esDlJQlD6Gw7fQOOSzD5tmtDLQzFAv3XY-VkwQ6J1uNjX_l3gmJLwNDEi4lto4CjYDRajR"/>
</div>
</div>
</header>
<section className="p-8">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="font-headline-lg text-headline-lg text-text-primary mb-1">Lab Results Review</h2>
<p className="text-text-secondary font-body-md">Manage and validate pending diagnostic reports from patient uploads.</p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-surface border border-outline-variant text-on-surface rounded-full font-label-md hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[20px]">filter_list</span>
                        Filter
                    </button>
<button className="flex items-center gap-2 px-5 py-2 bg-primary text-on-primary rounded-full font-label-md hover:opacity-90 transition-opacity shadow-md">
<span className="material-symbols-outlined text-[20px]">upload</span>
                        Upload Result
                    </button>
</div>
</div>
{/*  Dashboard Stats  */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
<div className="bg-surface p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined">inbox</span>
</div>
<div>
<p className="text-label-sm text-slate-500 uppercase tracking-wider">Total Received</p>
<p className="font-headline-md text-headline-md">128</p>
</div>
</div>
<div className="bg-surface p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
<div className="w-12 h-12 bg-amber-50 text-warning rounded-full flex items-center justify-center">
<span className="material-symbols-outlined">pending_actions</span>
</div>
<div>
<p className="text-label-sm text-slate-500 uppercase tracking-wider">Pending Review</p>
<p className="font-headline-md text-headline-md">14</p>
</div>
</div>
<div className="bg-surface p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
<div className="w-12 h-12 bg-teal-50 text-secondary rounded-full flex items-center justify-center">
<span className="material-symbols-outlined">verified</span>
</div>
<div>
<p className="text-label-sm text-slate-500 uppercase tracking-wider">Validated</p>
<p className="font-headline-md text-headline-md">114</p>
</div>
</div>
<div className="bg-surface p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
<div className="w-12 h-12 bg-rose-50 text-danger rounded-full flex items-center justify-center">
<span className="material-symbols-outlined">priority_high</span>
</div>
<div>
<p className="text-label-sm text-slate-500 uppercase tracking-wider">Urgent Action</p>
<p className="font-headline-md text-headline-md">3</p>
</div>
</div>
</div>
{/*  Bento Grid Results Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
{/*  Result Card 1  */}
<div className="glass-card p-6 rounded-xl border border-slate-200 group hover:shadow-xl transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<div className="flex gap-3">
<img alt="Sarah Johnson" className="w-12 h-12 rounded-full object-cover" data-alt="close-up portrait of a woman with a kind expression in soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUqv6ICRVI5xJfBgaVlByjrMilOS7DkPWfR334L9iorpgYyVXQ0obA7O5faLIT2uk3pO-hhDenoUNZ4bbTSsuVHuz7dzP3SJJKtoQMYtWWq_pYbsW3zX-tQy78dO1gwPHCP7ENaeMRjieQvcwVuuMyQuP1TYjg5EPLJTTSYSpqqTwq7SDkQSytyrk1noIKTO-jsgJGkmvmGTNdUsI7ZTYNG_TDiRQFhQVEYAwXz9x0Cm8rOTMkrFSGuXIjJmlnNYQpn8_FtGOj_Oet"/>
<div>
<h3 className="font-manrope text-base font-bold text-text-primary">Sarah Johnson</h3>
<p className="text-label-sm text-slate-500">ID: #PX-9921</p>
</div>
</div>
<span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase rounded-full tracking-wider">Pending</span>
</div>
<div className="space-y-4 mb-6">
<div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-white/80">
<span className="material-symbols-outlined text-blue-500">description</span>
<div className="flex-1">
<p className="font-label-md text-label-md text-slate-800">CBC Panel &amp; Lipid Profile</p>
<p className="text-label-sm text-slate-500">Uploaded 2 hours ago</p>
</div>
<span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">visibility</span>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 py-2.5 bg-primary text-on-primary rounded-full font-label-md hover:opacity-90 transition-opacity">View File</button>
<button className="flex items-center justify-center w-12 h-11 bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200 transition-colors">
<span className="material-symbols-outlined">check_circle</span>
</button>
</div>
</div>
{/*  Result Card 2 (Urgent/Reviewed Example)  */}
<div className="glass-card p-6 rounded-xl border border-slate-200 group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-bl-full -mr-8 -mt-8"></div>
<div className="flex justify-between items-start mb-4">
<div className="flex gap-3">
<img alt="Michael Chen" className="w-12 h-12 rounded-full object-cover" data-alt="headshot of a middle-aged man with short dark hair and a friendly neutral expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJQD-VhVq0C65wocV6McM06vdWcrgW7IP_NksVaiaPzOpnJTqvk76bJ2JNpVApaiSB_OUHkyOMYYdh_HpfiA6eL1zSZB7V66ZminMBR4n13WWUi1bdVLJVPOzOeN6Jn5Zsf0qx9xRS81qVeu_9EHBSS7Qhcu7rXZ9ubpHvo6pBYgLEPIMcY4m164-MFZyYJivfPkG_IOFq5jl9TBayCotrIcj4HgYg2mCg9BsXpQXx3sx3DX2LanJwFcRs4NbxXHBrlVMcqhvPaJ-y"/>
<div>
<h3 className="font-manrope text-base font-bold text-text-primary">Michael Chen</h3>
<p className="text-label-sm text-slate-500">ID: #PX-4412</p>
</div>
</div>
<span className="px-3 py-1 bg-teal-100 text-teal-700 text-[10px] font-bold uppercase rounded-full tracking-wider">Reviewed</span>
</div>
<div className="space-y-4 mb-6">
<div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-white/80">
<span className="material-symbols-outlined text-teal-500">radiology</span>
<div className="flex-1">
<p className="font-label-md text-label-md text-slate-800">Chest X-Ray (Posterior)</p>
<p className="text-label-sm text-slate-500">Uploaded Yesterday</p>
</div>
<span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">visibility</span>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 py-2.5 border border-primary text-primary rounded-full font-label-md hover:bg-primary/5 transition-colors">View File</button>
<button className="flex items-center justify-center w-12 h-11 bg-teal-600 text-on-primary rounded-full shadow-lg">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
</button>
</div>
</div>
{/*  Result Card 3  */}
<div className="glass-card p-6 rounded-xl border border-slate-200 group hover:shadow-xl transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<div className="flex gap-3">
<img alt="Elena Rodriguez" className="w-12 h-12 rounded-full object-cover" data-alt="portrait of a young woman with dark hair against a soft blurred outdoor background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChVb7JTNvhyXSleimPH8ytJDE5GlDy-1U7MHxxpKFGEiW_zWPp3ADkNC0bMs2rPZBq7GM65TM_RycVUL-wNCf6aN6uc1NkAqbYHmznSEhJtym-T9hau3i5wFfQUq3K9Owecj124txRbcfL5RRAYE9xtBfKsCgqGiKwBInH18qWTntsWCRMDZQj_5ZW2PkvJGRe6oAo94s6YVXhjQUmp3rJjAHQVo9Q1PrrLz5yXaYWzbyzJw8rNMJOlxfQ_PSDY9YwryqXIt0w8ITv"/>
<div>
<h3 className="font-manrope text-base font-bold text-text-primary">Elena Rodriguez</h3>
<p className="text-label-sm text-slate-500">ID: #PX-8109</p>
</div>
</div>
<span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase rounded-full tracking-wider">Pending</span>
</div>
<div className="space-y-4 mb-6">
<div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-white/80">
<span className="material-symbols-outlined text-blue-500">bloodtype</span>
<div className="flex-1">
<p className="font-label-md text-label-md text-slate-800">Hemoglobin A1c Test</p>
<p className="text-label-sm text-slate-500">Uploaded 5 hours ago</p>
</div>
<span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">visibility</span>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 py-2.5 bg-primary text-on-primary rounded-full font-label-md hover:opacity-90 transition-opacity">View File</button>
<button className="flex items-center justify-center w-12 h-11 bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200 transition-colors">
<span className="material-symbols-outlined">check_circle</span>
</button>
</div>
</div>
{/*  Detailed List View Alternative below Bento  */}
<div className="lg:col-span-3 mt-4">
<div className="bg-surface rounded-xl shadow-sm border border-slate-100 overflow-hidden">
<div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
<h3 className="font-manrope font-bold text-slate-800">Earlier This Week</h3>
<button className="text-primary text-label-sm hover:underline">View All History</button>
</div>
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-slate-400 text-[11px] uppercase tracking-widest font-bold">
<th className="px-6 py-4">Patient Name</th>
<th className="px-6 py-4">Test Type</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4">Date Uploaded</th>
<th className="px-6 py-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-50">
<tr className="hover:bg-slate-50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-bold">JD</div>
<span className="font-label-md text-label-md text-slate-800">James Dalton</span>
</div>
</td>
<td className="px-6 py-4 text-label-md text-slate-600">Thyroid Stimulating Hormone (TSH)</td>
<td className="px-6 py-4">
<span className="px-3 py-1 bg-teal-100 text-teal-700 text-[10px] font-bold uppercase rounded-full">Reviewed</span>
</td>
<td className="px-6 py-4 text-label-sm text-slate-500">Oct 24, 2023</td>
<td className="px-6 py-4 text-right">
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-bold">LW</div>
<span className="font-label-md text-label-md text-slate-800">Linda Wu</span>
</div>
</td>
<td className="px-6 py-4 text-label-md text-slate-600">Complete Metabolic Panel</td>
<td className="px-6 py-4">
<span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase rounded-full">Pending</span>
</td>
<td className="px-6 py-4 text-label-sm text-slate-500">Oct 23, 2023</td>
<td className="px-6 py-4 text-right">
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-bold">MK</div>
<span className="font-label-md text-label-md text-slate-800">Marcus Knight</span>
</div>
</td>
<td className="px-6 py-4 text-label-md text-slate-600">MRI Brain Scan (Contrast)</td>
<td className="px-6 py-4">
<span className="px-3 py-1 bg-rose-100 text-rose-700 text-[10px] font-bold uppercase rounded-full">Urgent</span>
</td>
<td className="px-6 py-4 text-label-sm text-slate-500">Oct 23, 2023</td>
<td className="px-6 py-4 text-right">
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>
</main>
{/*  FAB for Quick Actions - Contextual for Dashboard/Results  */}
<button className="fixed bottom-8 right-8 w-14 h-14 bg-primary-container text-on-primary-container rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-50">
<span className="material-symbols-outlined text-[28px]" style={{"fontVariationSettings":"'FILL' 1"}}>add</span>
</button>

    </>
  );
}
