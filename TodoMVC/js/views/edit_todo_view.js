/**
 *  edit_todo_views.js
 */

Todos.EditTodoView = Ember.TextField.extend({
  didInsertElement: function() {
	  this.$().focus();
  }
});

Todos.EditDayView = Ember.TextField.extend({
  didInsertElement: function() {
	  this.$().focus();
  }
});

Todos.EditTimeView = Ember.TextField.extend({
  didInsertElement: function() {
	  this.$().focus();
  }
});

Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);
Ember.Handlebars.helper('edit-day', Todos.EditDayView);
Ember.Handlebars.helper('edit-time', Todos.EditTimeView);



