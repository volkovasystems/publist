const assert = require( "assert" );
const publist = require( "./publist.js" );

assert.ok( publist( { "name": "simple" } ) );

assert.equal( typeof publist( { "name": "simple" } ) == "object", true, "should return true" );

console.log( "ok" );
