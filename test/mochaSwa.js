//const { CallTracker } = require("assert")
const { Builder, By, Key, until } = require("selenium-webdriver")
require('chromedriver')
//const assert = require("assert")

var assert = require('chai').assert
var expect = require('chai').expect
let driver = new Builder().forBrowser('chrome').build()

describe('swa', function () {
    it('logIn', async function () {
        await driver.get('https://www.saucedemo.com/')
        await driver.sleep(1000)
        await driver.findElement(By.id("user-name")).sendKeys('standard_user')
        await driver.sleep(2000)
        await driver.findElement(By.css('#password')).sendKeys("secret_sauce")
        await driver.sleep(2000)
        await driver.findElement(By.css('#login-button')).click()
        let product = await driver
            .findElement(By.css('.title'))
            .getText()
        assert.strictEqual(product, 'PRODUCTS')
        console.log("TEST PASSED")

        expect(product).to.equal('PRODUCTS');    ///  Also assertion
        console.log("TEST PASSED")

        let current_url = await driver.getCurrentUrl()
        console.log(current_url);
        if (current_url === 'https://www.saucedemo.com/inventory.html') {
            console.log('URl is good');
        } else (console.log('failed'))


    })
    it('Add_to_cart', async function () {

        await driver.sleep(2000)
        await driver.findElement(By.id('item_4_img_link')).click()
        await driver.sleep(2000)
        await driver.findElement(By.id('add-to-cart-sauce-labs-backpack')).click()
        await driver.sleep(1000)
        await driver.findElement(By.id('shopping_cart_container')).click()

        // assertion by text//

        let success_element = await driver.findElement(By.xpath("//*[text()='Sauce Labs Backpack']"))

        let test = await driver.findElement(By.xpath("//*[text()='Sauce Labs Backpack']")).getText()
        assert.strictEqual(test, 'Sauce Labs Backpack')
        console.log('Test passed');
        // assertion by url
        let cartUrl = await driver.getCurrentUrl()
        if (cartUrl === 'https://www.saucedemo.com/cart.html') {
            console.log('Test of add to cart passed');
        } else {
            driver.quit()
        }


    })
    it('checkout', async function () {
        await driver
            .findElement(By.id('checkout'))
            .click()
        let checkout = await driver.findElement(By.css('.title')).getText()
        assert.strictEqual(checkout, "CHECKOUT: YOUR INFORMATION")
        console.log('check out pass');
        expect(checkout).to.equal("CHECKOUT: YOUR INFORMATION");    ///  Also assertion
        console.log("TEST PASSED")

    })
    it('Continue', async function () {
        await driver.findElement(By.id('continue')).click()
        await driver.sleep(1000)

        await driver.findElement(By.id('first-name')).sendKeys('Tim')
        await driver.sleep(1000)
        await driver.findElement(By.id('last-name')).sendKeys('Tyson')
        await driver.sleep(1000)
        await driver.findElement(By.id('postal-code')).sendKeys('74132')
        await driver.sleep(1000)
        await driver.findElement(By.id('continue')).click()
        const paymentInfo = await driver.findElement(By.xpath('//*[text()="SauceCard #31337"]'));
        let SauceCard = await driver.wait(until.elementIsVisible(paymentInfo), 2000);
        if (SauceCard) {
            console.log('Payment Information is success');
            await driver.findElement(By.id("finish")).click()
            let complete = await driver.findElement(By.xpath("//*[text()='THANK YOU FOR YOUR ORDER']"))
            const thank_you = await driver.wait(until.elementTextContains(complete, 'THANK YOU FOR YOUR ORDER'), 2000);
            if (thank_you) {
                console.log("THANK YOU FOR YOUR ORDER");
                driver.quit()
            }

        } 

    })
   

})
 //                     npx mocha --no-timeouts 'test/mochaSwa.js'