const { Engineer } = require("../lib/engineer");

//describe getGithub, getRole, and renderEngineer
describe("Engineer", () => {
    describe("Initialization", () => {
      it("should create an object with 'name' string, 'id' number, 'email' string, and 'github' string", () => {
          const engineer = new Engineer("Sarah", 4, "sarah@me.com", "sarah123");
          expect(engineer.github).toEqual("sarah123");
      });
    });

    describe("getGithub", () => {
        it("should return the object github value", () => {
            const newengineer = new Engineer("Sarah", 4, "sarah@me.com", "sarah123")
            const engineergithub = newengineer.getGithub()
            expect(engineergithub).toEqual("sarah123")
        }) 
    })

    describe("getRole", () => {
        it("should return the object role inpuvalue", () => {
            const newengineer2 = new Engineer()
            const engineerRole = newengineer2.getRole()
            expect(engineerRole).toEqual('Engineer')
        }) 
    })
})