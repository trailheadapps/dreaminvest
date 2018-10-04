({
    getStock: function (component, event, helper) {
        var symbol = component.get("v.symbol");
        stockService.getStock(symbol).then(stock => {
            component.set("v.stock", stock);
        });
    }
})
