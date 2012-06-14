App.collections = App.collections || {};
App.collections.tasks = Backbone.Collection.extend( {
	model: App.models.task
} );