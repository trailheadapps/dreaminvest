window.sectorService = (function() {

    let sectors;

    let getSectors = (component) => {
        return new Promise((resolve, reject) => {
            const startTime = performance.now();
            let action = component.get("c.getSectors");
            action.setCallback(this, function (response) {
                const state = response.getState();
                if (state === "SUCCESS") {
                    console.log('# getSectors callback %f', (performance.now() - startTime));
                    sectors = response.getReturnValue();
                    resolve(sectors);
                } else {
                    let errors = response.getErrors();
                    reject(errors);
                }
            });
            $A.enqueueAction(action);
        });
    };

    let getSectorsFast = (component) => {
        const startTime = performance.now();
        if (sectors) {
            console.log('# getSectors callback %f', (performance.now() - startTime));
            return Promise.resolve(sectors);
        } else {
            return getSectors(component);
        }
    };

    return {getSectors, getSectorsFast};

}());