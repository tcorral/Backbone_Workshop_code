App.views = App.views || {};
App.views.main = Backbone.View.extend( {
	el: document.getElementById( "todo_form" ),
	events: {
		'click .input_send': 'addTask',
		'click #clearAll': 'clearAll'
	},
	initialize: function () {
		_.bindAll( this, 'addTask', 'clearAll' );
		new App.views.tasks( {collection: this.collection} );
	},
	addTask: function ( eEvent ) {
		var oInput = document.getElementById( "input_txt" );
		var oModel = new App.models.task( { description: oInput.value } );
		var aFound = [];
		if ( oModel.isValid() ) {
			aFound = this.collection.where( oModel.attributes );
			if ( aFound.length === 0 ) {
				this.collection.add( oModel );
			}
			else {
				alert( "'" + oModel.get( "description" ) + "' is already saved!" );
			}
		}
		else {
			alert( "Data is not valid!" );
		}
		oInput.value = '';
		eEvent.preventDefault();
		oInput = oModel = aFount = null;
	},
	clearAll: function ( eEvent ) {
		this.collection.reset();
		eEvent.preventDefault();
	}
} );