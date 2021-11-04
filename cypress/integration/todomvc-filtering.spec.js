/// <reference types="cypress"/>

describe("filtering", function () {
	beforeEach(() => {
		cy.visit("http://todomvc-app-for-testing.surge.sh/");

		todoPage.addTodo("Clean Room ");
		todoPage.addTodo("Study Selectors ");
		todoPage.addTodo("Learn Cypress ");

		todoPage.toggleTodo(1);
	});

	it('should filter "Active" correctly', () => {
		todoPage.showOnlyActiveTodos();
		todoPage.validateNumberOfTodos(2);
	});

	it('should filter "Completed" correctly', () => {
		todoPage.showOnlyCompleteTodos();
		todoPage.validateNumberOfShown(1);
	});

	it('should filter "All" correctly', () => {
		todoPage.showAllTodos();
		todoPage.validateNumberOfShown(3);
	});
});
