"use strict";

const publist = require( "./publist.js" );

console.log( require( "util" ).inspect( publist( { "name": "simple" } ), { "showHidden": true } ) );
