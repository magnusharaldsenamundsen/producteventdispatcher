'use strict';

var eventmodel = require( './models/eventmodel' );
var express = require( 'express' );

var app = express();
var port = 8000;

app.listen(port, function() {
	console.log( "producteventdispatcher - Web server running on port %d", port );
});

app.get( '/events', function( req, res ) {
	res.send( eventmodel.get() );
});

// Emit an event every 1 seconds
eventmodel.send();