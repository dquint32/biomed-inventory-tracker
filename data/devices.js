// Mock Data for Bio-Med Devices
// Note: Data is designed relative to a hypothetical "today" of Jan 15, 2026.

const deviceData = [
    {
        id: 101,
        device_name: "Infusion Pump",
        model: "Alaris 8100",
        serial_number: "AP-99283",
        department: "ICU",
        last_inspection_date: "2024-05-15", // Due May 2025 -> VERY Overdue relative to Jan 2026
        inspection_frequency_months: 12,
        risk_level: "High"
    },
    {
        id: 102,
        device_name: "Patient Monitor",
        model: "Philips IntelliVue MX450",
        serial_number: "PM-33211",
        department: "ER",
        last_inspection_date: "2025-12-10", // Due Dec 2026 -> OK
        inspection_frequency_months: 12,
        risk_level: "High"
    },
    {
        id: 103,
        device_name: "Defibrillator",
        model: "Zoll R Series",
        serial_number: "ZL-55412",
        department: "Cardiology",
        last_inspection_date: "2025-02-01", // Due Feb 2026 -> Due soon relative to Jan 15, 2026
        inspection_frequency_months: 12,
        risk_level: "High"
    },
    {
        id: 104,
        device_name: "ECG Machine",
        model: "GE MAC 2000",
        serial_number: "GE-11002",
        department: "Cardiology",
        last_inspection_date: "2025-06-20", 
        inspection_frequency_months: 6, // Next due Dec 20, 2025 -> Overdue relative to Jan 15, 2026
        risk_level: "Medium"
    },
    {
        id: 105,
        device_name: "Barcode Label Printer",
        model: "Zebra ZD420",
        serial_number: "ZB-88123",
        department: "Pharmacy",
        last_inspection_date: "2025-01-10",
        inspection_frequency_months: 24, // Next due Jan 2027 -> OK
        risk_level: "Low"
    },
    {
        id: 106,
        device_name: "Anesthesia Machine",
        model: "Drager Fabius",
        serial_number: "DR-77123",
        department: "Surgery",
        last_inspection_date: "2025-01-20", 
        inspection_frequency_months: 12, // Next due Jan 20, 2026 -> Due Soon relative to Jan 15, 2026
        risk_level: "High"
    },
    {
        id: 107,
        device_name: "Infusion Pump",
        model: "Alaris 8100",
        serial_number: "AP-99284",
        department: "ICU",
        last_inspection_date: "2025-11-01",
        inspection_frequency_months: 12, // Next due Nov 2026 -> OK
        risk_level: "High"
    },
    {
        id: 108,
        device_name: "Vital Signs Monitor",
        model: "Welch Allyn Connex",
        serial_number: "WA-22311",
        department: "Pediatrics",
        last_inspection_date: "2024-11-15", 
        inspection_frequency_months: 12, // Due Nov 15, 2025 -> Overdue relative to Jan 15, 2026
        risk_level: "Medium"
    }
];