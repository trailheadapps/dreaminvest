({
    doInit: function (component, event, helper) {
        const action = component.get("c.getStockServiceApiKey");
        action.setCallback(this, function(response) {
            const state = response.getState();
            if (state === "SUCCESS") {
                const apiKey = response.getReturnValue();
                component.set("v.apiKey", apiKey);
            } else {
                console.log(response.getErrors());
            }
        });
        $A.enqueueAction(action);
    },
    getStock: function (component, event, helper) {
        const apiKey = component.get("v.apiKey");
        const symbol = component.get("v.symbol");
        stockService.getStock(apiKey, symbol).then(stock => {
            component.set("v.stock", stock);
        });
    }
})
