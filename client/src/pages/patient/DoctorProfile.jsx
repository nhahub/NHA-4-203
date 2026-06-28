import React from 'react';
import { Link } from 'react-router-dom';

export default function DoctorProfile() {
  return (
    <>
      
{/*  TopNavBar Component  */}
<header className="bg-surface/90 dark:bg-surface-container/90 backdrop-blur-md shadow-sm dark:shadow-none border-b border-outline-variant/20 docked full-width top-0 sticky z-50">
<div className="flex justify-between items-center w-full px-container-padding h-20 max-w-full mx-auto">
<div className="flex items-center gap-2 font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">
<span className="material-symbols-outlined text-primary" data-icon="medical_services">medical_services</span>
<span>EasyCare</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-on-surface-variant dark:text-outline font-medium hover:text-primary dark:hover:text-primary-fixed-dim transition-colors font-label-md text-label-md" href="#">Home</a>
<a className="text-on-surface-variant dark:text-outline font-medium hover:text-primary dark:hover:text-primary-fixed-dim transition-colors font-label-md text-label-md" href="#">Dashboard</a>
<a className="text-primary dark:text-primary-fixed-dim font-bold border-b-2 border-primary dark:border-primary-fixed-dim pb-1 font-label-md text-label-md" href="#">Find Doctors</a>
<a className="text-on-surface-variant dark:text-outline font-medium hover:text-primary dark:hover:text-primary-fixed-dim transition-colors font-label-md text-label-md" href="#">My Appointments</a>
<a className="text-on-surface-variant dark:text-outline font-medium hover:text-primary dark:hover:text-primary-fixed-dim transition-colors font-label-md text-label-md" href="#">Medical Records</a>
<a className="text-on-surface-variant dark:text-outline font-medium hover:text-primary dark:hover:text-primary-fixed-dim transition-colors font-label-md text-label-md" href="#">Upload Results</a>
</nav>
<div className="flex items-center gap-4">
<button className="p-2 hover:bg-surface-container-low dark:hover:bg-surface-container-highest rounded-full transition-all duration-200 scale-95 active:scale-90">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="notifications">notifications</span>
</button>
<button className="p-2 hover:bg-surface-container-low dark:hover:bg-surface-container-highest rounded-full transition-all duration-200 scale-95 active:scale-90">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="settings">settings</span>
</button>
<img alt="User profile avatar pill" className="w-10 h-10 rounded-full border-2 border-primary-container object-cover" data-alt="A professional close-up headshot of a smiling young adult man with short dark hair, wearing a casual navy blue blazer. The background is a softly blurred office environment with warm, natural sunlight filtering through windows, creating a clean, high-end corporate aesthetic consistent with a modern healthcare application." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL85a8ZYV9BPbAO5c4fx7NHPL6U0TH-MXWAUQjw-s8MVlWDplhxAvgLwKCUBiCxEMQ4Ma8qVW4drHwZyS9EVnInetJaWsHWdXky4eaTeUwUCW9BSK4D_90_b9uslfFG-vh1421WxSqF4HyV2jKlYZnU8GxMuGMGKjoIOeCnR8mBrbcIKmn9abq3oo15YsAM4sg1TpFdbdhUWtSPahwBQ1_bohzfBZNB0cp6PQdtmJpok8q_6QeoWF9B5xXeY4PROe0-KKF1blOfB0D"/>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-container-padding py-8">
{/*  Profile Header Section  */}
<div className="relative w-full mb-24">
{/*  Banner  */}
<div className="h-64 w-full rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-primary to-primary-container relative">
<div className="absolute inset-0 opacity-20" style={{"backgroundImage":"radial-gradient(circle at 2px 2px, white 1px, transparent 0)","backgroundSize":"24px 24px"}}></div>
</div>
{/*  Doctor Overlay Card  */}
<div className="absolute -bottom-16 left-8 right-8 md:right-auto md:w-2/3 flex flex-col md:flex-row items-end md:items-center gap-6 glass-card p-6 rounded-xl shadow-xl">
<div className="relative">
<img alt="Dr. Julian Vance" className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-md object-cover" data-alt="A professional and friendly portrait of Dr. Julian Vance, a male senior cardiologist in his late 40s with a kind expression. He is wearing a clean white lab coat over a blue button-down shirt with a stethoscope draped around his neck. The lighting is soft and bright, set against a sterile yet welcoming medical clinic background with cool blue tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAeq0U8pit9ioASGWiNxjdUB54JFMv2LAS5PDqGj_YjkpnVqZNhRhGejsLr5YTx2TAwEEtOvvqIrXRcIUNJbaG2LdEuSpLgNxvT-6PJiTb08pJsrZU30fTBrGX-RVHX1zuIyhHHhj8Uwgt1PzRyyztRjuxp0Y-7iGZQ58sEAerb6yCM6efgTzbgtz_Z6U8BA5IFp0HK2Np5ABOG3o9YHBQPGGADTr_8_o6da7LOjLwh1CBocBjdYrDT8kW-enjsFzYLbEG89-3Xu95"/>
<div className="absolute bottom-2 right-2 bg-secondary-container text-on-secondary-container px-2 py-1 rounded-full text-label-sm font-bold flex items-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-[14px] filled-icon" data-icon="verified">verified</span>
                        Verified
                    </div>
</div>
<div className="flex-grow">
<h1 className="font-headline-lg text-headline-lg text-primary">Dr. Julian Vance</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-2">Senior Cardiologist • HeartCare Specialty Clinic</p>
<div className="flex flex-wrap gap-4 items-center">
<div className="flex items-center gap-1.5 text-on-surface-variant font-label-md">
<span className="material-symbols-outlined text-warning filled-icon" data-icon="star">star</span>
<span className="font-bold text-on-surface">4.9</span> (1.2k+ Reviews)
                        </div>
<div className="flex items-center gap-1.5 text-on-surface-variant font-label-md">
<span className="material-symbols-outlined text-primary" data-icon="work_history">work_history</span>
<span className="font-bold text-on-surface">12 Years</span> Experience
                        </div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
{/*  Left Content: Tabs & Info  */}
<div className="lg:col-span-8 space-y-gutter">
{/*  Tab Navigation  */}
<div className="flex border-b border-outline-variant/30 overflow-x-auto no-scrollbar">
<button className="px-6 py-4 border-b-2 border-primary text-primary font-bold font-label-md whitespace-nowrap">About</button>
<button className="px-6 py-4 border-b-2 border-transparent text-on-surface-variant hover:text-primary font-medium font-label-md whitespace-nowrap transition-colors">Availability</button>
<button className="px-6 py-4 border-b-2 border-transparent text-on-surface-variant hover:text-primary font-medium font-label-md whitespace-nowrap transition-colors">Reviews</button>
<button className="px-6 py-4 border-b-2 border-transparent text-on-surface-variant hover:text-primary font-medium font-label-md whitespace-nowrap transition-colors">Location</button>
</div>
{/*  About Content  */}
<div className="bg-surface p-card-inner-padding rounded-xl shadow-sm space-y-6">
<div>
<h3 className="font-headline-md text-headline-md text-primary mb-3">Professional Bio</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                            Dr. Julian Vance is a world-renowned Senior Cardiologist specializing in interventional cardiology and structural heart diseases. With over 12 years of clinical practice at the HeartCare Specialty Clinic, he has performed over 2,000 successful cardiovascular procedures. His patient-centric approach combines cutting-edge technology with compassionate care to ensure the best possible outcomes for heart health.
                        </p>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-primary mb-3">Specialties &amp; Skills</h3>
<div className="flex flex-wrap gap-2">
<span className="px-4 py-2 bg-primary-container/10 text-primary border border-primary/20 rounded-full font-label-md">Cardiology</span>
<span className="px-4 py-2 bg-primary-container/10 text-primary border border-primary/20 rounded-full font-label-md">Heart Surgery</span>
<span className="px-4 py-2 bg-primary-container/10 text-primary border border-primary/20 rounded-full font-label-md">Echocardiogram</span>
<span className="px-4 py-2 bg-primary-container/10 text-primary border border-primary/20 rounded-full font-label-md">Angioplasty</span>
<span className="px-4 py-2 bg-primary-container/10 text-primary border border-primary/20 rounded-full font-label-md">Preventive Care</span>
</div>
</div>
</div>
{/*  Availability Content (Preview for visibility)  */}
<div className="bg-surface p-card-inner-padding rounded-xl shadow-sm">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-md text-headline-md text-primary">Availability</h3>
<div className="flex gap-2">
<button className="p-2 border border-outline-variant rounded-lg hover:bg-surface-container-low"><span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span></button>
<button className="p-2 border border-outline-variant rounded-lg hover:bg-surface-container-low"><span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span></button>
</div>
</div>
<div className="grid grid-cols-7 gap-2 mb-4">
<div className="text-center font-label-md text-on-surface-variant">Mon</div>
<div className="text-center font-label-md text-on-surface-variant">Tue</div>
<div className="text-center font-label-md text-on-surface-variant">Wed</div>
<div className="text-center font-label-md text-on-surface-variant">Thu</div>
<div className="text-center font-label-md text-on-surface-variant">Fri</div>
<div className="text-center font-label-md text-on-surface-variant">Sat</div>
<div className="text-center font-label-md text-on-surface-variant">Sun</div>
{/*  Calendar Pills Example  */}
<div className="space-y-2">
<div className="w-full py-2 text-center text-label-sm rounded-full bg-secondary-container text-on-secondary-container font-bold cursor-pointer hover:opacity-80">09:00</div>
<div className="w-full py-2 text-center text-label-sm rounded-full bg-surface-container-highest text-outline font-medium">10:30</div>
</div>
<div className="space-y-2">
<div className="w-full py-2 text-center text-label-sm rounded-full bg-surface-container-highest text-outline font-medium">09:30</div>
<div className="w-full py-2 text-center text-label-sm rounded-full bg-secondary-container text-on-secondary-container font-bold cursor-pointer hover:opacity-80">11:00</div>
</div>
<div className="space-y-2">
<div className="w-full py-2 text-center text-label-sm rounded-full bg-secondary-container text-on-secondary-container font-bold cursor-pointer hover:opacity-80">08:00</div>
<div className="w-full py-2 text-center text-label-sm rounded-full bg-secondary-container text-on-secondary-container font-bold cursor-pointer hover:opacity-80">10:00</div>
</div>
<div className="space-y-2">
<div className="w-full py-2 text-center text-label-sm rounded-full bg-surface-container-highest text-outline font-medium">09:00</div>
<div className="w-full py-2 text-center text-label-sm rounded-full bg-secondary-container text-on-secondary-container font-bold cursor-pointer hover:opacity-80">14:00</div>
</div>
<div className="space-y-2">
<div className="w-full py-2 text-center text-label-sm rounded-full bg-secondary-container text-on-secondary-container font-bold cursor-pointer hover:opacity-80">09:00</div>
<div className="w-full py-2 text-center text-label-sm rounded-full bg-surface-container-highest text-outline font-medium">11:00</div>
</div>
<div className="space-y-2">
<div className="w-full py-2 text-center text-label-sm rounded-full bg-surface-container-highest text-outline font-medium">10:00</div>
</div>
<div className="space-y-2">
<div className="w-full py-2 text-center text-label-sm text-outline italic">Closed</div>
</div>
</div>
</div>
{/*  Reviews Content  */}
<div className="space-y-4">
<h3 className="font-headline-md text-headline-md text-primary">Patient Reviews</h3>
<div className="bg-surface p-card-inner-padding rounded-xl shadow-sm flex gap-4 border border-outline-variant/10">
<img alt="Patient Reviewer" className="w-12 h-12 rounded-full object-cover" data-alt="A candid profile portrait of a middle-aged woman with a gentle smile and graying hair. She is wearing a soft beige sweater in a bright, warmly lit living room. The style is natural and emphasizes high-quality healthcare trust and positive patient outcomes." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoTMzWasVInru24E5opTuR8QdLc2IS9w95RAZujShtrjzV3jht6d9EsqjR4DCAHqXYY06AT05RQa2A9DSD7Ad8mHRv4eho0oSaBbpRSsKjV4Kn1RRcEqX6-uT_ZdaYztZR2SxNhKYpM1zbGDDD1JLpUCoE8qsZAMugxMIfSU_h5VUFiG6X0PQOsic_5W8P40LhVxHHtYUpV5-vqKj9qyFUWCJD9Jkln4Bxr5HE6fj2tRgQmxRRb53XFDmQ9OTm4u8Pz0BEdupppM2i"/>
<div className="flex-grow">
<div className="flex justify-between items-start mb-1">
<h4 className="font-bold text-on-surface font-body-md">Sarah Jenkins</h4>
<span className="text-on-surface-variant font-label-sm">2 days ago</span>
</div>
<div className="flex mb-2">
<span className="material-symbols-outlined text-[18px] text-warning filled-icon" data-icon="star">star</span>
<span className="material-symbols-outlined text-[18px] text-warning filled-icon" data-icon="star">star</span>
<span className="material-symbols-outlined text-[18px] text-warning filled-icon" data-icon="star">star</span>
<span className="material-symbols-outlined text-[18px] text-warning filled-icon" data-icon="star">star</span>
<span className="material-symbols-outlined text-[18px] text-warning filled-icon" data-icon="star">star</span>
</div>
<p className="font-body-md text-on-surface-variant italic text-sm leading-relaxed">
                                "Dr. Vance is incredible. He took the time to explain my procedure in detail and made me feel completely at ease. I've never had a doctor show this much care."
                            </p>
</div>
</div>
<div className="bg-surface p-card-inner-padding rounded-xl shadow-sm flex gap-4 border border-outline-variant/10">
<img alt="Patient Reviewer" className="w-12 h-12 rounded-full object-cover" data-alt="A portrait of a smiling middle-aged man with short hair and a professional appearance. He is wearing a grey polo shirt in a bright office environment. The image conveys a sense of well-being and satisfaction with medical services in a clean, modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZzAByc823NPUgODdyhiWz3ZIScfz2gEMqx2ZTR9b39Zz8nJUBb7rRc88QhdLJSJUd-0LR14O5cxqVdAnHBu8_RZrYsbqXi48xQiwKltuQN_fbVz14gydSKckhlWIepkjqQin69m3ioXS_St_m86qnI3ngMwxhsVHj-w0PO_zZoOpz8AdPBEWDa7ZcDjFDfYOSBF25AbDb1ilSWSk2lHcnX-v7y9w8p21g6o1Eab1CKA_Zgb5VRiDQpRcQ82Zt3aPD1mm2MNcWt9nn"/>
<div className="flex-grow">
<div className="flex justify-between items-start mb-1">
<h4 className="font-bold text-on-surface font-body-md">Robert Chen</h4>
<span className="text-on-surface-variant font-label-sm">1 week ago</span>
</div>
<div className="flex mb-2">
<span className="material-symbols-outlined text-[18px] text-warning filled-icon" data-icon="star">star</span>
<span className="material-symbols-outlined text-[18px] text-warning filled-icon" data-icon="star">star</span>
<span className="material-symbols-outlined text-[18px] text-warning filled-icon" data-icon="star">star</span>
<span className="material-symbols-outlined text-[18px] text-warning filled-icon" data-icon="star">star</span>
<span className="material-symbols-outlined text-[18px] text-warning" data-icon="star">star</span>
</div>
<p className="font-body-md text-on-surface-variant italic text-sm leading-relaxed">
                                "Very professional clinic. The waiting times were short and Dr. Vance's diagnosis was spot on. Highly recommended for anyone with heart concerns."
                            </p>
</div>
</div>
<button className="w-full py-3 text-primary font-bold font-label-md hover:bg-primary/5 rounded-xl transition-colors">Show All 1,248 Reviews</button>
</div>
</div>
{/*  Right Content: Booking Sidebar  */}
<aside className="lg:col-span-4 sticky top-28">
<div className="bg-surface p-6 rounded-xl shadow-xl border border-primary/10 space-y-6">
<div className="flex justify-between items-center">
<h3 className="font-headline-md text-headline-md text-on-surface">Book Appointment</h3>
<span className="text-primary font-bold text-headline-md">$120</span>
</div>
<div className="space-y-4">
<div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/30">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined text-primary" data-icon="event">event</span>
<span className="font-label-md text-on-surface font-bold">Next Available Slot</span>
</div>
<p className="font-body-md text-on-surface-variant ml-9">Tomorrow, Oct 24 at 09:00 AM</p>
</div>
<div className="space-y-2">
<label className="font-label-md text-on-surface-variant block px-1">Select Consultation Type</label>
<div className="grid grid-cols-2 gap-2">
<button className="p-3 rounded-xl border-2 border-primary bg-primary/5 text-primary font-bold text-sm flex flex-col items-center gap-1">
<span className="material-symbols-outlined" data-icon="person">person</span>
                                    In-Clinic
                                </button>
<button className="p-3 rounded-xl border-2 border-outline-variant bg-transparent text-on-surface-variant font-medium text-sm flex flex-col items-center gap-1 hover:border-primary/50 transition-colors">
<span className="material-symbols-outlined" data-icon="videocam">videocam</span>
                                    Virtual
                                </button>
</div>
</div>
<button className="w-full py-4 bg-primary text-on-primary rounded-full font-bold font-label-md shadow-lg shadow-primary/20 hover:bg-primary-container transition-all active:scale-95 flex items-center justify-center gap-2">
                            Book Now
                            <span className="material-symbols-outlined text-[20px]" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<div className="pt-4 border-t border-outline-variant/30">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary" data-icon="info">info</span>
<p className="text-[12px] leading-snug text-on-surface-variant font-body-md">
                                Free cancellation up to 24 hours before the appointment. All insurance plans accepted at HeartCare Specialty Clinic.
                            </p>
</div>
</div>
</div>
{/*  Secondary Info Card  */}
<div className="mt-6 bg-surface-container-highest p-4 rounded-xl space-y-3">
<h4 className="font-bold font-label-md text-on-surface">Clinic Information</h4>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-[20px]" data-icon="location_on">location_on</span>
<p className="text-sm text-on-surface-variant">124 Medical Plaza, West Wing, HeartCare Suite 402, New York, NY</p>
</div>
<div className="w-full h-32 rounded-lg bg-surface-dim overflow-hidden relative">
<img alt="Map location" className="w-full h-full object-cover" data-location="New York City" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzn9Co2G-MpXXjd2Gwo8QRMypArx-NSfjxNOlcABEGTq3IyJS5JP9AhSIEtb5_nce778eJ2Tt5cCIEZvR3xk7MiegkQZW-XYzlBpnP5ROXqXJ0odhBSrB9ixh0TcYrOWgBE4J3OXAuhRrF7kQtbyPU7jdGAb5pYFMPaT54igqyvPXN3O_fGl-ft75n7Oaohng9iIjaFZ4VIIJiLdJgVU355fX5U_-8rZ21ZBpVMAAMkOtcoTfNQ9bDEK7dcKDc23bWH5s9GRnl8HsL"/>
<div className="absolute inset-0 bg-primary/10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<span className="material-symbols-outlined text-danger text-[32px] filled-icon" data-icon="location_on">location_on</span>
</div>
</div>
</div>
</aside>
</div>
</main>
{/*  Footer Component  */}
<footer className="bg-surface-container-lowest dark:bg-surface-container-highest border-t border-outline-variant/30 full-width bottom-0">
<div className="flex flex-col md:flex-row justify-between items-center py-gutter px-container-padding gap-4 max-w-7xl mx-auto">
<div className="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-on-primary-fixed">
                EasyCare
            </div>
<div className="flex flex-wrap justify-center gap-6">
<a className="text-on-surface-variant dark:text-outline font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
<a className="text-on-surface-variant dark:text-outline font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all opacity-80 hover:opacity-100" href="#">Terms of Service</a>
<a className="text-on-surface-variant dark:text-outline font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all opacity-80 hover:opacity-100" href="#">Help Center</a>
<a className="text-on-surface-variant dark:text-outline font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all opacity-80 hover:opacity-100" href="#">Contact Us</a>
</div>
<p className="font-body-md text-body-md text-on-surface-variant dark:text-outline">
                © 2024 EasyCare. Trusted Healthcare Technology.
            </p>
</div>
</footer>

    </>
  );
}
