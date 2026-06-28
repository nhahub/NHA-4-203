const fs = require('fs');
const path = require('path');

const mappings = [
  // Patient Pages
  {
    src: '../easycare-uiux/easycare-uiux/patient/patient_dashboard_top_nav/code.html',
    dest: 'client/src/pages/patient/Dashboard.jsx',
    name: 'Dashboard'
  },
  {
    src: '../easycare-uiux/easycare-uiux/patient/book_appointment_top_nav/code.html',
    dest: 'client/src/pages/patient/BookAppointment.jsx',
    name: 'BookAppointment'
  },
  {
    src: '../easycare-uiux/easycare-uiux/patient/my_appointments_top_nav/code.html',
    dest: 'client/src/pages/patient/MyAppointments.jsx',
    name: 'MyAppointments'
  },
  {
    src: '../easycare-uiux/easycare-uiux/patient/medical_records/code.html',
    dest: 'client/src/pages/patient/MedicalRecords.jsx',
    name: 'MedicalRecords'
  },
  {
    src: '../easycare-uiux/easycare-uiux/patient/upload_results_unified_nav/code.html',
    dest: 'client/src/pages/patient/UploadResults.jsx',
    name: 'UploadResults'
  },
  {
    src: '../easycare-uiux/easycare-uiux/patient/map_search_page_unified_nav/code.html',
    dest: 'client/src/pages/patient/MapSearch.jsx',
    name: 'MapSearch'
  },
  {
    src: '../easycare-uiux/easycare-uiux/patient/find_doctors_map_unified_nav/code.html',
    dest: 'client/src/pages/patient/Doctors.jsx',
    name: 'Doctors'
  },

  // Doctor Pages
  {
    src: '../easycare-uiux/easycare-uiux/doctor/doctor_dashboard_1/code.html',
    dest: 'client/src/pages/doctor/DoctorDashboard.jsx',
    name: 'DoctorDashboard'
  },
  {
    src: '../easycare-uiux/easycare-uiux/doctor/doctor_appointments/code.html',
    dest: 'client/src/pages/doctor/DoctorAppointments.jsx',
    name: 'DoctorAppointments'
  },
  {
    src: '../easycare-uiux/easycare-uiux/doctor/patient_records_1/code.html',
    dest: 'client/src/pages/doctor/DoctorPatientRecords.jsx',
    name: 'DoctorPatientRecords'
  },
  {
    src: '../easycare-uiux/easycare-uiux/doctor/lab_results_review_1/code.html',
    dest: 'client/src/pages/doctor/DoctorResults.jsx',
    name: 'DoctorResults'
  },
  {
    src: '../easycare-uiux/easycare-uiux/doctor/add_diagnosis/code.html',
    dest: 'client/src/pages/doctor/DoctorDiagnosis.jsx',
    name: 'DoctorDiagnosis'
  },
  {
    src: '../easycare-uiux/easycare-uiux/doctor/doctor_statistics/code.html',
    dest: 'client/src/pages/doctor/DoctorStats.jsx',
    name: 'DoctorStats'
  },
  {
    src: '../easycare-uiux/easycare-uiux/doctor/doctor_profile/code.html',
    dest: 'client/src/pages/patient/DoctorProfile.jsx',
    name: 'DoctorProfile'
  }
];

function htmlToJsx(html) {
  // Extract body content
  let bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let content = bodyMatch ? bodyMatch[1] : html;

  // Replace HTML comments with JSX comments
  content = content.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

  // Replace class with className
  content = content.replace(/\sclass="/g, ' className="');

  // Replace for with htmlFor
  content = content.replace(/\sfor="/g, ' htmlFor="');

  // Fix SVG attributes
  const svgAttrs = {
    'stroke-width': 'strokeWidth',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'fill-rule': 'fillRule',
    'clip-rule': 'clipRule',
    'tabindex': 'tabIndex'
  };
  
  for (const [key, value] of Object.entries(svgAttrs)) {
    const regex = new RegExp(`\\s${key}="([^"]*)"`, 'g');
    content = content.replace(regex, ` ${value}="$1"`);
  }

  // Handle inline styles style="font-variation-settings: 'FILL' 1;"
  // Very simplistic style converter for this specific case
  content = content.replace(/style="([^"]*)"/g, (match, styleString) => {
    // Split by semicolon
    const styles = styleString.split(';').filter(s => s.trim());
    const styleObj = {};
    styles.forEach(s => {
      let [key, val] = s.split(':').map(str => str.trim());
      if (key && val) {
        // camelCase key
        key = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
        styleObj[key] = val;
      }
    });
    return `style={${JSON.stringify(styleObj)}}`;
  });

  // Self closing tags (img, input, br, hr)
  content = content.replace(/<(img|input|br|hr)([^>]*?)(?<!\/)>/g, '<$1$2 />');
  
  return content;
}

mappings.forEach(mapping => {
  try {
    const htmlContent = fs.readFileSync(path.resolve(__dirname, mapping.src), 'utf8');
    const jsxContent = htmlToJsx(htmlContent);
    
    const reactComponent = `import React from 'react';
import { Link } from 'react-router-dom';

export default function ${mapping.name}() {
  return (
    <>
      ${jsxContent}
    </>
  );
}
`;

    fs.writeFileSync(path.resolve(__dirname, mapping.dest), reactComponent);
    console.log(`Converted ${mapping.src} to ${mapping.dest}`);
  } catch (err) {
    console.error(`Error processing ${mapping.name}: ${err.message}`);
  }
});
