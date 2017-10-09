({
	previousHandler : function(component, event, helper) {
        var previousEvent = component.getEvent("onPrevious");
        previousEvent.fire();
	},
    
	nextHandler : function(component, event, helper) {
        var previousEvent = component.getEvent("onNext");
        previousEvent.fire();
	}
})