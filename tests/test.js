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
    }
}