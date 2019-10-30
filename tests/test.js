module.exports = {
    before: browser=>{
        browser.url("http://www.google.com")
    },
    after: browser=>{
        browser.end()
    },
    "Check title": browser=>{
        browser.waitForElementVisible("#hplogo", 10000)
            .verify.title("Google")
    },
    "Take a random screenshot": browser=>{
        var path = process.cwd()  // process.cwd() is a method that Node gives us to get the current directory (where this project is)
        browser.saveScreenshot(path + "/screenshots/randoScreenshot.png")
    },
    "Search puppies and force fail": browser=>{
        browser.setValue("[name='q']", "puppies")
            .waitForElementVisible("[name='btnK']", 5000)
            .click("[name='btnK']")
            .waitForElementVisible("#rso", 5000)
            .assert.containsText("#rso", "puppies suck", "obviously this will fail because it isn't true.") //will generate a screenshot with the test name
    }
}