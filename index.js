// User can enter their user names if they want to

const userName = 'Churchil';
let defaultName;

// In case of no user name entered, the ternary operator below assigns default
// name Stranger to user

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello, Stranger!');

// Get the user's question

const userQuestion = 'Will I become very wealthy?';
console.log(`Your question to the fortune teller: ${userQuestion}`);

// Declare a random number variable that returns a random number between 0 and 7

let randomNumber = Math.floor(Math.random() * 8);

// Declare the eightBall variable that accepts a string, the magic 8 ball answers

let eightBall = '';

//  Use control flow to assign eightBall to a reply the Magic Eight Ball would return

switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
   case 1:
    eightBall = 'It is decidedly so';
    break;
   case 2:
    eightBall = 'Reply hazy try again';
    break;
   case 3:
    eightBall = 'Cannot predict now';
    break;
   case 4:
    eightBall = 'Do not count on it';
    break;
   case 5:
    eightBall = 'My sources say no';
    break;
   case 6:
    eightBall = 'Outlook not so good';
    break;
   case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    console.log('Try again')
    break;
}

console.log(`Answer: ${userName}, ${eightBall}!`);
