App.models = App.models || {};
App.models.task = Backbone.Model.extend( {
	defaults: {
		finished: false
	},
	validate: function ( attrs ) {
		if ( attrs.description.length === 0 ) {
			return 'Description must have a valid value';
		}
	}
} );