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
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('allFeeds variable has been defined and that it is not empty', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it("has a URL defined and that the URL is not empty.", function() {
             allFeeds.forEach(function(feed) {
                 //console.log(feed.url);
                 expect(feed.url).toContain("http://");
             });
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it("it has a name defined and that the name is not empty.", function() {
             allFeeds.forEach(function(feed) {
                 //console.log(feed.url);
                 expect(feed.name).toBeTruthy();
             });
         });

    });


    /* TODO: Write a new test suite named "The menu" */
    describe("The menu", function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it("the menu element is hidden by default", function () {
             expect($('body').hasClass("menu-hidden")).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it("does the menu display when clicked and does it hide when clicked again", function () {
              var menu = $('.menu-icon-link');
              // after the first click the menu-hidden class is removed and the menu disappears
               menu.click();
               expect($('body').hasClass("menu-hidden")).toBe(false);
               // after the second click the menu-hidden class returns and the menu appears
               menu.click();
               expect($('body').hasClass("menu-hidden")).toBe(true);
          });

      });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe("Initial Entries", function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        var id = 0;

        beforeEach(function(done) {
            //loadFeed function is called and completes its work
             loadFeed(id, function() {
                 console.log('loadFeed done');
                 //console.log($('article').length);
                 done();
             });
        });

        it("there is at least a single .entry element within the .feed container", function(done) {
            // $('article').length is the amount of articles in the News Feed
            console.log($('article').length);
            expect($('article').length).toBeGreaterThan(0);
            expect($('article').hasClass("entry")).toBe(true);
            done();
        });



    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe("New Feed Selection", function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         var previousFeed, newFeed;

         beforeEach(function(done) {
             // loadFeed loads content referring to id = 0
             loadFeed(0, function() {
                 console.log('loadFeed 0 done');
                 // store previousFeed
                 previousFeed = $(".feed").html();

                 // loadFeed loads a different content than the previous one (id = 1)
                 loadFeed(1, function() {
                     console.log('loadFeed 1 done');
                     // store newFeed
                     newFeed = $(".feed").html();
                     done();
                 });
             });
         });

         it("when a new feed is loaded by the loadFeed function that the content actually changes", function(done) {
             expect(newFeed).not.toEqual(previousFeed);
             done();
         });
    });

}());
