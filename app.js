/*part1 Let Sunday =0 Monday = 1, Tuesday=2 Wednesday=3 Thursday=4 Friday =5 Saturday=6 */
function businessHours(dayNumber, hourNumber) {
    return hourNumber >= 9 && hourNumber <= 18 && dayNumber >= 1 && dayNumber <= 5;
}
/* Monday at 8 pm*/
//console.log("Monday at 8pm is " + businessHours(1, 20));
//Part 2
function getDayNumber(janFirstDayNumber, yearDayNumber) {
    return (janFirstDayNumber + yearDayNumber) % 7;
}
//Jan 24 Thursday 2019
//console.log("January 24nd Thur 2019 is " + getDayNumber(2, 23));
//Dec 31 Tuesday 2019
//console.log("Dec 31 Tues 2019 is " + getDayNumber(2, 364));
//Part3
function businessHoursDate(janFirstDayNumber, yearDayNumber, hourNumber) {
    const dayNumber = getDayNumber(janFirstDayNumber, yearDayNumber);
    return businessHours(dayNumber, hourNumber);
}
//console.log("Dec 21 Sat 2019 at 5 pm is " + businessHoursDate(2, 354, 17));
//console.log("January 24nd Thur 2019 at 10 am is " + businessHoursDate(2, 23, 10));
//Challenge
//E.g. January 24 2019 at 10 => "2019-1-25-10:00",  Dec 21 Sat 2019 at 5 pm  => "2019-1-15-10:00"
function businessHoursDateChallenge(dateString) {
    const date = new Date(dateString);
    return businessHours(date.getDay(), date.getHours());
}
//console.log("Dec 21 Sat 2019 at 5 pm is " + businessHoursDateChallenge("2019-12-21-17:00"));
//console.log("January 24nd Thur 2019 at 10 am is " + businessHoursDateChallenge("2019-1-25-10:00"));
