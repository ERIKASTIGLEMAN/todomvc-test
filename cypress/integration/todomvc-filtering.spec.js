/// <reference types="cypress"/>

import {
	navigate,
	addTodo,
	toggleTodo,
	showOnlyActiveTodos,
	showOnlyCompletedTodos,
	showAllTodos,
	validateNumberOfTodosShown,
} from "../page-objects/todo-page";

describe("filtering", function () {
	beforeEach(() => {
		navigate();

		addTodo("Clean Room ");
		addTodo("Study Selectors ");
		addTodo("Learn Cypress ");

		toggleTodo(1);
	});

	it('should filter "Active" correctly', () => {
		showOnlyActiveTodos();
		validateNumberOfTodos(2);
	});

	it('should filter "Completed" correctly', () => {
		showOnlyCompleteTodos();
		validateNumberOfShown(1);
	});

	it('should filter "All" correctly', () => {
		showAllTodos();
		validateNumberOfShown(3);
	});
});
