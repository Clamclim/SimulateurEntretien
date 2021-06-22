/* global monogatari */

monogatari.component ('main-screen').template (() => {
    return `
        <h1>Simulateur d'entretien</h1>
        <main-menu></main-menu>
    `;
});

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'mauvaisEndroit': {
		title: 'Un lieu pas très approprié',
		body: 'Ce choix pourrait gêner la personne interrogée. Il est trop personnel, peut-être que choisir un lieu plus neutre fonctionnera mieux pour la prochaine fois. Laura a malheureusement refusé cette invitation.',
	},

	'moyenEndroit': {
		title: 'Un lieu intimidant',
		body: 'Laura pourrait ressentir une forme de violence symbolique dans ce lieu. Selon l’origine sociale de la personne interrogée, l’université peut être perçue comme lieu inconnu et porteur de jugement. Pour aujourd’hui ce n’est pas un problème mais il faudra faire attention pour les prochaines fois.',
	},

	'noPrécision':{
		title:'Plutôt deux fois qu’une',
		body:' La personne a pu oublier ou vouloir des précisions sur les termes. Il est nécessaire de rappeler que l’entretien sera enregsitré et anonymisé afin d’éviter toutes mauvaises surprises.',
	},

	'pourquoi':{
		title:'Comment et pourquoi',
		body:'En demandant “pourquoi”, cela incite la personne à se justifier et la réponse sera sûrement brève et sur la défensive. Une question en “comment” permet à la personne de développer une histoire sur ce qui l’a amenée à faire certaines choses, tu obtiendras donc sûrement plus d’informations (<a href=https://mastersociologie.hypotheses.org/3342 target="_blank"> Ink, 2016</a>).',
	},

	'personnelle1':{
		title:'Trop personnelle',
		body:'Â ce moment de l’entretien poser cette question n’est pas approprié. C’est une question personnelle très intrusive et, dans ce contexte, elle pourrait paraître jugeante sur sa situation professionnelle. Les questions personnelles sont généralement posées en fin d’entretien afin de ne pas braquer la personne (<a href=https://univ.scholarvox.com/book/88813728 target="_blank">Campenhoudt et Quivy, 2011</a>).',
	},

	'multipleQuestion':{
		title:'Trop confus',
		body: 'Il y a trop de questions. Ton interlocutrice risque d’en oublier avec sa réponse (<a href=https://mastersociologie.hypotheses.org/3342 target="_blank"> Ink, 2016</a>). Poser une question précise n’est pas facile, c’est pour cela qu’un canevas et quelques questions écrites en amont peuvent rendre l’entretien moins brouillon.',
	},

	'relance':{
		title:'Laisser le temps',
		body: 'Parfois, il suffit de laisser du temps à la personne pour qu’elle trouve ses mots. <a href=https://www.cairn.info/les-methodes-de-l-entretien-en-sciences-sociales--9782100579709-page-49.htm target="_blank">Sauvayre (2013)</a> propose d’identifier les silences de réflexion et ceux de fin de discours.',
	},

	'rien':{
		title:'Un sourire pour encourager',
		body: 'Des encouragements à continuer peuvent aider la personne à approfondir. <a href=https://www.cairn.info/les-methodes-de-l-entretien-en-sciences-sociales--9782100579709-page-49.htm target="_blank">Sauvayre (2013)</a> élabore sur les réactions face aux silences.',
	},

	'scientifique':{
		title:'Les mots du ou de la chercheur.euse',
		body: 'Les questionnements des enquêteur.trice.s ne sont pas les soucis quotidiens des enquêté.e.s. La reconstitution théorique des vécus se fait en amont ou en aval, mais pas pendant l’entretien. Voir par exemple Beaud et Weber (2003), Becker (2002) ou <a href= https://univ.scholarvox.com/book/88813728 target="_blank">Campenhoudt et Quivy (2011)</a> pour diverses critiques de ce problème.',
	},

	'horsSujet':{
		title:'Hors sujet',
		body: 'Tu te rends compte que tu as lancé ton enquêtée sur un thème complètement hors sujet. Tu attends une seconde d’hésitation pour recadrer pendant qu’elle énumère les croquettes préférées de sa boule de poil. Tu devras retranscrire tout ça… Est-ce que tu dois également anonymiser la marque de croquettes?',
	},

	'nonSavoir':{
		title:'Manque de recherches en amont',
		body: 'Si on s’intéresse à un métier, il peut être utile de se renseigner avec de la littérature sur le dit-métier pour avoir une idée de certains mots de jargon basique et des problématiques transversales (Beaud et Weber, 2003).',
	},

	'directif':{
		title:'Imposition de la thématique',
		body: 'Parfois les gens n’ont pas le même bagage que toi pour décrire leur situation. Ici, tu suggères fortement une manière de répondre à ton interviewée, il serait mieux de la laisser expliquer la situation avec ses mots. La critique de <a href=https://www.persee.fr/doc/rfsoc_0035-2969_1995_num_36_2_4407 target="_blank">Mayer (1996)</a> adressée à Bourdieu sur une imposition de termes est proche de la situation.',
	},

	'avis':{
		title:'Pas de débat',
		body: 'Laura est partie. Même si la personne tient des propos qui ne sont pas en accord avec tes idéaux, l’entretien n’est pas un lieu de débat, tu es ici pour écouter ce que la personne a à te dire et non juger ses choix de vie. Tu seras au courant pour la prochaine fois.',
	},

	'GenreF':{
		title:'Confidence?',
		body: 'Aurais-tu eu le même message si tu avais été perçue comme un homme ?',
	},

	'GenreM':{
		title:'Hésitation?',
		body: 'Aurais-tu eu le même message si tu avais été perçu comme une femme ?',
	},

	'sourire13':{
		title:'Mauvais choix',
		body: 'Le "voilà" est un bon indicateur de fin de discours. Pour plus de détail, tu peux te référer à <a href=https://www.cairn.info/les-methodes-de-l-entretien-en-sciences-sociales--9782100579709-page-49.htm target="_blank">Sauvayre (2013)</a>.',
	},

	'conseil14':{
		title:'Pas de conseils',
		body: ' Ce n’est pas le rôle des chercheur.euse.s de donner des conseils sur ce qu’iels pensent être bien. Une écoute non jugeante des actions de l’interviewé.e est à privilégier.',
	},

	'excuse15':{
		title:'Oser expliquer',
		body: 'Pour ce genre d’informations utiles et dont la divulgation est de toute façon prohibée, il peut être bon de préciser ses intentions.',
	},

	'exigence15':{
		title:'Le tact',
		body: 'C’est vrai, mais lorsque la personne se montre réticente, essayer d’arrondir les angles est utile. Il ne faut pas oublier que ce n’est pas un interrogatoire et que la personne prend de son temps pour nous aider. Elle ne nous doit rien.',
	},

	'indiscret15':{
		title:'La pertinence des informations',
		body: 'Sans justification et lors d’un premier entretien, cela s’apparente au ragot et non à l’entretien sociologique.',
	},


	'brutend':{
		title:'On ne sait jamais',
		body: 'Attention il est toujours bienvenu de demander à son interviewé.e s’iel veut préciser quelque chose sur une question ou s’iel a l’impression de ne pas avoir pu s’exprimer sur un sujet. Voir par exemple Beaud et Weber (2003) ou Becker (2002).',
	},

	'refle1':{
		title:'Le temps long de l’enquête',
		body: 'En effet, il est important de mener plusieurs entretiens pour approfondir le rapport entre vous et affiner les informations pertinentes. La confiance prend du temps, tout comme l’enquête de terrain.',
	},

	'refle2':{
		title:'Défaitisme',
		body: 'Effectivement, tu pourrais surement faire mieux, mais il ne faut pas oublier que c’était la première caissière que tu rencontres pour ton projet, qu’elle ne représente pas LA Caissière et que le temps pour un entretien singulier n’est pas illimité.',
	},

	'refle3':{
		title:'Un savoir fragmenté',
		body: 'La connaissance absolue n’est pas l’objectif, mais mieux comprendre quelques facettes de la vie social est tout de même possible.',
	},

	'nonbecker':{
		title:'Missclick',
		body: 'Cela arrive même au meilleur, pas de soucis, voici le texte tant attendu.',
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
"Développement":{
	"Équipe":[
		"Clémence Danesi", "Antonin Wyss",
	],

	"Github":[
		"<a href=https://github.com/Clamclim/Visual-Novel.git> Références </a>",
	]
},

"Contributeur-trice-s":{
	"Images caractère":"<a href=https://puppetbomb.itch.io/> puppetbomb </a>",
	"Images décors":"<a href=https://cloudnovel.net/fluffness> fluffness </a>",
	"Musiques et sons":"<a href=https://fulminisictus.itch.io/> Fluminislctus </a>"
},



});


// Define the music used in the game.
monogatari.assets ('music', {
	'début':'Street.mp3',
	'biblio':'Library.mp3',
	'café':'Coffee.mp3',
	'fin':'House.mp3',

});


// Define the sounds used in the game.
monogatari.assets ('sounds', {
	'GameOver':'sounds.mp3',

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
	'b':{
		name: '{{player.name}} (Toi)',
		color: 'green',
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
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'play music début with loop',
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
	'a Salut {{player.name}} ! Bienvenue sur ce simulateur d’entretien. Pour une meilleure expérience, tu peux activer le mode full screen situé en bas à droite.',
		{
			'Choice': {
				'Dialog': 'a Est-ce que tu as déjà dû diriger un entretien de sciences sociales précédemment ?',
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
		'a Super, ce jeu va te permettre de voir si tu maîtrises bien cet exercice !',
		'a Pour la suite du jeu, tu vas te plonger dans la peau d’un.e chercheur.euse en sciences sociales !',
		'jump Intro'
	],

	'No': [

		'a Jamais ? Ce jeu va donc être une première approche pour essayer de comprendre comment bien mener un entretien.',
		'a Pour la suite du jeu, tu vas te plonger dans la peau d’un.e chercheur.euse en sciences sociales !',
		'jump Intro'
	],
	
'Intro':[
	'a Dans le cadre d’une recherche nationale sur les conditions de travail des employé.e.s de supermarché en Suisse, tu as aujourd’hui rendez-vous avec Laura, une caissière qui a répondu à ton appel à témoignage.',
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
		'stop music début',
		'play sound GameOver',
		'show message mauvaisEndroit',
		'end',
	],

	'moyenEndroit':[
		'stop music début',
		'play music biblio with loop',
		'show message moyenEndroit',
		'show scene university with fadeIn',
		'show character c normal',
		'a Tu retrouves Laura à la bibliothèque, elle t’attend déjà à une table proche de la sortie.',
		'jump salutation',
	],

	'bonEndroit':[
		'stop music début',
		'play music café with loop',
		'show scene coffee with fadeIn',
		'show character c normal',
		'a Tu repères Laura déjà assise à une table au fond de la salle. Tu te diriges vers elle.',
		'jump salutation'
	],

'salutation':[
	'show character c talk',
	'c Bonjour !',
	'show character c normal',
	'b Bonjour, merci à vous d’avoir accepté de participer à cet entretien.',
	'a tu prends place en face d’elle, la discussion va pouvoir commencer.',
	'a Tu lui avais envoyé un mail pour l’informer que l’entretien serait enregistré et anonymisé.',
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
	'b Avant de commencer, je vous rappelle que cet entretien sera enregistré et complètement anonymisé.',
	'b Est-ce que cela vous convient toujours ?',
	'show character c talk',
	'c Oui, pas de problème.',
	'jump question1',
],

'noPrécision':[
	'show message noPrécision',
	'a Tu sors ton dictaphone et commence tout de suite à enregistrer',
	'show character c shoked',
	'c Juste, vous aviez dit que ça allait être enregistré. J’avais oublié...',
	'b Ah oui désolé de ne pas vous l’avoir rappelé.',
	'jump question1',
],

'question1':[
	'show character c normal',
	'b Tout d’abord, est-ce que vous pouvez rapidement vous présenter ?',
	'show character c talk',
	'c Oui bien sûr, par où commencer ?',
	'c Bon vous le savez, je m’appelle Laura. J’ai 32 ans, je suis mariée, j’ai une fille de 8 ans qui vient de rentrer en 5P. Je travaille comme caissière à 80% à la Cuup du centre commercial de Crussier depuis 10 ans.',
	'show character c normal',
	{ 
		'Choice':{
			'Dialog': 'a Passons à la question suivante.',
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
	'stop music',
	'play sound GameOver',
	'show message personnelle1',
	'show character c angry',
	'c Je vois pas en quoi ça vous concerne. Je préfère arrêter cet entretien.',
	'a Laura se lève et part.',
	'hide character c',
	'a Dommage pour cet entretien, tu feras peut-être mieux la prochaine fois...',
	'end',
],

'question3':[
	'show character c talk',
	'c Au début, je gérais le stock dans les rayons mais je suis montée à la caisse assez rapidement parce que je suis une personne souriante.',
	'show character c normal',
	{
		'Choice':{
			'Dialog':'a Choisissez la prochaine question.',
			'multipleQuestion':{
				'Text':'Qu’est-ce que vous pensez des conditions de travail de la Cuup ? Est-ce que vous avez déjà eu des problèmes avec les clients ou vos collègues ? Vous diriez que c’est quoi votre tâche la plus pénible de la journée ?',
				'Do':'jump multipleQuestion',
			},
			'question4':{
				'Text':'Est-ce que vous pourriez essayer de nous décrire une journée type ?',
				'Do':'jump question4',
			}
		}
	}
],

'multipleQuestion':[
	'show message multipleQuestion',
	'show character c sad',
	'c Pardon, quel était le début de votre question déjà ?',
	'b Est-ce que vous pourriez essayer de nous décrire une journée type ?',
	'jump question4',
],
'question4':[
	'show character c talk',
	'c Alors oui, ce n’est pas facile, nous faisons plus de choses que ce que certains croient! Avant l’ouverture, nous devons vérifier les comptes des caisses, regarder si des directives spéciales sont à l’ordre du jour.', 
	' c Une fois en caisse, les heures ne se ressemblent pas. Les heures creuses et les heures de rush ont des activités différentes. Les heures creuses, c’est pas comme si on ne faisait rien non plus...',
	'show character c normal',
	{
		'Choice':{
			'Dialog':'(silence)',
			'sourire':{
				'Text':'*Sourire et hocher la tête*',
				'Do':'jump question5',
			},
			'relance':{
				'Text':'Est-ce que vous auriez un exemple ?',
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
	'b Merci pour les précisions, c’est justement un des points que nous souhaitions développer dans notre entretien.',
	{
		'Choice':{
			'Dialog':'a Sélectionne la question.',
			'scientifique':{
				'Text':'Comment vivez-vous ce régime néolibéral de management néoclassique ?',
				'Do':'jump scientifique',
			},
			'vulgarisée':{
				'Text':'Comment vivez-vous au quotidien cette course perpétuelle ?',
				'Do':'jump question6',
			},
		}
	}
],

'scientifique':[
	'show message scientifique',
	'show character c sad',
	'c Je ne suis pas sûr d’avoir bien compris la question, est-ce que vous pouvez répéter ?',
	'b Comment vivez-vous au quotidien cette course perpétuelle ?',
	'jump question6',
],

'question6':[
	'show character c talk',
	'c C’est éreintant! On finit les journées sur les rotules, avec les collègues on se dit souvent qu’être un peu plus, ça ne ferait pas passer la Cuup dans le rouge. On arrive chez nous et on est trop crevé pour sortir le chien.',
	'c La pauvre me fend le cœur, elle veut jouer et moi j’ai pas le courage de faire plus que la promener pour ses besoins.',
	{
		'Choice':{
			'Dialog':'a C’est le moment de relancer',
			'bonSujet':{
				'Text':'Vous avez remarqué certaines pénibilités communes avec vos collègues ?',
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
	'show character c happy',
	'c Skippy, c’est une Berger Eurasiatique de pure race, mais attention contairement à la pluspart des Eura, elle...',
	'show message horsSujet',
	'b Pour revenir sur le sujet, vous avez remarqué certaines pénibilités communes avec vos collègues ?',
	'show character c normal',
	'jump question7',
],

'question7':[
	'show character c talk',
	'c Oui bien sûr, les dos bloqués on connaît toutes. Il y a également l’immanquable tendinite de la caissière que j’ai eu l’année passée par exemple.',
	'show character c normal',
	{
		'Choice':{
			'Dialog':'a Tendinite de la caissière ? Je n’ai jamais entendu ce terme... Et toi ?',
			'Savoir':{
				'Text':'Pour être sûr, c’est bien d’une tendinite du poignet dont il s’agit?',
				'Do':'jump question8',
			},
			'nonSavoir':{
				'Text':'Ah c’est fou, j’aurai jamais pensé que les caissières avaient leurs propres problèmes de santé. Qu’est ce que c’est?',
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
	'c Ah oui pardon, on l’appelle comme ça dans le milieu parce que ça touche beaucoup d’entre nous. À force de faire les mêmes mouvements vous savez ça fatigue forcément le muscle.',
	'c Ça s’appelle, je crois, dérangement squelettico-bidule… non, Trouble Musculo-Squelettique, voilà.',
	'c Et puis c’est qu’on doit être rapide sinon on peut avoir des plaintes des clients, et après ça passe pas très bien avec les supérieurs.',
	{
		'Choice':{
		'Dialog':'a C’est une bonne occasion pour rebondir avec une question sur son rapport à la hiérarchie',
			'directif':{
				'Text':'Vous voulez dire que vous êtes exploitée ?',
				'Do':'jump directif',
			},
			'nonDirectif':{
				'Text':'À propos de vos supérieurs, comment qualifieriez-vous votre rapport avec eux ?',
				'Do':'jump nonDirectif',
			},
		}
	}
],

'directif':[
	'show message directif',
	'show character c shoked',
	'c Non, non, je ne pense pas. J’entretiens de très bonnes relations avec la plupart d’entre eux. C’est normal ce qu’ils nous demandent.',
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
	'b Et sinon est-ce que vous êtes syndiquée ou bien est-ce que certaines de vos collègues le sont ?',
	'show character c talk',
	'c Non, je n’ai jamais ressenti le besoin de me syndiquer et je ne connais aucune de mes collègues qui le soit...',
	'show character c normal',
	{
		'Choice':{
		'Dialog':'a Tu es toi-même dans un syndicat et tu penses que c’est essentiel...',
			'avis':{
				'Text':'Demande de développer',
				'Do':'jump question10',
			},
			'nonAvis':{
				'Text':'Donne ton avis',
				'Do':'jump avis',
			},
		}
	}
],

'avis':[
	'b Vous savez c’est essentiel de se syndiquer pour revendiquer de meilleures conditions de travail.',
	'show character c shoked',
	'c Euh mais je gagne déjà pas beaucoup d’argent, ça m’embête de cotiser.',
	'b Vous ne pensez pas assez au collectif !',
	'show character c angry',
	'Pardon mais je vous permets pas de me dire ce genre de choses !',
	'a Laura se lève et quitte la salle.',
	'stop music',
	'play sound GameOver',
	'show message avis',
	'end',
],

'question10':[
	'b Est-ce que vous envisagez de vous syndiquer ?',
	'show character c talk',
	'c J’y ai jamais vraiment pensé je dois avouer. Et puis, c’est déjà assez compliqué de finir les fins de mois donc si je devais cotiser en plus... ',
	'jump question11'
],
'question11':[
	'show character c normal',	
	{
		'Choice':{
		'Dialog':'a Question suivante',
			'choixmultiple11A':{
				'Text':'Comment se passent les relations avec les clients ?',
				'Do':'jump choixmultiple11A',
			},
			'choixmultiple11B':{
				'Text':'Comment se passent les relations entre collègues ?',
				'Do':'jump choixmultiple11B',
			},
		}
	}
],

'choixmultiple11A':[
	'show character c talk',
	'c Ça dépend certains sont très polis mais dès qu’ils s’impatientent parce qu’il y a du monde à la caisse, ça devient compliqué. Que l’on fasse une erreur ou pas, on se sent coupable de faire attendre le client. La semaine dernière j’ai craqué, je n’en pouvais plus, j’avais pleins de problèmes en caisse et les clients ont été odieux, ils sont impatients, vous insultent, râlent et c’est très dur à supporter.',
	'jump question12',
],
'choixmultiple11B':[
	'show character c talk',
	'c C’est chouette. On se soutient beaucoup parmi, quand il n’y a pas trop de clients aux caisses on peut discuter entre nous et se faire des blagues pour garder le moral parce que des fois il y a des clients compliqués...',
	'jump question12',
],

'question12':[
	'show character c normal',
	'b Est-ce que vous vous souvenez d’une situation qui a été particulièrement difficile pour vous ?',
	
	{
		'Choice':{
		'Dialog':'a Tu vois Laura te regarder et réfléchir deux secondes... te perçoit-elle comme ',
			'GenreF':{
				'Text':'une femme ?',
				'Do':'jump GenreF',
			},
			'GenreM':{
				'Text':'un homme ?',
				'Do':'jump GenreM',
			},
		}
	}
],

'GenreF':[
	'show character c sad',
	'c Récemment, j’ai un client qui est resté pendant 10 minutes devant ma caisse. Il me faisait des commentaires vraiment déplacés et je pouvais rien dire sinon ça aurait créé un scandale. Il y a toujours des gens qui profitent de la situation pour vous harceler, moi j’ai souvent le droit à des remarques sur mon physique.',
	'show message GenreF',
	'jump question13',
],
'GenreM':[
	'show character c sad',
	'c Récemment, une mère et son enfant passent à ma caisse, et là la mère lui dit “Eh bien tu vois, si tu ne travailles pas à l’école, tu finiras comme la dame !” Je me suis sentie dévalorisée…',
	'show message GenreM',
	'jump question13',
],

'question13':[
	'show character c normal',
	'b Merci de partager ça ici en tout cas... ',
	'b Est-ce que vous auriez aussi une anecdote positive?',
	'show character c talk',
	'c Pas particulièrement, mais il y a des clients que je connais depuis des années et ça, c’est vraiment agréable. Ils me donnent de leurs nouvelles à chaque fois. Il y a des vraies relations qui peuvent se créer...voilà',
	{
		'Choice':{
		'Dialog':'a ...',
			'sourire13':{
				'Text':'*tu souris et hoche la tête*',
				'Do':'jump sourire13',
			},
			'relance13':{
				'Text':'Et comment réagissez-vous quand il y a des clients désagréables ?',
				'Do':'jump question14',
			},
		}
	}
],

'sourire13':[
	'show message sourire13',
	'show character c talk',
	'c Heu, voilà, j’ai rien à rajouter.',
	'b Ok... Et comment réagissez-vous quand il y a des clients désagréables ?',
	'jump question14',

],


'question14':[
	'show character c talk',
	'c Faut pas faire attention à eux, à ceux qui disent pas bonjour. Ils peuvent toujours râler, si on peut pas aller plus vite, on peut pas. Avec le temps on s’habitue et on s’en fiche qu’ils râlent.',	
	{
		'Choice':{
		'Dialog':'a Comment réagis-tu?',
			'oki14':{
				'Text':'Ok, je vois.',
				'Do':'jump question15',
			},
			'conseil14':{
				'Text':'Vous pourriez quand même leur dire quelque chose...',
				'Do':'jump conseil14',
			},
			'relance14':{
				'Text':'Pourquoi est-ce que vous ne préférez rien dire ?',
				'Do':'jump relance14',
			},
		}
	}
],

'conseil14':[
	'show message conseil14',
	'show character c talk',
	'c Bof, ça prend du temps, hein.',
	'jump question15',
],
'relance14':[
	'show character c talk',
	'c C’est une manière de me protéger et d’économiser mon énergie, je n’aurais pas le temps ni la force de toujours reprendre les gens malpolis.',
	'jump question15',
],

'question15':[
	'show character c normal',
	'b D’accord, on va pouvoir passer à la question suivante. ',
	
	{
		'Choice':{
		'Dialog':'a Que souhaites-tu aborder?',
			'indiscret15':{
				'Text':'Est-ce qu’il y a des collègues particuliers que vous n’aimez pas ?',
				'Do':'jump indiscret15',
			},
			'salaire15':{
				'Text':'Quel est votre salaire ?',
				'Do':'jump salaire15',
			},
		}
	}
],

'indiscret15':[
	'stop music',
	'play sound GameOver',
	'show message indiscret15',
	'show character c angry',
	'c Je ne vois pas en quoi cette question va vous aider dans votre enquête.',
	'c Je préfère arrêter ici cette discussion.',
	'a Laura se lève et part. Tu auras peut-être plus de tact la prochaine fois...',
	'end',
],
'salaire15':[
	'show character c sad',
	'c Est-ce que c’est pas un peu trop personnel comme question?',
	{
		'Choice':{
		'Dialog':'a Elle a l’air inconfortable...',
			'excuse15':{
				'Text':'Désolé(e), ce n’était pas l’intention',
				'Do':'jump excuse15',
			},
			'justification15':{
				'Text':'Pour notre enquête, c’est une information qui peut se révéler utile pour la comparaison et cela reste confidentielle, mais vous n’êtes pas obligée d’y répondre',
				'Do':'jump justification15',
			},
			'exigence15':{
				'Text':'C’est une information essentielle dans notre situation',
				'Do':'jump exigence15',
			},
		},
	},
	
],
'excuse15': [
		'show message excuse15',
		'jump question16',
	],
'justification15': [
		'show character c talk',
		'c Je suis à 4’000 CHF par mois mais comme j’ai bientôt dix ans de service, ça devrait un poil augmenter.',
		'jump question16',
	],
'exigence15': [
		'show message exigence15',
		'show character c sad',
		'c Je suis à 4’000 CHF par mois mais comme j’ai bientôt dix ans de service, ça devrait un poil augmenter.',

		'jump question16',
	],

'question16':[
	'show character c normal',
	'a Quelle question veux-tu poser ?',
	
	{
		'Choice':{
			'QCM16A':{
				'Text':'Est-ce que vous vous voyez encore à ce poste dans 10 ans ?',
				'Do':'jump QCM16A',
			},
			'QCM16B':{
				'Text':'Vous avez des craintes liées à votre profession actuellement ?',
				'Do':'jump QCM16B',
			},
		}
	}
],

'QCM16A':[
	'show character c talk',
	'c C’est vrai que j’aimerai bien évoluer vers un autre poste avec plus de responsabilités, mais là je vais prochainement être nommée cheffe de file des caisses donc c’est déjà bien.',
	'jump question17',
],
'QCM16B':[
	'show character c talk',
	'c C’est vrai que quand les caisses automatiques sont arrivées, on savait pas trop comment ça allait se passer...',
	'c Mais au final, moi je continue de gérer ma caisse et les clients y viennent toujours donc aujourd’hui ça m’inquiète pas trop.',
	'jump question17',
],

'question17':[
	'show character c normal',
	'a Nous arrivons à la fin de l’entretien.',	
	{
		'Choice':{
			'brutend':{
				'Text':'Merci de votre participation, toute mes questions ont été posées !',
				'Do':'jump brutend',
			},
			'fincool':{
				'Text':'Vous avez peut-être encore quelque chose à ajouter ou vous voulez revenir sur une question ?',
				'Do':'jump fincool',
			},
		}
	}
],

'brutend':[
	'show message brutend',
	'show character c talk',
	'c Merci à vous, j’espère que mes réponses auront pu vous aider !',
	'b Très bien, merci beaucoup pour votre temps et vos réponses. Je coupe l’enregistrement',
	'a Laura se lève et part.',
	'hide character c',
	'a Tu vas aussi pouvoir rentrer chez toi.',
	'jump reflexivité',
],
'fincool':[
	'show character c talk',
	'c Non je ne vois pas. Pour moi, c’est tout bon.',
	'b Très bien, merci beaucoup pour votre temps et vos réponses. Je coupe l’enregistrement.',
	'a Laura se lève et part.',
	'hide character c',
	'a Tu vas aussi pouvoir rentrer chez toi.',
	'jump reflexivité',
],

'reflexivité':[
	'stop music',
	'play music fin with loop',
	'show scene house with fadeIn',
	'a Tu viens de rentrer chez toi et tu penses à l’entretien qui vient de se dérouler...',
	'a L’entretien se termine avec un savoir incomplet, que penses-tu de cette situation ?',
	{
		'Choice':{
			'refle1':{
				'Text':'Il me semble avoir fait au mieux, le sujet ne peut pas s’épuiser aussi rapidement',
				'Do':'jump refle1',
			},
			'refle2':{
				'Text':'Si j’avais mieux mené l’entretien, ça ne serait pas le cas',
				'Do':'jump refle2',
			},
			'refle3':{
				'Text':'Je ne peux rien y faire, on ne saura jamais tout de toute façon',
				'Do':'jump refle3',
			},
		}
	}
],

'refle1':[
	'show message refle1',
	'jump reflexivité2',
],
'refle2':[
	'show message refle2',
	'jump reflexivité2',
],

'refle3':[
	'show message refle3',
	'jump reflexivité2',
],


'reflexivité2':[
	'a Veux-tu savoir ce qu’en dit Becker (2002) sur le sujet dans "Les ficelles du métier" ?',
	{
		'Choice':{
			'nonbecker':{
				'Text':'Non',
				'Do':'jump nonbecker',
			},
			'ouibecker':{
				'Text':'Oui',
				'Do':'jump ouibecker',
			},
		}
	}
],

'nonbecker':[
	'show message nonbecker',
	'a “Lorsque j’enseigne le travail de terrain, j’insiste toujours auprès des étudiants pour qu’ils commencent leurs observations et leurs entretiens en notant « tout » dans leurs carnets. Je ne leur demande donc pas d’essayer d’échantillonner, mais bien plutôt d’essayer de compiler l’univers des occurrences « pertinentes ». Cela entraîne en général beaucoup de réticence de leur côté, et beaucoup de harcèlement du mien.' ,
	'a Ils disent qu’ils ne peuvent pas le faire, ou qu’ils ne peuvent pas le faire « honnêtement » (voulant dire par là que ce qu’ils écrivent ne pourra jamais être ni complet ni totalement exact). Je leur réponds qu’ils ne pourront jamais savoir s’ils peuvent ou non le faire sans avoir essayé, et que le résultat de leurs tentatives de tout noter ne sera pas moins exact qu’une description qui laisserait énormément de choses de côté. Je leur suggère de s’acheter un tampon encreur portant la mention « cette transcription n’est ni complète ni totalement exacte » et de l’imprimer sur chacune de leurs pages de notes, pour les soulager de ce mélange de culpabilité et de paresse qui les assaille. Même si je me moque un peu d’eux, leur réticence cache en fait une saine défiance vis-à-vis d’une tâche dont nous venons de voir qu’elle était irréalisable à grande échelle.” (Becker, 2002, p.131)' ,
	'a Si même les doctorants et doctorantes sont encore perdus, il n’y a aucune honte à avoir de ton côté ! ',
	'jump reflexivité3',
],
'ouibecker':[
	'a “Lorsque j’enseigne le travail de terrain, j’insiste toujours auprès des étudiants pour qu’ils commencent leurs observations et leurs entretiens en notant « tout » dans leurs carnets. Je ne leur demande donc pas d’essayer d’échantillonner, mais bien plutôt d’essayer de compiler l’univers des occurrences « pertinentes ». Cela entraîne en général beaucoup de réticence de leur côté, et beaucoup de harcèlement du mien.' ,
	'a Ils disent qu’ils ne peuvent pas le faire, ou qu’ils ne peuvent pas le faire « honnêtement » (voulant dire par là que ce qu’ils écrivent ne pourra jamais être ni complet ni totalement exact). Je leur réponds qu’ils ne pourront jamais savoir s’ils peuvent ou non le faire sans avoir essayé, et que le résultat de leurs tentatives de tout noter ne sera pas moins exact qu’une description qui laisserait énormément de choses de côté. Je leur suggère de s’acheter un tampon encreur portant la mention « cette transcription n’est ni complète ni totalement exacte » et de l’imprimer sur chacune de leurs pages de notes, pour les soulager de ce mélange de culpabilité et de paresse qui les assaille. Même si je me moque un peu d’eux, leur réticence cache en fait une saine défiance vis-à-vis d’une tâche dont nous venons de voir qu’elle était irréalisable à grande échelle.” (Becker, 2002, p.131)' ,
	'a Si même les doctorants et doctorantes sont encore perdus, il n’y a aucune honte à avoir de ton côté ! ',
	'jump reflexivité3',
],

'reflexivité3':[
	'a Les entretiens réels sont tous singuliers et uniques. (Blanchet et al., 1985). Puisque cet entretien est simulé et qu’il est possible de relancer la discussion autant de fois que désiré, il n’est pas représentatif de ce qui va se passer pour vos propres entretiens. Nous espérons cependant que cette esquisse de mise en contexte a pu te permettre de te projeter dans de futures situations',
	'a Nous n’avons pas créé les questions et les réponses au hasard. Les réponses fictives de Laura nous ont été inspirées par deux ouvrages et par des entretiens auprès de caissière menés dans un autre cours.',
	'a Les deux ouvrages sont “Caissière... et après : Une enquête parmi les travailleurs de la grande distribution” de Waelli (2009) et “Être caissière (caissier)” de Bernard (2011).',
	'a Tu trouveras dans la bibliographie les références exactes, mais nous pouvons signaler d’autre matériaux de vulgarisation non utilisé ici, comme le compte rendu d’un séminaire de direction d’entretien par Marion Ink (https://mastersociologie.hypotheses.org/3342)',
	'a Si tu souhaites enquêter sur des milieux dominants, où les réflexions sur la violence symbolique prennent un tout autre sens, nous pouvons par exemple conseiller l’article de Laurens (2007) : " "Pourquoi et comment poser les questions qui fâchent ? " Réflexion sur les dilemmes récurrents que posent les entretiens avec les imposants". Ou encore l’ouvrage d’introduction des Pinçon-Charlot : "Voyage en grande bourgeoisie: Journal d’enquête". (2005).',
    'a L’article de Meyer (1995) est une critique foudroyante du livre dirigé par Bourdieu, mais la Misère du Monde reste intéressante à feuilleter pour, entre autres, les entretiens à la retranscription bien plus complète qu’il est d’usage.',
    'jump bibliographie',
],


'bibliographie':[
	'a Tu trouveras la bibliographie dans le readme du jeu qui est accessible dans les crédits quand tu reviendras à la page d’accueil !',
	'a Thank you for playing, comme ils disent.',
	'end',
],
	
});