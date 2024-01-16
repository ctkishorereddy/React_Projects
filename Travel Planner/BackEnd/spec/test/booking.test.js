const bookingService = require('../../src/service/bookings');

describe('Test Suite: Booking', () => {
    
    let bookingObj = {
        userId:"U1003", destId:"HD1001", checkInDate:"2022-07-16", checkOutDate:"2022-07-27",
        noOfPersons:2, totalCharges:5074, destinationName:"Thailand : The Golden Kingdom", timeStamp: new Date().getTime().toString()
    }

    let deleteObj = {
        bookingId: "B1002",
        userId: "U1001",
        destId: "D1002",
        destinationName: "Romantic Europe: Paris, Venice & Vienna",
        checkInDate: "2019-1-10",
        checkOutDate: "2019-1-24",
        noOfPersons: 1,
        totalCharges: 4549,
        timeStamp: "1589388499234"
    }

    it('No bookings Case', () => {
        return bookingService.getBookings("U1004").then(res => {
            expect(res).not.toBeTruthy()
        }).catch(error => {
            expect(error.message).toBe('You have no Planned Trips')
        })
    })

    it('Bookings available case', () => {
        return bookingService.getBookings("U1003").then(res => {
            expect(res).toBeTruthy()
        })
    })

    it('Booking Successfull Case', () => {
        return bookingService.book(bookingObj).then(res => {
            expect(res).toBeTruthy()
        })
    })

    it('Booking Fail Case', () => {
        return bookingService.book(bookingObj).then(res => {
            // expect(res).not.toBeTruthy()
        }).catch(error => {
            expect(error.message).toBe("You have a another package booked in selected trip span!!")
        })
    })

    it('Cancel booking success case', () => {
        return bookingService.deleteBooking(deleteObj).then(res => {
            expect(res).toBe("Booking Cancelled")
        })
    })
})