({
	calculate : function(component, event) {
        var principal = component.get("v.principal");
        var years = component.get("v.years");
        var rate = component.get("v.rate");
        var monthlyPayment = mortgageService.calculateMonthlyPayment(principal, years, rate);
        component.set("v.monthlyPayment", monthlyPayment);

        var monthlyRate = rate / 100 / 12;
	    var balance = principal;
    	var amortization = [];
        for (var y=0; y<years; y=y+1) {
            var interestY = 0;  //Interest payment for year y
            var principalY = 0; //Principal payment for year y
            for (var m=0; m<12; m=m+1) {
                var interestM = balance * monthlyRate;       //Interest payment for month m
                var principalM = monthlyPayment - interestM; //Principal payment for month m
                interestY = interestY + interestM;
                principalY = principalY + principalM;
                balance = balance - principalM;
            }
            amortization.push({principalY: Math.round(principalY), interestY: Math.round(interestY), balance: Math.round(balance)});
        }
        component.set("v.amortization", amortization);
	}
})