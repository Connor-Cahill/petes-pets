const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
chai.use(chaiHttp);


/* 
    TESTING SEARCH FEATURE
    This is the tests for the Search feature. 
    This file will test that when a user searches something results will return.

*/

describe('Search', function() {

    it('Should SEARCH all pets by name and return relevant pet', function(done) {
        chai.request(server)
        .get('/search?term=norman')
        .end((err, res) => {
            res.status.should.be.equal(200);
            res.should.be.html;
            done();
        })
    })

    it('Should search all pets by Species and return relevant results', function(done) {
        chai.request(server)
        .get('/search?term=greyhound')
        .end((err, res) => {
            res.status.should.be.equal(200);
            res.should.be.html;
            done();
        })
    })
})


