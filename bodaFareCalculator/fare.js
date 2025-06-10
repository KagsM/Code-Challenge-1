function calculateBodaFare() { // This code is a simple program to estimate the fare for a boda boda ride.
    const prompt = require('prompt-sync')();
    const distanceInKm = prompt('Enter the distance in kilometers for your boda ride:') //Prompts the user to enter the distance in kilometres for their boda ride.
    const baseFare = 50; //base fare in KES
    const chargePerKm = 15; //charge per kilometer in KES
    if (isNaN(distanceInKm) || distanceInKm <= 0) { //Checks if the input is a valid number greater than 0 and logs an error if it is invalid or less than 0.
        console.error ("Please enter a valid distance in kilometers above 0.")
        return;
    } else { //Calculates the total fare for the user's boda ride and logs it as statements.
        const totalFare = baseFare + (distanceInKm * chargePerKm);
        console.log(`The base fare is KES ${baseFare}`)
        console.log(`For every kilometre, you are covering KES (${parseInt(distanceInKm)} * ${parseInt(chargePerKm)})`)
        console.log(`The total fare for your boda boda ride of ${distanceInKm} kilometres is KES ${totalFare}.
            Thank you for choosing our service!.
            Enjoy the ride!`)
    }
    }
    calculateBodaFare(); //Calls the function to execute the code.