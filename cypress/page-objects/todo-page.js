export class TodoPage {
	navigate() {
		cy.visit("http://todomvc-app-for-testing.surge.sh/");
	}

	addTodo(todoText) {
		cy.get(".new-todo").type(todoText + "{enter}");
	}
}

validateTodoTxt(todoIndex, expectedText) {
  cy.get(`tod-list li:nth-child(${todoText + 1})label`)
  .should("have.text", expectedText);
}