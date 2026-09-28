export function ageCalculator(year, month, day) {
    const today = new Date();
    const birthday = new Date(year, month, day);

    let age = today.getFullYear() - birthday.getFullYear();

    const currentMonth = today.getMonth() - birthday.getMonth();

    if (
        currentMonth < 0 ||
        (currentMonth === 0 && today.getDate() < birthday.getDate())
    ) {
        age--;
    }

    return age;
}