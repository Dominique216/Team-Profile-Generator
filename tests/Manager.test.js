//describe get office/get role/ render manager??
const { Manager}  = require("../lib/manager")

describe("Manager", () => {
    describe("Initialization", () => {
      it("should create an object with 'name' string, 'id' number, 'email' string, and 'officeNum' Number", () => {
          const manager = new Manager("Sarah", 4, "sarah@me.com", 123);
          expect(manager.officeNum).toEqual(123);
      });
    });

    describe("getOffice", () => {
        it("should return the object officeNum value", () => {
            const newmanager = new Manager("Sarah", 4, "sarah@me.com", 123)
            const managerOffice = newmanager.getOffice()
            expect(managerOffice).toEqual(123)
        }) 
    })

    describe("getRole", () => {
        it("should return the object role value", () => {
            const newmanager2 = new Manager()
            const managerRole = newmanager2.getRole()
            expect(managerRole).toEqual('Manager')
        }) 
    })
})