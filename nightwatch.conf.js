const chromedriver = require("chromedriver")
const geckodriver = require("geckodriver")
module.exports = {
    "src_folders": ["tests"],
    // "page_objects_path": "pageObjects",

    "test_settings": {
        "default": {
            "webdriver": {
                "start_process": true,
                "server_path": chromedriver.path,
                "port": 9515
            },
            "desiredCapabilities": {
                "browserName": "chrome",
                "chromeOptions": {
                    "w3c": false
                }
            },
            "screenshots": {
                "enabled": true, // just straight up turn screenshots on or off
                "on_failure": true, // takes a screenshot when an assertion fails
                "on_error": false, // if true, every time you have a command error out (like the wrong argument in a setValue) it will screenshot
                "path": "screenshots" // this is a relative path to this file
            }
        },

        "firefox": {
            "webdriver": {
                "start_process": true,
                "server_path": geckodriver.path,
                "port": 4444 //will fail on any other port
            },
            "desiredCapabilities": {
                "browserName": "firefox",
                "acceptInsecureCerts": true
            },
            "screenshots": {
                "enabled": true,
                "on_failure": true,
                "on_error": false,
                "path": "screenshots"
            }
        }
    }
}