import EcredSimulador from "../pageObjects/ecredSimulador";

const simulador = new EcredSimulador();

describe("Teste Simulador de Empréstimo Serasa", () => {
  beforeEach(() => {
    cy.visit(simulador.simulador());
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
  it("Simulação de: R$ 1.000 em 6 vezes - Valor esperado: 6x R$ 271,27", () => {
    cy.get("#slider-range")
      .should("be.visible")
      .then(($slider) => {
        cy.wrap($slider)
          .invoke("val", 1000)
          .trigger("input")
          .should("have.value", 1000);
      });
    cy.get("#slider-range-month").should("be.visible").should("have.value", 6);

    cy.get("#month-amount-output").should("have.text", "6x");
    cy.get("#price-number").should("have.text", "271,27");
  });

  it("Simulação de: R$ 4.000 em 12 vezes - Valor esperado: 12x R$ 478,49", () => {
    cy.get("#slider-range")
      .should("be.visible")
      .then(($slider) => {
        cy.wrap($slider)
          .invoke("val", 4000)
          .trigger("input")
          .should("have.value", 4000);
      });

    cy.get("#slider-range-month")
      .should("be.visible")
      .then(($slider) => {
        cy.wrap($slider)
          .invoke("val", 12)
          .trigger("input")
          .should("have.value", 24);
      });
    cy.get("#slider-range-month")
      .should("be.visible")
      .then(($slider) => {
        cy.wrap($slider)
          .invoke("val", 6)
          .trigger("input")
          .should("have.value", 12);
      });

    cy.get("#month-amount-output").should("have.text", "12x");
    cy.get("#price-number").should("have.text", "478,49");
  });

  it("Simulação de: R$ 6.000 em 24 vezes - Valor esperado: 24x R$ 347,89", () => {
    cy.get("#slider-range")
      .should("be.visible")
      .then(($slider) => {
        cy.wrap($slider)
          .invoke("val", 6000)
          .trigger("input")
          .should("have.value", 6000);
      });
    cy.get("#slider-range-month")
      .should("be.visible")
      .then(($slider) => {
        cy.wrap($slider)
          .invoke("val", 12)
          .trigger("input")
          .should("have.value", 24);
      });

    cy.get("#month-amount-output").should("have.text", "24x");
    cy.get("#price-number").should("have.text", "347,89");
  });
});
