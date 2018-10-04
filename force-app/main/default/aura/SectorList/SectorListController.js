({
    loadSectorsBefore : function(component, event, helper) {
        let action = component.get("c.getSectors");
        action.setCallback(this, function (response) {
            const state = response.getState();
            if (state === "SUCCESS") {
                let sectors = response.getReturnValue();
                component.set("v.sectors", sectors);
            } else {
                let errors = response.getErrors();
                console.log(errors);
            }
        });
        $A.enqueueAction(action);
    },
    
    loadSectors : function(component, event, helper) {
        sectorService.getSectors(component)
            .then(sectors => {
                component.set("v.sectors", sectors);
            })
            .catch(errors => {
                console.log(errors);
            });
    },

    loadSectorsFast : function(component, event, helper) {
        sectorService.getSectorsFast(component)
            .then(sectors => {
                component.set("v.sectors", sectors);
            })
            .catch(errors => {
                console.log(errors);
            });
    },

    clear : function(component, event, helper) {
        component.set("v.sectors", []);    
    }

})
