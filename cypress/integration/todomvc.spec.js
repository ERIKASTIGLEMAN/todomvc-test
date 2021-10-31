/// <reference types="cypress"/>

it("should be able to add a new todo to the list", () => {
	cy.visit("http://todomvc-app-for-testing.surge.sh/");

	cy.get(".new-todo", { timeout: 6000 }).type("Clean Room {enter}");

	cy.get("label").should("have.text", "Clean Room");

	//	cy.get(".toggle").click();

	//	cy.contains("Clear completed").click();
});
