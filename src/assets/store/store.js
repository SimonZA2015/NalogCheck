import {storeConfigs} from "../configs/store-configs";

let store = {
    //rerender display
    rerender: () => {
    },

    data: {
        panel: false,
        result: false,
        max: 260000
    },

    dispatch(action) {
        //request processing
        switch (action.type) {
            case storeConfigs.getPanelStatus:
                return this.data.panel;

            case storeConfigs.getResult:
                return this.data.result;

            case storeConfigs.calculate:
                //create obj
                let result = [];
                let int = 0;
                //math deduction in monthly salary calculations
                let nulltren = action.data * 12 * 0.13;
                //create array
                for (let i = 0; i < 4; i++) {
                    if (int + nulltren < 26000) {
                        result.push([nulltren, i + 1]);
                    }else {
                        result.push(false);
                    }
                }
                //save in store
                this.data.result = result
                //update display
                this.rerender();
                break;

            case storeConfigs.closePanel:
                //close panel
                this.data.panel = false;
                this.data.result = false;
                //rerender display
                this.rerender();
                break;


            case storeConfigs.activePanelStatus:
                //set panel show
                this.data.panel = true;
                //update display
                this.rerender();
                break;

            default:
                break;
        }
    },

    observer(subscriber) {
        //linking re-render
        this.rerender = subscriber;
        this.rerender();
    }
};

export default store;