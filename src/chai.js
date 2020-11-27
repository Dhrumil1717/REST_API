var chai = require('chai');

chai.should();

var foo = "Patients";
console.log(foo);

foo.should.equal('patients');



var expect = require('chai').expect;

var foo = "patients";

expect(foo).to.equal("Patients");



var expect = require('chai').expect;

var patients = ['David', 'Chris', 'Stella'];

expect(patients).to.have.length(4);

var assert = require('chai').assert;
var myStringVar = 'Here is my string';
// No message:
assert.typeOf(myStringVar, 'string');
// With message:
assert.typeOf(myStringVar, 'string', 'myStringVar is not string type.');
// Asserting on length:
assert.lengthOf(myStringVar, 17);
