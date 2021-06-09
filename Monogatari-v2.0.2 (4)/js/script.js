/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'mauvaisEndroit': {
		title: 'Mauvais choix',
		body: 'Ce choix pourrait gené la personne interrogée. Il est trop personnel, peut-être que choisir un lieu plus neutre fonctionnera mieux pour la prochaine fois. Laura a malheureusement refusé cette invitation.',
	},

	'moyenEndroit': {
		title: 'Mauvais choix',
		body: 'Laura pourrait ressentir une forme de violence symbolique en venant ici. Selon l’origine social de la personne interrogée, l’université peut être perçu comme lieu inconnu et porteur de jugement. Pour aujourd’hui ce n’est pas un problème mais fais attention pour les prochaines fois.',
	},
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'street': 'rue.png',
	'coffee': 'café.png',
	'university': 'uni.png',
	'house': 'maison.png',

});


// Define the Characters
monogatari.characters ({
	'a': {
		name: 'Aide',
		color: '#5bcaff'
	},
	'c': {
		name:'Laura',
		color:'#00bfff',
		sprites: {
            angry: 'Colère.png',
            happy: 'Heureuse.png',
            normal: 'Normal.png',
            sad: 'Contrarié.png',
            talk: 'Dialogue.png',
			shoked: 'Choquée.png',
        }
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene street with fadeIn',
		'show notification Welcome',
		{
			'Input': {
				'Text': 'Quel est ton prénom?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Attention': 'Avant de commencer tu dois entrer un prénom!'
			}
		},
	'a Salut {{player.name}} ! Bievenue sur ce simulateur d’entretien!',
		{
			'Choice': {
				'Dialog': 'a Est-ce que tu as déjà dû dirigé un entretien avant ?',
				'Yes': {
					'Text': 'Oui',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'Non',
					'Do': 'jump No'
				},
			}
		}	
	],

	'Yes': [
		'a Super, ce jeu va te permettre de voir si tu maîtrise bien cet exercice !',
		'a Pour la suite du jeu tu vas te plonger dans la peau d’un chercheur en sciences sociales !',
		'jump Intro'
	],

	'No': [

		'a Jamais ? Ce jeu va donc être une première approche pour essayer de comprendre comment bien mener un entretien.',
		'a Pour la suite du jeu tu vas te plonger dans la peau d’un chercheur en sciences sociales',
		'jump Intro'
	],
	
'Intro':[
	'a Dans le cadre d’une recherche nationale sur les conditions de travail des employé-e-s de supermarché en Suisse, tu as aujourd’hui rendez-vous avec Laura, une caissière qui a répondu à ton appel à témoignage.',
		{
			'Choice':{
				'Dialog':'a Où as-tu décidé de donner rendez-vous à Laura ?',
				'Chez elle':{
				'Text':'À ton université',
					'Do': 'jump moyenEndroit'
				},
				
				'Chez toi' :{
					'Text': 'Chez toi',
					'Do': 'jump mauvaisEndroit'
				},
	
				'Dans un café':{
					'Text': 'Dans un café',
					'Do' : 'jump bonEndroit'
				},
			}
		}	

	],
	
	'mauvaisEndroit':[
		'show message mauvaisEndroit',
		'end',
	],

	'moyenEndroit':[
		'show message moyenEndroit',
		'show scene university with fadeIn',
		'show character c normal',
		'a Tu retrouves Laura à la bibliothèque, elle t’attend déjà à une table proche de la sortie.',
		'jump salutation',
	],

	'bonEndroit':[
		'show scene coffee with fadeIn',
		'show character c normal',
		'a Tu repère Laura déjà assise à une table au fond de la salle. Tu te diriges vers elle.',
		'jump salutation'
	],

'salutation':[
	'show character c talk',
	'c Bonjour',
]
});