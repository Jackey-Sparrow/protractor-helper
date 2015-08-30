```
/**
 * Created by Administrator on 2015/4/24.
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

# jasmine must use 2.0.0

```
npm install --save-dev jasmine-reporters@^2.0.0

```

# how to use

```

framework: "jasmine2",
onPrepare: function() {
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        filePrefix: 'xmloutput',
        savePath: 'testresults'
    }));
}

```