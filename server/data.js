const pokemon = [
    {pokename: 'Bulbasaur',
    address: 'bulbasaur',
    preview: "Bulbasaur (Japanese: フシギダネ Fushigidane) is a dual-type Grass/Poison Pokémon introduced in Generation I. It evolves into Ivysaur starting at level 16, which evolves into Venusaur starting at level 32. Along with Charmander and Squirtle, Bulbasaur is one of three starter Pokémon of Kanto available at the beginning of Pokémon Red, Green, Blue, FireRed, and LeafGreen.",
    img_url: 'https://archives.bulbagarden.net/media/upload/thumb/2/21/001Bulbasaur.png/500px-001Bulbasaur.png',
    pokedexnumber: '#001',
    type: 'Grass Poison',
    abilities: 'Overgrow',
    evolution: 'Ivysaur Venusaur',
    biology: "Bulbasaur is a small, quadrupedal amphibian Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within. As mentioned in the anime, starter Pokémon are raised by Breeders to be distributed to new Trainers. Having been domesticated from birth, Bulbasaur is regarded as both a rare and well-behaved Pokémon. It is known to be extremely loyal, even after long-term abandonment. Bulbasaur in the anime have demonstrated a nurturing instinct towards younger, weaker Pokémon, one individual even using its vines to pick up a crying Pokémon, gently rocking it back and forth through the air while singing a 'Bulba-by'. It is found in grasslands and forests throughout the Kanto region. However, due to Bulbasaur's status as starter Pokémon, it is hard to come by in the wild and generally found under the ownership of a Trainer. It has been observed that a Bulbasaur's bulb will flash blue when it is ready to evolve. If it does not want to evolve, it struggles to resist the transformation. Many Bulbasaur gather every year in a hidden garden in Kanto to evolve into Ivysaur in a ceremony led by a Venusaur."},
    {pokename: "Charmander",
        address: "charmander",
        preview: "Charmander (Japanese: ヒトカゲ Hitokage) is a Fire-type Pokémon introduced in Generation I. It evolves into Charmeleon starting at level 16, which evolves into Charizard starting at level 36. Along with Bulbasaur and Squirtle, Charmander is one of three starter Pokémon of Kanto available at the beginning of Pokémon Red, Green, Blue, FireRed, and LeafGreen.",
        img_url:"https://archives.bulbagarden.net/media/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png",
        pokedexnumber:"#004",
        type:"Fire",
        abilities:"Blaze",
        evolution:"Charmeleon Charizard",
        biology:"Charmander is a bipedal, reptilian Pokémon with a primarily orange body and blue eyes. Its underside from the chest down and the soles of its feet are cream-colored. It has two small fangs visible in its upper jaw and two smaller fangs in its lower jaw. A fire burns at the tip of this Pokémon's slender tail and has blazed there since Charmander's birth. The flame can be used as an indication of Charmander's health and mood, burning brightly when the Pokémon is strong, weakly when it is exhausted, wavering when it is happy, and blazing when it is enraged. It is said that Charmander dies if its flame goes out. However, if the Pokémon is healthy, the flame will continue to burn even if it gets a bit wet and is said to steam in the rain.Charmander can be found in hot, mountainous areas. However, it is found far more often in the ownership of Trainers. As shown in Pokémon Snap, Charmander exhibits pack behavior, calling others of its species if it finds food."},

        {pokename:"Squirtle",
        address:"squirtle",
        preview:"Squirtle (Japanese: ゼニガメ Zenigame) is a Water-type Pokémon introduced in Generation I. It evolves into Wartortle starting at level 16, which evolves into Blastoise starting at level 36. Along with Bulbasaur and Charmander, Squirtle is one of three starter Pokémon of Kanto available at the beginning of Pokémon Red, Green, Blue, FireRed, and LeafGreen.",
        img_url:"https://archives.bulbagarden.net/media/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png",
        pokedexnumber:"#007",
        type:"Water",
        abilities:"Torrent",
        evolution:"Wartortle Blastoise",
        biology:"Squirtle is a small reptilian Pokémon that resembles a light-blue turtle. While it typically walks on its two short legs, it has been shown to run on all fours in Super Smash Bros. Brawl. It has large, purplish or reddish eyes and a slightly hooked upper lip. Each of its hands and feet have three pointed digits. The end of its long tail curls inward. Its body is encased by a tough shell that forms and hardens after birth. This shell is brown on the top, pale yellow on the bottom, and has a thick white ridge between the two halves. Squirtle's shell is a useful tool. It can withdraw into the shell for protection or to sleep. The grooved, rounded shape helps to reduce water resistance, allowing the Pokémon to swim at high speeds. Squirtle can spray foamy water from its mouth with great accuracy. Squirtle is scarce in the wild, although it can be found around small ponds and lakes. The anime has shown that it can be found living on secluded islands with other members of its evolutionary line. Sharpedo is a natural predator of Squirtle. In Generation II, Skull Bash was its signature move."},

        {pokename:"Cyndaquil",
        address:"cyndaquil",
        preview:"Cyndaquil (Japanese: ヒノアラシ Hinoarashi) is a Fire-type Pokémon introduced in Generation II. It evolves into Quilava starting at level 14 (Generations II to VII, Brilliant Diamond and Shining Pearl) or level 17 (Legends: Arceus), which evolves into Typhlosion starting at level 36. Along with Chikorita and Totodile, Cyndaquil is one of the three starter Pokémon of Johto available at the beginning of Pokémon Gold, Silver, Crystal, HeartGold, and SoulSilver. It also acts as one of the three starters for the Hisui region in Legends: Arceus alongside Rowlet and Oshawott.",
        img_url:"https://archives.bulbagarden.net/media/upload/thumb/9/9b/155Cyndaquil.png/250px-155Cyndaquil.png",
        pokedexnumber:"#155",
        type:"Fire",
        abilities:"Blaze",
        evolution:"Quilava Typhlosion",
        biology:"Cyndaquil is a small, bipedal Pokémon with bluish fur on top of its body and cream-colored fur on its underside. Its eyes are usually seen closed, and it has a long, thin snout. Its arms are short, but its legs are slightly more developed and have a single nail on each foot. On its back are four red circles that can erupt into flames. When the flames are burning, its back seems to be covered in spines. Cyndaquil is capable of defending itself using these flames, and the fire grows more powerful as it becomes angry or defensive. However, if it is tired, the flames are not able to burn properly. It is usually timid by nature and often curls into a ball when intimidated. Though rare in the wild, it can be found living on grasslands."},

    
    {
    pokename:"Chikorita",
    address:"chikorita",
    preview:"Chikorita (Japanese: チコリータ Chicorita) is a Grass-type Pokémon introduced in Generation II. It evolves into Bayleef starting at level 16, which evolves into Meganium starting at level 32. Along with Cyndaquil and Totodile, Chikorita is one of the three starter Pokémon of Johto available at the beginning of Pokémon Gold, Silver, Crystal, HeartGold, and SoulSilver",
    img_url:"https://archives.bulbagarden.net/media/upload/thumb/b/bf/152Chikorita.png/500px-152Chikorita.png",
    pokedexnumber:"#152",
    type:"Grass",
    abilities:"Overgrow",
    evolution:"Bayleef Meganium",
    biology:"Chikorita is a small, pale-green, quadrupedal Pokémon with dark-green buds around its neck. Its head is large in proportion to the rest of its body, and it has big red eyes. Chikorita has four short legs with a single nailed toe on each and a stubby tail. On top of its head is a large, green leaf that is usually longer than its body. A soothing aroma wafts from the leaf, which can calm battling Pokémon. The leaf is also used to sense temperature and humidity. Chikorita actively seeks out and enjoys the sun's warmth.Chikorita can be found in grasslands. However, due to its status as a starter Pokémon, a wild Chikorita is hard to come by and it is generally found under the ownership of Trainers. Chikorita has a docile nature."
    },

    {pokename:"Totodile",
    address:"totodile",
    preview:"Totodile (Japanese: ワニノコ Waninoko) is a Water-type Pokémon introduced in Generation II. It evolves into Croconaw starting at level 18, which evolves into Feraligatr starting at level 30. Along with Chikorita and Cyndaquil, Totodile is one of the three starter Pokémon of Johto available at the beginning of Pokémon Gold, Silver, Crystal, HeartGold, and SoulSilver.",
    img_url:"https://archives.bulbagarden.net/media/upload/thumb/d/df/158Totodile.png/500px-158Totodile.png",
    pokedexnumber:"#158",
    type:"Water",
    abilities:"Torrent",
    evolution:"Croconaw Feraligatr",
    biology:"Totodile is a bipedal, crocodilian Pokémon with well-developed jaws. It has red eyes with ridges above them, black markings around its eyes, and several sharp teeth. On its chest is a yellow, V-shaped marking that extends to its arms; there is a thin line through the center of the marking. Totodile has five fingers and three toes. Down its back is a row of three red spines with a small, red ridge on either side. The tip of its tail has a single red spine as well. Totodile tends to be playful by nature and has a habit of biting anything it sees, including its Trainer. However, its jaws are capable of crushing anything, so it sometimes causes serious injuries. Totodile is scarce in the wild, though it can be found around bodies of water like rivers, ponds, and lakes."
    },


    {pokename:"Treecko",
    address:"treecko",
    preview:"Treecko (Japanese: キモリ Kimori) is a Grass-type Pokémon introduced in Generation III. It evolves into Grovyle starting at level 16, which evolves into Sceptile starting at level 36. Along with Torchic and Mudkip, Treecko is one of three starter Pokémon of Hoenn available at the beginning of Pokémon Ruby, Sapphire, Emerald, Omega Ruby, and Alpha Sapphire.",
    img_url:"https://archives.bulbagarden.net/media/upload/thumb/2/2c/252Treecko.png/500px-252Treecko.png",
    pokedexnumber:"#252",
    type:"Grass",
    abilities:"Overgrow",
    evolution:"Grovyle Sceptile",
    biology:"Treecko is a small, green, bipedal reptilian Pokémon. It has yellow eyes with long, narrow pupils. Treecko's hands and feet each have three digits covered with tiny spikes. These spikes allow it to scale vertical walls with ease. Its stomach and throat are red. It also has a line across its stomach resembling a pouch. Treecko has a large, dark green tail with two separate lobes that it uses to sense humidity. This ability allows it to predict the next day's weather. Treecko is rarely found in the wild and is more common in captivity. However, when in the wild, Treecko lives inside overgrown forests. It makes its home in tall trees and will attack anyone that comes near its nest. Because of its territorial nature, it is known to be the protector of the forest's trees. Treecko is known for its calm and collected personality. It will never panic under any circumstances, even when faced with a bigger foe."
    },

    {pokename:"Torchic",
    address:"torchic",
    preview:"Torchic (Japanese: アチャモ Achamo) is a Fire-type Pokémon introduced in Generation III. It evolves into Combusken starting at level 16, which evolves into Blaziken starting at level 36. Along with Treecko and Mudkip, Torchic is one of three starter Pokémon of Hoenn available at the beginning of Pokémon Ruby, Sapphire, Emerald, Omega Ruby, and Alpha Sapphire.",
    img_url:"https://archives.bulbagarden.net/media/upload/thumb/9/91/255Torchic.png/500px-255Torchic.png",
    pokedexnumber:"#255",
    type:"Fire",
    abilities:"Blaze",
    evolution:"Combusken Blaziken",
    biology:"Torchic is a small, chick Pokémon with stubby, downy, yellow wings. Its body is covered with orange feathers. There is an orange and yellow crest on its head that resembles a flame. Its two thin legs and short beak are a light brownish yellow, and the feet have three toes in front and one in the back. A male Torchic will have a small black speck on its rear that is not present in females.Somewhere in its belly, this Pokémon has a place where it keeps a flame. This internal flame causes Torchic to feel warm if hugged. When attacked, it will shoot fireballs of 1,800 °F (1,000 °C) at its foes, leaving them scorched black. It dislikes darkness, as it cannot see its surroundings. Torchic will follow its Trainer with unsteady steps. While Torchic is rarely found in the wild, it is known to inhabit grasslands."
    },

    {pokename:"Mudkip",
    address:"mudkip",
    preview:"Mudkip (Japanese: ミズゴロウ Mizugorou) is a Water-type Pokémon introduced in Generation III. It evolves into Marshtomp starting at level 16, which evolves into Swampert starting at level 36. Along with Treecko and Torchic, Mudkip is one of three starter Pokémon of Hoenn available at the beginning of Pokémon Ruby, Sapphire, Emerald, Omega Ruby, and Alpha Sapphire.",
    img_url:"https://archives.bulbagarden.net/media/upload/thumb/6/60/258Mudkip.png/500px-258Mudkip.png",
    pokedexnumber:"#258",
    type:"Water",
    abilities:"Torrent",
    evolution:"Marshtomp Swampert",
    biology:"Mudkip is a small, amphibious, quadrupedal Pokémon. It has a blue body with a light-blue underside. Mudkip has a large head with a blue fin on top and a light-blue tail fin. It has black, beady eyes and orange, star-shaped gills on its cheeks. By using the fin on its head, Mudkip can detect changes in air and water currents as well as bodies of water. Its fin can also point in a certain direction, as seen in the anime. Mudkip is capable of moving or crushing boulders larger than itself. Its large tail fin provides powerful acceleration to propel it through the water.According to its Pokémon Ranger browser entry, Mudkip is a very docile Pokémon. Mudkip is more commonly found in captivity, though it can be found in swamps and other wetlands. In the wild, it sleeps by burying itself in the soil at the water's edge."
    },

    {pokename:"Mew",
    address:"mew",
    preview:"Mew (Japanese: ミュウ Mew) is a Psychic-type Mythical Pokémon introduced in Generation I. It is not known to evolve into or from any other Pokémon. Mew is notable for its unique ability to learn every Technical Machine, Technical Record, Hidden Machine, and Move Tutor move (except those exclusive to a particular Pokémon or group of Pokémon, such as Draco Meteor and Secret Sword). It is a member of the Mew duo along with Mewtwo.",
    img_url:"https://archives.bulbagarden.net/media/upload/thumb/b/b1/151Mew.png/500px-151Mew.png",
    pokedexnumber:"#151",
    type:"Psychic",
    abilities:"Synchronize",
    evolution:"None",
    biology:"Mew is a pink, bipedal Pokémon with mammalian features. It has a rounded, wide snout; triangular ears; and large, blue eyes. It has short arms with three-fingered paws and large hind paws with oval markings on the soles. Its tail is long and thin with an ovoid tip. Its fur is so fine and thin, it can only be seen under a microscope. Mew is said to have the DNA of every single Pokémon contained within its body, allowing Mew to learn and use any attack. As demonstrated by its behavior in the first and eighth Pokémon movies, it shows signs of intelligence, curiosity, shyness, playfulness, and even selflessness. Mew is incredibly adaptable, able to travel freely in the air or underwater. As seen in Pokémon Snap and the Super Smash Bros. series, it can create a green, yellow, or pink orb of energy around itself for protection, although only the pink orb is seen in the latter. According to the radio drama, The Birth of Mewtwo, Mew was discovered by Jessie's mother, Miyamoto, who registered its cry in Guayana Forest 20 years before the events of Generation I. It was worshiped for its protection by indigenous people who created a folk song in its honor and believed it appeared once a year with the rising sun. It wasn't rediscovered until 18 years after Miyamoto met Mew by sunrise on the peak of the highest mountain in a South American mountain range and fell. Reports found in Cinnabar Island's Pokémon Mansion note scientific expeditions that have sighted Mew in Guyana, South America, the place where it was first discovered. Since Mew can make itself invisible at will, very few people have knowingly seen it, leading some scientists to declare it extinct and most to assume it to be a mirage. It will only show itself to a person who is pure of heart and has a strong desire to see it for themselves."
    }
]


module.exports = pokemon
