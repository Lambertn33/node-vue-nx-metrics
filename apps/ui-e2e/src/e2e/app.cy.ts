describe('navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to users page', () => {
    cy.get('[data-cy="users-link"]').click();
    cy.location('pathname').should('eq', '/users');
  });

  it('should navigate to posts page', () => {
    cy.get('[data-cy="posts-link"]').click();
    cy.location('pathname').should('eq', '/posts');
  });
});

describe('Home page', () => {
  it('should display the home page', () => {
    cy.visit('/');
    cy.get('[data-cy="home-title"]').should('exist').contains('Home Page');
  });
});

describe('Users page', () => {
  beforeEach(() => {
    cy.visit('/users');
  });

  it('should display the users page', () => {
    cy.get('[data-cy="users-title"]').should('exist').contains('Users List');
    cy.get('[data-cy="user-card"]', { timeout: 3000 }).should(
      'have.length.at.least',
      10
    );
  });

  it('should search the user', () => {
    cy.get('[data-cy="users-search"]').type('Lea');
    cy.get('[data-cy="user-card"]').should('have.length', 1);
  });
});
