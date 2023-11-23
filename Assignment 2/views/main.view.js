sap.ui.jsview("com.ibm.simpleapp.view.main", {
    getControllerName: function () {
      return "com.ibm.simpleapp.controller.main";
    },
    createContent: function () {
      var oButton = new sap.m.Button({
        id: "idJSView",
        text: "JS VIEW Button",
      });
  
      return oButton;
    },
  });