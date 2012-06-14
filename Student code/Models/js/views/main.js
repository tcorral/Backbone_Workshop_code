App.views = App.views || {};
App.views.main = Backbone.View.extend( {
	el: document.getElementById( "todo_form" ),
	events: {
		'click .input_send': 'addTask',
		'click #clearAll': 'clearAll'
	},
	initialize: function () {
		// Events receive as context the element that triggers it.
		// Change the context of addTask and clearAll to make reference to the main view. (Don't use closures)
		// Initialize the collection view.
	},
	addTask: function ( eEvent ) {
		// Create a new model
		// Check if data is correct.
		// Empty description is not allowed to be saved.
		// Any new task with the same description of one of the task saved before is not allowed.
		// Add the model if all is ok, but show an alert if something is wrong.
	},
	clearAll: function ( eEvent ) {
		// Clear all the tasks.
	}
} );