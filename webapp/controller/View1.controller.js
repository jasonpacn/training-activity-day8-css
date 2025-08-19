sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.css.training.training8.controller.View1", {
        onInit() {
        },
        onPressCheckout: function () {
            MessageBox.show("Checked out", {
                title: "Info",
                styleClass: "customMessageBox"
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