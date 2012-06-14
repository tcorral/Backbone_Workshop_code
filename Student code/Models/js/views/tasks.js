App.views = App.views || {};
App.views.tasks = Backbone.View.extend( {
	el: document.getElementById( "todo_list" ),
	initialize: function () {
		// Bind 'add' and 'reset' of the collection to call render method.
	},
	render: function () {
		// Clean previous list.
		// Loop over all the models and add them to list.
	}
} );