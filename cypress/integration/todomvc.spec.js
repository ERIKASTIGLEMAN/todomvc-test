/// <reference types="cypress"/>

it("should be able to add a new todo to the list", () => {
	cy.visit("http://todomvc-app-for-testing.surge.sh/");

	cy.get(".new-todo", { timeout: 6000 }).type("Clean Room {enter}");

	cy.get("label").should("have.text", "Clean Room");

	cy.get(".toggle").should("not.be.checked");

	cy.get(".toggle").click();
	cy.get("label").should("have.css", "text-decoration-line", "line-through");

	cy.contains("Clear completed").click();

	cy.get(".todo-list").should("not.have.descendants", "li");
});

//create 3 test to separate the add todo, toggle tet, and clear testing (they are all encapsulated in the it() function above)

it("should add a new item to the list", () => {});

it("should mark a todo completed", () => {});

it("should clear completed todos", () => {});
