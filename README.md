### Trabalhando com Selenium WebDriver

Instalar selenium webdriber -> npm i selenium-webdriver

`Fazendo sua requisição no projeto`

    const webdriver = require('selenium-webdriver');

`Trabalhando com o driver do google chrome`

    const driver = new webdriver.Builder().forBrowser('chrome').build();

* 1º - Lembrar de baixar o driver do chrome;
* 2º - Caso rode local, lembrar de linkar seu S.O com o driver usando: 

       ln -s "../chrmoedriver | Caminho relaivo" 


#### Data: 12/09/2018
Vinicius Martins