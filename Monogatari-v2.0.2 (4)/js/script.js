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

	'noPrécision':{
		title:'Mauvaix choix',
		body:' La personne a pu oublier ou vouloir des précisions sur les termes. Il est nécessaire de rappeler que l’entretien sera enregsitré et anonymisé afin d’éviter toutes mauvaises surprises.',
	},

	'pourquoi':{
		title:'Mauvaix choix',
		body:'En demandant “pourquoi”, vous incitez la personne à se justifier et la réponse sera sûrement brève. Une question en “comment” permet à la personne de développer une histoire sur ce qui l’a amené à faire certaines choses, vous obtiendrez donc sûrement plus d’informations (Ink, 2016).',
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
		color: 'blue'
	},
	'c': {
		name:'Laura',
		color:'violet',
		sprites: {
            angry: 'Colère.png',
            happy: 'Heureuse.png',
            normal: 'Normal.png',
            sad: 'Contrarié.png',
            talk: 'Dialogue.png',
			shoked: 'Choquée.png',
        },
	'p':{
		name:'{{player.name}}',
		color: 'green',
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
				'Université':{
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
	'c Bonjour !',
	'show character c normal',
	'p Bonjour, merci à vous d’avoir accepter de partciper à cet entretien.',
	'a Vous prenez place en face d’elle, la discussion va pouvoir commencer.',
	'a Tu lui avais envoyé un mail pour l’informer que l’entretien serait enregistré et anonymisé. Est-ce que tu veux lui rappeler ces précisions ?',
	{ 
		'Choice':{
			'Dialog': 'a Est-ce que tu veux lui rappeler ces précisions ?',
			'précision':{
				'Text': 'Oui',
				'Do': 'jump précision',
			},
			'noPrécision':{
				'Text': 'Non',
				'Do': 'jump noPrécision',
			},
		}
	}
],

'précision':[
	'p Avant de commencer, je vous rappelle que cette entretien sera enregistré et complètement anonymisé.',
	'p Est-ce que cela vous convient toujours ?',
	'show character c talk',
	'c Oui, pas de problème.',
	'jump question1',
],

'noPrécision':[
	'show message noPrécision',
	'a Tu sors ton dictaphone et commence tout de suite à enregistrer',
	'show character c shoked',
	'c Juste, vous aviez dit que ça allait être enregistré. J’avais oublié...',
	'p Ah oui désolé de ne pas vous l’avoir redit.',
	'jump question1',
],

'question1':[
	'show character c normal',
	'p Tout, d’abbord est-ce que vous pouvez rapidement vous présentez ?',
	'show character c talk',
	'c Oui bien sûr, par où commencer ? Bon vous le savez, je mappelle Laura. J’ai 32 ans, je suis mariée, j’ai une fille de 8 ans qui vient de rentrer 5P. Je travaille comme caissière à 80% à la Cuup du centre commercial de Crussier depuis 10 ans.',
	'show character c normal',
	{ 
		'Choice':{
			'Dialog': 'Passons à la question suivante.',
			'pourquoi':{
				'Text': 'Pourquoi êtes-vous devenue caissière ?',
				'Do': 'jump pourquoi',
			},
			'comment':{
				'Text': 'Comment êtes-vous devenue caissière ?',
				'Do': 'jump comment',
			},
		}
	}
],

'pourquoi':[
	'show message pourquoi',
	'show character c talk',
	'c J’avais besoin d’un travail pour payer mon loyer.',
	'jump question2',
],

'comment':[
	'show character c talk',
	'c J’avais postulé chez Cuup car je ne me voyais pas bosser en usine, le secteur du commerce me convient mieux. Comme j’ai juste fait le gymnase voie diplôme, je ne pouvais pas trop choisir. Dans le commercial, Y’a du contact social, au moins.',
	'jump question2',
],


});