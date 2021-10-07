
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains a body tag', ()=>{
            cy.get('body').should('be.visible');
        });
    });
});