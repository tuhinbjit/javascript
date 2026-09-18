const employees = [
    { id: 1, name: "David", details: { role: "Dev", contact: { email: "david@tech.com" } }, kpiScore: 95 },
    { id: 2, name: "Alex", details: null, kpiScore: 0 }, 
    { id: 3, name: "Sarah", details: { role: "Manager" }, kpiScore: null } 
];



const emails = employees.map(emp => emp.details.contact.email); // app will crash

// Safe way using optional chaining
const safeEmails = employees.map(emp => emp.details?.contact?.email);
console.log(safeEmails);


const scoresWithNullish = employees.map(emp => emp.kpiScore ?? "0");
console.log(scoresWithNullish);


// 1. Filtering employees who have roles defined in their details.
const employeesWithRoles = employees.filter(emp => {
    return emp.details?.role !== undefined;
});

console.log(employeesWithRoles);


// 2. Mapping employee names who have roles defined.
const cleanProfiles = employees.map(emp => {
    return {
        empName: emp.name,
        jobRole: emp.details?.role ?? "Trainee", 
        performance: emp.kpiScore ?? "Pending"
    };
});

console.log(cleanProfiles);

// 3. Reducing to get the total KPI score of all employees (treating null or undefined as 0)
const groupedByRole = employees.reduce((report, emp) => {
    const role = emp.details?.role ?? "Unassigned";
    if (!report[role]) {
        report[role] = [];
    }
    report[role].push(emp.name);
    return report;

}, {});

console.log(groupedByRole);