sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("com.css.training.training8.controller.View1", {
        onInit() {
            jQuery.sap.includeStyleSheet("css/style.css");
        },
        onPressNext() {
            sap.m.MessageBox.confirm("Do you want to go to the next page?", {
                title: "Confirmation",
                styleClass: "customMessageBox",
                actions: [sap.m.MessageBox.Action.OK, sap.m.MessageBox.Action.CANCEL],
                onClose: (oAction) => {
                    if (oAction === sap.m.MessageBox.Action.OK) {
                        this.getOwnerComponent().getRouter().navTo("RouteView2");
                    }
                }
            });
        },

        onPressSave: function () {
            MessageBox.show("Saved", {
                title: "Alert",
                styleClass: "customMessageBox"
            });
        }
    });
});