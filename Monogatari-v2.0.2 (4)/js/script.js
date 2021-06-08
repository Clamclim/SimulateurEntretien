/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
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

});


// Define the Characters
monogatari.characters ({
	'a': {
		name: 'Aide',
		color: '#5bcaff'
	},
	'c': {
		name:'Caissière',
		color:'#00bfff',
		sprites: {
            angry: 'ColèreC.png',
            happy: 'HeureuseC.png',
            normal: 'NeutreC.png',
            sad: 'GenéC.png',
            talk: 'ParleC.png'
        }
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6 with fadeIn',
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
	'a Salut {{player.name}} Bievenue sur ce simulateur d’entretien!',
		{
			'Choice': {
				'Dialog': 'a Est-ce que tu as déjà dû mené un entretien avant ?',
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
	'a Dans le cadre d’une recherche nationale sur les conditions de travail des employé-e-s de supermarché en Suisse, tu as aujourd’hui rendez-vous avec une caissière.',
	'a Où as-tu décidé de lui donner rendez-vous ?',
		{
			'Choice':{
				'Dialog':'a Où as-tu décidé de lui donner rendez-vous ?',
				'Chez elle':{
					'Text':'Chez elle',
					'Do': 'jump mauvaisEndroit'
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
		'Ce lieu est trop personnel',
	],

	'bonEndroit':[
		'Super',
		'jump salutation'
	],

'salutation':[
	'a Tu repère ton interviewé déjà assise à une table au fond de la salle. Tu te diriges vers elle.',
	'show character c talk',
	'c Bonjour',
]
});