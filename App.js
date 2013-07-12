Ext.define('CustomApp', {
    //This tells ExtJs to that this object inherits from the base Rally App Class
    extend: 'Rally.app.App',
    //This tells the name for a css class added to the div that makes up the basic container for the app
    componentCls: 'app',
    
    cardboard:null,
    
    launch: function() {
        var cardBoardConfig = {
            //This is defining what kind of thing I want to add to the App
            xtype: 'rallycardboard',
            //This is specifying what kinds of Rally Objects I want to display
            types: ['HierarchicalRequirement'],
            //This chooses which field on the types I want to use as the columns for the cardboard
            attribute: "ScheduleState",
            storeConfig:{
                filters:[]
            }
        };
        this.add({
            xtype: 'rallyattributecombobox',
            model: 'UserStory',
            field: 'Type',
            defaultSelectionToFirst:true,
            listeners:{
                scope:this,
                ready:function(){
                    this.cardboard = this.add(cardBoardConfig);
                },
                change:function(){
                    if(this.cardboard){
                        this.cardboard.destroy();
                    }
                    this.cardboard = this.add(cardBoardConfig);
                }
            },
        });
        
    }
});
