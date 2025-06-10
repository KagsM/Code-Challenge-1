function estimateTransactionFee() { //This code is a simplified estimator for transaction fees.
    const prompt = require('prompt-sync')();
    amountToSend = prompt("Enter the amount you want to send:"); //Prompts the user to enter the amount they want to send.
    if (isNaN(amountToSend) || amountToSend <= 0) { //Checks if the input is a valid number greater than 0 and logs an error if it is invalid or less than 0.
        console.error("Please enter a valid amount to send greater than 0.");
        return;
}   else { //Computes the transaction fee.
    transactionFee = 0.15 * amountToSend; //15% of the amount to send
}
    if (transactionFee <= 10) { //Sets the condition for the minimum fee.
        transactionFee = 10; //minimum fee is KES 10
    }
    else if (transactionFee >=70) { //Sets the condition for the maximum fee.
        transactionFee = 70; //maximum fee is KES 70
    }
    else { //Takes the computation for the transaction fee if the first two conditions are not met. Statements are logged afterwards.
        transactionFee = transactionFee; // fee is between KES 10 and KES 70
    }
    console.log(`The transaction fee for sending KES ${amountToSend} is KES ${transactionFee}.`)
    console.log(`Total amount to be deducted from your account is KES ${parseFloat(amountToSend) + parseFloat(transactionFee)}.`);
    console.log(`Thank you for using our mobile money service!`);
    }
    estimateTransactionFee(); //Calls the function to execute the code.