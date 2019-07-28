
Feature('Check Yandex Main Page');

BeforeSuite((I) => {
  I.amOnPage(`https://ya.ru`);
});

Scenario('Main page is loaded', (I, mainYaPage) => {
  mainYaPage.isLoaded();
});

Scenario('Checking the display of page elements', (I, mainYaPage) => {
  mainYaPage.loginButtonIsVisible();
  mainYaPage.searchFormIsVisible();
  mainYaPage.logoIsVisible();
});

Scenario('Check pre-search', (I, mainYaPage) => {
  mainYaPage.checkSearchResultInPopup(`qa `, `qa engineer`);
});