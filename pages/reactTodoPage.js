const { I } = inject();

const defaultTimeout = 15;
const pageSelector = `section.todoapp`;
const todoListSelector = `${pageSelector} section.main`;
const footerSelector = `${pageSelector} footer`;

module.exports = {

  isLoaded() {
    I.waitForElement(pageSelector, defaultTimeout);
    I.seeTextEquals(`todos`, `${pageSelector} h1`);
  },

  createNewTodo(todoTitle){
    within(pageSelector,  () =>{
      I.fillField(`input.new-todo`, todoTitle);
      I.pressKey('Enter');
    });
  },

  checkTodo(todoName, todoNumber, isActive){
    const todoSelector = `${todoListSelector} li:nth-child(${todoNumber})`;
    I.seeTextEquals(todoName, `${todoSelector} label`);
    if (isActive){
      I.dontSeeElement(`${todoSelector}.completed`)
    }
    else if (!isActive){
      I.seeElement(`${todoSelector}.completed`);
    }
  },

  checkTodoCount(todoCount){
    I.seeTextEquals(`${todoCount}`, `${footerSelector} .todo-count strong`);
  },

  markTodoToComplete(todoNumber){
    I.click(`${todoListSelector} li:nth-child(${todoNumber}) input.toggle`);
  },

  deleteTodo(todoNumber){
    const todoSelector = `${todoListSelector} li:nth-child(${todoNumber})`;
    I.moveCursorTo(`${todoSelector} label`);
    I.click(`${todoSelector} button.destroy`);
  },

  todoListIsEmpty(){
    I.dontSeeElement(todoListSelector);
  }

};
