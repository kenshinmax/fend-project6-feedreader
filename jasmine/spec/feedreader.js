/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
      
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
      
        it('url are defined', function() {
            for(feed in allFeeds){
                expect(allFeeds[feed].url).toBeDefined();    
                expect(allFeeds[feed].url).not.toBeNull();
            }
        });
        
        it('name are defined', function() {
            for(feed in allFeeds){
                expect(allFeeds[feed].name).toBeDefined();    
                expect(allFeeds[feed].name).not.toBeNull();
            }
        });

    });
    
  
    describe('The menu', function() {
        var docBody = $('body');
        var menuIcon = $('.menu-icon-link');
        var $menu = $('.menu');
        
        // Confirm that the menu is initially hidden
        it('hidden by default', function() {
           expect(docBody.hasClass('menu-hidden')).toEqual(true);
        });
        
        // test that the menu changes when the menu icon is clicked
        it('visible when clicked', function() {
           // use jQuery to simulate the trigger event
           menuIcon.trigger('click');
           expect(docBody.hasClass('menu-hidden')).toEqual(false);

           menuIcon.trigger('click');
           expect(docBody.hasClass('menu-hidden')).toEqual(true);
        });

    });

   describe('Initial Entries', function() {
        beforeEach(function(done){
          loadFeed(0,done);
        });

        it('loadFeed Entries ', function(done) {
            expect($('.feed').children().length).not.toBe(0);
            done();
        });
    });

    describe('New Feed Selection', function() {
        var feed0,
            feed1;

       beforeEach(function(done) {
            loadFeed(1, function() {
                feed0 = $('.feed').html();
                done();
            });
        });
 
        it('content changes', function(done) {
            loadFeed(0, function() {
                expect($('.feed').html()).not.toEqual(feed0);
                done();
            });
            
        });
    });
}());
