/// <reference types="cypress"/>
import * as todoPage from "../page-objects/todo-page";

describe("visual validation", () => {
	before(() => todoPage.navigate());
});
