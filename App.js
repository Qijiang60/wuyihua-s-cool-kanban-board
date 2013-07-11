Ext.define('CustomApp', {
    //This tells ExtJs to that this object inherits from the base Rally App Class
    extend: 'Rally.app.App',
    //This tells the name for a css class added to the div that makes up the basic container for the app
    componentCls: 'app',

    launch: function() {
        var cardBoardConfig = {
            //This is defining what kind of thing I want to add to the App
            xtype: 'rallycardboard',
            //This is specifying what kinds of Rally Objects I want to display
            types: ['Task'],
            //This chooses which field on the types I want to use as the columns for the cardboard
            attribute: "State"
        };

        this.add(cardBoardConfig);
    }
});
