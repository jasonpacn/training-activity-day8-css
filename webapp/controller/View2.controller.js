sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("com.css.training.training8.controller.View2", {
        onInit() {
            jQuery.sap.includeStyleSheet("css/style.css");
        },

        onPressReturn() {
            sap.m.MessageBox.confirm("Do you want to return?", {
                title: "Confirmation",
                styleClass: "customMessageBox",
                actions: [sap.m.MessageBox.Action.OK, sap.m.MessageBox.Action.CANCEL],
                onClose: (oAction) => {
                    if (oAction === sap.m.MessageBox.Action.OK) {
                        this.getOwnerComponent().getRouter().navTo("RouteView1");
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