export function rubricExcellent(score) {
    if (score > 8) {
        return "Excellent";
    } else if (score >= 5) {
        return "Pass";
    } else {
        return "Fail";
    }
}