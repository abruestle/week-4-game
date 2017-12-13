// game code
// declare variables


// functions

var game = {
	characters: [		
	// Humans		
		gardener = {	
			name: "Eve",
			race: "Human",
			title: "The Gardener",
			gender: "Female",
			element: "Earth",
			//Stats: Max HP, current HP, Current attack (in simple version how you level/player's Attack 'Attack Power'),
			//Attack, Defense, Hit, Evade, Physical, Tech, Magical, Holy - last 4 not to be used in simplest version
			stats: [180, 180, 2, 2, 4, 3, 1, 4, 1, 2, 3],
			description: "A girl raised by Ents. Now that she's learned they eat other sentient races after turning them into earbeasts, she wants to stop her father from doing so. And whatever else he's planning.",
			type1: "Defense",
			type2: "Physical",
			weapon: "farm tools"
		},	
		mage = {	
			name: "Nannar",
			race: "Human",
			title: "The Dyslexic Mage",
			gender: "Male",
			element: "Air",
			stats: [120, 120, 4, 4, 1, 3, 2, 1, 3, 4, 2],
			description: "Son of the most powerful Archmage in a millennia, he's always had pressure on him to become a better mage. But when reading spells, he often gets mixed up, for better or worse. He can be significantly more powerful, but sometimes makes duds.",
			type1: "Attack",
			type2: "Magic",
			weapon: "Book (pages fly out when he uses it and fade into nothingness)"
		},	
		fengShuiMaster = {	
			name: "Fung Shei",
			race: "Human",
			title: "The Feng Shui Master",
			gender: "Female",
			element: "Fire",
			stats: [140, 140, 2, 2, 1, 3, 4, 3, 2, 4, 1],
			description: "She's a master of the most powerful magic: rearranging furniture just right so that it causes explosions.",
			type1: "Evade",
			type2: "Magic",
			weapon: "Long Katana"
		},	
		ranger = {	
			name: "Aiden",
			race: "Human",
			title: "The Ranger",
			gender: "Male",
			element: "Fire",
			stats: [160, 160, 3, 3, 2, 4, 1, 4, 2, 3, 1],
			description: "He burned down Eve's home town, and after a few battles and a lengthy chase, it was discovered he was doing it for a good reason. Ents killed his parents, and he has sworn to burn them all and uncover the conspiracy.",
			type1: "Hit",
			type2: "Physical",
			weapon: "Katanas"
		},	
	// Cyborgs		
		cyborg = {	
			name: "Reiko",
			race: "Cyborg",
			title: "The Clumsy Cyborg",
			gender: "Female",
			element: "Light",
			stats: [160, 160, 4, 4, 3, 1, 2, 3, 4, 2, 1],
			description: "She's so clumbsy she keeps having to replace body parts with mechanical equivalents. Without modern technology she'd probably be dead from tripping down stairs and landing on a sword or something.",
			type1: "Attack",
			type2: "Tech",
			weapon: "Laser Fists"
		},	
		roboPope = {	
			name: "Lucia",
			race: "Cyborg",
			title: "Robo Pope",
			gender: "Female",
			element: "Light",
			stats: [150, 150, 1, 1, 4, 2, 3, 1, 2, 3, 4],
			description: "The people of the City of Light thought, 'No man can speak for God.' Most accepted a woman. But the most devout decided that wasn't enough... She is such a sophisticated robot that she's practically a human. Or at least cyborg.",
			type1: "Defense",
			type2: "Holy",
			weapon: "Holy Symbol (comes out of arm)"
		},	
		programmer = {	
			name: "Solon",
			race: "Cyborg",
			title: "The Programmer",
			gender: "Male",
			element: "Light",
			stats: [140, 140, 1, 1, 3, 4, 2, 1, 4, 3, 2],
			description: "A Programmer who used to be in the Eco-terrorist organization Green Dream. He just really wants to learn how to hack...into living beings. He started with robots and cyborgs, and now he can somehow hack humans, extras, and earbeasts. His next challenge is the Ents.",
			type1: "Hit",
			type2: "Tech",
			weapon: "Cables (used as whips and jacking into brains)"
		},	
		merborg = {	
			name: "Kanti",
			race: "Cyborg",
			title: "The Merborg",
			gender: "Female",
			element: "Water",
			stats: [150, 150, 1, 1, 3, 2, 4, 2, 4, 1, 3],
			description: "We rescued her from being frozen in ice and with only her upper body. ...There was a giant fish tail near her, so we thought we were doing right by replacing it... She's come to terms with it but still blames The Programmer a bit.",
			type1: "Evade",
			type2: "Tech",
			weapon: "Tail, Rockets"
		},	
	//Extras		
		roguePrincess = {	
			name: "Elaine",
			race: "Extra",
			title: "The Rogue Princess",
			gender: "Female",
			element: "Gravity",
			stats: [140, 140, 3, 3, 2, 1, 4, 2, 3, 1, 4],
			description: "While other extras were thrown out by their parents, there were a few who still loved their children.  The king and queen of the kingdom of rogues were one of these. They loved their daughter, but the other nobles were so against the extras that they knew having their heir known would be bad. So they kept her hidden away, giving her everything she wanted in secret. But she also wants to see the world.",
			type1: "Evade",
			type2: "Holy",
			weapon: "Guillotine"
		},	
		alienDiplomat = {	
			name: "Hoshi",
			race: "Extra",
			title: "The Alien Diplomat",
			gender: "Female",
			element: "Gravity",
			stats: [140, 140, 3, 3, 2, 4, 1, 2, 3, 1, 4],
			description: "A diplomat sent to reason with the aliens...but unfortunately she was stranded up on a derelict spacecraft. After being saved, she joins you in your quest.",
			type1: "Hit",
			type2: "Holy",
			weapon: "Rocket Boots"
		},	
		slumKing = {	
			name: "Puncher",
			race: "Extra",
			title: "The Slum King",
			gender: "Male",
			element: "Gravity",
			stats: [170, 170, 4, 4, 3, 1, 2, 4, 3, 1, 2],
			description: "The leader of the extra orphans in the slums. Living in a war zone and ghetto has made him grow up tough. He wants to get recognition outside of the slums for himself and for his people. His punches send people flying.",
			type1: "Attack",
			type2: "Physical",
			weapon: "Fists"
		},	
		sherpa = {	
			name: "Dimitrios",
			race: "Extra",
			title: "The Sherpa",
			gender: "Male",
			element: "Gravity",
			stats: [150, 150, 4, 4, 2, 1, 3, 3, 1, 2, 4],
			description: "The ex-leader of Green Dream, the eco-terrorist group. He has a good heart and lofty ideals, but unfortunately the plants he was trying to protect eat people. And were threatening him to help them with their new race of super ents... He works as a sherpa for his day-job.",
			type1: "Attack",
			type2: "Holy",
			weapon: "Backpack"
		},	
	//Earbeasts		
		bloodKnight = {	
			name: "Amfortas",
			race: "Earbeast",
			title: "The Blood Knight",
			gender: "Male",
			element: "Blood",
			stats: [170, 170, 1, 1, 4, 2, 3, 3, 1, 4, 2],
			description: "Has a dark and mysterious past...according to him. We think he is just upset because he doesn't like being 3' tall (besides his ears). ...We try to encourage the idea that being quiet adds to his dark appeal.",
			type1: "Defense",
			type2: "Magic",
			weapon: "Glaive"
		},	
		mechKnight = {	
			name: "Miwa",
			race: "Earbeast",
			title: "The Mech Knight",
			gender: "Female",
			element: "Light",
			stats: [160, 160, 3, 3, 4, 2, 1, 2, 4, 3, 1],
			description: "Those are earbeast ears poking out, right?",
			type1: "Defense",
			type2: "Tech",
			weapon: "Laser Sword"
		},	
		ninjaRabbit = {	
			name: "Wassabbit",
			race: "Earbeast",
			title: "The Ninja Rabbit",
			gender: "Male",
			element: "Fire",
			stats: [150, 150, 2, 2, 1, 3, 4, 4, 1, 2, 3],
			description: "One of the last few of an ancient race completely turned into earbeasts, and almost turned extinct byt the ents. Fortunately, he has kept his longevity.  He is trained in speed and firey attacks.",
			type1: "Evade",
			type2: "Physical",
			weapon: "Ninja daggers"
		},	
		charlatanMage = {	
			name: "Zaidu",
			race: "Earbeast",
			title: "Totally Not A Fake Mage",
			gender: "Male",
			element: "Earth",
			stats: [120, 120, 2, 2, 1, 4, 3, 1, 2, 4, 3],
			description: "Claims to have been a great archmage as a human. He sounded really believable, but he keeps changing his story...",
			type1: "Hit",
			type2: "Magic",
			weapon: "Staves, Giant Hacksaw"
		},	
	// Robots		
		farmbot = {	
			name: "Farmbot",
			race: "Robot",
			title: "Farmbot",
			gender: "None",
			element: "None",
			stats: [180, 180, 3, 3, 4, 2, 1, 4, 3, 2, 1],
			description: "A durable bot for working in the fields. Not really programmed for combat, but I guess anything can be a weapon when used wrong.",
			type1: "Defense",
			type2: "Physical",
			weapon: "Farm Tools"
		},	
		fourArms = {	
			name: "Four Arms",
			race: "Robot",
			title: "Four Arms",
			gender: "None",
			element: "None",
			stats: [160, 160, 4, 4, 2, 1, 3, 4, 3, 2, 1],
			description: "Robots can have extra limbs! It flails them wildly though.",
			type1: "Attack",
			type2: "Physical",
			weapon: "Four weapons"
		},	
		floater = {	
			name: "Floater",
			race: "Robot",
			title: "Floater",
			gender: "None",
			element: "None",
			stats: [150, 150, 2, 2, 1, 3, 4, 4, 3, 2, 1],
			description: "A small, hovering robot. Useful for getting into high, small places.",
			type1: "Evade",
			type2: "Physical",
			weapon: "Arms"
		},	
		roomba = {	
			name: "Roomba",
			race: "Robot",
			title: "Roomba",
			gender: "None",
			element: "None",
			stats: [160, 160, 3, 3, 2, 4, 1, 4, 3, 2, 1],
			description: "The deadly and terrifying robot that terrorized a town. After you dismantled it, you rebuilt it under your control. Still, it can be pretty terrifying... It goes in a straight line until it hits a wall, cleaning a path with no regard for anything in its way.",
			type1: "Hit",
			type2: "Physical",
			weapon: "Saws"
		}
	],
	player: -1,
	enemy: -1,
	difficulty: 2,
	element: "earth",
	elements: ["earth", "air", "fire", "water", "light", "blood", "gravity","none"],
	elementColors: ["green", "white", "blue", "lightblue", "yellow", "red", "black"],
	elementIcons: ["leaf", "cloud", "fire", "tint", "star-empty", "heart", "scale", "ban-circle"],
	elementDescriptions: ["Earth, metals, plants...well, some most plants. Its opposing element is air.", "Air, wind. Its opposing element is earth.", "Fire, plasma, heat, and the sun. Its opposing element is water.", "Water, ice, cold. Its opposing element is fire.", "Light, fiberoptics so most technology... Its opposing element is blood.", "Blood, battle, life. Its opposing element is light.", "A weird element that effects the laws of gravity. Aliens and Extras are the only ones who can currently use it... And no opposition is known.", "No elemental focus."],
	stats: ["Attack", "Defense", "Hit", "Evade", "Physical", "Tech", "Magic", "Holy"],
	statIcons: ["pushpin", "tower", "screenshot", "resize-horizontal", "user", "qrcode", "map-marker", "tree-deciduous"],
	statDescriptions: ["How hard you hit.", "How hard a hit you take.", "How often you hit.", "How often you avoid being hit.", "Attacks with fists, ears, simple weapons, or whatever.", "Attacks made with mechanical or other technology based weapons.", "Magic is an arcane force that uses knowledge to directly change the laws of physics. It is harder to learn than holy, and usually less fickle...unless you mess up yourself. So overall less reliable but more powerful...unless you are going against the world trees.", "Holy power comes from the 6 world trees that hold the continents together – or rarely from the mythical 7th that holds all the continents to eachother."],
	audio: ["https://www.youtube.com/watch?v=9gknEslyrUU"],
	changeElement: function() {
		switch(game.difficulty) {
			case 1: {
				//code for easy difficulty - defaults to player's element
				game.element = game.characters[game.player]["element"].toLowerCase();
				break;
			}
			case 3: {
				//code for hard difficulty - defaults to enemy's element
				game.element = game.characters[game.enemy]["element"].toLowerCase();
				break;
			}
			case 0: {
				//difficulty not set
				//set to earth because of theme
				game.element = "earth";
				break;
			}
			default: {
				//code for normal difficulty - randomized element
				game.element = game.elements[Math.floor(Math.random() * 7)];
			}
		}
		document.body.style.background = "url('assets/images/" + game.element + Math.floor(Math.random() * 2+1) + ".png') fixed center center no-repeat " + game.elementColors[game.elements.indexOf(game.element)];
		$(".char img").css("background-color", game.elementColors[game.elements.indexOf(game.element)]);

	},
	resetGame: function() {
		game.player = -1;
		game.enemy = -1;
		game.changeElement();
		//clear char images
		console.log("Game start");
		for (var i =4; i >= 0; i--) {
			$("#panel-"+Math.floor((game.characters[i])/4+1)+" .row").html("");

		console.log("test");
		}

		//Disable attacking
		$("#attack").attr("disabled","disabled");
		//Set default places for player and computer
		$("#player").html('<img alt="Bootstrap Thumbnail First" src="assets/images/player.png"><div class="caption"><h3>Player</h3><div class="progress"><div class="progress-bar progress-success" role="progressbar" id="playerHP" style="width:100%"></div></div></div>');
		$("#enemy").html('<img alt="Bootstrap Thumbnail First" src="assets/images/enemy.png"><div class="caption"><h3>Computer</h3><div class="progress"><div class="progress-bar progress-success" role="progressbar" id="enemyHP" style="width:100%"></div></div></div>');


		//Remove characters from rows
		for (var i = 1; i <6; i++) {
			$("#panel-"+i+" .row").empty();
		}
		

      for (var i = 0; i < game.characters.length; i++) {
      	//Reset HP to 0 and current attack to attack.
      	game.characters[i]["stats"][1] = game.characters[i]["stats"][0];
		game.characters[i]["stats"][2] = game.characters[i]["stats"][3];
      	//create images for characters
        //add into .tab-pane .row each character


		$("#panel-"+Math.floor(i/4+1)+" .row").append('<div class="col-sm-3"><div class="thumbnail char" data-name="'+i+'" id="'+i+'panel"><img alt="Bootstrap Thumbnail Third" src="assets/images/'+game.characters[i]["name"]+'.png" data-toggle="tooltip" title="'+game.characters[i]["name"]+': '+game.characters[i]["description"]+'"><div class="caption"><h3>'+game.characters[i]["name"]+' </h3>'+game.characters[i]["title"]+'<p><span class="glyphicon glyphicon-'+game.elementIcons[game.elements.indexOf(game.characters[i]["element"].toLowerCase())]+'" aria-hidden="true" data-toggle="tooltip" title="'+game.characters[i]["element"]+': '+game.elementDescriptions[game.elements.indexOf(game.characters[i]["element"].toLowerCase())]+'"></span><span class="glyphicon glyphicon-'+game.statIcons[game.stats.indexOf(game.characters[i]["type1"])]+'" aria-hidden="true" data-toggle="tooltip" title="'+game.characters[i]["type1"]+': '+game.statDescriptions[game.stats.indexOf(game.characters[i]["type1"])]+'"></span><span class="glyphicon glyphicon-'+game.statIcons[game.stats.indexOf(game.characters[i]["type2"])]+'" aria-hidden="true" data-toggle="tooltip" title="'+game.characters[i]["type2"]+': '+game.statDescriptions[game.stats.indexOf(game.characters[i]["type2"])]+'"></span></p></div></div></div>');
		$(".char img").css("background-color", game.elementColors[game.elements.indexOf(game.element)]);


      }

	},
	won: function() {
		$("#enemyHP").width("0%");
		$("#enemyHP").text("0 hp");
		game.enemy = -1;
		$("#enemy").empty();
		console.log("Enemy killed.");
		//if no enemies left, comments that the person won.
		if(($('.char').length) == 0){
			game.resetGame();
			$("#comments p").html("The enemy was killed! You won all the battles!")
			//Goes to comments tab
			$("#comments-tab a").click();
			$(".tab-content").attr("class","tab-content");
		} else {
			//heal between battles. ...Because otherwise you could not get through 20 characters
			var healed = Math.floor((game.characters[game.player]["stats"][0]-game.characters[game.player]["stats"][1])/4);
			game.characters[game.player]["stats"][1] = game.characters[game.player]["stats"][1] + healed;
			$("#playerHP").width(Math.floor(100*game.characters[game.player]["stats"][1]/game.characters[game.player]["stats"][0])+ "%");
			$("#playerHP").text(game.characters[game.player]["stats"][1]+" hp");
			//raise attack
			game.characters[game.player]["stats"][3] = game.characters[game.player]["stats"][3] + game.characters[game.player]["stats"][4];
			$("#enemy").html('<img alt="Bootstrap Thumbnail First" src="assets/images/enemy.png"><div class="caption"><h3>Computer</h3><div class="progress"><div class="progress-bar progress-success" role="progressbar" id="enemyHP" style="width:100%"></div></div></div>');
			//killed comment
			$("#comments p").append(" The enemy was killed! You gained "+game.characters[game.player]["stats"][4]+" attack and "+healed+" hp. Select a new opponent.")
			//Goes to comments tab
			$("#comments-tab a").click();
			$(".tab-content").attr("class","tab-content");
			$("#attack").attr("disabled", "disabled");
		}
	},
	lost: function() {

		//if player is killed
		game.resetGame();
		//comment on death
		$("#comments p").text("You died. Select a new character?")
		//Goes to comments tab
		$("#comments-tab a").click();
		$(".tab-content").attr("class","tab-content");
	},
	chooseChar: function(i) {
		//I used i as this so that I could steal some of the code from the loop in resetGame. ...It is also easier to see than some of the descriptive names. Later I will change it to 'character' or maybe 'char'
		if ( game.player == -1){
			//chooses character as player
			game.player = i;

			$("#player").html('<img alt="Bootstrap Thumbnail First" src="assets/images/'+game.characters[i]["name"]+'.png" data-toggle="tooltip" title="'+game.characters[i]["name"]+': '+game.characters[i]["description"]+'"><div class="caption"><div class="row"><div class="col-xs-3"><h3>'+game.characters[i]["name"]+'</h3></div><div class="col-xs-5 titleSmall">'+game.characters[i]["title"]+'</div><div class="col-xs-4 glyphiconDiv"><span class="glyphicon glyphicon-'+game.elementIcons[game.elements.indexOf(game.characters[i]["element"].toLowerCase())]+'" aria-hidden="true" data-toggle="tooltip" title="'+game.characters[i]["element"]+': '+game.elementDescriptions[game.elements.indexOf(game.characters[i]["element"].toLowerCase())]+'"></span><span class="glyphicon glyphicon-'+game.statIcons[game.stats.indexOf(game.characters[i]["type1"])]+'" aria-hidden="true" data-toggle="tooltip" title="'+game.characters[i]["type1"]+': '+game.statDescriptions[game.stats.indexOf(game.characters[i]["type1"])]+'"></span><span class="glyphicon glyphicon-'+game.statIcons[game.stats.indexOf(game.characters[i]["type2"])]+'" aria-hidden="true" data-toggle="tooltip" title="'+game.characters[i]["type2"]+': '+game.statDescriptions[game.stats.indexOf(game.characters[i]["type2"])]+'"></span></div></div><div class="progress"><div class="progress-bar progress-success" role="progressbar" id="playerHP" style="width:100%">'+game.characters[i]["stats"][0]+' hp</div></div></div>');

			$("#"+i+"panel").remove();

			$("#comments p").text("Now select an opponent! I recommend starting with one you think is easy.")
			//Goes to comments tab
			$("#comments-tab a").click();
			$(".tab-content").attr("class","tab-content");

						

		} else if (game.enemy == -1) {
			//chooses character as enemy
			game.enemy = i;

			$("#enemy").html('<img alt="Bootstrap Thumbnail First" src="assets/images/'+game.characters[i]["name"]+'.png" data-toggle="tooltip" title="'+game.characters[i]["name"]+': '+game.characters[i]["description"]+'"><div class="caption"><div class="row"><div class="col-xs-3"><h3>'+game.characters[i]["name"]+'</h3></div><div class="col-xs-5 titleSmall">'+game.characters[i]["title"]+'</div><div class="col-xs-4 glyphiconDiv"><span class="glyphicon glyphicon-'+game.elementIcons[game.elements.indexOf(game.characters[i]["element"].toLowerCase())]+'" aria-hidden="true" data-toggle="tooltip" title="'+game.characters[i]["element"]+': '+game.elementDescriptions[game.elements.indexOf(game.characters[i]["element"].toLowerCase())]+'"></span><span class="glyphicon glyphicon-'+game.statIcons[game.stats.indexOf(game.characters[i]["type1"])]+'" aria-hidden="true" data-toggle="tooltip" title="'+game.characters[i]["type1"]+': '+game.statDescriptions[game.stats.indexOf(game.characters[i]["type1"])]+'"></span><span class="glyphicon glyphicon-'+game.statIcons[game.stats.indexOf(game.characters[i]["type2"])]+'" aria-hidden="true" data-toggle="tooltip" title="'+game.characters[i]["type2"]+': '+game.statDescriptions[game.stats.indexOf(game.characters[i]["type2"])]+'"></span></div></div><div class="progress"><div class="progress-bar progress-success" role="progressbar" id="enemyHP" style="width:100%">'+game.characters[i]["stats"][0]+' hp</div></div></div>');

			game.changeElement();
			$("#"+i+"panel").remove();

			$("#comments p").text("Now that you have an opponent, select 'Attack' to start attacking!")
			//Goes to comments tab
			$("#comments-tab a").click();
			$(".tab-content").attr("class","tab-content");

			$("#attack").removeAttr("disabled");


		} else {
			$("#comments p").text("You already have an opponent! Select 'Attack' to start attacking!")
			//Goes to comments tab
			$("#comments-tab a").click();
			$(".tab-content").attr("class","tab-content");
		}

	},
	updateField: function(character, damage) {
		console.log("updateField "+ character+", "+damage);
		//shows attack on enemy then player and updates hp 
		//use setTimeout and do not reference 'game'
		if(character == 0) {
			//player got hit
			game.characters[game.player]["stats"][1] = game.characters[game.player]["stats"][1] - damage;
			if(game.characters[game.player]["stats"][1] < 1){
				game.lost();
			} else {
				//Update progress bar of player and have character image of player animate
				
				$("#playerHP").width(Math.floor(100*game.characters[game.player]["stats"][1]/game.characters[game.player]["stats"][0])+ "%");
				$("#playerHP").text(game.characters[game.player]["stats"][1]+" hp");
				console.log("HP changed on player.");
				console.log("attack finished.");
				//enable attacking
				$("#attack").removeAttr("disabled");
			}

		} else if(character == 1){

			//Update progress bar of enemy and have character image of enemy animate
			game.characters[game.enemy]["stats"][1] = game.characters[game.enemy]["stats"][1] - damage;
				
			//If enemy is killed
			if(game.characters[game.enemy]["stats"][1] < 1){
				game.won();
			//else if enemy is above 0 hp
			} else {
				$("#enemyHP").width(Math.floor(100*game.characters[game.enemy]["stats"][1]/game.characters[game.enemy]["stats"][0])+ "%");
				$("#enemyHP").text(game.characters[game.enemy]["stats"][1]+" hp");
				console.log("HP changed on enemy.");
				$("#attack").removeAttr("disabled");
				// Enemy's turn:
				game.enemyAttack();
			}

		} else {
			//Update both characters, no animation.
			$("#playerHP").width(Math.floor(100*game.characters[game.player]["stats"][1]/game.characters[game.player]["stats"][0])+ "%");
			$("#playerHP").text(game.characters[game.player]["stats"][1]+" hp");
			$("#enemyHP").width(Math.floor(100*game.characters[game.enemy]["stats"][1]/game.characters[game.enemy]["stats"][0])+ "%");
			$("#enemyHP").text(game.characters[game.enemy]["stats"][1]+" hp");
			$("#attack").removeAttr("disabled");

		}
	},
	// showMiss: function(character) {

	// },
	enemyAttack: function () {
		console.log("enemyAttack");
		// Enemy attacks back with untyped attack
		//game.characters[game.enemy]["stats"][3] is the enemy's attack. Then comes defense, hit, and evade
		//if 1d20 + Hit - Evade - 10 is positive, it hits.
		if (Math.random() * 20 + game.characters[game.enemy]["stats"][5] - game.characters[game.player]["stats"][6] - 9 > 0) {
			//1d20 + Attack - Defense of player
			var damage = Math.max(0, Math.floor(Math.random() * 20 + game.characters[game.enemy]["stats"][3] - game.characters[game.player]["stats"][4]));

			//attack hits comment
			$("#comments p").append(" The enemy hit for "+damage+" damage.")
			//Goes to comments tab
			$("#comments-tab a").click();
			$(".tab-content").attr("class","tab-content");
			console.log("enemy hit");
			game.updateField(0, damage);
		} else {
			//attack misses
			$("#comments p").append(" The enemy missed.")
			//Goes to comments tab
			$("#comments-tab a").click();
			$(".tab-content").attr("class","tab-content");
			console.log("The enemy missed.");

			
			console.log("attack finished.");
			//enable attacking

			$("#attack").removeAttr("disabled");
		}
	},
	attack: function() {
		console.log("attack")
		//disable attacking until all action is resolve
		$("#attack").attr("disabled","disabled");
		console.log("disabled");
		// Attack enemy with untyped attack
		//game.characters[game.enemy]["stats"][3] is the enemy's attack. Then comes defense, hit, and evade
		//if 1d20 + Hit - Evade - 10 is positive, it hits.
		if (Math.random() * 20 + game.characters[game.player]["stats"][5] - game.characters[game.enemy]["stats"][6] - 9 > 0) {
			//1d20 + Attack - Defense of player
			console.log("You hit.");
			var damage = Math.max(0, Math.floor(Math.random() * 20 + game.characters[game.player]["stats"][3] - game.characters[game.enemy]["stats"][4]));
			//attack hits
			$("#comments p").text("You hit for "+damage+" damage.")
			//Goes to comments tab
			$("#comments-tab a").click();
			$(".tab-content").attr("class","tab-content");
			game.updateField(1, damage);
		} else {
			//attack misses
			$("#comments p").text("You missed.")
			//Goes to comments tab
			$("#comments-tab a").click();
			$(".tab-content").attr("class","tab-content");
			console.log("You missed.");
			// Enemy's turn:
			game.enemyAttack();
		}
		
	}

}
game.resetGame();

$("#attack").on("click", function() {
	game.attack();
});

$("body").on("click", ".char", function() {
	game.chooseChar($(this).attr("data-name"));

});



