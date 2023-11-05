/*	- WHAT IS THIS? -
	This file adds a custom magic item to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	- INSTRUCTIONS -
	1. Make sure you have the latest version of MPMB's sheet.
	2. Copy the code below.
	3. Open your character sheet and go to the "Options" tab.
	4. Click on "Add Extra Materials" and paste the code into the dialog box.
	5. Click "Import" to add the magic item to your character sheet.

	- ITEM DESCRIPTION -
	The Scales of Justice is a powerful magic item associated with Abadara, the Goddess of Balance and Justice. It is a versatile weapon with various magical properties and abilities.

	Please consult your DM to ensure the item is suitable for your campaign.
*/

var iFileName = "The Scales of Justice.js";

RequiredSheetVersion(13);

// Define the magic item
MagicItemsList["the scales of justice"] = {
	name: "The Scales of Justice",
	source: ["Homebrew", 0], // Replace with the appropriate source information
	type: "weapon (bastard sword)",
	rarity: "artifact",
	attunement: true,
	description: "The Scales of Justice is a bastard sword associated with Abadara, the Goddess of Balance and Justice. The blade is unpolished and flat, immune to staining, dulling, or chipping. The grip is black leather and cannot become wet under any conditions.",
	descriptionFull: [
		"The Scales of Justice is a powerful bastard sword associated with Abadara, the Goddess of Balance and Justice. This weapon possesses the following magical properties:",
		"• **Swift Justice:** The weapon is a +3 magic longsword that deals 1d8 slashing damage (versatile).",
		"• **The Learned Sword:** You become proficient with the sword, even if you were not previously.",
		"• **Unyielding Conviction:** You are immune to charm.",
		"• **The Lawbringer's Word:** Voice of Authority. You can invoke the power of law to drive an ally to attack. Immediately after you cast a spell on an ally using a spell slot of 1st level or higher, that ally can use their reaction to make one weapon attack against a target of your choice that you can see. If the spell targets more than one ally, you choose the ally who can make the attack.",
		"• **Righteous Focus:** True Strike. You gain the 'True Strike' cantrip, except it requires a Bonus Action, not a full action.",
		"• **The Mark of Justice:** Once per long rest, you can mark a *deserving* target for Justice. Any hits against that target do an additional 1d6 Psychic damage. If the target is a worshiper of Lythandia or Albion or a wanted criminal, the damage is 2d6. If the target is not 'deserving,' bad things happen to the wielder.",
	],
	choices: ["Cleric of Abadara in the Order Domain", "Warlock with a Hexblade Patron and a Pact of the Blade", "Paladin with an Oath of Vengeance"],
	"cleric of abadara in the order domain": {
		name: "Cleric of Abadara in the Order Domain",
		description: "You become a cleric of Abadara in the Order Domain.",
	},
	"warlock with a hexblade patron and a pact of the blade": {
		name: "Warlock with a Hexblade Patron and a Pact of the Blade",
		description: "You become a warlock with a Hexblade Patron and a Pact of the Blade.",
	},
	"paladin with an oath of vengeance": {
		name: "Paladin with an Oath of Vengeance",
		description: "You become a paladin with an Oath of Vengeance.",
	},


// Define the item's attunement properties
MagicItemAttunement["the scales of justice"] = {
	description: "Bonding with The Scales of Justice comes with a price. One must be willing to follow the Law in order to wield its power. The attunement process involves a thorough examination that cannot be prevented or deceived by any means. If attunement fails, the supplicant takes 1d10 psychic damage and 1d10 radiant damage. If attunement isn't attempted, the sword acts as a non-magical bastard sword.",
	requiredAlignment: ["LN"],
	requiredCondition: function (owner) {
		return owner.isNotNpc && !owner.isChaoticEvil && !owner.isNativeToPlane("Lower Planes") && !owner.hasClass("Abion Follower") && !owner.hasClass("Wanted Criminal") && owner.itemCount("The Scales of Justice") === 0;
	},
},

// Define the item's abilities when attuned to
MagicItemAddendum["the scales of justice"] = {
	type: "attunement",
	text: [
		"**Blind Justice:** You slowly go blind but gain blindsight to 30 feet.",
		"**Bond of Order:** Your alignment becomes permanently Lawful, though you remain good or neutral as you were previously. This does not change back if you become un-attuned to the sword.",
		"**The Guilty Blade:** Bad things will happen to you if you commit crimes and are deserving of Justice for it.",
		"**The Warden's Calling:** You gain a compulsion to right wrongs and to bring the guilty to justice for their crimes.",
	],
},

// Function to apply adjustments for a Warlock
function applyWarlockAdjustments(character) {
    if (!character) return;
    if (!character.items) return;

    const scalesOfJustice = character.items.find((item) => item.name === "The Scales of Justice" && item.equipped);
    if (!scalesOfJustice) return;

    if (scalesOfJustice.attuned && scalesOfJustice.customChoice === "Warlock with a Hexblade Patron and a Pact of the Blade") {
        // Raise Charisma to 13 (if currently less than 13)
        if (character.abilities && character.abilities.cha < 13) {
            character.abilities.cha = 13;
        }
        // Add +2 to Charisma (max of 24)
        if (character.abilities && character.abilities.cha < 24) {
            character.abilities.cha += 2;
            if (character.abilities.cha > 24) character.abilities.cha = 24;
        }
        // Automatically set the Scales of Justice as the Warlock's Pact weapon
        if (character.classes) {
            const warlockClass = character.classes.find((cls) => cls.class === "warlock");
            if (warlockClass) {
                const pactFeature = warlockClass.features.find((feature) => feature.name === "Pact of the Blade");
                if (pactFeature) {
                    pactFeature.data.choices = "The Scales of Justice";
                }
            }
        }
        // Add a note about the Sword's halo and touch spell ability
        if (character.notes) {
            character.notes += "\n\nScales of Justice Warlock Abilities:\n" +
                "- The Sword can project a halo of bright light for 10 feet and dim light for an additional 10 feet. The halo can be activated or deactivated as a bonus action. While illuminated by the halo, you have advantage on Charisma rolls for persuasion or intimidation. Undead and Fiends have disadvantage on attacks against you when illuminated.\n" +
                "- You can cast 'touch' spells through the sword as part of an attack action. Roll to hit with the sword for the touch to succeed. Sword damage still applies.";
        }
    }
},

// Function to apply adjustments for a Cleric
function applyClericAdjustments(character) {
    if (!character) return;
    if (!character.items) return;

    const scalesOfJustice = character.items.find((item) => item.name === "The Scales of Justice" && item.equipped);
    if (!scalesOfJustice) return;

    if (scalesOfJustice.attuned && scalesOfJustice.customChoice === "Cleric of Abadara in the Order Domain") {
        // Raise Wisdom to 13 (if currently less than 13)
        if (character.abilities && character.abilities.wis < 13) {
            character.abilities.wis = 13;
        }
        // Add +2 to Wisdom (max of 24)
        if (character.abilities && character.abilities.wis < 24) {
            character.abilities.wis += 2;
            if (character.abilities.wis > 24) character.abilities.wis = 24;
        }
        // Add a note about the sword acting as a Mace of Disruption
        if (character.notes) {
            character.notes += "\n\nScales of Justice Cleric Abilities:\n" +
                "- The sword acts as a Mace of Disruption.";
        }
    }
},

// Function to apply adjustments for a Paladin
function applyPaladinAdjustments(character) {
    if (!character) return;
    if (!character.items) return;

    const scalesOfJustice = character.items.find((item) => item.name === "The Scales of Justice" && item.equipped);
    if (!scalesOfJustice) return;

    if (scalesOfJustice.attuned && scalesOfJustice.customChoice === "Paladin with an Oath of Vengeance") {
        // Raise Strength and/or Charisma to 13 (if currently less than 13)
        if (character.abilities) {
            if (character.abilities.str < 13) {
                character.abilities.str = 13;
            }
            if (character.abilities.cha < 13) {
                character.abilities.cha = 13;
            }
        }
        // Add +2 to Strength (max of 24)
        if (character.abilities && character.abilities.str < 24) {
            character.abilities.str += 2;
            if (character.abilities.str > 24) character.abilities.str = 24;
        }
        // Add a note about the sword becoming
    }
},
if (ClassList.warlock && ClassList.warlock.levels >= 1) {
    // Check if the character is a Warlock
    var trueStrikeSpell = {
      name: "True Strike",
      source: ["PHB", 284], // Replace with the source and page number
      level: 0, // Cantrip
      school: "Divination", // Replace with the appropriate school
      time: "1 bonus action", // Set casting time to bonus action
      range: "30 feet",
      components: "S",
      duration: "Concentration, up to 1 round",
      description: "You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target's defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn't ended."
    };
  
    // Add "True Strike" to the character's spells
    if (!SpellsList["true strike"]) {
      SpellsList["true strike"] = trueStrikeSpell;
    }
  },
}  