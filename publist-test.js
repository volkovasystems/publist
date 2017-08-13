const assert = require( "assert" );
const publist = require( "./publist.js" );

assert.ok( publist( { "name": "simple" } ), "should not throw error" );

assert.equal( typeof publist( { "name": "simple" } ) == "object", true, "should be of object data type" );

console.log( "ok" );
