const BankAccount = {
    AccountHolder: "isma", 
    AccountBalance: 0,
    deposite: function(amount){
        if(amount > 0) {
            this.AccountBalance += amount
        }
        else{
            console.log ("invalide amount");
        }
    },
    checkBalance: function(){
        console.log(`Your Account Balance is ${this.AccountBalance}`);
    },
    withdraw: function(cash){
        if(cash > this.AccountBalance){
            console.log("not enogh fund");
        }
        else{
            this.AccountBalance -= cash;
            console.log(`your remaining balance is ${this.AccountBalance}`);
        }
    }

}


console.log(BankAccount.AccountHolder);
