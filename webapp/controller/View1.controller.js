sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("com.css.training.training8.controller.View1", {
        onInit() {
            jQuery.sap.includeStyleSheet("css/style.css");
        },
        onPressNext: function () {
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