
Feature('Check React Todo App');

BeforeSuite((I) => {
  I.amOnPage(`http://todomvc.com/examples/react/#/`);
});

Scenario('Main page is loaded', (I, reactTodoPage) => {
  reactTodoPage.isLoaded();
  reactTodoPage.todoListIsEmpty();
});

Scenario('Check to create a new todo', (I, reactTodoPage) => {
  reactTodoPage.createNewTodo("New TODO 1");
  reactTodoPage.checkTodo("New TODO 1", 1, true);
  reactTodoPage.checkTodoCount(1);
});

Scenario('Check todo complete', (I, reactTodoPage) => {
  reactTodoPage.markTodoToComplete(1);
  reactTodoPage.checkTodo("New TODO 1", 1, false);
  reactTodoPage.checkTodoCount(0);
});

Scenario('Check delete todo', (I, reactTodoPage) => {
  reactTodoPage.deleteTodo(1);
  reactTodoPage.todoListIsEmpty();
});