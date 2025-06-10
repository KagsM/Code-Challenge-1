function calculateChaiIngredients() {  //This code is a simple calculator to determine the basic ingredients needed to make a specific number of cups of Kenyan chai.
   const prompt = require('prompt-sync')();
   const numberOfCups = prompt("Enter the number of cups of chai you want to make:") //Prompts the user to enter the number of cups of chai they want to make.
   const waterPerCup = 200; // in ml
   const milkPerCup = 50; // in ml
   const teaLeavesPerCup = 1; // in tablespoon
   const sugarPerCup = 2; // in teaspoons
   if (isNaN(numberOfCups) || numberOfCups <= 0) { //Checks if the input is a valid number greater than 0 and logs an error if it is invalid or less than 0.
        console.error("Please enter a valid number of cups.")
        return;
   } else { //Calculates the total ingredients needed based on the number of cups and logs the result as statements.
         const totalWater = waterPerCup * numberOfCups;
         const totalMilk = milkPerCup * numberOfCups;
         const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
         const totalSugar = sugarPerCup * numberOfCups;
         console.log(`To make ${numberOfCups} cups of chai, you will need:`);
         console.log(`${totalWater} ml of water`);
         console.log(`${totalMilk} ml of milk`);
         console.log(`${totalTeaLeaves} tablespoons of tea leaves`);
         console.log(`${totalSugar} teapsoons of sugar
            Enjoy your chai Bora!`);
   }
   }
   calculateChaiIngredients(); //Calls the function to execute the code.