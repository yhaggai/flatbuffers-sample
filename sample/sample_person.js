'use strict'


const flatbuffers = require('../vendor/flatbuffers.js').flatbuffers;
const Demo = require('../output/person_generated').Demo;

function getPerson(response) {
  // Get access to the root:
  const person = Demo.Person.getRootAsPerson(response);

  console.log(person.firstName());
  console.log(person.lastName());
  console.log(person.age());

}

function createPerson() {
  const builder = new flatbuffers.Builder(0);

  // creating a Person object
  const firstName = builder.createString('Haggai');
  const lastName = builder.createString('Yaniv');
  const myAge = 30;

  // init person Instance 
  Demo.Person.startPerson(builder);
  Demo.Person.addFirstName(builder, firstName);
  Demo.Person.addLastName(builder, lastName);
  Demo.Person.addAge(builder, myAge);
  const person = Demo.Person.endPerson(builder);

  builder.finish(person);
  return builder.dataBuffer();
}


// Example how to use FlatBuffers to create and read binary buffers.
function main() {
  const personBytes = createPerson();

  // We now have a FlatBuffer that can be stored on disk or sent over a network.

  // ...Code to store to disk or send over a network goes here...

  // Instead, we are going to access it right away, as if we just received it.
  getPerson(personBytes);

}



main();
