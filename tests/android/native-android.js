const webdriverio = require( "webdriverio" );
const expect = require( "chai" ).expect;
const config = require( "../../helpers/desiredCapabilities-android" ).options;
const client = webdriverio.remote( config );


before(function() {

    this.timeout(50000);

    return client.init();

  });

  after(function() {

      return client.end();

  });


describe("Simple cases", function() {




        describe("test - app - addition", function() {

            it("add - 3 - 3", function() {
              return client
                .element("~IntegerA").setValue("3")
                .element("~IntegerB").setValue("3")
                .click("~ComputeSumButton")
                .element("~Answer").getText()
                  .then(function(text) {
                    expect(text).to.equal("6");
                  })
            });


            it.only( "check alert", function( ) {
              return client
                .click( "~show alert" )

                .alertText( )
                  .then( function( text ){
                    expect( text ).to.equal( "Cool title\nthis alert is so cool." )
                  })
                .alertAccept( ).then( function( ){
                  console.log( "safjksahfhajfasfhajk" )
                  try {
           return client.alertAccept();
          } catch (e) {
           console.log( e )
         }
                })



            });
        });






});
