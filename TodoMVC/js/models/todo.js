/**
 * 	todo.js
 */

Todos.Todo = DS.Model.extend({
  task: DS.attr('string'),
  day: DS.attr('string'),
  time: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
   {
     id: 1,
     task: 'Learn Ember.js',
     day: '06-02-2015',
     time: '02:00 PM',
     isCompleted: true
   },
   {
     id: 2,
     task: 'Handlebars',
     day: '10-02-2015',
     time: '04:30 PM',
     isCompleted: false
   },
   {
     id: 3,
     task: 'Grails',
     day: '14-02-2015',
     time: '06:45 PM',
     isCompleted: false
   }
];