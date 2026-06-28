import React from 'react';
import { Link } from 'react-router-dom';

export default function BookAppointment() {
  return (
    <>
      <header className="flex justify-between items-center h-16 px-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm"><div className="max-w-[1440px] mx-auto w-full flex items-center justify-between h-full px-8"><div className="flex items-center gap-3"><div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center"><span className="material-symbols-outlined text-white text-2xl">medical_services</span></div><span className="text-xl font-bold text-text-primary tracking-tight">EasyCare</span></div><nav className="hidden lg:flex items-center gap-2"><a className="px-4 py-2 text-text-secondary hover:text-primary font-medium text-sm transition-colors" href="#">Home</a><a className="px-4 py-2 text-text-secondary hover:text-primary font-medium text-sm transition-colors" href="#">Dashboard</a><a className="px-4 py-2 text-primary font-bold text-sm bg-primary/5 rounded-full" href="#">Find Doctors</a><a className="px-4 py-2 text-text-secondary hover:text-primary font-medium text-sm transition-colors" href="#">My Appointments</a><a className="px-4 py-2 text-text-secondary hover:text-primary font-medium text-sm transition-colors" href="#">Medical Records</a><a className="px-4 py-2 text-text-secondary hover:text-primary font-medium text-sm transition-colors" href="#">Upload Results</a></nav><div className="flex items-center gap-6"><div className="flex items-center gap-4"><button className="w-10 h-10 flex items-center justify-center text-text-secondary hover:bg-surface-container rounded-full transition-colors relative"><span className="material-symbols-outlined">notifications</span><span className="absolute top-2.5 right-2.5 w-2 h-2 bg-error rounded-full border-2 border-white"></span></button><button className="w-10 h-10 flex items-center justify-center text-text-secondary hover:bg-surface-container rounded-full transition-colors"><span className="material-symbols-outlined">settings</span></button></div><div className="h-8 w-[1px] bg-outline-variant"></div><div className="flex items-center gap-3 bg-surface-container-low pl-1 pr-4 py-1 rounded-full border border-outline-variant hover:bg-surface-container transition-colors cursor-pointer"><img alt="User Avatar" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7xyJ4KDeGBUEGrR2se6hMz9oqBT0pJaSQ6cIAbbYoUA7WYcHJAmpR9AYJZ3YSMv5sB94v8I5ieJnhnttFb-yJRYUUK-Gzls6qJmdXdXDv9oUUOlxJXjuydP5jUQAqO1OFhDKM-5SxWR0JwzTSc9nYTRV-2uuTFabqGoRG7Ou-OwHVPDYbRTtQmfM7ut3mi2943rBzM-a8NmoCzlHTIjogn-g1goc82UClO8GPapTQXUlE8c8VRn0yJrN0kV6jt7uRl55HOy4m22E7" /><div className="flex flex-col"><p className="text-xs font-bold text-text-primary leading-none">Alex Johnson</p><p className="text-[10px] text-text-secondary font-medium mt-0.5">ID: PT-88210</p></div><span className="material-symbols-outlined text-text-secondary text-sm ml-1">expand_more</span></div></div></div></header>
{/*  SideNavBar (Authority: JSON)  */}
{/*  TopAppBar (Authority: JSON)  */}
{/*  Main Content Area  */}
<main className="min-h-screen pt-6">
{/*  Hero Section with Gradient Banner  */}
<div className="relative h-64 w-full bg-gradient-to-r from-primary to-blue-400 overflow-hidden">
<div className="absolute inset-0 opacity-20" style={{"backgroundImage":"radial-gradient(circle at 2px 2px, white 1px, transparent 0)","backgroundSize":"24px 24px"}}></div>
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-gutter -mt-24 relative z-10">
<div className="flex flex-col lg:flex-row gap-8">
{/*  Left Column: Doctor Profile Info & Content  */}
<div className="flex-1">
{/*  Profile Header Card  */}
<div className="bg-surface rounded-3xl p-8 shadow-sm mb-8 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6">
<span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span>
                                Verified Profile
                            </span>
</div>
<div className="flex flex-col md:flex-row items-center md:items-end gap-6">
<div className="relative -mt-20 md:-mt-24">
<img alt="Doctor profile" className="w-40 h-40 rounded-full border-8 border-surface object-cover shadow-xl" data-alt="Professional portrait of a male cardiologist in a white coat with a stethoscope, clean medical clinic background, bright lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc4AMcMgGjM9zE45dy5vSUqO7tCyre-I_qYrbhqQvLwsCravIvxt0bxwNrocsEcZg4fTfy0rgI5NrcVtNjqatmCDI8ImIICmvlUN-cqA6XXV18kGfbcdkUgr88mUdhHJQl8itI4WAHeJAboHkEKZ0dmtxWrW4PHKKi8qG5fEtNSehsgfV83egHIibWtL6KT-TDsrFkt_9oJPZDU385JuYdPB5s4xCEDmuiLY3lAAtSqs6qoB9yNb9vNrPodmpS7BtdSGyH-nTP877e" />
<div className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 border-4 border-surface rounded-full"></div>
</div>
<div className="text-center md:text-left flex-1">
<h2 className="font-headline-lg text-headline-lg text-text-primary">Dr. Jonathan Aris</h2>
<p className="text-primary font-bold text-lg flex items-center justify-center md:justify-start gap-2">
                                    Cardiology Specialist
                                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
<span className="text-text-secondary font-medium text-body-md">12 Years Experience</span>
</p>
<div className="flex items-center justify-center md:justify-start gap-4 mt-3 text-text-secondary">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-warning" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="font-bold text-on-surface">4.9</span>
<span className="text-xs">(120+ Reviews)</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-primary">location_on</span>
<span className="text-label-md">City Heart Center, NY</span>
</div>
</div>
</div>
</div>
{/*  Info Bento Grid  */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-100">
<div className="p-4 rounded-2xl bg-blue-50/50 text-center">
<p className="text-[10px] uppercase font-bold text-blue-400 tracking-wider mb-1">Consultation</p>
<p className="text-headline-md font-headline-md text-primary">$150</p>
</div>
<div className="p-4 rounded-2xl bg-teal-50/50 text-center">
<p className="text-[10px] uppercase font-bold text-teal-600 tracking-wider mb-1">Patients</p>
<p className="text-headline-md font-headline-md text-secondary">2.5k+</p>
</div>
<div className="p-4 rounded-2xl bg-amber-50/50 text-center">
<p className="text-[10px] uppercase font-bold text-amber-600 tracking-wider mb-1">Success Rate</p>
<p className="text-headline-md font-headline-md text-amber-600">98%</p>
</div>
<div className="p-4 rounded-2xl bg-surface-container-low text-center">
<p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-1">Languages</p>
<p className="text-headline-md font-headline-md text-on-surface">EN, ES</p>
</div>
</div>
</div>
{/*  Tabs Section  */}
<div className="bg-surface rounded-3xl p-2 shadow-sm mb-6 flex items-center gap-1">
<button className="flex-1 py-3 px-6 rounded-2xl bg-primary text-white font-bold flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">person</span>
                            About
                        </button>
<button className="flex-1 py-3 px-6 rounded-2xl text-text-secondary hover:bg-gray-50 font-medium flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">calendar_month</span>
                            Availability
                        </button>
<button className="flex-1 py-3 px-6 rounded-2xl text-text-secondary hover:bg-gray-50 font-medium flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">rate_review</span>
                            Reviews
                        </button>
</div>
{/*  Availability Content  */}
<div className="bg-surface rounded-3xl p-8 shadow-sm">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="font-headline-md text-headline-md text-text-primary">Weekly Schedule</h3>
<p className="text-text-secondary text-body-md">Select a time slot for your appointment</p>
</div>
<div className="flex items-center gap-2">
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<span className="font-bold text-on-surface mx-2">Oct 24 - Oct 30</span>
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
{/*  Calendar Grid  */}
<div className="grid grid-cols-1 md:grid-cols-7 gap-4">
{/*  Mon  */}
<div className="space-y-4">
<div className="text-center p-2 rounded-xl bg-surface-container-low">
<p className="text-[10px] font-bold text-gray-400 uppercase">Mon</p>
<p className="font-bold text-on-surface">24</p>
</div>
<div className="space-y-2">
<button className="w-full py-2 px-3 rounded-xl border border-blue-100 text-primary text-xs font-bold bg-blue-50 hover:bg-blue-100 transition-colors">09:00 AM</button>
<button className="w-full py-2 px-3 rounded-xl border border-blue-100 text-primary text-xs font-bold bg-blue-50 hover:bg-blue-100 transition-colors">10:30 AM</button>
<button className="w-full py-2 px-3 rounded-xl border border-blue-100 text-primary text-xs font-bold bg-blue-50 hover:bg-blue-100 transition-colors">02:00 PM</button>
</div>
</div>
{/*  Tue  */}
<div className="space-y-4">
<div className="text-center p-2 rounded-xl bg-primary text-white shadow-md">
<p className="text-[10px] font-bold text-blue-100 uppercase">Tue</p>
<p className="font-bold">25</p>
</div>
<div className="space-y-2">
<button className="w-full py-2 px-3 rounded-xl border border-gray-100 text-gray-400 text-xs font-medium bg-gray-50 cursor-not-allowed opacity-50">09:00 AM</button>
<button className="w-full py-2 px-3 rounded-xl border border-primary text-white text-xs font-black bg-primary shadow-lg shadow-blue-200">11:00 AM</button>
<button className="w-full py-2 px-3 rounded-xl border border-blue-100 text-primary text-xs font-bold bg-blue-50 hover:bg-blue-100 transition-colors">03:30 PM</button>
</div>
</div>
{/*  Wed  */}
<div className="space-y-4">
<div className="text-center p-2 rounded-xl bg-surface-container-low">
<p className="text-[10px] font-bold text-gray-400 uppercase">Wed</p>
<p className="font-bold text-on-surface">26</p>
</div>
<div className="space-y-2">
<button className="w-full py-2 px-3 rounded-xl border border-blue-100 text-primary text-xs font-bold bg-blue-50 hover:bg-blue-100 transition-colors">08:00 AM</button>
<button className="w-full py-2 px-3 rounded-xl border border-blue-100 text-primary text-xs font-bold bg-blue-50 hover:bg-blue-100 transition-colors">10:00 AM</button>
</div>
</div>
{/*  Thu  */}
<div className="space-y-4">
<div className="text-center p-2 rounded-xl bg-surface-container-low">
<p className="text-[10px] font-bold text-gray-400 uppercase">Thu</p>
<p className="font-bold text-on-surface">27</p>
</div>
<div className="space-y-2">
<button className="w-full py-2 px-3 rounded-xl border border-blue-100 text-primary text-xs font-bold bg-blue-50 hover:bg-blue-100 transition-colors">09:00 AM</button>
<button className="w-full py-2 px-3 rounded-xl border border-blue-100 text-primary text-xs font-bold bg-blue-50 hover:bg-blue-100 transition-colors">11:30 AM</button>
<button className="w-full py-2 px-3 rounded-xl border border-blue-100 text-primary text-xs font-bold bg-blue-50 hover:bg-blue-100 transition-colors">04:00 PM</button>
</div>
</div>
{/*  Fri  */}
<div className="space-y-4">
<div className="text-center p-2 rounded-xl bg-surface-container-low">
<p className="text-[10px] font-bold text-gray-400 uppercase">Fri</p>
<p className="font-bold text-on-surface">28</p>
</div>
<div className="space-y-2">
<button className="w-full py-2 px-3 rounded-xl border border-blue-100 text-primary text-xs font-bold bg-blue-50 hover:bg-blue-100 transition-colors">09:00 AM</button>
<button className="w-full py-2 px-3 rounded-xl border border-blue-100 text-primary text-xs font-bold bg-blue-50 hover:bg-blue-100 transition-colors">10:30 AM</button>
</div>
</div>
{/*  Sat  */}
<div className="space-y-4">
<div className="text-center p-2 rounded-xl bg-surface-container-low">
<p className="text-[10px] font-bold text-gray-400 uppercase">Sat</p>
<p className="font-bold text-on-surface">29</p>
</div>
<div className="py-4 text-center">
<p className="text-[10px] font-bold text-gray-300">NO SLOTS</p>
</div>
</div>
{/*  Sun  */}
<div className="space-y-4">
<div className="text-center p-2 rounded-xl bg-surface-container-low">
<p className="text-[10px] font-bold text-gray-400 uppercase">Sun</p>
<p className="font-bold text-on-surface">30</p>
</div>
<div className="py-4 text-center">
<p className="text-[10px] font-bold text-gray-300">OFF DAY</p>
</div>
</div>
</div>
</div>
{/*  About Info Section  */}
<div className="mt-8 bg-surface rounded-3xl p-8 shadow-sm">
<h3 className="font-headline-md text-headline-md text-text-primary mb-4">Professional Biography</h3>
<p className="text-text-secondary font-body-md leading-relaxed mb-6">
                            Dr. Jonathan Aris is a board-certified cardiologist with over 12 years of experience in diagnosing and treating various heart conditions. He specializes in interventional cardiology, with a focus on minimally invasive procedures. Dr. Aris graduated from the Harvard Medical School and completed his residency at Mayo Clinic. He is known for his patient-centric approach and commitment to utilizing the latest medical technologies to improve heart health.
                        </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<h4 className="font-bold text-on-surface mb-3 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">school</span>
                                    Education
                                </h4>
<ul className="space-y-2 text-text-secondary text-sm">
<li className="flex items-start gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
<div>
<p className="font-bold text-on-surface">Harvard Medical School</p>
<p className="">Doctor of Medicine (M.D.)</p>
</div>
</li>
<li className="flex items-start gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
<div>
<p className="font-bold text-on-surface">Stanford University</p>
<p className="">B.S. in Biology</p>
</div>
</li>
</ul>
</div>
<div>
<h4 className="font-bold text-on-surface mb-3 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">emoji_events</span>
                                    Specializations
                                </h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-surface-container-low rounded-full text-xs font-bold text-on-surface-variant">Heart Failure</span>
<span className="px-3 py-1 bg-surface-container-low rounded-full text-xs font-bold text-on-surface-variant">Arrhythmia</span>
<span className="px-3 py-1 bg-surface-container-low rounded-full text-xs font-bold text-on-surface-variant">Preventative Care</span>
<span className="px-3 py-1 bg-surface-container-low rounded-full text-xs font-bold text-on-surface-variant">Cardiac Imaging</span>
</div>
</div>
</div>
</div>
</div>
{/*  Right Column: Sticky Booking Card  */}
<div className="w-full lg:w-[380px]">
<div className="sticky top-20">
<div className="bg-surface rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
<div className="p-6 bg-primary text-white">
<h3 className="font-headline-md text-headline-md mb-1">Book Appointment</h3>
<p className="text-blue-100 text-sm">Secure your spot with Dr. Aris</p>
</div>
<div className="p-6 space-y-6">
{/*  Next Availability Info  */}
<div className="flex items-start gap-4 p-4 rounded-2xl bg-blue-50 border border-blue-100">
<div className="w-12 h-12 rounded-xl bg-white flex flex-col items-center justify-center text-primary shadow-sm">
<p className="text-[10px] font-black uppercase">Oct</p>
<p className="text-lg font-black leading-tight">25</p>
</div>
<div>
<p className="text-sm font-bold text-primary">Next Available Slot</p>
<p className="text-xs text-text-secondary">Tomorrow at 11:00 AM</p>
</div>
</div>
{/*  Form Factors  */}
<div className="space-y-4">
<div>
<label className="block font-bold text-on-surface text-sm mb-2">Visit Reason</label>
<select className="w-full rounded-2xl border-gray-200 bg-surface-container-low text-sm focus:ring-primary focus:border-primary">
<option>General Cardiac Checkup</option>
<option>Hypertension Management</option>
<option>Chest Pain Consultation</option>
<option>Follow-up Visit</option>
</select>
</div>
<div>
<label className="block font-bold text-on-surface text-sm mb-2">Consultation Type</label>
<div className="grid grid-cols-2 gap-2">
<button className="flex items-center justify-center gap-2 py-3 rounded-2xl border-2 border-primary bg-blue-50 text-primary font-bold">
<span className="material-symbols-outlined text-sm">apartment</span>
                                                In-Clinic
                                            </button>
<button className="flex items-center justify-center gap-2 py-3 rounded-2xl border-2 border-gray-100 text-gray-500 font-bold hover:border-gray-200">
<span className="material-symbols-outlined text-sm">videocam</span>
                                                Video Call
                                            </button>
</div>
</div>
</div>
{/*  Price Detail  */}
<div className="pt-4 border-t border-dashed border-gray-200">
<div className="flex justify-between items-center mb-2">
<span className="text-text-secondary text-sm">Consultation Fee</span>
<span className="font-bold text-on-surface">$150.00</span>
</div>
<div className="flex justify-between items-center">
<span className="text-text-secondary text-sm">Booking Fee</span>
<span className="font-bold text-on-surface">$5.00</span>
</div>
<div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
<span className="font-black text-on-surface">Total Payable</span>
<span className="text-2xl font-black text-primary">$155.00</span>
</div>
</div>
{/*  Action  */}
<button className="w-full py-4 rounded-full bg-primary text-white font-black text-lg shadow-xl shadow-blue-200 hover:scale-[1.02] active:scale-95 transition-all">
                                    Confirm Booking
                                </button>
<p className="text-center text-[10px] text-gray-400">
                                    Free cancellation up to 24 hours before the appointment
                                </p>
</div>
</div>
{/*  Clinic Map Card  */}
<div className="mt-6 bg-surface rounded-3xl p-4 shadow-sm border border-gray-100">
<div className="relative h-40 rounded-2xl overflow-hidden mb-4">
<img alt="Clinic Map" className="w-full h-full object-cover" data-alt="Stylized modern city map view of Manhattan, soft pastel colors, medical heart icons marking clinic locations" data-location="New York" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ4zxtogPm9DM9XBnRaY9ftOJ2dvDvhFLqQFEGjAN_wB6jxXZraql3wY3iG4sPy-SESrPSNaDjwjc0A-yMP1NIY1Y7pEyEwtrBAZQhEsKcPrwruj4FfXswMZsu9Yd01jrDUE6Rs3uSINVQYye1_EOstKjl1iMw7oBtjH51Zv-9ZzG8-SA24c9QR9zfnmOTq1P22mL0AjchHXKdWeOuBn41vE2zidb3lpEnL2qv_MAPis0NRAKqxtKaqjaWTOn0fMaj2dcnR_DfRBPx" />
<div className="absolute inset-0 bg-primary/10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>location_on</span>
</div>
</div>
</div>
<div className="px-2">
<p className="font-bold text-on-surface text-sm">City Heart Center</p>
<p className="text-xs text-text-secondary">4521 Madison Avenue, 3rd Floor, NY 10022</p>
<button className="mt-3 text-primary font-black text-xs uppercase tracking-wider flex items-center gap-1 hover:gap-2 transition-all">
                                    Get Directions
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Footer Padding  */}
<div className="h-20"></div>
</main>



    </>
  );
}
