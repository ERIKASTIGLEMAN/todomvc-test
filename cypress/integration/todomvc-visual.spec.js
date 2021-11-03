/// <reference types="cypress"/>

import * as todoPage from "../page-objects/todo-page";

describe("visual validation", () => {
	before(() => todoPage.navigate());

	it("should look good", () => {
		todoPage.addTodo("Clean room");
		todoPage.addTodo("Learn javascript");
		todoPage.toggleTodo(0);
	});
});
