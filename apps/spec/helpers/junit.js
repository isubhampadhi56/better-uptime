const fs = require('fs');
const path = require('path');
const xmlbuilder = require('xmlbuilder');

class JUnitReporter {
    constructor(options = {}) {
        this.savePath = options.savePath || '';
        this.fileName = options.fileName || 'junit_results.xml';
        this.suiteName = options.suiteName || 'Jasmine Tests';

        this.testsuites = xmlbuilder.create('testsuites', { encoding: 'UTF-8' });
        this.testsuite = this.testsuites.ele('testsuite', { name: this.suiteName });

        this.suiteStack = [];
        this.currentSpec = null;
    }

    jasmineStarted(suiteInfo) {
        console.log(`Running suite with ${suiteInfo.totalSpecsDefined} specs.`);
    }

    suiteStarted(result) {
        const newSuite = this.suiteStack.length === 0
            ? this.testsuite.ele('testsuite', { name: result.fullName })
            : this.suiteStack[this.suiteStack.length - 1].ele('testsuite', { name: result.fullName });
        this.suiteStack.push(newSuite);
    }

    suiteDone(result) {
        const currentSuite = this.suiteStack.pop();
        currentSuite.att('errors', result.failedExpectations.length);
        currentSuite.att('time', result.duration / 1000);
    }

    specStarted(result) {
        const currentSuite = this.suiteStack[this.suiteStack.length - 1];
        this.currentSpec = currentSuite.ele('testcase', {
            name: result.description,
            classname: result.fullName
        });
    }

    specDone(result) {
        if (result.status === 'failed') {
            result.failedExpectations.forEach(failure => {
                this.currentSpec.ele('failure', {
                    message: failure.message,
                    type: failure.matcherName
                }).dat(failure.stack);
            });
        } else if (result.status === 'pending') {
            this.currentSpec.ele('skipped');
        }
        this.currentSpec.att('time', result.duration / 1000);
        this.currentSpec = null;
    }

    jasmineDone() {
        const xml = this.testsuites.end({ pretty: true });
        const outputPath = path.join(this.savePath, this.fileName);
        fs.writeFileSync(outputPath, xml);
        console.log(`JUnit results written to ${outputPath}`);
    }
}

// jasmine.getEnv().clearReporters() // remove default reporter logs
jasmine.getEnv().addReporter(
    new JUnitReporter({
        savePath: 'test-reports',
        fileName: 'junitresults.xml'
    })
)
