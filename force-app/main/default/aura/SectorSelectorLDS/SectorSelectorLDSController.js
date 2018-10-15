({
    changeHandler : function(component, event, helper) {
        console.log("sector");
        var sector = event.getParam('value');
        if (Array.isArray(sector) && sector.length>0) {
            sector = sector[0];
        } else {
            sector = null;
        }
        console.log(sector);
        var changeEvent = component.getEvent("onchange");
        changeEvent.setParams({
            "value": sector
        });
        changeEvent.fire();
    }
})