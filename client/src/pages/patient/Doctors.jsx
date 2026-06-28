import React from 'react';
import { Link } from 'react-router-dom';

export default function Doctors() {
  return (
    <>
      
{/*  Sidebar Navigation  */}
{/*  Top App Bar  */}
<header className="flex justify-between items-center h-16 px-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm"><div className="max-w-[1440px] mx-auto w-full flex items-center justify-between h-full px-8"><div className="flex items-center gap-3"><div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center"><span className="material-symbols-outlined text-white text-2xl">medical_services</span></div><span className="text-xl font-bold text-text-primary tracking-tight">EasyCare</span></div><nav className="hidden lg:flex items-center gap-2"><a className="px-4 py-2 text-text-secondary hover:text-primary font-medium text-sm transition-colors" href="#">Home</a><a className="px-4 py-2 text-text-secondary hover:text-primary font-medium text-sm transition-colors" href="#">Dashboard</a><a className="px-4 py-2 text-primary font-bold text-sm bg-primary/5 rounded-full" href="#">Find Doctors</a><a className="px-4 py-2 text-text-secondary hover:text-primary font-medium text-sm transition-colors" href="#">My Appointments</a><a className="px-4 py-2 text-text-secondary hover:text-primary font-medium text-sm transition-colors" href="#">Medical Records</a></nav><div className="flex items-center gap-6"><div className="flex items-center gap-4"><button className="w-10 h-10 flex items-center justify-center text-text-secondary hover:bg-surface-container rounded-full transition-colors relative"><span className="material-symbols-outlined">notifications</span><span className="absolute top-2.5 right-2.5 w-2 h-2 bg-error rounded-full border-2 border-white"></span></button><button className="w-10 h-10 flex items-center justify-center text-text-secondary hover:bg-surface-container rounded-full transition-colors"><span className="material-symbols-outlined">settings</span></button></div><div className="h-8 w-[1px] bg-outline-variant"></div><div className="flex items-center gap-3 bg-surface-container-low pl-1 pr-4 py-1 rounded-full border border-outline-variant hover:bg-surface-container transition-colors cursor-pointer"><img alt="User Avatar" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJdRX-_1Wr5BDVNYA3PsOmjmeSqURaslJGfnAAUEOF4S_gUB4bIrdt8uyzWYhybIgYXZdRJBLtbpdwde8_c9Pl5WpzkuOXJQ1f-YqktZLPMTAMxe07unPUeXYc06KNcpwcTmG6v2y3B0IigVt4QJGoSl1zN8_qHvxF_VRjIemVQaeWzPMrWpISrKaAoUsQ1FgE9d4K6qFHjZDUDng_ZqIuZYwX2G5Gv8VwnJubFTEKhsimw-HpqRlHwUSMUzZskPnCn6uDT7NKZxaQ" /><div className="flex flex-col"><p className="text-xs font-bold text-text-primary leading-none">Alex Johnson</p><p className="text-[10px] text-text-secondary font-medium mt-0.5">ID: PT-88210</p></div><span className="material-symbols-outlined text-text-secondary text-sm ml-1">expand_more</span></div></div></div></header>
{/*  Main Content Area  */}
<main className="p-8 min-h-screen">
{/*  Search & Filter Bar Section  */}
<section className="mb-10">
<div className="glass-card rounded-[2rem] p-4 flex flex-col lg:flex-row items-center gap-4 shadow-xl shadow-blue-900/5">
<div className="flex-1 flex items-center gap-3 px-4 bg-surface-container-low rounded-full border border-outline-variant h-14 w-full">
<span className="material-symbols-outlined text-slate-400">search</span>
<input className="bg-transparent border-none focus:ring-0 w-full font-body-md text-on-surface placeholder:text-slate-400" placeholder="Search doctor name or clinic..." type="text" />
</div>
<div className="flex items-center gap-2 w-full lg:w-auto">
<div className="relative h-14 bg-surface-container-low rounded-full border border-outline-variant flex items-center px-4 min-w-[180px] flex-1">
<span className="material-symbols-outlined text-primary mr-2 text-xl">medical_services</span>
<select className="bg-transparent border-none focus:ring-0 w-full font-label-md text-on-surface appearance-none cursor-pointer">
<option>All Specialties</option>
<option>Cardiology</option>
<option>Dermatology</option>
<option>Neurology</option>
<option>Pediatrics</option>
</select>
</div>
<div className="relative h-14 bg-surface-container-low rounded-full border border-outline-variant flex items-center px-4 min-w-[180px] flex-1">
<span className="material-symbols-outlined text-primary mr-2 text-xl">location_on</span>
<input className="bg-transparent border-none focus:ring-0 w-full font-label-md text-on-surface placeholder:text-slate-400" placeholder="City" type="text" />
</div>
<div className="relative h-14 bg-surface-container-low rounded-full border border-outline-variant flex items-center px-4 min-w-[140px] flex-1">
<span className="material-symbols-outlined text-warning mr-2 text-xl" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<select className="bg-transparent border-none focus:ring-0 w-full font-label-md text-on-surface appearance-none cursor-pointer">
<option>Any Rating</option>
<option>4.5+ Stars</option>
<option>4.0+ Stars</option>
</select>
</div>
</div>
<button className="h-14 px-8 bg-surface-container-high text-on-surface-variant rounded-full font-bold flex items-center gap-2 hover:bg-surface-variant transition-all border border-outline-variant/30 shadow-sm">
<span className="material-symbols-outlined">map</span>
    View Map
</button><button className="h-14 px-8 bg-primary-container text-on-primary-container rounded-full font-bold flex items-center gap-2 hover:brightness-110 transition-all shadow-md shadow-primary/20">
<span className="material-symbols-outlined">tune</span>
                    Filter
                </button>
</div>
</section>
{/*  Stats / Quick Info  */}
<div className="flex flex-wrap gap-6 mb-8">
<div className="px-6 py-3 bg-secondary-container/20 rounded-full border border-secondary-container/40 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span className="text-sm font-bold text-on-secondary-container">124 Doctors Available Today</span>
</div>
<div className="px-6 py-3 bg-surface rounded-full border border-slate-200 flex items-center gap-2 shadow-sm">
<span className="material-symbols-outlined text-primary text-sm">verified</span>
<span className="text-sm font-medium text-slate-600">All providers are board-certified</span>
</div>
</div>
{/*  Doctor Cards Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
{/*  Doctor Card 1  */}
<div className="bg-surface rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="relative">
<img alt="Doctor Avatar" className="w-20 h-20 rounded-full object-cover ring-4 ring-blue-50" data-alt="Professional portrait of a female doctor in a white lab coat with a stethoscope around her neck smiling warmly" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFpJQ-j-x0lZdRRN3w3aTETqB2rUF4xOTsnFOo8ZBbAHgwedhapVA-o1GW8gsJfGdcCFeIjGOcen6iwqyiCYz75HDquPgfHarsbg0W0ofIiK9GR59_aUiCOl8se4nS38yIAl-YSbEe4apx1pspcZJ1tuvUf08r500RicD15MyZ0G9ejDzEH2ywjsz4eDHy5vHViUZ_2Mem2WY7yh-EVoFvGSOAZM0YfWN_iXp_QBN-_4ncUynva6RK_amFtFDJd5YHKxBTDGXDLRls" />
<div className="absolute -bottom-1 -right-1 bg-secondary w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
<span className="material-symbols-outlined text-white text-[14px]">check</span>
</div>
</div>
<div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                        12 years exp
                    </div>
</div>
<div className="mb-4">
<h3 className="font-headline-md text-xl text-on-surface mb-1 group-hover:text-primary transition-colors">Dr. Sarah Jenkins</h3>
<div className="flex items-center gap-2 mb-2">
<span className="bg-primary/10 text-primary px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">Cardiology</span>
</div>
<p className="text-slate-500 font-medium text-sm flex items-center gap-1">
<span className="material-symbols-outlined text-sm">local_hospital</span>
                        HeartCare Specialty Clinic
                    </p>
</div>
<div className="flex items-center gap-1 mb-8">
<div className="flex">
<span className="material-symbols-outlined text-warning text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-warning text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-warning text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-warning text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-warning text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star_half</span>
</div>
<span className="font-bold text-on-surface text-sm">4.8</span>
<span className="text-slate-400 text-sm">(1.2k reviews)</span>
</div>
<div className="mt-auto space-y-3">
<button className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-blue-500/20 hover:bg-primary-container transition-all">
                        Book Appointment
                    </button>
<button className="w-full py-2 text-slate-500 hover:text-primary font-bold text-sm transition-all">
                        View Profile
                    </button>
</div>
</div>
{/*  Doctor Card 2  */}
<div className="bg-surface rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="relative">
<img alt="Doctor Avatar" className="w-20 h-20 rounded-full object-cover ring-4 ring-blue-50" data-alt="Middle-aged male doctor with glasses and a kind expression wearing professional attire in a bright medical setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeci6DkH-DIzhd1PX7ALX8mZQQ1nvgxPuEtXEAxlo1O673j49fA1LZuQiiGqSLBG0onQ6pQIIjDv-k8N_ByIfKBIKzJT1mriXDkESK7diRqGx6jHQVB9bCGTfuz2H9X3m4yr5yIZCbAsIBkcMy0EV1gWy4owy0KN-9s8F0SNsp7bJJYQ3g5tUtwe3yqa-emQka_q-Zix_eEkToFznxlRkp0xihXZUdArG97Vf6pgYyZC6l32lP9YppRbkg6DiuY3nWOAf-VGTm4E7j" />
<div className="absolute -bottom-1 -right-1 bg-secondary w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
<span className="material-symbols-outlined text-white text-[14px]">check</span>
</div>
</div>
<div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                        15 years exp
                    </div>
</div>
<div className="mb-4">
<h3 className="font-headline-md text-xl text-on-surface mb-1 group-hover:text-primary transition-colors">Dr. Michael Chen</h3>
<div className="flex items-center gap-2 mb-2">
<span className="bg-primary/10 text-primary px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">Neurology</span>
</div>
<p className="text-slate-500 font-medium text-sm flex items-center gap-1">
<span className="material-symbols-outlined text-sm">local_hospital</span>
                        Central Neuro Institute
                    </p>
</div>
<div className="flex items-center gap-1 mb-8">
<div className="flex">
<span className="material-symbols-outlined text-warning text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-warning text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-warning text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-warning text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-warning text-lg">star</span>
</div>
<span className="font-bold text-on-surface text-sm">5.0</span>
<span className="text-slate-400 text-sm">(840 reviews)</span>
</div>
<div className="mt-auto space-y-3">
<button className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-blue-500/20 hover:bg-primary-container transition-all">
                        Book Appointment
                    </button>
<button className="w-full py-2 text-slate-500 hover:text-primary font-bold text-sm transition-all">
                        View Profile
                    </button>
</div>
</div>
{/*  Doctor Card 3  */}
<div className="bg-surface rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="relative">
<img alt="Doctor Avatar" className="w-20 h-20 rounded-full object-cover ring-4 ring-blue-50" data-alt="Female doctor with a professional hairstyle and friendly face wearing a dark stethoscope on a light blue background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCooe_oXGEJMbfxMT9vZjUROulx_lLRxoCuOeQnASoOc7jaQPHc0yagwRTEy20DDkBcdZPP2rF5japqAAQf43bOG3hPsOpPyVpuGq8l9ouo5IU0zKWnFa6q8QhaoDhHSh99H7RuqOae6xQAhVK41dFlr0MCpGEFJwPrXj1DGqKiJGtL8AcvUkQ7EOSuklB_i_wfGmk4QcHzdYm1zgUiDxVUSbXU4WLgfD5d8Wbw2rHdPw6CNfX_a64qdI2X44huHyaEJPFJ7gOu5NzR" />
</div>
<div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                        8 years exp
                    </div>
</div>
<div className="mb-4">
<h3 className="font-headline-md text-xl text-on-surface mb-1 group-hover:text-primary transition-colors">Dr. Emily Rodriguez</h3>
<div className="flex items-center gap-2 mb-2">
<span className="bg-primary/10 text-primary px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">Dermatology</span>
</div>
<p className="text-slate-500 font-medium text-sm flex items-center gap-1">
<span className="material-symbols-outlined text-sm">local_hospital</span>
                        Skin &amp; Beauty Center
                    </p>
</div>
<div className="flex items-center gap-1 mb-8">
<div className="flex">
<span className="material-symbols-outlined text-warning text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-warning text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-warning text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-warning text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-warning text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star_half</span>
</div>
<span className="font-bold text-on-surface text-sm">4.7</span>
<span className="text-slate-400 text-sm">(2.1k reviews)</span>
</div>
<div className="mt-auto space-y-3">
<button className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-blue-500/20 hover:bg-primary-container transition-all">
                        Book Appointment
                    </button>
<button className="w-full py-2 text-slate-500 hover:text-primary font-bold text-sm transition-all">
                        View Profile
                    </button>
</div>
</div>
{/*  Doctor Card 4  */}
<div className="bg-surface rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="relative">
<img alt="Doctor Avatar" className="w-20 h-20 rounded-full object-cover ring-4 ring-blue-50" data-alt="Friendly young male doctor with stethoscope and glasses smiling in a modern bright medical clinic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgiUvsD3Tz8N3eYTfb-ZyAvIxqeKT7A2xNKZDclFaNSVQjZz3-37UeJGUEs1WS-DSFggBKp1v1QehM4HuJTZFMcEC_tDIhccJrnU86oh2Wa2J0jgydtU3fdibdcnXaTx46lqqsdPUsHpfudk74l0e3bQmYsbup3XFAs86SHNLqiHYXoQB0SJwgjgMoBmYNDgBwpQP6V3wN7eso7RDlXXV8JxwhI0PrNhFmHFXrbT0GTbeHfIiz0wf8Nxe0Qx1S2lEaieqLyyQK9kKx" />
<div className="absolute -bottom-1 -right-1 bg-secondary w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
<span className="material-symbols-outlined text-white text-[14px]">check</span>
</div>
</div>
<div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                        10 years exp
                    </div>
</div>
<div className="mb-4">
<h3 className="font-headline-md text-xl text-on-surface mb-1 group-hover:text-primary transition-colors">Dr. James Wilson</h3>
<div className="flex items-center gap-2 mb-2">
<span className="bg-primary/10 text-primary px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">Pediatrics</span>
</div>
<p className="text-slate-500 font-medium text-sm flex items-center gap-1">
<span className="material-symbols-outlined text-sm">local_hospital</span>
                        Kids First Medical
                    </p>
</div>
<div className="flex items-center gap-1 mb-8">
<div className="flex">
<span className="material-symbols-outlined text-warning text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-warning text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-warning text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-warning text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-warning text-lg">star</span>
</div>
<span className="font-bold text-on-surface text-sm">4.9</span>
<span className="text-slate-400 text-sm">(1.5k reviews)</span>
</div>
<div className="mt-auto space-y-3">
<button className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-blue-500/20 hover:bg-primary-container transition-all">
                        Book Appointment
                    </button>
<button className="w-full py-2 text-slate-500 hover:text-primary font-bold text-sm transition-all">
                        View Profile
                    </button>
</div>
</div>
</div>
{/*  Pagination / Load More  */}
<div className="mt-12 flex flex-col items-center gap-6">
<button className="px-10 py-4 bg-white border border-primary text-primary font-bold rounded-full hover:bg-blue-50 transition-all flex items-center gap-2">
                Load More Doctors
                <span className="material-symbols-outlined">expand_more</span>
</button>
<p className="text-slate-500 text-sm">Showing 1-12 of 124 available specialists</p>
</div>
</main>
{/*  Floating Action Button for Support  */}
<div className="fixed bottom-8 right-8 z-50">
<button className="w-14 h-14 bg-secondary text-on-secondary-fixed-variant rounded-full flex items-center justify-center shadow-xl shadow-teal-500/30 hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-2xl">chat</span>
</button>
</div>



    </>
  );
}
