const{ Schema } = require( "mongoose" );
const Mongoose = require( "mongoose" )
Mongoose.Promise = global.Promise;
const url = "mongodb://localhost:27017/finalProject";

let userSchema = Schema( {
    name: String,
    userId: String,
    emailId: String,
    contactNo: Number,
    password: String,
    bookings: [String]
}, { collection: "User" } )

let destinationsSchema = Schema( {
        destinationId: String,
        continent: String,
        imageUrl: String,
        name: String,
        details: {
            about: String,
            itinerary: {
                dayWiseDetails: {
                        firstDay: String,
                        restDaysSightSeeing: [ String ],
                        lastDay: String,
                },
                packageInclusions: [ String ],
                tourHighlights: [ String ],
                tourPace: [ String ]
            }
        },
        noOfNights: Number,
        flightCharges: Number,
        chargesPerPerson: Number,
        discount: Number,
        availability: Number
}, { collection: "Destinations" } )

let hotdealsSchema = Schema( {
        destinationId: String,
        continent: String,
        imageUrl: String,
        name: String,
        details: {
            about: String,
            itinerary: {
                dayWiseDetails: {
                        firstDay: String,
                        restDaysSightSeeing: [ String ],
                        lastDay: String,
                },
                packageInclusions: [ String ],
                tourHighlights: [ String ],
                tourPace: [ String ]
            }
        },
        noOfNights: Number,
        flightCharges: Number,
        chargesPerPerson: Number,
        discount: Number,
        availability: Number
}, { collection: "Hotdeals" } )

let bookingsSchema = Schema( {
    bookingId: String,
    userId: String,
    destId: String,
    destinationName: String,
    checkInDate: String,
    checkOutDate: String,
    noOfPersons: Number,
    totalCharges: Number,
    timeStamp: String
}, { collection: "Bookings"} )

let collection = {};

collection.getUserCollection = () => {
    return Mongoose.connect( url, { useNewUrlParser: true } ).then( ( database ) => {
        return database.model( 'User', userSchema )
    } ).catch( (  ) => {
        let err = new Error( "Could not connect to Database" );
        err.status = 500;
        throw err;
    } )
}

collection.getDestinationsCollection = () => {
    return Mongoose.connect( url, { useNewUrlParser: true } ).then( database => {
        return database.model( 'Destinations', destinationsSchema )
    } ).catch( (  ) => {
        let err = new Error( "Could not connect to Database" );
        err.status = 500;
        throw err;
    } )
}

collection.gethdCollection = () => {
    return Mongoose.connect( url, { useNewUrlParser: true } ).then( database => {
        return database.model( 'Hotdeals', hotdealsSchema )
    } ).catch( (  ) => {
        let err = new Error( "Could not connect to Database" );
        err.status = 500;
        throw err;
    } )
}

collection.getbookingsCollection = () => {
    return Mongoose.connect( url, { useNewUrlParser: true } ).then( database => {
        return database.model( 'Bookings', bookingsSchema )
    } ).catch( (  ) => {
        let err = new Error( "Could not connect to Database" );
        err.status = 500;
        throw err;
    } )
}



module.exports = collection;
