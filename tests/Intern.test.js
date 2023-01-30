// describe getSchool getRole and renderIntern

const { Intern }  = require("../lib/intern")

describe("Intern", () => {
    describe("Initialization", () => {
      it("should create an object with 'name' string, 'id' number, 'email' string, and 'school' string", () => {
          const intern = new Intern("Sarah", 4, "sarah@me.com", "UT Austin");
          expect(intern.school).toEqual("UT Austin");
      });
    });

    describe("getSchool", () => {
        it("should return the object school value", () => {
            const newIntern = new Intern("Sarah", 4, "sarah@me.com", "UT Austin")
            const internSchool = newIntern.getSchool()
            expect(internSchool).toEqual("UT Austin")
        }) 
    })

    describe("getRole", () => {
        it("should return the object role value", () => {
            const newIntern2 = new Intern()
            const internRole = newIntern2.getRole()
            expect(internRole).toEqual('Intern')
        }) 
    })
})