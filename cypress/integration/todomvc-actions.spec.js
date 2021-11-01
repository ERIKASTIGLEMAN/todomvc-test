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
		cy.get("label").should("have.text", "Clean Room");
		cy.get(".toggle").should("not.be.checked");
	});

	it("should mark a todo completed", () => {
		cy.get(".toggle").click();
		cy.get("label").should("have.css", "text-decoration-line", "line-through");
	});

	it("should clear completed todos", () => {
		cy.get(".toggle").click();
		cy.contains("Clear completed").click();
		cy.get(".todo-list").should("not.have.descendants", "li");
	});
});
