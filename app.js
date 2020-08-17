/*Let Sunday =0 Monday = 1, Tuesday=2 Wednesday=3 Thursday=4 Friday =5 Saturday=6
business hours is between 9-18 */

class BusinessHoursFn{
    constructor(janFirstDayNumber){
       this.janFirstDayNumber = janFirstDayNumber;
       this.dayNumber = null;
       this.date; 
    }
    //Part 1
    businessHours(dayNumber, hourNumber) {
        return hourNumber >= 9 && hourNumber <= 18 && dayNumber >= 1 && dayNumber <= 5;
    };
    //Part 2
    getDayNumber(yearDayNumber) {
        if (yearDayNumber < 0 || yearDayNumber > 365){
            return undefined;
        }
        return (this.janFirstDayNumber + yearDayNumber) % 7;
    };
    //Part3
    businessHoursDate(yearDayNumber, hourNumber) {
        this.dayNumber = this.getDayNumber(this.janFirstDayNumber, yearDayNumber);
        return this.businessHours(this.dayNumber, hourNumber);
    };
    //Challenge
    //E.g. January 24 2019 at 10 => "2019-1-25-10:00",  Dec 21 Sat 2019 at 5 pm  => "2019-1-15-10:00"
    businessHoursDateChallenge(dateString) {
        this.date = new Date(dateString);
        return this.businessHours(this.date.getDay(), this.date.getHours());
    };    
}


module.exports = BusinessHoursFn;
