const appState = require('./app-states.js');

const STOP_MESSAGE = 'Goodbye!';
const WELCOME_MESSAGE = 'Welcome to Giant Bomb video viewer. You have watched videos.';


const newSessionHandlers = {
    NewSession: () => {
        console.log('New Session');
        this.handler.state = appState.START_MODE;
        this.emit(':ask', WELCOME_MESSAGE);
    },
    'AMAZON.StopIntent': () => {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.CancelIntent': () => {
        this.emit(':tell', STOP_MESSAGE);
    },
    SessionEndedRequest: () => {
        console.log('Session ended!');
        this.emit(':tell', STOP_MESSAGE);
    },
};

module.exports = newSessionHandlers;
