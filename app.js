// Import functions and grab DOM elements
const addVoteAButton = document.querySelector('#option-a-plus');
const minusVoteAButton = document.querySelector('#option-a-minus');
const addVoteBButton = document.querySelector('#option-b-plus');
const minusVoteBButton = document.querySelector('#option-b-minus');
const endPollButton = document.querySelector('#end-poll-button');
const startPollButton = document.querySelector('#start-poll-button');
const currentPollTitleEl = document.querySelector('#current-poll-title');
const optionATitleEl = document.querySelector('#option-a-title');
const optionBTitleEl = document.querySelector('#option-b-title');
const optionAVoteCountEl = document.querySelector('#option-a-vote-count');
const optionBVoteCountEl = document.querySelector('#option-b-vote-count');

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