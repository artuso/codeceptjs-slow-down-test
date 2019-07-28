const { I } = inject();

const defaultTimeout = 15;
const pageSelector = `table.layout__table`;
const headerSelector = `${pageSelector} td.layout__header-cell`;
const searchSelector = `${pageSelector} tr.layout__search [role="search"]`;
const footerSelector = `${pageSelector} tr.layout__footer`;

const searchElements = {
  input: `${searchSelector} div.search2__input input`,
  voiceSearchButton: `${searchSelector} div.input__voice-search`,
  searchButton: `${searchSelector} div.search2__button`,
  clearButton: `${searchSelector} span.input__clear`
};

module.exports = {

  isLoaded() {
    I.waitForElement(pageSelector, defaultTimeout);
  },

  loginButtonIsVisible() {
    I.seeElement(`${headerSelector} div.b-inline`);
  },

  searchFormIsVisible(){
    for (let element in searchElements) {
      I.seeElement(searchElements[element]);
    }
  },

  logoIsVisible(){
    I.seeElement(`${footerSelector} a`);
  },

  checkSearchResultInPopup(searchValue, firstSearchResult){
    I.fillField(searchElements.input, searchValue);
    I.seeTextEquals(firstSearchResult, `div.suggest2 li:nth-child(1) span.suggest2-item__text`)
  }

};
