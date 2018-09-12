const webdriver = require('selenium-webdriver');

;(async () => {
    const driver = new webdriver.Builder().forBrowser('chrome').build();
     await driver.get('https://github.com/login');
     await driver.findElement(webdriver.By.id("login_field")).sendKeys("Usuario");
     await driver.findElement(webdriver.By.id("password")).sendKeys("Senha");
     await driver.findElement(webdriver.By.name("commit")).click();
     
   // await driver.quit();
})()