window.mortgageService = (function() {
    
    let calculateMonthlyPayment = (principal, years, rate) => {
        let monthlyPayment;
        if (principal && years && rate && rate > 0) {
            const monthlyRate = rate / 100 / 12;
            monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1/(1 + monthlyRate), years * 12)));
        }
        return monthlyPayment;
    }

    return {calculateMonthlyPayment};

}());