// Import functions and grab DOM elements
import { renderPoll } from './renders.js';

const addVoteAButton = document.querySelector('#option-a-plus');
const minusVoteAButton = document.querySelector('#option-a-minus');
const addVoteBButton = document.querySelector('#option-b-plus');
const minusVoteBButton = document.querySelector('#option-b-minus');
const endPollButton = document.querySelector('#end-poll-button');
const currentPollTitleEl = document.querySelector('#current-poll-title');
const optionATitleEl = document.querySelector('#option-a-title');
const optionBTitleEl = document.querySelector('#option-b-title');
const optionAVoteCountEl = document.querySelector('#option-a-vote-count');
const optionBVoteCountEl = document.querySelector('#option-b-vote-count');
const pastPollsEl = document.querySelector('#past-polls-div');

const form = document.querySelector('form');
// let state
let pollQuestion = '';
let optionATitle = '';
let optionBTitle = '';
let optionAVotes = 0;
let optionBVotes = 0;

const pastPollsArr = [];

// Set event listeners 
addVoteAButton.addEventListener('click', () => {
    optionAVotes++;
    optionAVoteCountEl.textContent = optionAVotes;
});

minusVoteAButton.addEventListener('click', () => {
    optionAVotes--;
    optionAVoteCountEl.textContent = optionAVotes;
});

addVoteBButton.addEventListener('click', () => {
    optionBVotes++;
    optionBVoteCountEl.textContent = optionBVotes;
});

minusVoteBButton.addEventListener('click', () => {
    optionBVotes--;
    optionBVoteCountEl.textContent = optionBVotes;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);

    pollQuestion = data.get('poll-question');
    optionATitle = data.get('poll-option-a');
    optionBTitle = data.get('poll-option-b');

    displayCurrentPoll();
});

endPollButton.addEventListener('click', () => {
    form.reset();

    const poll = makePoll();
    pastPollsArr.push(poll);

    resetState();

    displayCurrentPoll();

    displayAllPolls();
});


function displayCurrentPoll() {
    currentPollTitleEl.textContent = pollQuestion;
    optionATitleEl.textContent = optionATitle;
    optionBTitleEl.textContent = optionBTitle;
}

function makePoll() {
    return {
        pollQuestion: pollQuestion,
        optionATitle: optionATitle,
        optionBTitle: optionBTitle,
        optionAVotes: optionAVotes,
        optionBVotes: optionBVotes
    };
}

function resetState() {
    pollQuestion = '';
    optionATitle = '';
    optionBTitle = '';
    optionAVotes = 0;
    optionBVotes = 0;
}

function displayAllPolls() {
    while (pastPollsEl.firstChild) {
        pastPollsEl.firstChild.remove();
    }

    for (let poll of pastPollsArr) {
        const pollDiv = renderPoll(poll);
        pastPollsEl.append(pollDiv);
    }
    

}