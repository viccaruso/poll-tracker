export function renderPoll(poll) {
    const divContainer = document.createElement('div');
    const pollQuestion = document.createElement('p');
    const option1Div = renderOption(poll.optionATitle, poll.optionAVotes);
    const option2Div = renderOption(poll.optionBTitle, poll.optionBVotes);

    divContainer.classList.add('past-poll');
    pollQuestion.textContent = pollQuestion;
    divContainer.append(poll.pollQuestion, option1Div, option2Div);

    return divContainer;
}

function renderOption(name, score) {
    const optionContainer = document.createElement('div');
    const optionTitle = document.createElement('p');
    const optionVotes = document.createElement('p');

    optionTitle.textContent = name;
    optionVotes.textContent = score;

    optionContainer.classList.add('option');
    optionContainer.append(optionTitle, optionVotes);

    return optionContainer;
}