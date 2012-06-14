App.views = App.views || {};
App.views.tasks = Backbone.View.extend( {
	el: document.getElementById( "todo_list" ),
	initialize: function () {
		this.collection.on( 'add', this.render, this );
		this.collection.on( 'reset', this.render, this );
	},
	render: function () {
		var self = this;
		this.el.innerHTML = '';
		_.each( this.collection.models, function ( oModel ) {
			var oTaskView = new App.views.task( { model: oModel } );
			self.el.appendChild( oTaskView.render() );
		} );
		self = null;
		return this.el;
	}
} );