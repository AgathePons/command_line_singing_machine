// Ajouter ici le ou les require() pour importer les modules dont vous aurez besoin.

// Hit parade, classé du premier au dernier.
const hitParade = [
  `Jain - Come`,
  `Matt Simons - Catch & Realease`,
  `Twety One Pilots - Stressed Out`,
  `Justin Bieber - Love Yourself`,
  `Kids United - On écrit sur les murs`,
  `Rihanna - Work`,
  `Julian Perretta - Miracle`,
  `Yall - Hundred Miles`,
  `Kendji Girac - No Me Mirès Màs`,
  `Feder - Blind (feat. Emmi)`
];


// Votre code va ici
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answerPgrm = [
  'Je m\'appelle Charlu, je m\'appelle Lili, vous êtes chez O\'clock',
  hitParade,
  'quitter',
];
const answerCommands = ['chante', 'classement', 'quitter'];

const hitMochinePgrm = () => {
  //je pose la question
  rl.question('Que souhaitez-vous ?', (userAnswer) => {
    if (userAnswer === answerCommands[0]) {
      console.log(answerPgrm[0]);
      hitMochinePgrm();
    } else if (userAnswer === answerCommands[1]) {
      console.log('print classement');
      displayClassement();
      hitMochinePgrm();
    } else if (userAnswer === answerCommands[2]) {
      console.log('quit');
      rl.close();
    } else if (userAnswer.startsWith('position ')) {
      const positionString = userAnswer.slice(-2);
      const positionNumber = parseInt(positionString);
      console.log('position demandée:', positionNumber, typeof positionNumber);
      if (positionNumber > 0 && positionNumber <= 10) {
        console.log(hitParade[positionNumber - 1]);
        hitMochinePgrm();
      } else {
        console.log('J\'ai mal compris...');
        hitMochinePgrm();
      }
    } else {
      console.log('J\'ai mal compris...');
      hitMochinePgrm();
    }
  });
};

const displayClassement = () => {
  for (const index in hitParade) {
    console.log(`${index} - ${hitParade[index]}`);
  }
}

hitMochinePgrm();