describe("Pokedex", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:5000"); // eslint-disable-line no-use-before-define
    cy.contains("ivysaur"); // eslint-disable-line no-use-before-define
    // eslint-disable-next-line no-use-before-define
    cy.contains(
      "Pokémon and Pokémon character names are trademarks of Nintendo."
    );
  });

  it("pokemon page can be navigated to", function () {
    cy.visit("http://localhost:5000/pokemon/ivysaur"); // eslint-disable-line no-use-before-define
    cy.contains("overgrow"); // eslint-disable-line no-use-before-define
  });
});
