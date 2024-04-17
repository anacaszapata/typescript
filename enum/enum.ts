 export enum DaysWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
export function isWeek(day:DaysWeek): string{
    if(day == DaysWeek.Saturday || day == DaysWeek.Sunday){
        console.log("entró");
        return `this day ${day} is a weekend`
    }else{

        return `this day ${day} is a weekday`
    }
}


console.log(isWeek(DaysWeek.Saturday))