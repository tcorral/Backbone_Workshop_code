App.router = App.router || {};
App.router.main = Backbone.Router.extend( {
	routes: {
		'': 'home'
	},
	home: function () {
		alert( "Hello World!" );
	}
} );