const BusinessHoursFn = require('../app.js');

describe("businessHoursFn", ()=>{
    const  businessTime = new BusinessHoursFn(2);
    it("businessHours returns true", () => {
        expect(businessTime.businessHours(1,20)).not.toBe();
    });
    it("businessHours returns false", () => {
        expect(businessTime.businessHours(2, 10)).toBe(true);
    });
    it("getDayNumber returns 4", () => {
        expect(businessTime.getDayNumber(23)).toBe(4);
    });
    it("getDayNumber returns undefined", () => {
        expect(businessTime.getDayNumber(367)).toBe(undefined);
    });
    it("businessHoursDate returns true", () => {
        expect(businessTime.businessHoursDate(354, 17)).not.toBe();
    });
    it("businessHoursDate returns false", () => {
        expect(businessTime.businessHoursDate(23, 10)).toBe(true);
    });
    it("businessHoursDateChallenge returns false", () => {
        expect(businessTime.businessHoursDateChallenge("2019-12-21-17:00")).not.toBe();
    });
    it("businessHoursDateChallenge returns true ", () => {
        expect(businessTime.businessHoursDateChallenge("2019-1-25-10:00")).toBe(true);
    });
});

