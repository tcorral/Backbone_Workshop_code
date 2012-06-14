App.views = App.views || {};
App.views.main = Backbone.View.extend( {
	el: document.getElementById( "todo_form" ), //Los events se delegan
	events: {
		'click .input_send': 'addTask',
		'click #clearAll': 'clearAll'
	},
	initialize: function () {
		_.bindAll( this, 'addTask', 'clearAll' );
		new App.views.tasks( {collection: this.collection} );
	},
	addTask: function ( eEvent ) {
		var oModel = new App.models.task( { description: document.getElementById( "input_txt" ).value } );
		var aFound = [];
		if ( oModel.isValid() ) {
			aFound = this.collection.where( oModel.attributes );
			if ( aFound.length === 0 ) {
				this.collection.add( oModel );
			}
			else {
				alert( oModel.get( "description" ) + " ya existe en la colecci�n" );
			}
		}
		else {
			alert( "no valido" );
		}
		eEvent.preventDefault();
	},
	clearAll: function ( eEvent ) {
		this.collection.reset();
		eEvent.preventDefault();
	}
} );