App.views = App.views || {};
App.views.main = Backbone.View.extend( {
	el: document.getElementById( "todo_form" ), //Los events se delegan
	events: {
		'click .input_send': 'addTask',
		'click #clearAll': 'clearAll'
	},
	initialize: function () {
		// Cambia el contexto de addTask y clearAll para que haga referencia a la vista (No utilices closures)
		// Inicializa una nueva vista de la colecci�n.
	},
	addTask: function ( eEvent ) {
		// Crea un nuevo modelo
		// Compruebas si el modelo es v�lido y si es v�lido lo a�ades a la colecci�n, sino es v�lido muestra un aviso.
	},
	clearAll: function ( eEvent ) {
		// Limpia todos los elementos
	}
} );