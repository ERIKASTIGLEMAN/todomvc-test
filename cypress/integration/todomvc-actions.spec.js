/// <reference types="cypress"/>

import { TodoPage } from "../page-objects/todo-page";

//create 3 test to separate the add todo, toggle tet, and clear testing (they are all encapsulated in the it() function above)

describe("todo actions", () => {
	const todoPage = new TodoPage();

	beforeEach(() => {
		todoPage.navigate();

		todoPage.addTodo("Clean room");
	});
	it("should add a new item to the list", () => {
		todoPage.validateTodoText(0, "Clean room");
		todoPage.validateToggleState(0, false);
	});

	describe("toggling todos", () => {
		it("should toggle test correctly", () => {
			todoPage.toggleTodo(0);
			todoPage.validateTodoCompletedState(0, true);
		});

		it("should clear completed", () => {
			todoPage.toggleTodo(0);

			todoPage.clearComplete();

			todoPage.validateNumberOfTodosShown(0);
		});
	});
});
