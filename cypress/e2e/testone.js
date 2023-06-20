//<reference type:'Cypress'/>
describe('test', () => {
    it('test', () => {
    cy.visit("https://automationteststore.com/")
 cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click().then(function (content) {
    console.log("this button has been added")
 })
 cy.get('.logo > img').click()
 cy.get('a[href="https://automationteststore.com/index.php?rt=content/sitemap"]').click().then(function (sitemap) {
    console.log("site map has been clicked")
//cy.url().should('include','content')
//cy.title().should('eq','Site Map')
 })
 cy.get('.logo > img').click()
 cy.get('.info_links_footer > :nth-child(7) > a').click().then(function (login) {
   console.log('login has been clicked')
   cy.url().should('include','account/login')
   
 })
    });
});