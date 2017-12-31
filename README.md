# Feed Reader Testing
Through the Jasmine framework tests were performed on the web-based application that reads RSS feeds, provided by [Udacity](https://github.com/udacity/frontend-nanodegree-feedreader).

## How it was created and libraries used
The logic of applying the RSS feed is in the files: ./index.html, ./css/style.css ./js/app.js.
The code for testing is in the ./jasmine/spec/feedreader.js file.

### Libraries
* Jasmine v2.1.2
* jQuery v2.2.1
* Handlebars v2.0.0 - only for RSS feed App

### Compatible browsers
* Google Chrome
* Firefox

## How to view test results?
1. To start App online, click [**here**](https://acqfel.github.io/feedreader-test/) and will open the App site.
2. To run the app locally, click in the green button "Clone or download" above and the right side, then "Download ZIP". Unzip and open index.html in a browser.
3. After opening the application in the browser, scroll to the bottom of the page to see the test results: the number of specs, failures and the description of each test.
4. If you want to see the code and more detailed explanation of each test, open the file ./jasmine/spec/feedreader.js .


## What features of the Feed Reader have been tested?
The test was divided into 4 parts.
1. RSS Feed
    1. The variable allFeeds stores the name and URL of each feed. The test checks if the variable is set and is not empty.
    1. For each feed it is checked whether the URL is set and not empty.
    1. For each feed it is checked if its name has been defined and is not empty.
2. The Menu
    1. The menu element is hidden by default.
    1. The menu changes visibility when the menu icon is clicked.
3. Initial Entries
    1.  When the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. That is, after the feed is loaded, it ensures that at least one article is displayed.
4. New Feed Selection
    1. When a new feed is loaded by the loadFeed function that the content actually changes. That is, after the user clicks on another feed, the content displayed will be different from the previous one.
