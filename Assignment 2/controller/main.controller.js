sap.ui.define(["sap/ui/core/mvc/Controller"],function(Controller)
{
    return Controller.extend ("com.ibm.simpleapp.controller.main",{
        onInit :function() {var oModel = new sap.ui.model.json.JSONModel();
            var data = {
              emp: "",
              name: "",
            };
            oModel.setData({ empdetails: data });
            this.getView().setModel(oModel, "empdata");
            var oSimple = this.getView().byId("idSimpleform");
            if (oSimple) {
              oSimple.bindElement("empdata>/empdetails");
            }
            //
          },
        onBeforeRendering: function() {},
        onAfterRendering:function(){},
        onExit: function(){},
        onHTMLPress: function () {
            alert("Called from HTMl");
        },
        onJSONPress: function(){
            alert("Call from Json");
        },
        onPressFrgamnet: function () {
            var oVerticalLayout = this.getView().byId("idVL");
            var oView = this.getView();
            sap.ui.require(
              ["sap/ui/core/Fragment"],
              function (Fragment) {
                Fragment.load({
                  name: "com.ibm.simpleapp.fragments.input",
                  type: "XML",
                  controller: this,
                })
                  .then(
                    function (oFragment) {
                      this._addnameFragment = oFragment;
                      this.getView().addDependent(this._addnameFragment);
                      // this.getView().addDependent(oFragment);
                      oFragment.open();
                      // oVerticalLayout.insertContent(oFragment);
                    }.bind(this)
                  )
                  .catch(function (err) {
                    debugger;
                  });
              }.bind(this)
            );
          },
          onPressCloseDialog: function () {
            this._addnameFragment.close();
          },
        });

    });