
Feature('Check search');

BeforeSuite((I) => {
  I.amOnPage(`https://www.airbnb.ru/`);
});

Scenario('Main page is loaded', (I, airbnbMainPage) => {
  airbnbMainPage.isLoaded();
});

Scenario('Set parameters', (I, airbnbMainPage) => {
  airbnbMainPage.setPlace("Moscow");
});