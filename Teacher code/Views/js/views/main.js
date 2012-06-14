App.views = App.views || {};
App.views.main = Backbone.View.extend( {
	el: document.getElementById( "todo_form" ),
	events: {
		'click .input_send': 'addTask'
	},
	addTask: function ( eEvent ) {
		alert( "Add a new task." );
		eEvent.preventDefault();
	}
} );