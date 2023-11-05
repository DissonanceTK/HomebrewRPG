var iFileName = "The Scales of Justice.js";
RequiredSheetVersion(13);

MagicItemsList["scales of justice"] = {
    name: "The Scales of Justice",
    source: ["HB", 0],
    type: "weapon (bastard sword)",
    rarity: "artifact",
    attunement: true,
    description: "This unpolished flat bastard sword is associated with Abadara. It cannot be stained, dulled, or chipped, and the grip remains dry under any conditions.",
    descriptionLong: "The Scales of Justice are a testament to Abadara's power, designed to maintain order and exact justice. The bearer gains proficiency with the sword, immunity to charm, and can mark a target for justice, dealing extra psychic damage. However, attuning to it comes with a covenant to uphold the law.",
    descriptionFull: "The Scales of Justice is a bastard sword that... [Long Description Here]",
    weaponsAdd: ["The Scales of Justice"],
    weaponOptions: {
        regExpSearch: /^(?=.*scales)(?=.*justice).*$/i,
        name: "The Scales of Justice",
        source: ["HB", 0],
        ability: 1,
        type: "Martial",
        damage : [1, 8, "slashing"],
        range : "Melee",
        weight: 6,
        description: "Versatile (1d10); +3 weapon; Immune to water, staining, dulling, chipping",
        modifiers: [3, ""], // +3 to attack rolls
        abilitytodamage: true
    },
    attunement: true,
    attunementDescription: "Blind Justice, Bond of Order, The Guilty Blade, The Warden's Calling",
    chooseGear: {
        type: "weapon",
        prefixOrSuffix: "suffix",
        description: "The Scales of Justice",
        weaponDescription: "A bastard sword that becomes a +3 magic weapon and gains other magical properties when attuned."
    },
    additionalSpells: {
        class: "any",
        level: [0, 9],
        known: {
            cantrips : ["true strike"]
        }
    },
    // Define the unique properties based on class when attuned
    usages: 1,
    recovery: "long rest",
    additionalChoices: ["Avatar of Justice"],
    avatarOfJustice: {
        description: "Transform into an Avatar of Justice, respec your character to Cleric (Order), Warlock (Hexblade), or Paladin (Vengeance). Gain additional class-based powers.",
        // Define the class-specific benefits here
        // Cleric: [...]
        // Warlock: [...]
        // Paladin: [...]
    },
    action: ["bonus action", " (Halo of Light/True Strike)"], // Actions related to the item's abilities
    // Include the function to apply attunement checks and effects
    attuneFunc: function (character) {
        // Check for alignment and other attunement requirements
        // Apply changes based on the class if character respecs
    },
    // Define any other functions needed for custom behavior
    // e.g., function to handle marking a target for justice
};
