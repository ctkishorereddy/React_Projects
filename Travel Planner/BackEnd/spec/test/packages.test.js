const packageService = require('../../src/service/packageDestinations');

describe('Test Suite: Package', () => {

    it('Test Case 1: Search for Australia- valid case', () => {
        return packageService.destination('Australia').then(res => {
            expect(res).toBeTruthy()
        })
    });

    it('Test Case 2: Search for Austria- Invalid case', () => {
        return packageService.destination('Austria').then(res => {
            expect(res).not.toBeTruthy()
        }).catch(error => {
            expect(error.message).toBe("Sorry we don't operate in this Destination")
        })
    });

    it('Test Case 3: Get all Hot Deals', () => {
        return packageService.hotdeals().then(res => {
            expect(res.length).toBe(3)
        })
    })
});