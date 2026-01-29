# BioMed Tracker: Medical Device Maintenance & Inventory System

## Project Overview
The **BioMed Tracker** is a specialized inventory management system designed for clinical engineers and biomedical technicians. It provides a centralized dashboard to track medical equipment, monitor maintenance statuses (PM - Preventive Maintenance), and ensure all hospital assets are compliant with safety standards.

This project demonstrates proficiency in dynamic data handling, DOM manipulation, and state management within a healthcare context.

---

## 🛠 Features
* **Asset Inventory Dashboard**: Real-time overview of all medical devices in the facility.
* **Maintenance Tracking**: Visual indicators for equipment that is "Operational," "Under Repair," or "Due for PM."
* **Dynamic Search & Filtering**: Quickly locate devices by Asset ID, Department (ICU, Surgery, Radiology), or Device Category.
* **Interactive Modals**: Detailed views for specific device history and technical specifications.
* **Bilingual Support (EN | ES)**: Integrated language toggle to support diverse clinical engineering teams.

---

## 🏗 Technical Implementation
* **Modular JavaScript**: Separated logic between `app.js` (UI/Events) and `devices.js` (Data/State Management).
* **Dynamic Rendering**: Generates device cards and status updates directly from a data object without hard-coding HTML entries.
* **Responsive UI**: A "Medical Grade" design system using CSS variables for high-contrast visibility and accessibility.

---

## 📂 File Structure
* `index.html`: The main dashboard structure including the device grid and maintenance filters.
* `main.css`: Professional healthcare-themed styling with responsive grid layouts.
* `app.js`: Handles user interactions, search logic, and UI updates.
* `devices.js`: Contains the core data structure and maintenance status logic.

---

## 🎓 Academic Purpose
<section id="purpose">
    <h3>Purpose of This Site</h3>
    <p>This website was created in partial fulfillment of the CIS 3030 course requirements at MSU Denver.</p>
    <dl>
        <dt>Student Developer</dt>
        <dd>David Quintana</dd>
        <dt>Contact</dt>
        <dd>dquint32@msudenver.edu</dd>
        <dt>Language Preference</dt>
        <dd>English | Spanish</dd>
        <dt>Course Info</dt>
        <dd>CIS 3030 - Web Development</dd>
    </dl>
</section>

---

## 🚀 Deployment & Usage
1.  Clone the repository.
2.  Open `index.html` in a browser.
3.  Use the search bar to filter by Asset ID (e.g., "DEF-001").
4.  Switch between **EN** and **ES** using the toggle to see the bilingual interface in action.

---

**Note:** This application is a prototype for educational purposes. It is intended to showcase front-end development skills applied to Healthcare Technology Management (HTM).
