// describe getName/getId/getEmail/getRole
const Employee = require('../lib/employee')

describe("Employees", () => {
  describe("Initialization", () => {
    it("should create an object with 'name' string, 'id' number, and 'email' string", () => {
        const employee = new Employee("Sarah", 4, "sarah@me.com");
        expect(employee.name).toEqual("Sarah");
        expect(employee.id).toEqual(4);
        expect(employee.email).toEqual("sarah@me.com");
    });
  });

  describe("getName", () => {
    it("should return the object name value", () => {
        const newEmployee = new Employee("Sarah", 4, "sarah@me.com")
        const employeeName = newEmployee.getName()
        expect(employeeName).toEqual("Sarah")
    }) 
  })

  describe("getId", () => {
    it("should return the object id value", () => {
        const newEmployee2 = new Employee("Sarah", 4, "sarah@me.com")
        const employeeId = newEmployee2.getId()
        expect(employeeId).toEqual(4)
    }) 
  })

  describe("getEmail", () => {
    it("should return the object email value", () => {
        const newEmployee3 = new Employee("Sarah", 4, "sarah@me.com")
        const employeeEmail = newEmployee3.getEmail()
        expect(employeeEmail).toEqual("sarah@me.com")
    }) 
  })

  describe("getRole", () => {
    it("should return the object role value", () => {
        const newEmployee4 = new Employee()
        const employeeRole = newEmployee4.getRole()
        expect(employeeRole).toEqual('Employee')
    }) 
  })
})