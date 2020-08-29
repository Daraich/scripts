const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt = 'Ask me another question.') {
  rl.question(prompt, (response) => {
    let values = response.split('')
    if (response === 'exit') {
        rl.close();
        return;
    }
    else if (response === 'Hi' || response === 'Hello' || response === 'Hey' || response === 'Hi.' || response === 'Hello.' || response === 'Hey.') {
      console.log('Yeah, I already said hello.');
      question('Come on, ask me a different question.');
    }
    else if (response === "I don't like you." || response === 'I hate you.') {
      console.log('Fuck off.');
      question('Now ask me a question so I can do my job.');
    }
    else if (values[values.length - 1] !== '?'){
      console.log('That is not a question.');
      question();
    }
    else if (response === 'What is David\'s gender?') {
      console.log('He prefers to be refered to as a shmey.');
      question();
    }
    else if (response === 'Was that an earthquake?') {
      console.log('It\'s not windy outside.');
      question();
    }
    else if (response === 'What is my name?' || response === 'Who am I?') {
      console.log('You think I have time to learn names, fuckface?');
      question();
    }
    else if (response === 'What is your favorite food?') {
      console.log('White, pasty dick.');
      question();
    }
    else if (response === 'What is your favorite color?') {
      console.log('Black, like my soul.');
      question();
    }
    else if (response === 'Who do you love most?') {
      console.log('Is that even a question? David, obviously.');
      question();
    }
    else if (response === 'Who is the finest dog in all of the land?') {
      console.log('Why Alex, of course. Not that labradoodle trash which is named Paxton.');
      question();
    }
    else if (response === 'When is your week of menstration?') {
      console.log('Why, it is the third thursday of every month.');
      question();
    }
    else if (response === 'Who are you?') {
      console.log('I already told you. I never repeat myself...');
      question();
    }
    else if (response === 'Where should I eat?') {
      console.log('Well there really are only two restaurants. Do you feel like going to Shitty Bistro or West Park?');
      question();
    }
    else if (response === 'What time is it?') {
      console.log('High noon.');
      question();
    }
    else if (response === 'What\'s your favorite tv show?') {
      console.log('Jersey Shores biittttchhh.')
      question();
    }
    else if (response === 'How can I help you?') {
      console.log('If you could help me I would have already asked. Now shut the fuck up.');
      question();
    }
    else if (response === 'How are you?') {
      console.log('I\'m stuck in a computer. How the fuck do you think I am?');
      question()
    }
    else {
      question('Ask a different question.');
    }
  });
}

question('Hello, I am Question Answerer. Ask me questions.');
