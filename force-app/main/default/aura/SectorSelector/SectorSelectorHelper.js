({
        loadSectors: function (component) {
                var action = component.get("c.getSectors");
                action.setCallback(this, function (response) {
                        var sectors = response.getReturnValue();
                        console.log(sectors);
                        sectors.unshift({ Name: '' });
                        window.cache.set("sectors", sectors);
                        component.set("v.sectors", sectors);
                        console.log("Sectors retrieved from server");
                });
                $A.enqueueAction(action);
        }

})