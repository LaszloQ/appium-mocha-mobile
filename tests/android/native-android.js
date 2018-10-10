const webdriverio = require( "webdriverio" );
const expect = require( "chai" ).expect;
const config = require( "../../helpers/desiredCapabilities-android" ).options;
const client = webdriverio.remote( config );


  before( function( ) {
    this.timeout( 50000 );
    return client.init( );
  });


  after( function( ) {
    return client.end( );
  });


  describe( "Action bar tab", function( ) {


    it( "can be added", function( ) {

    });


    it( "the last one can be removed", function( ) {

    });


    it( "can be toggled", function( ) {

    });


    it( "can all be removed", function( ) {

    });
    
  });
