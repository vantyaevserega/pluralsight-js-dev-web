import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('My first test', ()=>{
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should say list of users', (done) => {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, function(err, window){
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal('list of users:');
            done();
            window.close();
        });
    });
});