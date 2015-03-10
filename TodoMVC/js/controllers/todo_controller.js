/**
 * 	todo_controller.js
 */

Todos.TodoController = Ember.ObjectController.extend({
	
	actions: {	  
	  editTodo: function() {
		  //alert('editToDo action');
		  this.set('isEditing', true);
	  },
	  acceptChanges: function() {
		  //alert('acceptChanges action');
		  this.set('isEditing', false);
		  if (Ember.isEmpty(this.get('model.task'))) {
			  this.send('removeTodo');
		  } else {
			  this.get('model').save();
		  }
	  },
	  removeTodo: function () {
		  //alert('removeTodo action');
		  var todo = this.get('model');
		  todo.deleteRecord();
		  todo.save();
	  }
	},
	
	isEditing: false,
	
	isCompleted: function(key, value){
		//alert('isCompleted action');
		var model = this.get('model');

	    if (value === undefined) {
	      // property being used as a getter
	      return model.get('isCompleted');
	    } else {
	      // property being used as a setter
	      model.set('isCompleted', value);
	      model.save();
	      return value;
	    }
	}.property('model.isCompleted')
  
});
