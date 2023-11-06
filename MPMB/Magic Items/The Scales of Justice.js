var iFileName = "The Scales of Justice.js";
RequiredSheetVersion(13);

MagicItemsList["the scales of justice"] = {
	name : "The Scales of Justice",
	source : ["HB", 0],
	type : "weapon (bastard sword)",
	rarity : "artifact",
	attunement : true,
	description : "This unpolished and flat blade never stains, dulls, or chips. Its black leather grip feels good and well used in hand and never gets wet. While attuned, I am proficient with it, immune to charm, can invoke Voice of Authority, gain a Bonus Action True Strike, and can mark a target for justice.",
	descriptionLong : "The Scales of Justice is a +3 magic longsword that deals 1d8 slashing damage, versatile. When attuned, I gain proficiency with it, immunity to charm effects, can invoke Voice of Authority after casting a spell on an ally, allowing them to make a weapon attack as a reaction. I gain a Bonus Action version of True Strike and can mark a target once per long rest to deal extra psychic damage on hits against them.",
	descriptionFull : "The Scales of Justice is a powerful artifact associated with Abadara, the Goddess of Balance and Justice. It is a +3 magic longsword that never stains, dulls, or chips, with a black leather grip that never gets wet. While attuned, the wielder becomes proficient with the sword, immune to charm effects, can invoke Voice of Authority, gains a Bonus Action version of the True Strike cantrip, and can mark a target once per long rest to deal extra psychic damage on hits against them. If the target is a worshiper of Lythandia or Albion or a wanted criminal, they take 2d6 extra damage; otherwise, misusing the mark brings bad fortune upon the wielder.",
	weaponsAdd : ["The Scales of Justice"],
	weaponOptions : {
		baseWeapon : "longsword",
		regExpSearch : /^(?=.*scales)(?=.*justice).*$/i,
		name : "The Scales of Justice",
		source : ["HB", 0],
		modifiers : [3, ""], // +3 to attack and damage rolls
		description : "Versatile (1d10); If attuned: proficiency, immune to charm, Voice of Authority, Bonus Action True Strike, mark for justice"
	},
	prereqeval : function(v) {
		return !(/evil/i).test(What("Alignment")) && !(/chaotic/i).test(What("Alignment"));
	},
	usages : 1,
	recovery : "long rest",
	action : [["action", "Mark for Justice (after True Strike)"]],
	attuneFunc : function (isAttuned) {
		if (isAttuned) {
			// Add any code that runs when the character becomes attuned to the item
		} else {
			// Add any code that runs when the character is no longer attuned to the item
		}
	}
	// Add more properties and methods as needed for the full functionality
};

// You will need to add more functionality here for all the features of the item
