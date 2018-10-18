const webdriverio = require( "webdriverio" );
const expect = require( "chai" ).expect;
const config = require( "../../helpers/desiredCapabilities-android" ).options;
const client = webdriverio.remote( config );
const xpath = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/de.logic.presentation.components.views.CustomSlidingPaneLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.support.v7.widget.RecyclerView/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.ImageView";
const skipId = "de.promptus.mssngr.staging:id/action_skip";
const skipXpath = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.view.ViewGroup/android.support.v7.widget.LinearLayoutCompat/android.widget.TextView";

  before( function( ) {
    this.timeout( 50000 );
    return client.init( );
  });


  after( function( ) {
    return client.end( );
  });


  describe( "Action bar tab", function( ) {


    it.only( "can be added", function( ) {
      return client
        .click( "/hierarchy/android.widget.FrameLayout" )
        .click( skipXpath )
        .click( xpath )
        .click( "~Action Bar" )
        .click( "~Action Bar Tabs" )
        .click( "~Add new tab" )

    });


    it( "the last one can be removed", function( ) {

    });


    it( "can be toggled", function( ) {

    });


    it( "can all be removed", function( ) {

    });

  });
