/**
 * Created by Administrator on 2015/4/24.
 */

describe('protractor homepage', function () {
    it('know your locator', function () {
        browser.get('http://localhost:63342/protractor/Index.html');

        //Ԫ�ض�λ locator

        // by id
        //element(by.id('userName')).sendKeys(' Sparrow id test');

        //by ng-model
        //element(by.model('userName')).sendKeys(' Sparrow model test');

        //by name
        //element(by.name('xx'))

        //by xpath
        // element(by.xpath)

        //by binding
        // Find the element with binding matching 'yourName' - this will
        // find the <h1>{{yourName}}!</h1> element.
        var yourName = element(by.binding('yourName'));
        expect(yourName.getText()).toEqual('protractor');

        //element(by.buttonTextSimple('Go!')).click();
        //element(by.test('#userName')).sendKeys('test');
        browser.sleep(5000);
        //element
        //var WEB_ELEMENT_FUNCTIONS = [
        //    'click', 'sendKeys', 'getTagName', 'getCssValue', 'getAttribute', 'getText',
        //    'getSize', 'getLocation', 'isEnabled', 'isSelected', 'submit', 'clear',
        //    'isDisplayed', 'getOuterHtml', 'getInnerHtml', 'getId', 'getRawId'];

    });
});