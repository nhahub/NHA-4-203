import React from 'react';
import { Link } from 'react-router-dom';

export default function DoctorPatientRecords() {
  return (
    <>
      
{/*  SideNavBar (Predicted JSON Component)  */}
<aside className="fixed left-0 top-0 h-screen w-64 border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex flex-col py-6 z-50 hidden md:flex">
<div className="px-6 mb-8">
<h1 className="text-lg font-black tracking-tight text-blue-700 dark:text-blue-500 font-manrope">HealthCore</h1>
<p className="text-xs text-slate-500 font-manrope">Medical Suite</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all font-manrope text-sm" href="#">
<span className="material-symbols-outlined mr-3">dashboard</span> Dashboard
            </a>
<a className="flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all font-manrope text-sm" href="#">
<span className="material-symbols-outlined mr-3">event_available</span> Appointments
            </a>
<a className="flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all font-manrope text-sm" href="#">
<span className="material-symbols-outlined mr-3">medical_services</span> Diagnosis
            </a>
{/*  Active Tab: Patient Records  */}
<a className="flex items-center bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-r-4 border-blue-600 font-semibold px-6 py-3 font-manrope text-sm" href="#">
<span className="material-symbols-outlined mr-3">folder_shared</span> Patient Records
            </a>
<a className="flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all font-manrope text-sm" href="#">
<span className="material-symbols-outlined mr-3">biotech</span> Lab Results
            </a>
<a className="flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all font-manrope text-sm" href="#">
<span className="material-symbols-outlined mr-3">query_stats</span> Analytics
            </a>
</nav>
<div className="px-6 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-1">
<a className="flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 px-4 py-2 text-sm" href="#">
<span className="material-symbols-outlined mr-3">help</span> Help Center
            </a>
<a className="flex items-center text-slate-600 dark:text-slate-400 hover:text-danger px-4 py-2 text-sm" href="#">
<span className="material-symbols-outlined mr-3">logout</span> Logout
            </a>
</div>
</aside>
{/*  TopAppBar (Predicted JSON Component)  */}
<header className="fixed top-0 right-0 left-0 md:left-64 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-40 border-b border-slate-100 dark:border-slate-800 shadow-sm flex justify-between items-center px-6 py-3">
<div className="flex items-center flex-1 max-w-xl">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-blue-500 font-manrope" placeholder="Search patients, ID, or phone..." type="text"/>
</div>
</div>
<div className="flex items-center space-x-4">
<button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-danger rounded-full border-2 border-white"></span>
</button>
<button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="flex items-center space-x-3 ml-2 border-l pl-4 border-slate-200">
<div className="text-right">
<p className="text-xs font-bold text-slate-900 font-manrope">Dr. Sarah Smith</p>
<p className="text-[10px] text-slate-500 font-manrope">Cardiologist</p>
</div>
<img alt="Dr. Smith Profile" className="w-10 h-10 rounded-full object-cover border-2 border-blue-100" data-alt="professional portrait of a female doctor in a white lab coat with a warm friendly expression and stethoscope" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpMIdPsyv3G8hpMvKVhL_snmxQB51FxpPzyT23SAtZlwskm9JD1YNEotTZ_7F40fZRT_1i1K4RPezMGYj8PmqP-bB_05xfvSB_JRivxis1qXZX1KF7goHIx9JPFZyTTf81BvG-1kcgJX2yHCuBZP4Nrs5AJOxT1-oGUxtR_ye9b2kg55TJNygfmlpdM6w5lOH41z3f-3ZenlF-LXfeEqS0fq6zo-Ny4Fjzz_8d2nw_Kj03CWCnMdMrlPXyiKAJBL-VS9IQKhxxq5sX"/>
</div>
</div>
</header>
{/*  Main Content  */}
<main className="md:ml-64 pt-20 p-6">
<div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-120px)]">
{/*  Patient List Sidebar (Information-Dense List)  */}
<section className="lg:w-1/3 flex flex-col space-y-4">
<div className="flex justify-between items-center mb-2">
<h2 className="font-headline-md text-headline-md text-text-primary">Patients</h2>
<button className="bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2 font-label-md text-label-md hover:scale-105 active:scale-95 transition-transform">
<span className="material-symbols-outlined text-sm">person_add</span> Add Patient
                    </button>
</div>
<div className="overflow-y-auto space-y-3 flex-1 pr-2 custom-scrollbar">
{/*  Patient Card: Active  */}
<div className="bg-white border-2 border-primary-container p-4 rounded-xl shadow-md cursor-pointer transition-all">
<div className="flex items-center gap-4">
<img className="w-12 h-12 rounded-full object-cover" data-alt="Close-up portrait of a middle-aged man with kind eyes and graying hair, soft indoor lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXpXeGcrDOlfoWTRmpv_hZCRNDaDIgf-94BX0kKwdGB47DeQCdx1_5Mgf8vUchbrp2u5nrGrCMBo2BDUp5fLjAYTOsDJjDCa1U-xY9wWN2ECo-u6lpb4wkatrNo95HeuE4PvuWROi2qAgb1Y56G5e08_cGztV5LsyRcxh4qxq7_UOVo8aWfPHN2g70Hrp7yGvHLz--JJPQIp4wOQWfhhCiONXuR-zXa0XrRJWU6dTjcqpguFsPKBPiQU8YpTUFEUKSNWy329MGUN_e"/>
<div className="flex-1">
<h3 className="font-bold text-sm text-text-primary">Jonathan Miller</h3>
<p className="text-xs text-text-secondary">42 years • Male • O+</p>
</div>
<div className="text-right">
<span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-[10px] font-bold">ACTIVE</span>
</div>
</div>
<div className="mt-3 pt-3 border-t border-slate-50 flex justify-between items-center">
<span className="text-[10px] font-label-sm text-slate-400">LAST VISIT: OCT 12, 2023</span>
<span className="material-symbols-outlined text-primary text-sm">chevron_right</span>
</div>
</div>
{/*  Patient Card 2  */}
<div className="bg-white hover:bg-slate-50 border border-slate-100 p-4 rounded-xl shadow-sm cursor-pointer transition-all">
<div className="flex items-center gap-4">
<img className="w-12 h-12 rounded-full object-cover" data-alt="Professional portrait of a young woman with curly hair looking directly at the camera, neutral studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBc_wbc6DLIPakV5UV1SAJ9aR9_GLxfEu_GFGWI0y9wX0_cddBvcFDst9tYFMZ8BKK72kNzPyncqRHD0DmvXD0y8YAbHfC_ynD4nFKvbD9xKCoEzmHAdlMrXnRTyA44UFMFhlFHgfy2AfL6fP8K2VEEZup7S9QNGhnXvZhBG-5tsp8Nh8vrKb2uucDcd47UeQlWKqgk_bAKSkNfzj5UppZ3mvOe6V6Bv-kbpTN1clz2AakvQqBIkUCOxa1BVAVLO3cQv82YlNW-Z3l"/>
<div className="flex-1">
<h3 className="font-bold text-sm text-text-primary">Elena Rodriguez</h3>
<p className="text-xs text-text-secondary">29 years • Female • A-</p>
</div>
<div className="text-right">
<span className="bg-slate-100 text-slate-500 px-2 py-1 rounded-full text-[10px] font-bold">STABLE</span>
</div>
</div>
<div className="mt-3 pt-3 border-t border-slate-50 flex justify-between items-center">
<span className="text-[10px] font-label-sm text-slate-400">LAST VISIT: SEP 28, 2023</span>
<span className="material-symbols-outlined text-slate-300 text-sm">chevron_right</span>
</div>
</div>
{/*  Patient Card 3  */}
<div className="bg-white hover:bg-slate-50 border border-slate-100 p-4 rounded-xl shadow-sm cursor-pointer transition-all">
<div className="flex items-center gap-4">
<img className="w-12 h-12 rounded-full object-cover" data-alt="Portrait of an elderly man with glasses smiling gently, bright natural lighting through a window" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQvecEIMlazzAwqASUwxpo-yzFLQJAzxDNiRs2DxUjiuMUlduhfBU_XejWQerlkjx4VFqQ06RuCSGDhz1qkb1qcbx44etyJAKyiIRI-2oZV83BO3pzC1Zyt950NvynX0mKl4qrywkbZbLVjno8vr_VI_1rdOGYxyeAfoc7_NK9Erqku8sG6j_heUVauOw2WIgZZCgM-BTR8ub4dflTfjkbptxkwzdILWYlil4TvCkIQfWCP_f1bwBobfn_eY6cGLXpZltC6UOik2zE"/>
<div className="flex-1">
<h3 className="font-bold text-sm text-text-primary">Robert Chen</h3>
<p className="text-xs text-text-secondary">68 years • Male • B+</p>
</div>
<div className="text-right">
<span className="bg-warning/10 text-warning px-2 py-1 rounded-full text-[10px] font-bold">CRITICAL</span>
</div>
</div>
<div className="mt-3 pt-3 border-t border-slate-50 flex justify-between items-center">
<span className="text-[10px] font-label-sm text-slate-400">LAST VISIT: OCT 05, 2023</span>
<span className="material-symbols-outlined text-slate-300 text-sm">chevron_right</span>
</div>
</div>
{/*  Patient Card 4  */}
<div className="bg-white hover:bg-slate-50 border border-slate-100 p-4 rounded-xl shadow-sm cursor-pointer transition-all">
<div className="flex items-center gap-4">
<img className="w-12 h-12 rounded-full object-cover" data-alt="Young professional woman with short dark hair in a casual business setting, soft focus office background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQmc90Wx7YTkzDj5AHtiUVVz_SCjn5iWlQteU_86o4X3KALWKU_bgr7I2gxcFf5466i5c4egTHkDHFpNh7WlEiODjSOlOCdKel7kUybFvPTIe6D8u2yLlP_h6CkKJTV1jiRoVVngCf_S7X8nMRqMNcIRW-WdmJs_KcJ9Bt6Uo3Smy4pU8fZ0BywwvEbJbCUduiwplvKcnm1jkYXm-eTbBR_ZsjMca7DO-PifP6RfQjJhGWsUSoAnlFdHW969aQPfLXJybnK7k0kg76"/>
<div className="flex-1">
<h3 className="font-bold text-sm text-text-primary">Sarah Williams</h3>
<p className="text-xs text-text-secondary">34 years • Female • AB+</p>
</div>
<div className="text-right">
<span className="bg-secondary-container/20 text-on-secondary-container px-2 py-1 rounded-full text-[10px] font-bold">FOLLOW-UP</span>
</div>
</div>
<div className="mt-3 pt-3 border-t border-slate-50 flex justify-between items-center">
<span className="text-[10px] font-label-sm text-slate-400">LAST VISIT: AUG 15, 2023</span>
<span className="material-symbols-outlined text-slate-300 text-sm">chevron_right</span>
</div>
</div>
</div>
</section>
{/*  Patient Detail & Timeline (Bento Grid Style)  */}
<section className="lg:w-2/3 flex flex-col space-y-6">
{/*  Bento Section 1: Quick Info  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto">
<div className="col-span-1 md:col-span-2 bg-white rounded-2xl shadow-sm p-6 border border-slate-100 flex items-start justify-between relative overflow-hidden">
<div className="relative z-10">
<h2 className="font-headline-lg text-headline-lg text-text-primary mb-1">Jonathan Miller</h2>
<p className="text-slate-500 font-body-md text-body-md flex items-center gap-2">
<span className="material-symbols-outlined text-sm">fingerprint</span> ID: 4509-2231-X
                            </p>
<div className="flex gap-4 mt-4">
<div>
<p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Weight</p>
<p className="font-bold text-primary">82 kg</p>
</div>
<div className="border-l border-slate-100 pl-4">
<p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">BP</p>
<p className="font-bold text-primary">120/80</p>
</div>
<div className="border-l border-slate-100 pl-4">
<p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Heart Rate</p>
<p className="font-bold text-primary">72 bpm</p>
</div>
</div>
</div>
<div className="absolute -right-4 -top-4 w-32 h-32 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
<button className="bg-slate-50 p-2 rounded-xl text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">edit</span>
</button>
</div>
<div className="col-span-1 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg p-6 text-white">
<p className="text-[10px] font-bold opacity-80 uppercase tracking-wider mb-2">Primary Diagnosis</p>
<h3 className="font-headline-md text-headline-md leading-tight mb-2">Hypertension Type II</h3>
<p className="text-xs opacity-90 font-body-md">Requires monitoring of blood pressure levels and low-sodium diet adherence.</p>
<div className="mt-4 flex items-center gap-2">
<span className="material-symbols-outlined text-sm">warning</span>
<span className="text-[10px] font-bold">HIGH ATTENTION</span>
</div>
</div>
</div>
{/*  Bento Section 2: Timeline & Lab Results  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 min-h-0">
{/*  History Timeline  */}
<div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col">
<h3 className="font-bold text-text-primary mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">history</span> Medical History
                        </h3>
<div className="space-y-6 overflow-y-auto pr-2 flex-1">
{/*  Timeline Item 1  */}
<div className="relative pl-6 border-l-2 border-slate-100">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
<p className="text-[10px] font-bold text-slate-400 mb-1">OCT 12, 2023</p>
<h4 className="font-bold text-sm">Follow-up Consultation</h4>
<p className="text-xs text-text-secondary mt-1">Patient reports steady BP levels. Prescribed Lisinopril 10mg.</p>
<div className="mt-2 flex gap-2">
<span className="bg-slate-50 text-[10px] px-2 py-1 rounded-md border border-slate-100">Lisinopril</span>
<span className="bg-slate-50 text-[10px] px-2 py-1 rounded-md border border-slate-100">Diet Plan</span>
</div>
</div>
{/*  Timeline Item 2  */}
<div className="relative pl-6 border-l-2 border-slate-100">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300 border-4 border-white"></div>
<p className="text-[10px] font-bold text-slate-400 mb-1">SEP 05, 2023</p>
<h4 className="font-bold text-sm">Lab Test: Lipid Profile</h4>
<p className="text-xs text-text-secondary mt-1">High LDL cholesterol levels (160 mg/dL). Initiated Statins.</p>
</div>
{/*  Timeline Item 3  */}
<div className="relative pl-6 border-l-2 border-slate-100">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300 border-4 border-white"></div>
<p className="text-[10px] font-bold text-slate-400 mb-1">AUG 12, 2023</p>
<h4 className="font-bold text-sm">Initial Diagnosis</h4>
<p className="text-xs text-text-secondary mt-1">General fatigue and recurring headaches. Confirmed Hypertension.</p>
</div>
</div>
</div>
{/*  Lab Results & Action Cards  */}
<div className="flex flex-col gap-6">
<div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold text-text-primary flex items-center gap-2">
<span className="material-symbols-outlined text-primary">biotech</span> Lab Results
                                </h3>
<a className="text-primary text-[10px] font-bold hover:underline" href="#">VIEW ALL</a>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
<span className="material-symbols-outlined text-sm">bloodtype</span>
</div>
<div>
<p className="text-xs font-bold">CBC Panel</p>
<p className="text-[10px] text-slate-400">Oct 12, 2023</p>
</div>
</div>
<span className="text-xs font-bold text-success text-green-600">Normal</span>
</div>
<div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
<span className="material-symbols-outlined text-sm">monitoring</span>
</div>
<div>
<p className="text-xs font-bold">Lipid Profile</p>
<p className="text-[10px] text-slate-400">Sep 05, 2023</p>
</div>
</div>
<span className="text-xs font-bold text-danger">Abnormal</span>
</div>
</div>
</div>
<div className="bg-surface-container-low rounded-2xl p-6 border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">
<h4 className="font-bold text-sm mb-2">Prescription Renewal</h4>
<p className="text-xs text-text-secondary mb-4">Lisinopril supply ends in 4 days. Would you like to renew now?</p>
<button className="w-full bg-white text-primary border border-primary font-bold text-xs py-2 rounded-xl hover:bg-primary hover:text-white transition-colors">
                                Renew Prescription
                            </button>
<div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl">pill</span>
</div>
</div>
<div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex flex-col justify-center items-center text-center space-y-2">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary mb-2">
<span className="material-symbols-outlined">add_task</span>
</div>
<h4 className="font-bold text-sm">Next Appointment</h4>
<p className="text-xs text-text-secondary">Scheduled for Nov 22, 2023 at 10:30 AM</p>
<button className="text-primary text-[10px] font-bold hover:underline mt-2">RESCHEDULE</button>
</div>
</div>
</div>
</section>
</div>
</main>

    </>
  );
}
