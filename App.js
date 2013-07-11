Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',

    launch: function() {
        var cardBoardConfig = {
            xtype: 'rallycardboard',
            types: ['User Story', 'Defect'],
            attribute: "ScheduleState"
        };

        this.add(cardBoardConfig);
    }
});
