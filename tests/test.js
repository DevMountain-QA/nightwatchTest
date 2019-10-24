module.exports = {
    before: browser=>{
        browser.url("http://www.google.com")
    },
    after: browser=>{
        browser.end()
    },
    "Check title": browser=>{
        browser.waitForElementVisible("button")
            .verify.titleContains("Google")
    }
}