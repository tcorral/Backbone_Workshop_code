App.views = App.views || {};
App.views.task = Backbone.View.extend( {
	tagName: 'li',
	events: {
		'click .finish_action': 'done',
		'click .edit_action': 'edit',
		'click .save_action': 'save',
		'click .cancel_action': 'cancel'
	},
	normal_template: _.template( document.getElementById( "default_task_view" ).innerHTML ),
	edit_template: _.template( document.getElementById( "edit_task_view" ).innerHTML ),
	initialize: function () {
		_.bindAll( this, 'done', 'edit', 'save', 'cancel' );
		this.model.on( 'change', this.render, this );
	},
	render: function () {
		this.el.innerHTML = this.normal_template( this.model.toJSON() );
		return this;
	},
	done: function ( eEvent ) {
		this.model.set( {'finished': !this.model.get( 'finished' ) } );
	},
	edit: function ( eEvent ) {
		this.el.innerHTML = this.edit_template( this.model.toJSON() );
	},
	save: function ( eEvent ) {
		var oInput = eEvent.target.parentNode.getElementsByTagName( "input" )[0];

		this.model.set( { 'description': oInput.value } );
	},
	cancel: function ( eEvent ) {
		this.render();
	}
} );