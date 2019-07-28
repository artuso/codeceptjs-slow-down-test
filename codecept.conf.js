exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: "",
      waitForTimeout: 10000,
      show: false,
      windowSize: "1620x880",
      restart: false,
      waitForNavigation: "networkidle2",
      waitForAction: 100,
      chrome: {
        args: [
          "--start-maximized",
          "--no-sandbox"
        ]
      }
    }
  },
  include: {
    airbnbMainPage: './pages/airbnbMainPage.js',
    mainYaPage: './pages/mainYaPage.js',
    reactTodoPage: './pages/reactTodoPage.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-slow-down-test'
};