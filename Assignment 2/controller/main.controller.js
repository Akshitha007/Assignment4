sap.ui.define(["sap/ui/core/mvc/Controller"],function(Controller)
{
    return Controller.extend ("com.ibm.simpleapp.controller.main",{
        onInit :function() {},
        onBeforeRendering: function() {},
        onAfterRendering:function(){},
        onExit: function(){},
        onHTMLPress: function () {
            alert("Called from HTMl");
        },
        onJSONPress: function(){
            alert("Call from Json");
        }
        });

    });