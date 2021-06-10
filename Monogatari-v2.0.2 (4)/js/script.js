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

	'personnelle1':{
		title:'Mauvaix choix',
		body:'Poser cette question à ce moment-là, n’est pas approprié. C’est une question personnelle très intrusive et dans ce contexte pourrait paraître jugeant sur sa situation professionnelle. Les questions personnelles sont généralement posées en fin d’entretien afin de ne pas braquer la personne (Campenhoudt et Quivy, 2011).',
	},

	'multipleQuestion':{
		title:'Mauvaix choix',
		body: 'Il y a trop de questions, ton interlocutrice risque d’en oublier avec sa réponse (Ink, 2016). Poser une question précise n’est pas facile, c’est pour cela qu’un canevas et quelques questions écrites peuvent rendre l’entretien moins brouillon.',
	},

	'relance':{
		title:'Mauvaix choix',
		body: 'Parfois, il suffit de laisser du temps à la personne pour qu’elle trouve ses mots. Sauvayre (2013) propose d’identifier les silences de réflexion et ceux de fin de discours.',
	},

	'rien':{
		title:'Un sourire pour encourager',
		body: 'Des encouragements à continuer peuvent aider la personne à approfondir.Sauvayre (2013) élabore sur les réactions face aux silences.',
	},

	'scientifique':{
		title:'Mauvais choix',
		body: 'Les questionnements des enquêteurs ne sont pas les soucis quotidiens des enquêté.e.s, la reconstitution théorique des vécus se fait en amont ou en aval, mais pas pendant l’entretien. Voir par exemple Beaud et Weber (2003), Becker (2002) ou Quivy et Van Campenhoudt (2017) pour diverses critiques de ce problème.',
	},

	'horsSujet':{
		title:'Hors sujet',
		body: 'Tu te rends compte que tu as lancé ton enquêtée sur un thème complètement hors sujet. Tu  attends une seconde d’hésitation pendant qu’elle énumère les croquettes préférées de sa boule de poil. tu devras retranscrire tout ça… Est-ce que tu dois également anonymiser la marque de croquette?',
	},

	'nonSavoir':{
		title:'Manque de recherches en amont',
		body: 'Si on s’intéresse à un métier, il peut être utile de se renseigner avec de la littérature sur le dit-métier pour avoir une idée de certains mots de jargon basique et des problématiques transversales (Beaud et Weber, 2003).',
	},

	'directif':{
		title:'Imposition de la thématique',
		body: 'Parfois les gens n’ont pas le même bagage que vous pour décrire leur situation. Ici vous suggérer fortement une manière de répondre de votre interviewée, il serait mieux de la laisser expliquer la situation avec ses mots. La critique de Meyer (1996) adressée à Bourdieu sur une imposition de termes est proche de la situation.',
	},

	'avis':{
		title:'Pas de débat',
		body: 'Laura est partie. Même si la personne tient des propos qui ne sont pas en accord avec vos idéaux, l’entretien n’est pas un lieu de débat, vous êtes ici pour écouter ce que la personne a à vous dire et non juger ses choix de vie. Vous serez au courant pour la prochaine fois',
	},

	'message_id':{
		title:'Mauvaix choix',
		body: '',
	},

	'message_id':{
		title:'Mauvaix choix',
		body: '',
	},

	'message_id':{
		title:'Mauvaix choix',
		body: '',
	},

	'message_id':{
		title:'Mauvaix choix',
		body: '',
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
		name: 'Toi',
		color: 'green',
	},
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
	'p Bonjour, merci à vous d’avoir accepter de participer à cet entretien.',
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
	'c Oui bien sûr, par où commencer ? Bon vous le savez, je mappelle Laura. J’ai 32 ans, je suis mariée, j’ai une fille de 8 ans qui vient de rentrer en 5P. Je travaille comme caissière à 80% à la Cuup du centre commercial de Crussier depuis 10 ans.',
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

'question2':[
	'show character c normal',
	{ 
		'Choice':{
			'Dialog': 'a Tu peux passer à la question suivante',
			'personnelle1':{
				'Text': 'À quel âge avez-vous eu votre enfant ?',
				'Do': 'jump personnelle1',
			},
			'normal':{
				'Text': 'Vous avez toujours travaillé à la caisse ?',
				'Do': 'jump question3',
			},
		}
	}
],

'personnelle1':[
	'show message personnelle1',
	'show character c angry',
	'c Je vois pas en quoi ça vous concerne. Je préfère arrêter cet entretien',
	'a Laura se lève et part.',
	'hide character c',
	'a Dommage pour cet entretien, tu feras peut-être mieux la prochaine fois',
	'end',
],

'question3':[
	'show character c talk',
	'c Au début je gérais le stock dans les rayons mais je suis monter à la caisse assez rapidement parce que je suis une personne souriante.',
	'show character c normal',
	{
		'Choice':{
			'Dialog':'a Choisissez la prochaine question.',
			'multipleQuestion':{
				'Text':'Qu’est-ce que vous pensez des conditions de travail de la Cuup, est-ce que vous avez déjà eu des problèmes avec les clients ou vos collègues? Vous diriez que c’est quoi votre tâche la plus pénible de la journée?',
				'Do':'jump multipleQuestion',
			},
			'question4':{
				'Text':'Est-ce que vous pourriez essayer de nous décrire une journée type?',
				'Do':'jump question4',
			}
		}
	}
],

'multipleQuestion':[
	'show message multipleQuestion',
	'show character c sad',
	'c Pardon, quel était le début de votre question déjà?',
	'p Est-ce que vous pourriez essayer de nous décrire une journée type?',
	'jump question4',
],
'question4':[
	'show character c talk',
	'c Alors oui, ce n’est pas facile, nous faisons plus de choses que ce que certains croient! Avant l’ouverture, nous devons vérifier les comptes des caisses, regarder si des directives spéciales sont à l’ordre du jour. Une fois en caisse, les heures ne se ressemblent pas, les heures creuses et les heures de rush ont des activités différentes. Les heures creuses, c’est pas comme si on ne faisait rien non plus...',
	'show character c normal',
	{
		'Choice':{
			'Dialog':'...',
			'sourire':{
				'Text':'*Sourire et hocher la tête*',
				'Do':'jump question5',
			},
			'relance':{
				'Text':'Est-ce que vous auriez un exemple?',
				'Do':'jump relance',
			},
			'rien':{
				'Text':'*Ne rien manifester*',
				'Do':'jump rien',
			}
		}
	}
],

'relance':[
	'show message relance',
	'jump question5',
],
'rien':[
	'show message rien',
	'jump question5',
],

'question5':[
	'show character c talk',
	'c … ranger les articles erronés des clients distraits, mettre en ordre des rayons, mais ça, ça dépend en plus des jours, pas tous les jours ont le droit au même effectif… Ils font toujours en sorte qu’on doive courir quoi.',
	'show character c happy',
	'show character c normal',
	'c Et puis, évidemment, les heures pleines, on scanne à plein régime.',
	'p Merci pour les précisions, c’est justement un des points que nous souhaitions développer dans notre entretien.',
	{
		'Choice':{
			'Dialog':'a Sélectionne la question.',
			'scientifique':{
				'Text':'Comment vivez-vous ce régime néolibéral de management néoclassique?',
				'Do':'jump scientifique',
			},
			'vulgarisée':{
				'Text':'Comment vivez-vous au quotidien cette course perpétuelle?',
				'Do':'jump question6',
			},
		}
	}
],

'scientifique':[
	'show message scientifique',
	'show character c sad',
	'c Je ne suis pas sûr d’avoir bien compris la question, est-ce que vous pouvez répéter?',
	'p Comment vivez-vous au quotidien cette course perpétuelle ?',
	'jump question6',
],

'question6':[
	'show character c talk',
	'c C’est éreintant! On finit les journées sur les talons, avec les collègues on se dit souvent qu’être un peu plus ça ne les ferait pas passer dans le rouge. On arrive chez nous et on est trop crevé pour sortir le chien.',
	'c La pauvre me fend le cœur, elle veut jouer et moi j’ai le courage de faire plus que la promener pour ces besoins.',
	{
		'Choice':{
			'Dialog':'a C’est le moment de relancer.',
			'bonSujet':{
				'Text':'Vous avez remarqué certaines pénibilités communes avec vos collègues?',
				'Do':'jump question7',
			},
			'horsSujet':{
				'Text':'Ah oui, comment s’appelle votre chien ?',
				'Do':'jump horsSujet',
			},
		}
	}
],

'horsSujet':[
	'show message horsSujet',
	'show character c happy',
	'c Skippy, c’est une Berger Eurasiatique de pure race.',
	'show character c normal',
	'p Pour revenir sur le sujet, vous avez remarqué certaines pénibilités communes avec vos collègues ?',
	'jump question7',
],

'question7':[
	'show character c talk',
	'c Oui bien sûr, les dos bloqués on connaît toutes. Il y a également l’immanquable tendinite de la caissière que j’ai eu l’année passée par exemple.',
	'show character c normal',
	{
		'Choice':{
			'Dialog':'a Tendinite de caissière ? Je n’ai jamais entendu ce terme... Et toi ?',
			'Savoir':{
				'Text':'Pour être sûr, c’est bien une tendinite du poignet dont il s’agit?',
				'Do':'jump question8',
			},
			'nonSavoir':{
				'Text':'Ah c’est fou, j’aurai jamais pensé que caissier avait ses propres problèmes de santé.',
				'Do':'jump nonSavoir',
			},
		}
	}

],

'nonSavoir':[
	'show message nonSavoir',
	'show character c sad',
	'jump question8',
],

'question8':[
	'show character c talk',
	'c Ah oui pardon, on l’appelle comme ça dans le milieu parce que ça touche beaucoup d’entre nous. A force de faire les mêmes mouvements vous savez ça fatigue forcément le muscle.',
	'c Ça s’appelle je crois dérangement squelettico-bidule… non, Trouble Musculo-Squelettiques, voilà.',
	'c Et puis c’est qu’on doit être rapide sinon on peut avoir des plaintes des clients, et après ça passe pas très bien avec les supérieurs.',
	{
		'Choice':{
		'Dialog':'a C’est une bonne occasion pour rebondir sur une question sur son rapport à la hiérarchie.',
			'directif':{
				'Text':'Vous voulez dire que vous êtes exploitée ?',
				'Do':'jump directif',
			},
			'nonDirectif':{
				'Text':'À propos de vos supérieurs, comment qualifieriez- vous votre rapport avec eux ?',
				'Do':'jump nonDirectif',
			},
		}
	}
],

'directif':[
	'show message directif',
	'show character c shoked',
	'c Non, non, je ne pense pas. J’entretiens de très bonnes relations avec la plupart d’entre eux. C’est normal ce qu’il nous demande.',
	'jump question9',
],

'nonDirectif':[
	'show character c talk',
	'c C’est vrai que des fois, ils peuvent nous mettre une certaine pression pour s’assurer qu’on travaille assez vite.',
	'c Des fois on a presque l’impression qu’ils profitent des exigences des clients pour nous demander de travailler plus. Quand il y a beaucoup de gens, c’est plus difficile de se justifier pour prendre une pause alors qu’on y a droit !',
	'jump question9',
],

'question9':[
	'show character c normal',
	'p Et sinon est-ce que vous êtes syndiquée ou bien est-ce que certaines de vos collègues le sont ?',
	'show character c talk',
	'c Non, je n’ai jamais ressenti le besoin de me syndiquer et je ne connais aucune de mes collègues qui le soit...',
	'show character c normal',
	{
		'Choice':{
		'Dialog':'a Tu es toi-même dans un syndicat et tu penses que c’est essentiel...',
			'avis':{
				'Text':'Donner ton avis',
				'Do':'jump avis',
			},
			'nonAvis':{
				'Text':'Demander de développer',
				'Do':'jump question10',
			},
		}
	}
],

'avis':[
	'p Vous savez c’est essentiel de se syndiquer pour revendiquer de meilleures conditions de travail.',
	'show character c shoked',
	'c euh mais je gagne déjà pas beaucoup d’argent, ça m’embête de cotiser.',
	'p Vous ne pensez pas assez au collectif !',
	'show character c angry',
	'Pardon mais je vous permets pas de me dire ce genre de choses !',
	'a Laura se lève et quitte la salle.',
	'show message avis',
	'end',
],

'question10':[
	'p Est-ce que vous envisagez de vous syndiquer ?',
	'show character c talk',
	'c J’y ai jamais vraiment pensé je dois avouer. Et puis, c’est déjà assez compliqué de finir les fins de mois donc si je devais cotiser en plus... ',
]
});