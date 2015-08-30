# protractor-helper

- basic protractor environment
- reporter


# how to start

```
npm install -g protractor

cd C:\Program Files\nodejs\node_global\node_modules\protractor

npm install

```

# protractor.config.js setting

```

/**
 * Created by Jackey Li on 2015/4/24.
 */
exports.config = {
    directConnect: true,
    framework: "jasmine2",
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: [
        'test.js'
    ],
    onPrepare:function(){

        require('./locator/locatorExtend.js')(protractor);
        var jasmineReporters = require('jasmine-reporters');
        var reporter = new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            filePrefix: 'output',
            savePath: 'e2eOutput'
        });
        jasmine.getEnv().addReporter(reporter);
    },
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};

```

# edit configuration in webstorm

```
add a nodejs server

node interpreter:C:\Program Files\nodejs\node.exe
working directory: D:\protractor\protractor-helper
Javascript files: C:\Program Files\nodejs\node_global\node_modules\protractor\lib\cli.js
Application parameter: E2E/protractor_conf.js

```
