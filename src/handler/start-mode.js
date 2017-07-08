const Alexa = require('alexa-sdk');
const appState = require('./app-states.js');

function handleLoadVideoCategories() {
    console.log('Redirecting to video categories');
    this.handler.state = appState.CATEGORY_LIST;
    this.emit('ListVideoCategories');
}

module.exports = Alexa.CreateStateHandler(appState.CATEGORY_LIST, {
    ListVideoCategories: () => {
        handleLoadVideoCategories.call(this);
    },
});
