const userService = require('../../src/service/userslogin')

describe('Test Suite: Login', () => {
    it('Test Case 1: Valid Login Case', () => {
        userService.login(9000000045, "Hitman$45").then(user => {
            expect(user).toBeTruthy();
        });
    });

    it('Test Case 2: Invalid ContactNo Case', () => {
        userService.login(9000004005, "Hitman$45").then(user => {
            expect(user).not.toBeTruthy();
        }).catch(error => {
            expect(error.message).toBe("Enter the registered contact number!")
        });
    });

    it('Test Case 3: Invalid Password Case', () => {
        userService.login(9000000045, "Hitman@45").then(user => {
            expect(user).not.toBeTruthy();
        }).catch(error => {
            expect(error.message).toBe("Enter correct password")
        });
    })
});

describe('Test Suite: Register', () => {
    let userObj1 = {
        name: "Veeru Chowdary",
        emailId: "veerendrachowdary27@gmail.com",
        contactNo: 9963453546,
        password: "Veeru@45",
    }
    let userObj = {
        userId: "U1003",
        name: "Rohit Sharma",
        emailId: "hitman45@gmail.com",
        contactNo: 9000000045,
        password: "Hitman$45"
    }

    it('Test Case 1: Valid register', () => {
        userService.register(userObj1).then(res => {
            expect(res).toBeTruthy()
        })
    });

    it('Test Case 2: Invalid register', () => {
        userService.register(userObj).then(res => {
            // expect(res).not.toBeTruthy()
        }).catch(error => {
            expect(error.message).toBe('Already registered')
        })
    })
});