"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWeek = exports.DaysWeek = void 0;
var DaysWeek;
(function (DaysWeek) {
    DaysWeek[DaysWeek["Monday"] = 0] = "Monday";
    DaysWeek[DaysWeek["Tuesday"] = 1] = "Tuesday";
    DaysWeek[DaysWeek["Wednesday"] = 2] = "Wednesday";
    DaysWeek[DaysWeek["Thursday"] = 3] = "Thursday";
    DaysWeek[DaysWeek["Friday"] = 4] = "Friday";
    DaysWeek[DaysWeek["Saturday"] = 5] = "Saturday";
    DaysWeek[DaysWeek["Sunday"] = 6] = "Sunday";
})(DaysWeek || (exports.DaysWeek = DaysWeek = {}));
function isWeek(day) {
    if (day == DaysWeek.Saturday || day == DaysWeek.Sunday) {
        console.log("entró");
        return "this day ".concat(day, " is a weekend");
    }
    else {
        return "this day ".concat(day, " is a weekday");
    }
}
exports.isWeek = isWeek;
console.log(isWeek(DaysWeek.Saturday));
