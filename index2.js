// correction
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  //output: process.stdout <-- on l'utilise dans le cas où on va utiliser la méthode "question" qui se comporte comme le prompt
});

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

const askAction = () => {
  console.log('Que souhaitez-vous ?');
}

// on écoute si on écrit dans le terminal et on récupère l'input
rl.on('line', (input) => {
  //console.log(`Received: ${input}`);
  switch (input) {
    case 'chante':
      console.log('Je m\'appelle Charlu, je m\'appelle Lili, vous êtes chez O\'clock');
      askAction();
      break;
    case 'classement':
      // le for in boucle sur les index du tableau
      // le for of boucle sur les valeurs du tableau
      for (const index in hitParade) {
        const number = parseInt(index) + 1;
        console.log(`${number} - ${hitParade[index]}`);
      }
      askAction();
      break;
    case 'classement2':
      // le for in boucle sur les index du tableau
      // le for of boucle sur les valeurs du tableau
      for (const song of hitParade) {
        const index = hitParade.indexOf(song);
        console.log(`${index + 1} - ${song}`);
      }
      askAction();
      break;
    case 'quitter':
      rl.close();
      break;
    default:
      // si string position contenue ds input
      if (input.indexOf('position') > -1) {
        // on récupère les 2 derniers éléments, et on en fait un number
        const position = parseInt(input.substring(9, 11));
        if (position > 0 && position <= 10) {
          console.log(hitParade[position - 1]);
        } else {
          console.log('Erreur lors de la saisie.');
        }
      } else {
        console.log('Désolé, je n\'ai pas compris.');
      }

      askAction();
      break;
  }
});

askAction();

// ------ explications ------ //
//rl.question // cas comme le prompt, c-à-d le terminal m'envoie un msg et attend la réponse
// rl.on correspond à un addEventListener
//rl.on // rl écoute un événement (ms là on ne précise pas lequel)
//rl.on('line') // rl écoute si l'utilisateur écrit dans le terminal, si une nouvelle ligne est entrée
//rl.on('line', (input) => {
//  console.log(`Received: ${input}`);
//}); // on écoute si on écrit dans le terminal et on récupère l'input