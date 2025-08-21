export function isOfficeHours() {
    const now = new Date();
    const day = now.getDay(); // 0=Sunday, 1=Monday … 6=Saturday
    const hour = now.getHours();
    // open Mon-Fri, 9am–5pm
    const isWeekday = day >= 1 && day <= 5;
    const withinHours = hour >= 9 && hour < 17;
    return isWeekday && withinHours;
}
