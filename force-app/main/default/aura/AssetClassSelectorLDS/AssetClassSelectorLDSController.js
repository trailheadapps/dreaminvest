({
    changeHandler : function(component, event, helper) {
        console.log(event.getParam('value'));
        var changeEvent = component.getEvent("onchange");
        changeEvent.setParams({
            "value": event.getParam('value')
        });
        changeEvent.fire();
    }
})
