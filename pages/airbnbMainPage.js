const { I } = inject();

const defaultTimeout = 15;
const pageSelector = `[data-reactroot]`;
const searchFormSelector = `${pageSelector} [class="_1n8ekdm"]`;

module.exports = {

  isLoaded() {
    I.waitForElement(pageSelector, defaultTimeout);
    I.seeTextEquals(`Бронируйте уникальное жилье и Впечатления`, `${searchFormSelector} h1`);
  },

  setPlace(placeName){
    const placeFieldSelector = `${searchFormSelector} [class="_bujmdv"]`;
    I.fillField(`${placeFieldSelector} input`, placeName);
    within(`${searchFormSelector} [id*="search-bar__listbox"]`,  () =>{
      I.click(placeName);
    });
    I.waitForValue(`${placeFieldSelector} input`, placeName, defaultTimeout);
  }


};
