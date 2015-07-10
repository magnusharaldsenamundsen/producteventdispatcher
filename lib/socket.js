'use strict';

var axon = require( 'axon' );
var socket = axon.socket( 'pub' );
var moment = require( 'moment' );

var port = 8001;
socket.bind( port );
console.log( "producteventdispatcher - SubPub server running on port %d", port );

socket.on( 'error', function( err ){
	throw err;
});

exports.send = function( data ){
	data.timestamp = moment().valueOf();
	console.log("Sending " + data.timestamp);
	socket.send( data );
};