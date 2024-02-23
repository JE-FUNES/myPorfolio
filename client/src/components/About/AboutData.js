//---- Start Number Data -----
export const NumberData = [
    {
        Number: calculateYearsDesigning(),
        Detail: "Years designing",
        Title: "Data changes every 1st of January",
        key: "yearsDesigning"
    },
    {
        Number: calculateHoursOfCode(),
        Detail: "Hours of Code",
        Title: "Data changes every 8 hours of code",
        key: "hoursOfCode"
    },
    {/*{
        Number: "285+",
        Detail: "Projet Completed",
    },*/}
    
]
//---- Start Number Data -----
//---- Start Btn Data -----
export const BtnData = [
    {
        btn1: "Contact Me",
        btn2: "Portfolio",
    },
]
//---- Start Btn Data -----

function calculateHoursOfCode() {
    // Fecha de inicio (el 1 de enero de 2024)
    const startDate = new Date(2024, 0, 1);
    
    // Fecha actual
    const currentDate = new Date();
    
    // Calcular el número de días hábiles transcurridos
    const totalDays = Math.ceil((currentDate - startDate) / (1000 * 60 * 60 * 24));
    const weekends = Math.floor(totalDays / 7) * 2; // Número de fines de semana completos
    const remainingDays = totalDays % 7; // Días restantes de la semana actual
    let extraHours = 0;
    
    // Sumar 8 horas por cada día hábil
    for (let i = 0; i < remainingDays; i++) {
        const dayOfWeek = (startDate.getDay() + i) % 7;
        if (dayOfWeek !== 0 && dayOfWeek !== 6) { // 0 y 6 corresponden a domingo y sábado
            extraHours += 8;
        }
    }
    
    // Calcular el número total de horas de código
    const totalHours = (totalDays - weekends) * 8 + extraHours;
    
    return (3000 + totalHours); // Punto de partida
}

function calculateYearsDesigning() {
    // Fecha de inicio (el 1 de enero de 1998)
    const startDate = new Date(1998, 0, 1);
    
    // Fecha actual
    const currentDate = new Date();
    
    // Calcular años transcurridos
    const years = currentDate.getFullYear() - startDate.getFullYear();
    
    // Ajustar si el día actual es anterior al día de inicio
    if (currentDate.getMonth() < startDate.getMonth() || (currentDate.getMonth() === startDate.getMonth() && currentDate.getDate() < startDate.getDate())) {
        return years - 1;
    }
    
    return years;
}