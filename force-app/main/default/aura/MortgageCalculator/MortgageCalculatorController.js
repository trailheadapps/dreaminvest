({
    calculateMonthlyPayment : function(component, event, helper) {
        if (window.mortgageService) {
            var principal = component.get("v.principal");
            var years = component.get("v.years");
            var rate = component.get("v.rate");
            var monthlyPayment = mortgageService.calculateMonthlyPayment(principal, years, rate);
            component.set("v.monthlyPayment", monthlyPayment);
        }
    }
})
