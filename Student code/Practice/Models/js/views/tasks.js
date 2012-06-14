App.views = App.views || {};
App.views.tasks = Backbone.View.extend( {
	el: document.getElementById( "todo_list" ),
	initialize: function () {
		// Asocia los eventos 'add' y 'reset' de la colecci�n a render
	},
	render: function () {
		// Limpia la lista del contenedor
		// Recorre los modelos para a�adirlos a la lista.
	}
} );