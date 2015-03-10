/**
 * 	todos_controller.js
 */

Todos.TodosController = Ember.ArrayController.extend({
	
  actions: {
    createTodo: function() {
      // Get the todo title set by the "New Todo" text field
      var task = this.get('newTask');
      var day = this.get('newDay');
      var time = this.get('newTime');
      
      if (!task.trim()) { return; }

      // Create the new Todo model
      var todo = this.store.createRecord('todo', {
    	  task: task,
    	  day: day,
    	  time: time,
    	  isCompleted: false
      });

      // Clear the "New Todo" text field
      this.set('newTask', '');
      this.set('newDay', '');
      this.set('newTime', '');

      // Save the new model
      todo.save();
    },
    clearCompleted: function() {
    	var completed = this.filterBy('isCompleted', true);
	    completed.invoke('deleteRecord');
	    completed.invoke('save');
	}
  },  
    
  remaining: function() {
	  return this.filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'),
    
  inflection: function() {
	  var remaining = this.get('remaining');
	  return remaining === 1 ? 'item' : 'items';
  }.property('remaining'),
  
  hasCompleted: function() {
	  return this.get('completed') > 0;
  }.property('completed'),
	
  completed: function() {
	  return this.filterBy('isCompleted', true).get('length');
  }.property('@each.isCompleted'),
  
  allAreDone: function(key, value) {
	  if(value == undefined) {
		  return (this.get('remaining') === 0 && this.get('length') > 0) ? true : false;
	  } else {
		  this.setEach('isCompleted', value);
		  this.invoke('save');
		  return value;
	  }
  }.property('@each.isCompleted')
    
});

