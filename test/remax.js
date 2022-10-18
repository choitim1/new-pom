

const{Key, Builder, By, until}= require('selenium-webdriver');
require('chromedriver');
let num = Math.floor(Math.random()*1000+1)


let driver = new Builder().forBrowser('chrome').build();
async function logout (){
    
    await driver.get('https://www.remax.com')
    await  driver.sleep(2000)
    await driver.findElement(By.xpath('//li[@class="ml-2 sm:ml-4"]')).click()
    await driver.sleep(5000)
    await driver.findElement(By.xpath('//input[@placeholder="Enter your email address"]')).sendKeys(
        `choitim2010test${num}@gmail.com`
    )
    await driver.sleep(2000)
    await driver.findElement(By.xpath('//input[@placeholder="Enter your password"]')).sendKeys(`333Test${num}!`)
    await driver.sleep(2000)
    await driver.findElement(By.css('[data-test="registration-button-continue"]')).click()
    //await driver.quit()
    await driver.sleep(2000)
 await driver.findElement(By.xpath('//input[@placeholder= "Enter your first name"]')).sendKeys('tim') // first name
 await driver.sleep(5000)

 await driver.findElement(By.xpath('//input[@placeholder= "Enter your last name"]')).sendKeys('tim1') // last
 await driver.sleep(5000)
 await driver.findElement(By.xpath('//button[@class ="my-6 dbutton dbutton-remax block"]')).click()  // register
 await driver.sleep(2000)
 let test = await driver.findElement(By.xpath('//span[text() = "My Account"]'))
 let success_test = await driver.wait(until.elementTextContains(test, 'MY ACCOUNT'),3000)
 //await driver.sleep(3000)
 if(success_test){
    console.log('ALL GOOOOOOOOOOD');
    await menu()

 }else {
    console.log('failed')
    await driver.quit()
 }

async function menu (){
await driver.findElement(By.xpath('//button[@class="dbutton dbutton-remax icon-left secondary"]')).click()
await driver.sleep(2000)
await driver.findElement(By.xpath("//a[text() ='Mobile App']")).click()
await driver.sleep(2000)
let test = await driver.getCurrentUrl()
await driver.sleep(2000)

if (test==='https://www.remax.com/mobile-apps')
{console.log('111ALL GOOOOOOOOOOOOOOD')}
else {
    console.log('жоооооооооооПППААА')
    await driver.quit()
}

await driver.findElement(By.xpath('//span[text ()="My Account"]')).click()
await driver.sleep(2000)

}
await driver.findElement(By.xpath('//a[@class="nav-link"]')).click()
await driver.sleep(2000)
await driver.quit()

}


logout()   






// await driver.findElement(By.xpath('//a[text () = "The RE/MAX Collection"]')).click()
// let page_test = await driver.getCurrentUrl('https://www.remax.com/luxury')
// if (page_test === 'https://www.remax.com/luxury '){
//     console.log ('redirect is success')
// }else {
//     console.log(' redirect is failed');
//     await driver.quit()
// }












//  await driver.findElement(By.xpath("//span[text() = 'Account'])")).click()
//  await driver.findElement(By.xpath('//li [@data-test="login-tab"]')).click()  // sign in
// await driver.sleep(3000)
//
// await driver.sleep(2000)
//


   




// await driver.findElement(By.xpath('//li [@class="ml-2 sm:ml-4"]/button[@class="header-link dbutton dbutton-remax minimal icon-left secondary"]')).click()
//     await driver.sleep(2000)
    //await driver.findElement(By.css('.utilities-button.dbutton ')).click()

//     await driver.findElement(By.xpath('//li[@class="ml-2 sm:ml-4"]')).click()
//     await driver.findElement(By.xpath('//li[@class ="dtab dtab--remax"]'))
//     await driver.sleep(2000)
//     await driver.quit()

 




// async function login(){
//     let driver =  await new Builder().forBrowser('chrome').build();
//     await driver.get('https://www.remax.com')
//     await  driver.sleep(2000)
//     await driver.findElement(By.xpath('//li[@class="ml-2 sm:ml-4"]')).click()
//     await driver.findElement(By.xpath('//li [@data-test="login-tab"]')).click()  // sign in


// }

// login()