/**
 * Bio-Med Inventory Tracker Logic
 * Handles initialization, filtering, sorting, and status calculation.
 */

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

// State to hold current view data
let currentDevices = [];

function initApp() {
    // 1. Load data from the global variable defined in devices.js
    if (typeof deviceData === 'undefined') {
        console.error('Device data not loaded.');
        return;
    }
    
    // Create a local copy to manipulate
    currentDevices = [...deviceData];

    // 2. Populate Department Filter
    populateFilter();

    // 3. Render initial table
    renderTable(currentDevices);

    // 4. Setup Event Listeners
    setupEventListeners();
}

/**
 * Populates the department dropdown with unique values from data
 */
function populateFilter() {
    const filterSelect = document.getElementById('dept-filter');
    // Get unique departments and sort alphabetically
    const departments = [...new Set(deviceData.map(d => d.department))].sort();

    departments.forEach(dept => {
        const option = document.createElement('option');
        option.value = dept;
        option.textContent = dept;
        filterSelect.appendChild(option);
    });
}

/**
 * Calculates the status of a device based on inspection frequency.
 * Assumption: Current date is Jan 15, 2026 (based on prompt context).
 * In a real app, use `new Date()` instead of hardcoded `today`.
 */
function calculateStatus(lastDateStr, freqMonths) {
    // NOTE: Hardcoding today's date based on the prompt's current time context 
    // so the demo data makes sense aesthetically. 
    // In production, use: const today = new Date();
    const today = new Date("2026-01-15T00:00:00");
    
    // Normalize time component
    today.setHours(0,0,0,0);

    const lastDate = new Date(lastDateStr);
    
    // Calculate Next Due Date
    const nextDate = new Date(lastDate);
    nextDate.setMonth(nextDate.getMonth() + freqMonths);

    // Calculate time difference in milliseconds
    const diffTime = nextDate - today;
    // Convert to days
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let statusClass = 'ok-status';
    let statusLabel = 'OK';

    if (diffDays < 0) {
        statusClass = 'overdue';
        statusLabel = 'OVERDUE';
    } else if (diffDays <= 30) {
        statusClass = 'due-soon';
        statusLabel = 'Due Soon';
    }

    return {
        statusClass,
        statusLabel,
        nextDate: nextDate.toISOString().split('T')[0] // Format YYYY-MM-DD
    };
}

/**
 * Renders the table rows based on the provided array
 */
function renderTable(devices) {
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = ''; // Clear existing rows

    // Sort alphabetically by device name
    devices.sort((a, b) => a.device_name.localeCompare(b.device_name));

    devices.forEach(device => {
        const logic = calculateStatus(device.last_inspection_date, device.inspection_frequency_months);
        
        const row = document.createElement('tr');
        
        // Optional: Add specific class if overdue for whole-row styling capabilities
        if (logic.statusClass === 'overdue') {
            row.classList.add('row-overdue');
        }

        row.innerHTML = `
            <td><strong>${device.device_name}</strong></td>
            <td>${device.model}</td>
            <td>${device.serial_number}</td>
            <td>${device.department}</td>
            <td>${device.last_inspection_date}</td>
            <td>${logic.nextDate}</td>
            <td><span class="badge ${logic.statusClass}">${logic.statusLabel}</span></td>
            <td>
                <button class="btn-inspect" onclick="markInspected(${device.id})">
                    Mark Inspected
                </button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

/**
 * Event Handler: Updates a device's last inspection date to today
 */
// Make function accessible globally for the onclick handler in HTML template string
window.markInspected = function(id) {
    // Find device in the source data store
    const device = deviceData.find(d => d.id === id);
    
    if (device) {
        // Use the same hardcoded date for consistency with calculateStatus above.
        // In production, use: new Date().toISOString().split('T')[0];
        const todayStr = "2026-01-15"; 
        device.last_inspection_date = todayStr;
        
        console.log(`Device ${id} marked inspected on ${todayStr}`);

        // Re-apply current filter to view to reflect changes
        applyFilter(); 
    }
};

/**
 * Setup Event Listeners
 */
function setupEventListeners() {
    document.getElementById('dept-filter').addEventListener('change', applyFilter);
}

/**
 * Applies the department filter and re-renders
 */
function applyFilter() {
    const selectedDept = document.getElementById('dept-filter').value;
    
    if (selectedDept === 'all') {
        renderTable(deviceData);
    } else {
        const filtered = deviceData.filter(d => d.department === selectedDept);
        renderTable(filtered);
    }
}