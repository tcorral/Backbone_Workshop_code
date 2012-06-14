App.router = App.router || {};
App.router.main = Backbone.Router.extend( {
	routes: {
		'': 'home'
	},
	home: function () {
		new App.views.main( { collection: new App.collections.tasks() } );
	}
} );