//const { CallTracker } = require("assert")
const { Builder, By, Key, until } = require("selenium-webdriver")
require('chromedriver')
const assert = require("assert")


let driver = new Builder().forBrowser('chrome').build()
async function logIn() {
    await driver.get('https://www.saucedemo.com/')
    await driver.sleep(1000)
    await driver.findElement(By.id("user-name")).sendKeys('standard_user')
    await driver.sleep(2000)
    await driver.findElement(By.css('#password')).sendKeys("secret_sauce")
    await driver.sleep(2000)
    await driver.findElement(By.css('#login-button')).click()

    //  assertion by Url

    let current_url = await driver.getCurrentUrl()
    console.log(current_url);
    if (current_url === 'https://www.saucedemo.com/inventory.html') {
        console.log('URl is good');
    } else (console.log('failed'))


    // let assert = await driver.findElement().getText()
    // assert.strictEqual(assert,'text')
    // console.log('Test passed');







    // const element = driver.findElement(By.css('p'));
    // assert.strictEqual(await element.getText(), 'Hello from JavaScript!');

    // const documentInitialised = () =>
    //     driver.executeScript('return initialised');

    // await driver.get('file:///race_condition.html');
    // await driver.wait(() => documentInitialised(), 10000);
    // const element = driver.findElement(By.css('p'));
    // assert.strictEqual(await element.getText(), 'Hello from JavaScript!');


    // let test = await driver.findElement(By.xpath('//span[text() = "My Account"]'))
    // let success_test = await driver.wait(until.elementTextContains(test, 'MY ACCOUNT'), 3000)
    // //await driver.sleep(3000)
    // if (success_test) {
    //     console.log('ALL GOOOOOOOOOOD');
    //     await menu()

    // } else {
    //     console.log('failed')
    //     await driver.quit()
    // }




    //let success_element = await driver.findElement(By.xpath("//*[text()='Registration Successful']"))
    //     let success_message = await driver.wait(until.elementIsVisible(success_element), 2000);
    //     if (success_message) {
    //         console.log('Registration is success')
    //         await driver.findElement(By.css('.button')).click()
    //         await driver.sleep(2000)
    //         await login()
    //     } else {
    //         console.log('Registration failed');
    //         driver.quit()
    //     }

    //     await driver.quit();


    //let current_url = await driver.getCurrentUrl()
    //     console.log(current_url);
    //     if (current_url === 'https://bbb.testpro.io/#!/home') {
    //         console.log('login good');
    //         await createPl()
    //     } else (console.log('failed'))
    //     driver.quit()




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

    let success_message = await driver.wait(until.elementIsVisible(success_element), 2000);







    if (success_message) {
        console.log('Purchase is success')

    } else {
        console.log('Registration failed');
        driver.quit()
    }
    await driver.findElement(By.id('checkout')).click()

    let checkOut_url = await driver.getCurrentUrl()

    if (checkOut_url === 'https://www.saucedemo.com/checkout-step-one.html') {
        console.log('Check out is good');
    } else (console.log('failed'))

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
        }

    } else {
        driver.quit()
    }

}
logIn()
// запуск node swa
// надо сделать больше экран