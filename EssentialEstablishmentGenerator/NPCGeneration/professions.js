if (!setup.townData) { setup.townData = {} }
setup.townData.professions = {
  barbarian: {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'a warrior who gets lost in the craze of battle.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  bard: {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'uses their artistic talents to induce magical effects.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  cleric: {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'has devoted their entire being to the will of their god, thus gaining magical powers.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  druid: {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'a mage attuned to the magical forces of nature, able to shapeshift, call on the elements, communicate with flora and fauna, etc.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  fighter: {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'a common warrior.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  monk: {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'a warrior of a holy order.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll (town, npc) { return 50 + dice(8, 6) }
  },
  rogue: {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: '.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  ranger: {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'wanders or ranges over a particular area or domain.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  paladin: {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'a holy knight and divine spellcaster crusading in the name of their god.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  sorcerer: {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'magic user who derives their magical abilities innately rather than through study.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  warlock: {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'a mage who has gained their abilities by forming a pact with an otherworldly being.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  wizard: {
    sv: 6500,
    type: 'dndClass',
    sector: 'adventuring',
    description: 'derives their magical abilities through study.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  actor: {
    sv: 2500,
    type: 'profession',
    sector: 'arts',
    description: 'impersonates characters, typically on stage in a theatrical production.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  advocate: {
    sv: 3250,
    type: 'profession',
    sector: 'government and law',
    description: 'practices or studies law, typically an attorney or a counselor.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  advisor: {
    sv: 780,
    type: 'profession',
    sector: 'government and law',
    description: 'advises some sort of government official on a specific area of governing.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'animal handler': {
    sv: 250,
    type: 'labourer',
    sector: 'agriculture',
    description: 'works with different animals for a variety of tasks, typically livestock.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  apothecarist: {
    sv: 450,
    type: 'business',
    sector: 'science',
    description: 'prepares and sells medicines, drugs, and potions.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  architect: {
    sv: 550,
    type: 'profession',
    sector: 'construction',
    description: 'designs buildings or landscapes and in many cases supervises their construction.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  archivist: {
    sv: 2450,
    type: 'profession',
    sector: 'science',
    description: 'maintains and is in charge of some sort archives.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 76 }
  },
  armorer: {
    sv: 750,
    type: 'business',
    sector: 'craftsmanship',
    description: 'specializes in making and repairing armor.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return dice(9, 10) }
  },
  astrologer: {
    sv: 950,
    type: 'profession',
    sector: 'science',
    description: 'uses astrology to tell others about their character or to predict their future.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 89 }
  },
  baker: {
    sv: 800,
    type: 'business',
    sector: 'hospitality',
    description: 'makes all sorts of baked goods.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  banker: {
    sv: 2250,
    type: 'business',
    sector: 'business',
    description: 'an officer or owner of a bank or group of banks.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 89 }
  },
  barber: {
    sv: 350,
    type: 'business',
    sector: 'hospitality',
    description: 'cuts hair and shaves or trims beards.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(4, 6) }
  },
  bartender: {
    sv: 450,
    type: 'business',
    sector: 'hospitality',
    description: 'pours drinks at taverns and other establishments.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return dice(3, 30) }
  },
  barmaid: {
    sv: 450,
    type: 'business',
    sector: 'hospitality',
    description: 'serves drinks and food in a bar as well as engaging with customers.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return dice(3, 15) }
  },
  blacksmith: {
    sv: 750,
    type: 'business',
    sector: 'craftsmanship',
    description: 'forges and repairs things in metal, including weapons, armor, utensils, etc.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return dice(2, 50) }
  },
  "blacksmith's assistant": {
    sv: 800,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'serves under a blacksmith learning the trade of forging.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return dice(2, 25) }
  },
  bookseller: {
    sv: 6300,
    type: 'business',
    sector: 'business',
    description: 'sells books from a shop or cart.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 65 }
  },
  brewer: {
    sv: 550,
    type: 'business',
    sector: 'craftsmanship',
    description: 'brews ale.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  brickmason: {
    sv: 650,
    type: 'labourer',
    sector: 'construction',
    description: 'builds with mineral products such as stones, bricks, cinder blocks, or tiles, usually with the use of mortar as a bonding agent.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 10 + dice(4, 6) }
  },
  pimp: {
    sv: 850,
    type: 'business',
    sector: 'business',
    description: 'controls prostitutes and arranges clients for them, taking part of their earnings in return.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  buccaneer: {
    sv: 1350,
    type: '',
    sector: 'adventure',
    description: 'a kind of privateer or free sailor.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 55 }
  },
  butcher: {
    sv: 1150,
    type: 'business',
    sector: 'hospitality',
    description: 'cuts up and sells meat.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  captain: {
    sv: 550,
    type: 'profession',
    sector: 'military',
    description: 'an army officer of high rank in charge of commanding squadrons of soldiers.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  caravanner: {
    sv: 1450,
    type: 'labourer',
    sector: 'transportation',
    description: 'travels or lives in a caravan.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  carpenter: {
    sv: 550,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes and repairs wooden objects and structures.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  cartographer: {
    sv: 1950,
    type: 'profession',
    sector: 'science',
    description: 'a scholar and illustrator of maps.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 89 }
  },
  chandler: {
    sv: 700,
    type: 'business',
    sector: 'business',
    description: 'deals in provisions and supplies.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  chef: {
    sv: 1850,
    type: 'labourer',
    sector: 'hospitality',
    description: 'a professional cook trained in the culinary arts.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 40 }
  },
  clergyman: {
    sv: 40,
    type: 'profession',
    sector: 'religion',
    description: 'a member of the clergy attached to a private chapel, institution, ship, branch of the armed forces, etc.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'clock maker': {
    sv: 4550,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs clocks.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  cobbler: {
    sv: 1550,
    type: '',
    sector: 'craftsmanship',
    description: 'makes and repairs footwear.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 45 }
  },
  cook: {
    sv: 450,
    type: 'labourer',
    sector: 'hospitality',
    description: 'prepares food for eating.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  cooper: {
    sv: 700,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'makes and repairs casks and barrels.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  courtesan: {
    sv: 1950,
    type: '',
    sector: 'hospitality',
    description: 'a prostitute with wealthy and noble clients.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 89 }
  },
  courtier: {
    sv: 1950,
    type: 'profession',
    sector: 'government and law',
    description: 'attends court as a companion or adviser to the king or queen.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  cowherd: {
    sv: 250,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'supervises grazing cattle.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  dancer: {
    sv: 2250,
    type: 'profession',
    sector: 'arts',
    description: 'moves their body rhythmically with or without musical accompaniment.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  diplomat: {
    sv: 3450,
    type: 'profession',
    sector: 'government and law',
    description: 'an official representing a country abroad.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  diver: {
    sv: 3250,
    type: 'labourer',
    sector: 'agriculture',
    description: 'dives down deep to collect precious things from the sea floors.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  farmer: {
    sv: 150,
    type: 'labourer',
    sector: 'agriculture',
    description: 'operates a farm or cultivates land.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  fisherman: {
    sv: 170,
    type: 'labourer',
    sector: 'agriculture',
    description: 'catches fish.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  fishmonger: {
    sv: 250,
    type: 'business',
    sector: 'business',
    description: 'sells fish.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  furrier: {
    sv: 250,
    type: 'business',
    sector: 'craftsmanship',
    description: 'prepares furs for adornment.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  gardener: {
    sv: 550,
    type: 'labourer',
    sector: 'agriculture',
    description: 'tends and cultivates a garden.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  general: {
    sv: 2250,
    type: 'profession',
    sector: 'military',
    description: 'the chief commander of an army.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  gladiator: {
    sv: 3250,
    type: '',
    sector: 'arts',
    description: 'fights against other people, wild animals, or monsters in an arena.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 89 }
  },
  glovemaker: {
    sv: 2400,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes and repairs gloves.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  goldsmith: {
    sv: 6550,
    type: 'business',
    sector: 'craftsmanship',
    description: 'a smith who specializes in precious metals.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  grocer: {
    sv: 450,
    type: 'business',
    sector: 'business',
    description: 'a food merchant.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 27 }
  },
  guardsman: {
    sv: 150,
    type: 'profession',
    sector: 'military',
    description: 'a person who keeps watch, especially a soldier or other person formally assigned to protect a person or to control access to a place.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  guildmaster: {
    sv: 4150,
    type: 'profession',
    sector: 'business',
    description: 'leads an economically independent producer (a “guild,” an association of craftsmen or merchants that often holds considerable bureaucratic power).',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  hatter: {
    sv: 950,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes and repairs headwear.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  healer: {
    sv: 950,
    type: 'profession',
    sector: 'magic',
    description: 'able to cure a disease or injury using magic.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  herald: {
    sv: 550,
    type: 'a messenger who carries important news.',
    sector: 'craftsmanship',
    description: '.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 48 }
  },
  herbalist: {
    sv: 850,
    type: 'business',
    sector: 'science',
    description: 'practices healing by the use of herbs.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 60 + dice(4, 6) }
  },
  hermit: {
    sv: 950,
    type: 'profession',
    sector: 'outcast',
    description: 'lives in solitude, typically as a religious or spiritual discipline.',
    dailyWage: 20,
    socialClass: 'paupery',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  historian: {
    sv: 4150,
    type: 'profession',
    sector: 'science',
    description: 'an expert in or student of history, especially that of a particular period, geographical region, or social phenomenon.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  hunter: {
    sv: 250,
    type: 'labourer',
    sector: 'self employed',
    description: 'hunts game or other wild animals.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  'ice seller': {
    sv: 1950,
    type: 'labourer',
    sector: 'agriculture',
    description: 'collects and sells ice.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 24 }
  },
  innkeeper: {
    sv: 750,
    type: 'business',
    sector: 'business',
    description: 'owns and runs an inn.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  inventor: {
    sv: 2250,
    type: 'profession',
    sector: 'business',
    description: 'invented a particular process or device, or invents things as an occupation.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  jailer: {
    sv: 1250,
    type: 'labourer',
    sector: 'military',
    description: 'supervises a jail and the prisoners in it.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  jester: {
    sv: 2250,
    type: 'profession',
    sector: 'arts',
    description: 'professional joker.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 42 }
  },
  jeweler: {
    sv: 400,
    type: 'business',
    sector: 'craftsmanship',
    description: 'designs, makes, and repairs necklaces, bracelets, rings, etc., often containing jewels.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  judge: {
    sv: 850,
    type: 'profession',
    sector: 'government and law',
    description: 'decides cases in a court of law.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  knight: {
    sv: 1150,
    type: 'profession',
    sector: 'government and law',
    description: 'serves his or her sovereign after being bestowed a rank of royal honor.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  lady: {
    sv: 1550,
    type: 'profession',
    sector: 'government and law',
    description: 'some sort of noble.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  leatherworker: {
    sv: 750,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes items from leather such as pouches, scabbards, straps, etc.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  librarian: {
    sv: 3150,
    type: 'profession',
    sector: 'science',
    description: 'administers or assists in a library.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  linguist: {
    sv: 5150,
    type: 'profession',
    sector: 'science',
    description: 'studies the essence of communication, including the units, nature, structure, and modification of language.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  locksmith: {
    sv: 1900,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes and repairs locks.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  lord: {
    sv: 1150,
    type: 'profession',
    sector: 'government and law',
    description: 'some sort of noble.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  lumberjack: {
    sv: 350,
    type: 'labourer',
    sector: 'agriculture',
    description: 'fells trees, cuts them into logs, and transports them to a sawmill.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  'maid-servant': {
    sv: 250,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'a domestic servant of a household.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  masseur: {
    sv: 1550,
    type: 'profession',
    sector: 'business',
    description: 'performs massages.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  merchant: {
    sv: 650,
    type: 'business',
    sector: 'business',
    description: 'sells and trades goods.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  messenger: {
    sv: 1250,
    type: 'labourer',
    sector: 'communications',
    description: 'carries messages between recipients.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  midwife: {
    sv: 650,
    type: 'labourer',
    sector: 'science',
    description: 'assists in childbirth and the care of women giving birth.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  miller: {
    sv: 650,
    type: 'business',
    sector: 'agriculture',
    description: 'owns or works in a grain mill.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  miner: {
    sv: 550,
    type: 'labourer',
    sector: 'agriculture',
    description: 'works underground in mines in order to obtain minerals such as coal, diamonds, or gold.',
    dailyWage: 20,
    socialClass: 'paupery',
    socialClassRoll () { return 40 }
  },
  minister: {
    sv: 950,
    type: 'profession',
    sector: 'government and law',
    description: 'assists with the administration of business.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  minstrel: {
    sv: 1450,
    type: 'profession',
    sector: 'arts',
    description: 'recites lyric or heroic poetry for nobility.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  friar: {
    sv: 1450,
    type: 'profession',
    sector: 'religion',
    description: 'a member of a religious community of men, usually a cloistered one, potentially living under vows of poverty, chastity, and obedience.',
    dailyWage: 20,
    socialClass: 'paupery',
    socialClassRoll () { return 5 + dice(8, 6) }
  },
  mortician: {
    sv: 650,
    type: 'profession',
    sector: 'science',
    description: 'prepares dead bodies for burial or cremation and makes arrangements for funerals.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  necromancer: {
    sv: 6150,
    type: 'profession',
    sector: 'magic',
    description: 'communicates with and conjures the spirits of the dead.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  noble: {
    sv: 3150,
    type: 'profession',
    sector: 'government and law',
    description: 'a person belonging to a class with high social or political status.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  nun: {
    sv: 2150,
    type: 'profession',
    sector: 'religion',
    description: 'a member of a religious community of women, usually a cloistered one, potentially living under vows of poverty, chastity, and obedience.',
    dailyWage: 20,
    socialClass: 'paupery',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  nurse: {
    sv: 1150,
    type: 'profession',
    sector: 'science',
    description: 'cares for the sick or infirm, especially in a hospital.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  painter: {
    sv: 1500,
    type: 'business',
    sector: 'arts',
    description: 'paints pictures using a variety of different substances.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  patissier: {
    sv: 1500,
    type: 'business',
    sector: 'hospitality',
    description: 'maker or seller of pastries and cakes.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  perfumer: {
    sv: 3150,
    type: 'business',
    sector: 'craftsmanship',
    description: 'expert on creating perfume compositions.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  philosopher: {
    sv: 7150,
    type: 'profession',
    sector: 'science',
    description: 'a scholar of the fundamental nature of knowledge, reality, and existence.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  physician: {
    sv: 4150,
    type: 'profession',
    sector: 'science',
    description: 'a qualified practitioner of medicine.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  pilgrim: {
    sv: 5150,
    type: 'labourer',
    sector: 'outcast',
    description: 'journeys to some sacred place as an act of religious devotion, occasionally to settle there.',
    dailyWage: 20,
    socialClass: 'paupery',
    socialClassRoll () { return 40 }
  },
  politician: {
    sv: 4000,
    type: 'profession',
    sector: 'government and law',
    description: ' holding or seeking office in government.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  potter: {
    sv: 1150,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes pots, bowls, plates, etc., out of clay.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  priest: {
    sv: 750,
    type: 'profession',
    sector: 'religion',
    description: 'has the authority to perform certain rites and administer certain sacraments.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  privateer: {
    sv: 1150,
    type: 'labourer',
    sector: 'military',
    description: 'engages in maritime warfare under a commission of war.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 40 }
  },
  professor: {
    sv: 3150,
    type: 'profession',
    sector: 'science',
    description: 'a teacher of the highest rank in a college or university.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  roofer: {
    sv: 1800,
    type: 'labourer',
    sector: 'construction',
    description: 'builds and repairs roofs.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  ropemaker: {
    sv: 1850,
    type: 'business',
    sector: 'craftsmanship',
    description: 'braids rope.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  rugmaker: {
    sv: 1850,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes and repairs rugs by braiding, hooking, weaving, etc.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  saddler: {
    sv: 1000,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes and repairs saddlery.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  sailor: {
    sv: 150,
    type: 'labourer',
    sector: 'transportation',
    description: 'works as a member of the crew of a commercial or naval ship or boat.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  sculptor: {
    sv: 250,
    type: 'business',
    sector: 'arts',
    description: 'crafts art by carving or casting blocks of marble, stones, or other hardened minerals.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  scavenger: {
    sv: 350,
    type: 'labourer',
    sector: 'unemployed',
    description: 'searches for and collects discarded items.',
    dailyWage: 20,
    socialClass: 'paupery',
    socialClassRoll () { return 22 }
  },
  scholar: {
    sv: 2250,
    type: 'profession',
    sector: 'science',
    description: 'a specialist in a particular branch of study who pursues the acquisition of knowledge.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  seamstress: {
    sv: 450,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'makes, alters, repairs, as well as occasionally designing garments.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  seer: {
    sv: 350,
    type: 'profession',
    sector: 'magic',
    description: 'able to see what the future holds through supernatural insight.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  servant: {
    sv: 350,
    type: 'labourer',
    sector: 'hospitality',
    description: 'performs duties for others, especially a person employed in a house or as a personal attendant.',
    dailyWage: 20,
    socialClass: 'paupery',
    socialClassRoll () { return 40 }
  },
  shaman: {
    sv: 750,
    type: 'profession',
    sector: 'magic',
    description: 'accesses and influences the world of good and evil spirits.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  shepherd: {
    sv: 150,
    type: 'labourer',
    sector: 'agriculture',
    description: 'herds, tends, and guards sheep.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  "ship's captain": {
    sv: 950,
    type: 'profession',
    sector: 'military',
    description: 'commands a ship.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  shoemaker: {
    sv: 150,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes shoes out of different materials.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  silversmith: {
    sv: 1250,
    type: 'business',
    sector: 'craftsmanship',
    description: 'a smith who specializes in precious metals.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  slave: {
    sv: 150,
    type: 'labourer',
    sector: 'outcast',
    description: 'a person who is the legal property of another and forced to obey them.',
    dailyWage: 20,
    socialClass: 'indentured servitude',
    socialClassRoll () { return 40 }
  },
  slaver: {
    sv: 650,
    type: 'business',
    sector: 'business',
    description: 'deals with or owns slaves.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  soldier: {
    sv: 1000,
    type: 'profession',
    sector: 'military',
    description: 'serves in an army.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'spice merchant': {
    sv: 1500,
    type: 'business',
    sector: 'business',
    description: 'sells different kinds of spices.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  squire: {
    sv: 950,
    type: 'profession',
    sector: 'military',
    description: 'acts as an attendant to a knight before attempting to become a knight themselves.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  stablehand: {
    sv: 550,
    type: 'labourer',
    sector: 'agriculture',
    description: 'works in a stable.',
    dailyWage: 20,
    socialClass: 'paupery',
    socialClassRoll () { return 40 }
  },
  stevedore: {
    sv: 550,
    type: 'labourer',
    sector: 'labour',
    description: 'loads and unloads cargo from ships.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  stonemason: {
    sv: 750,
    type: 'business',
    sector: 'construction',
    description: 'cuts and prepares stone for use in construction.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  steward: {
    sv: 950,
    type: 'profession',
    sector: 'government and law',
    description: 'supervises both the estate and household of his lord or lady while they are away.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'street seller': {
    sv: 550,
    type: 'business',
    sector: 'business',
    description: 'hocks goods on the street.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  'street sweeper': {
    sv: 450,
    type: 'labourer',
    sector: 'labour',
    description: 'cleans streets of a town.',
    dailyWage: 20,
    socialClass: 'paupery',
    socialClassRoll () { return 40 }
  },
  student: {
    sv: 3150,
    type: 'profession',
    sector: 'science',
    description: 'attends school or learns under other to enter and pursue a particular subject.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  surgeon: {
    sv: 4150,
    type: 'profession',
    sector: 'science',
    description: 'practices surgery.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  surveyor: {
    sv: 1150,
    type: 'profession',
    sector: 'business',
    description: 'establishes maps and boundaries for ownership or other purposes required by government or civil law.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  tailor: {
    sv: 250,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes, alters, repairs, as well as occasionally designing garments.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  tanner: {
    sv: 200,
    type: 'business',
    sector: 'craftsmanship',
    description: 'treats the skins and hides of animals to produce leather.',
    dailyWage: 20,
    socialClass: 'paupery',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  tavernkeeper: {
    sv: 450,
    type: 'business',
    sector: 'business',
    description: 'owns or runs a tavern.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  'tax collector': {
    sv: 1850,
    type: 'profession',
    sector: 'government and law',
    description: 'collects unpaid taxes from people, guilds, or businesses.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  teacher: {
    sv: 1450,
    type: 'profession',
    sector: 'science',
    description: 'instructs on a particular skill or subject.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  thatcher: {
    sv: 350,
    type: 'labourer',
    sector: 'construction',
    description: 'builds and repairs roofs.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  thief: {
    sv: 850,
    type: 'profession',
    sector: 'crime',
    description: 'steals peoples property, especially by stealth and without using force or violence.',
    dailyWage: 20,
    socialClass: 'paupery',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  torturer: {
    sv: 1850,
    type: 'profession',
    sector: 'military',
    description: 'inflicts severe pain on someone as a punishment or in order to force them to do or say something.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'town crier': {
    sv: 750,
    type: 'labourer',
    sector: 'communications',
    description: 'makes public announcements in the streets or marketplace.',
    dailyWage: 20,
    socialClass: 'paupery',
    socialClassRoll () { return 40 }
  },
  toymaker: {
    sv: 2500,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs toys.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  vendor: {
    sv: 1150,
    type: 'business',
    sector: 'business',
    description: 'deals items in the street.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  veterinarian: {
    sv: 1250,
    type: 'profession',
    sector: 'agriculture',
    description: 'treats diseased or injured animals.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  vintner: {
    sv: 850,
    type: 'profession',
    sector: 'agriculture',
    description: 'engages in winemaking, especially with monitoring and harvesting the grapes.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  weaver: {
    sv: 600,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'makes fabric by weaving fiber together.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  wetnurse: {
    sv: 350,
    type: 'labourer',
    sector: 'labour',
    description: "a woman employed to suckle another woman's child.",
    socialClass: 'peasantry',
    socialClassRoll () { return 40 }
  },
  woodcarver: {
    sv: 2450,
    type: 'business',
    sector: 'craftsmanship',
    description: 'fashions wood into various shapes.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  'wood seller': {
    sv: 2150,
    type: 'business',
    sector: 'business',
    description: 'sells wood, typically logs.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { return 40 + dice(4, 6) }
  },
  wrestler: {
    sv: 6150,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'performs in matches involving grappling and grappling-type techniques.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 40 }
  },
  writer: {
    sv: 7150,
    type: 'profession',
    sector: 'arts',
    description: 'commits his or her thoughts, ideas, etc., into written language.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { return 50 + dice(8, 6) }
  },
  'animal/Monster Handler': {
    sv: 5000,
    type: 'profession',
    sector: 'agriculture',
    description: 'responsible for the safe keeping, dietary care, and exercise of animals or monsters.',
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  arborist: {
    sv: 1000,
    type: 'profession',
    sector: 'agriculture',
    description: 'maintains and cares for trees, often by surgically removing dying limbs.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  baler: {
    sv: 800,
    type: 'profession',
    sector: 'agriculture',
    description: 'bales hay, or in the mills, wool and cotton goods.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  beekeeper: {
    sv: 2000,
    type: 'profession',
    sector: 'agriculture',
    description: 'owns and breeds bees, especially for their honey.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  breeder: {
    sv: 1000,
    type: 'profession',
    sector: 'agriculture',
    description: 'breeds livestock, animals, or monsters.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  dairymaid: {
    sv: 500,
    type: 'profession',
    sector: 'agriculture',
    description: 'milks cows and makes cheese and butter.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  falconer: {
    sv: 4000,
    type: 'profession',
    sector: 'agriculture',
    description: 'keeps, trains, and hunts with falcons, hawks, or other birds of prey.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  florist: {
    sv: 3500,
    type: 'business',
    sector: 'agriculture',
    description: 'grows and arranges plants and cut flowers.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  forager: {
    sv: 500,
    type: 'profession',
    sector: 'agriculture',
    description: 'searches for food in the wild.',
    dailyWage: 20,
    socialClass: 'paupery',
    socialClassRoll () { }
  },
  forester: {
    sv: 1000,
    type: 'labourer',
    sector: 'agriculture',
    description: 'supervises the wellbeing of a forest.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  fowler: {
    sv: 750,
    type: 'profession',
    sector: 'agriculture',
    description: 'catches or ensnares birds.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  gamekeeper: {
    sv: 4500,
    type: 'profession',
    sector: 'agriculture',
    description: 'breeds and protects game, typically for a large estate.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  groom: {
    sv: 2500,
    type: 'profession',
    sector: 'agriculture',
    description: 'cleans and brushes the coats horses, dogs, or other animals.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  herder: {
    sv: 100,
    type: 'profession',
    sector: 'agriculture',
    description: 'supervises a herd of livestock or makes a living from keeping livestock, especially in open country.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  'horse Trainer': {
    sv: 1000,
    type: 'profession',
    sector: 'agriculture',
    description: 'tends to horses and teaches them different disciplines.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  'master-of-Horses': {
    sv: 5000,
    type: 'profession',
    sector: 'agriculture',
    description: 'supervises and commands all horses under a jurisdiction.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { }
  },
  'master-of-Hounds': {
    sv: 7500,
    type: 'profession',
    sector: 'agriculture',
    description: 'maintains a pack of hounds and their associated staff, equipment, and hunting arrangements.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { }
  },
  pathfinder: {
    sv: 1000,
    type: 'profession',
    sector: 'agriculture',
    description: 'scouts ahead and discovers a path or way for others.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  plumer: {
    sv: 2000,
    type: 'profession',
    sector: 'agriculture',
    description: 'hunts birds for their plumes.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  prospector: {
    sv: 500,
    type: 'labourer',
    sector: 'mining',
    description: 'searches for mineral deposits, especially by drilling and excavation.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  renderer: {
    sv: 3500,
    type: 'profession',
    sector: 'agriculture',
    description: 'converts waste animal tissue into usable materials.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  thresher: {
    sv: 300,
    type: 'labourer',
    sector: 'agriculture',
    description: 'separates grain from the plants by beating.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  trapper: {
    sv: 800,
    type: 'profession',
    sector: 'agriculture',
    description: 'traps wild animals, especially for their fur.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  zookeeper: {
    sv: 10000,
    type: 'profession',
    sector: 'agriculture',
    description: 'maintains and cares for animals or monsters in a zoo.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'construction Worker': {
    sv: 300,
    type: 'labourer',
    sector: 'construction',
    description: 'a laborer in the physical construction of a built environment and its infrastructure.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  'general Contractor': {
    sv: 5000,
    type: 'profession',
    sector: 'construction',
    description: 'supervises a construction site, manages its vendors and trades, and communicates information to all involved parties.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  glazier: {
    sv: 500,
    type: 'labourer',
    sector: 'construction',
    description: 'fits glass into windows and doors.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  plasterer: {
    sv: 750,
    type: 'labourer',
    sector: 'construction',
    description: 'applies plaster to walls, ceilings, or other surfaces.',
    dailyWage: 20,
    socialClass: 'peasnatry',
    socialClassRoll () { }
  },
  'roadlayer/Streetlayer': {
    sv: 3000,
    type: 'labourer',
    sector: 'construction',
    description: 'paves roads or streets.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  acrobat: {
    sv: 2500,
    type: 'profession',
    sector: 'arts',
    description: 'performs spectacular gymnastic feats.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  trapezist: {
    sv: 3500,
    type: 'profession',
    sector: 'arts',
    description: 'performs acrobatics high above the ground on a tightrope or trapeze.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  arranger: {
    sv: 2000,
    type: 'profession',
    sector: 'arts',
    description: 'adapts a musical composition for performance.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  athlete: {
    sv: 500,
    type: 'profession',
    sector: 'labourer',
    description: 'proficient in sports and other forms of physical exercise.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  busker: {
    sv: 2000,
    type: 'profession',
    sector: 'outcast',
    description: 'performs in a public place, often for money.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  celebrity: {
    sv: 10000,
    type: 'profession',
    sector: 'arts',
    description: 'a famous person.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { }
  },
  choirmaster: {
    sv: 1000,
    type: 'profession',
    sector: 'arts',
    description: 'trains a choir and orchestrates their singing when they perform.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  clown: {
    sv: 3000,
    type: 'profession',
    sector: 'arts',
    description: 'comic entertainer who wears a traditional costume and exaggerated makeup.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  comedian: {
    sv: 5000,
    type: 'profession',
    sector: 'arts',
    description: 'entertainer whose act is designed to make an audience laugh.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  conductor: {
    sv: 8000,
    type: 'profession',
    sector: 'arts',
    description: 'directs the performance of an orchestra.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  contortionist: {
    sv: 5000,
    type: 'profession',
    sector: 'arts',
    description: 'twists and bends their body into strange and unnatural positions.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  curator: {
    sv: 2500,
    type: 'business',
    sector: 'arts',
    description: 'keeper and custodian of a museum or other collections of precious items.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  costumer: {
    sv: 3500,
    type: 'profession',
    sector: 'arts',
    description: 'makes theatrical costumes.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  equilibrist: {
    sv: 3000,
    type: 'profession',
    sector: 'arts',
    description: 'performs balancing feats.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  'fashion Designer': {
    sv: 5000,
    type: 'business',
    sector: 'arts',
    description: 'applies design, aesthetics and natural beauty to garments and their accessories.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  glasspainter: {
    sv: 5000,
    type: 'profession',
    sector: 'arts',
    description: 'produces colorful designs on or in glass.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  juggler: {
    sv: 3000,
    type: 'profession',
    sector: 'arts',
    description: 'keeps several objects in motion in the air at the same time by alternately tossing and catching them.',
    dailyWage: 20,
    socialClassRoll () { }
  },
  illuminator: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'paints and calligraphs to adorn or enlighten scrolls and manuscripts.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  limner: {
    sv: 7000,
    type: 'profession',
    sector: 'arts',
    description: 'paints and calligraphs to adorn or enlighten scrolls and manuscripts.',
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  'makeup Artist': {
    sv: 4500,
    type: 'profession',
    sector: 'arts',
    description: 'applies cosmetics to models, actors, nobles, etc.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  model: {
    sv: 3500,
    type: 'profession',
    sector: 'arts',
    description: 'poses as a subject for an artist, fashion designer, or sculptor.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  musician: {
    sv: 800,
    type: 'profession',
    sector: 'arts',
    description: 'plays a musical instrument.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  playwright: {
    sv: 2500,
    type: 'profession',
    sector: 'arts',
    description: 'writes plays or musicals.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  poet: {
    sv: 3500,
    type: 'profession',
    sector: 'arts',
    description: 'writes ballads, epics, sonnets, or other forms of poetry.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  ringmaster: {
    sv: 3500,
    type: 'business',
    sector: 'arts',
    description: 'master of ceremony who introduces the circus acts to the audience.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  ropewalker: {
    sv: 4000,
    type: 'profession',
    sector: 'arts',
    description: 'walks along a tightrope to entertain others.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  singer: {
    sv: 2000,
    type: 'profession',
    sector: 'arts',
    description: 'sings with or without instrumental accompaniment.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  skald: {
    sv: 5000,
    type: 'profession',
    sector: 'arts',
    description: 'composes and recites poems honoring heroes and their deeds.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  'stage Magician': {
    sv: 3500,
    type: 'profession',
    sector: 'arts',
    description: 'deceives their audience with seemingly impossible feats while using only natural means.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  stuntman: {
    sv: 5000,
    type: 'profession',
    sector: 'arts',
    description: 'performs dangerous stunts for their audience.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  tattooist: {
    sv: 3000,
    type: 'business',
    sector: 'arts',
    description: 'illustrates the skin with indelible patterns, pictures, legends, etc.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  'theater Director': {
    sv: 5000,
    type: 'business',
    sector: 'arts',
    description: 'supervises and orchestrates the mounting of a theatre production by unifying various endeavors and aspects of production.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  accountant: {
    sv: 3000,
    type: 'business',
    sector: 'business',
    description: 'keeps and inspects financial accounts.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  actuary: {
    sv: 6000,
    type: 'business',
    sector: 'government and law',
    description: 'compiles and analyzes statistics and uses them to calculate risk.',
    dailyWage: 20,
    socialClassRoll () { }
  },
  'animal Collector': {
    sv: 10000,
    type: 'business',
    sector: 'agriculure',
    description: 'collects and deals in rare and exotic animals and monsters.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  'business Owner': {
    sv: 500,
    type: 'business',
    sector: 'business',
    description: 'owns a business entity in an attempt to profit from its successful operations.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  'debt Collector': {
    sv: 3500,
    type: 'business',
    sector: 'business',
    description: 'recovers money owed on delinquent accounts.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  draper: {
    sv: 2500,
    type: 'business',
    sector: 'business',
    description: 'an alcohol merchant.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  appraiser: {
    sv: 5000,
    type: 'profession',
    sector: 'business',
    description: 'assesses the monetary value of something.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  auctioneer: {
    sv: 4500,
    type: 'profession',
    sector: 'bbusiness',
    description: 'conducts auctions by accepting bids and declaring goods sold.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  bagniokeeper: {
    sv: 1500,
    type: 'business',
    sector: 'business',
    description: 'owner of a bath house or brothel.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  bookkeeper: {
    sv: 2500,
    type: 'business',
    sector: 'business',
    description: 'keeps records of financial affairs.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  collector: {
    sv: 3000,
    type: 'business',
    sector: 'business',
    description: 'collects things of a specified type, professionally or as a hobby.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  entrepreneur: {
    sv: 500,
    type: 'business',
    sector: 'business',
    description: 'organizes and operates a business or businesses, taking on greater than normal financial risks in order to do so.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  moneychanger: {
    sv: 2500,
    type: 'business',
    sector: 'government and law',
    description: 'exchanges one currency for another.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  moneylender: {
    sv: 1500,
    type: 'business',
    sector: 'business',
    description: 'lends money to others who pay interest.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  peddler: {
    sv: 350,
    type: 'business',
    sector: 'business',
    description: 'travels from place to place selling assorted items.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  'plantation Owner': {
    sv: 1500,
    type: 'business',
    sector: 'business',
    description: 'an owner of an estate on which crops are cultivated by resident labor, typically slave labor.',
    dailyWage: 20,
    socialClassRoll () { }
  },
  speculator: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'invests in stocks, property, or other ventures in the hope of making a profit.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  thriftdealer: {
    sv: 800,
    type: 'business',
    sector: 'business',
    description: 'deals in secondhand items.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  tradesman: {
    sv: 500,
    type: 'business',
    sector: 'business',
    description: 'deals exclusively in bartering.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  'billboard poster': {
    sv: 1000,
    type: 'labourer',
    sector: 'business',
    description: 'a person who puts up notices, signs and advertisements.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  courier: {
    sv: 300,
    type: 'labourer',
    sector: 'business',
    description: 'transports packages and documents.',
    dailyWage: 20,
    socialClassRoll () { }
  },
  interpreter: {
    description: ' interprets language and its meaning, especially within ancient manuscripts.',
    dailyWage: 20,
    sv: 5000,
    type: 'profession',
    sector: 'business',
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  translator: {
    sv: 2000,
    type: 'profession',
    sector: 'hospitality',
    description: ' translates between languages.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  coinsmith: {
    sv: 10000,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes currency for the government.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  bladesmith: {
    sv: 3000,
    type: 'business',
    sector: 'craftsmanship',
    description: 'specializes in making and repairing bladed weapons, especially swords and daggers.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  bookbinder: {
    sv: 5000,
    type: 'business',
    sector: 'craftsmanship',
    description: 'binds books and wraps scrolls.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  bottler: {
    sv: 3000,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'bottles drinks and other liquids.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  bowyer: {
    sv: 500,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes bows and crossbows.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  'broom Maker': {
    sv: 4500,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes brooms and brushes.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  candlemaker: {
    sv: 2000,
    type: 'business',
    sector: 'craftsmanship',
    description: 'makes candles and wax from honey and tallow.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  cartwright: {
    sv: 500,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'makes and repairs carts and wagons.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  cutler: {
    sv: 7500,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes cutlery.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  dyer: {
    sv: 5000,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'dyes cloth and other materials.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  embroiderer: {
    sv: 2500,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'ornaments with needlework.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  engraver: {
    sv: 1000,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'incises a design onto a hard surface by cutting grooves into it.',
    dailyWage: 20,
    socialClassRoll () { }
  },
  farrier: {
    sv: 2000,
    type: 'labourer',
    sector: 'craftsmanship',
    description: "trims and shoes horse's hooves.",
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  fletcher: {
    sv: 1500,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs arrows.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  'furniture Artisan': {
    sv: 2500,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs furniture.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  glassworker: {
    sv: 5000,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'blows glass planes and items.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  'instrument Maker': {
    sv: 7500,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs musical instruments.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  lapidary: {
    sv: 5000,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'turns stone, minerals, or gemstones into decorative items such as cabochons, engraved gems, and faceted designs.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  luthier: {
    sv: 8500,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs stringed instruments.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  mercer: {
    sv: 2500,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'weaves textile fabrics, especially silks, velvets, and other fine materials.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  optician: {
    sv: 6500,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'makes and repairs eyeglasses.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  printer: {
    sv: 2000,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'a person who applies pressure to an inked surface resting upon a print medium (such as paper or cloth), thereby transferring the ink to manufacture a text.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  restorer: {
    sv: 10000,
    type: 'profession',
    sector: 'arts',
    description: 'repairs or renovates a work of art so as to return it to its original condition.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  soaper: {
    sv: 3000,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'makes soap from accumulated mutton fat, wood ash, and natural soda.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  taxidermist: {
    sv: 4000,
    type: 'profession',
    sector: 'craftsmanship',
    description: 'prepares, stuffs, and mounts the skins of animals.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  tinker: {
    sv: 3000,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'travels from place to place mending utensils.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  weaponsmith: {
    sv: 2500,
    type: 'business',
    sector: 'craftsmanship',
    description: 'specializes in making and repairing weapons.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  wheelwright: {
    sv: 1500,
    type: 'labourer',
    sector: 'craftsmanship',
    description: 'makes and repairs wooden wheels.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  assassin: {
    sv: 5000,
    type: 'profession',
    sector: 'crime',
    description: 'murders through stealth for reasons pertaining to money, politics, or religion.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  bandit: {
    sv: 8000,
    type: 'profession',
    sector: 'crime',
    description: 'a robber or outlaw belonging to a gang and typically operating in an isolated or lawless area.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  burglar: {
    sv: 500,
    type: 'profession',
    sector: 'crime',
    description: 'illegally enters buildings and steals things.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  conman: {
    sv: 750,
    type: 'profession',
    sector: 'crime',
    description: 'tricks people by gaining their trust and persuading them to believe something that is not true in order to benefit from the encounter.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  gamefighter: {
    sv: 2000,
    type: 'profession',
    sector: 'crime',
    description: 'engages in arena matches in which animals or monsters are pitted against one another, typically to the death.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  'crime Boss': {
    sv: 6000,
    type: 'profession',
    sector: 'crime',
    description: 'controls and supervises a criminal organization.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  cutpurse: {
    sv: 500,
    type: 'profession',
    sector: 'crime',
    description: 'a pickpocket or thief.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  'drug Dealer': {
    sv: 1500,
    type: 'profession',
    sector: 'crime',
    description: 'dealer of illegal substances.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  'drug Lord': {
    sv: 6000,
    type: 'profession',
    sector: 'crime',
    description: 'controls a network of persons involved in the illegal drugs trade and transactions.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  extortioner: {
    sv: 2000,
    type: 'profession',
    sector: 'crime',
    description: 'extorts money from someone by threatening to expose embarrassing information about them.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  fence: {
    sv: 10000,
    type: 'profession',
    sector: 'crime',
    description: 'deals in stolen goods.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  forger: {
    sv: 10000,
    type: 'profession',
    sector: 'crime',
    description: 'produces fraudulent copies or imitations.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  fugitive: {
    sv: 2500,
    type: 'labourer',
    sector: 'crime',
    description: 'a person who has escaped from a place or is in hiding, especially to avoid arrest or persecution.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  highwayman: {
    sv: 500,
    type: 'profession',
    sector: 'crime',
    description: 'robs travelers on a road.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  kidnapper: {
    sv: 1500,
    type: 'profession',
    sector: 'crime',
    description: 'abducts people and holds them captive, typically to obtain a ransom.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  'loan Shark': {
    sv: 4500,
    type: 'profession',
    sector: 'crime',
    description: 'charges extremely high rates of interest for moneylending, typically under illegal conditions.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  pirate: {
    sv: 1500,
    type: 'profession',
    sector: 'crime',
    description: 'attacks and robs ships at sea.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  poacher: {
    sv: 5000,
    type: 'labourer',
    sector: 'crime',
    description: 'hunts illegal game.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  poisoner: {
    sv: 7000,
    type: 'business',
    sector: 'crime',
    description: 'makes poisons to harm or kill.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  marauder: {
    sv: 3000,
    type: 'profession',
    sector: 'crime',
    description: 'makes sudden, unprompted attacks against defenseless or near-defenseless settlements.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  smuggler: {
    sv: 2500,
    type: 'profession',
    sector: 'crime',
    description: 'manages the import or export of goods secretly, in violation of the law, especially without payment of legal duty.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  affeeror: {
    sv: 10000,
    type: 'profession',
    sector: 'government and law',
    description: 'determines the values of fines and amercements.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  agister: {
    sv: 1500,
    type: 'business',
    sector: 'business',
    description: 'affords pasture to the livestock of others for a price.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { }
  },
  alderman: {
    sv: 1000,
    type: 'profession',
    sector: 'government and law',
    description: 'a civic dignitary in the local council ranked below the mayor.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { }
  },
  alienist: {
    sv: 3000,
    type: 'profession',
    sector: 'government and law',
    description: 'assesses the competence of a defendant in a court of law.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  'assay Master': {
    sv: 10000,
    type: 'profession',
    sector: 'government and law',
    description: 'oversees the testing of currency.',
    dailyWage: 20,
    socialClassRoll () { }
  },
  'baron/Baroness': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'a member of the lowest order of the British nobility.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { }
  },
  baron: {
    sv: 2500,
    type: 'profession',
    sector: 'government and law',
    description: 'a member of the lowest order of the nobility.',
    socialClass: 'nobility',
    socialClassRoll () { }
  },
  chancellor: {
    sv: 5000,
    type: 'profession',
    sector: 'government and law',
    description: 'a senior state or legal official.',
    dailyWage: 20,
    socialClassRoll () { }
  },
  chief: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'leads or rules a people or clan.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { }
  },
  conservationist: {
    sv: 3000,
    type: 'profession',
    sector: 'government and law',
    description: 'advocates for the protection and preservation of the environment and wildlife.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  count: {
    sv: 7000,
    type: 'profession',
    sector: 'government and law',
    description: 'a nobleperson ranking above a viscount and below a marquess.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { }
  },
  duke: {
    sv: 15000,
    type: 'profession',
    sector: 'government and law',
    description: 'rules over a duchy and is of the highest rank below the monarch.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { }
  },
  emperor: {
    sv: 25000,
    type: 'profession',
    sector: 'government and law',
    description: 'the supreme sovereign ruler of an extensive group of states or countries under a single authority.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { }
  },
  king: {
    sv: 20000,
    type: 'profession',
    sector: 'government and law',
    description: 'the ruler of an independent state and its people.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { }
  },
  'lady-in-Waiting': {
    sv: 3000,
    type: 'labourer',
    sector: 'government and law',
    description: 'attends a queen, princess, or other high-ranking feminine nobleperson.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  marquess: {
    sv: 5000,
    type: 'profession',
    sector: 'government and law',
    description: 'a nobleperson ranking above a count and below a duke.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { }
  },
  'master-of-Coin': {
    sv: 7500,
    type: 'profession',
    sector: 'government and law',
    description: 'supervises the royal treasury, advises the monarch on financial matters, and is responsible for raising money through taxation.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { }
  },
  'master-of-the-Revels': {
    sv: 1000,
    type: 'profession',
    sector: 'government and law',
    description: 'responsible for overseeing royal festivities.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { }
  },
  notary: {
    sv: 3000,
    type: 'profession',
    sector: 'government and law',
    description: 'performs certain legal formalities, especially to draw up or certify contracts, deeds, and other documents for use in other jurisdictions.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  orator: {
    sv: 3000,
    type: 'profession',
    sector: 'government and law',
    description: 'makes statements on behalf of a group or individual nobleperson.',
    dailyWage: 20,
    socialClass: 'commoner',
    socialClassRoll () { }
  },
  page: {
    sv: 3000,
    type: 'profession',
    sector: 'government and law',
    description: 'a young attendant to a person of noble rank.',
    dailyWage: 20,
    socialClass: 'peasantry',
    socialClassRoll () { }
  },
  prince: {
    sv: 6000,
    type: 'profession',
    sector: 'government and law',
    description: 'the direct descendant of a monarch.',
    dailyWage: 20,
    socialClass: 'nobility',
    socialClassRoll () { }
  },
  senator: {
    sv: 5000,
    type: '',
    sector: '',
    description: 'partakes in governmental decision-making after being elected.',
    dailyWage: 20,
    socialClassRoll () { }
  },
  sheriff: {
    sv: 4500,
    type: '',
    sector: '',
    description: 'the chief executive officer in a county, having various administrative and judicial functions.',
    dailyWage: 20,
    socialClassRoll () { }
  },
  spymaster: {
    sv: 1000,
    type: '',
    sector: '',
    description: 'directs a network of subordinate espionage agents for a state, kingdom, or empire.',
    dailyWage: 20,
    socialClassRoll () { }
  },
  viscount: {
    sv: 7000,
    type: '',
    sector: '',
    description: 'a nobleperson ranking above a baron and below a count.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  ward: {
    sv: 3000,
    type: '',
    sector: '',
    description: 'a member of a noble house who has been taken in by another noble family to be raised for a time.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  acater: {
    sv: 3000,
    type: '',
    sector: '',
    description: 'provides and prepares foodstuffs or delicacies for events such as festivals.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  tunner: {
    sv: 5000,
    type: '',
    sector: '',
    description: 'fills casks in a brewery or winery.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  barkeep: {
    sv: 500,
    type: '',
    sector: '',
    description: 'works and serves drinks in a bar.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },

  butler: {
    sv: 2000,
    type: '',
    sector: '',
    description: 'the chief servant of a household.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  caregiver: {
    sv: 1000,
    type: '',
    sector: '',
    description: 'looks after a sick, elderly, or disabled person.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'charcoal Maker': {
    sv: 2500,
    type: '',
    sector: '',
    description: 'manufactures charcoal by carbonizing wood in a kiln.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  chatelaine: {
    sv: 3000,
    type: '',
    sector: '',
    description: 'a person in charge of a large household.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'chimney Sweeper': {
    sv: 2500,
    type: '',
    sector: '',
    description: 'a small person, typically a child, who ascends chimneys to clean them.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  clerk: {
    sv: 5000,
    type: '',
    sector: '',
    description: 'undertakes routine administrative duties in a business or bank.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  copyist: {
    sv: 3000,
    type: '',
    sector: '',
    description: 'makes copies of handwritten documents or music.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  croupier: {
    sv: 1500,
    type: '',
    sector: '',
    description: 'runs a gaming table by gathering in and paying out money or tokens.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  exterminator: {
    sv: 2000,
    type: '',
    sector: '',
    description: 'exterminates unwanted rodents and insects.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'food & Drink Taster': {
    sv: 3500,
    type: '',
    sector: '',
    description: 'ingests food that was prepared for someone else to confirm it is safe to eat.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  gongfarmer: {
    sv: 800,
    type: '',
    sector: '',
    description: 'digs out and removes excrement from privies and cesspits.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  gravedigger: {
    sv: 500,
    type: '',
    sector: '',
    description: 'digs graves for the purposes of a funeral ceremony.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  groundskeeper: {
    sv: 1000,
    type: '',
    sector: '',
    description: 'maintains an athletic field, a park, or the grounds of a graveyard or other institution.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'kitchen Drudge': {
    sv: 500,
    type: '',
    sector: '',
    description: 'performs menial work in a kitchen.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  knacker: {
    sv: 2000,
    type: '',
    sector: '',
    description: 'disposes of dead or unwanted animals.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  lamplighter: {
    sv: 5000,
    type: '',
    sector: '',
    description: 'lights street or road lights at dusk.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'laundry Worker': {
    sv: 2500,
    type: '',
    sector: '',
    description: 'a laborer who takes part in the washing, drying, and ironing of clothes and other fabric items.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  lector: {
    sv: 4000,
    type: '',
    sector: '',
    description: 'reads to others while they work for entertainment.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  longshoreman: {
    sv: 1000,
    type: '',
    sector: '',
    description: 'loads and unloads ships in a port.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'nanny/Nursemaid': {
    sv: 800,
    type: '',
    sector: '',
    description: 'a servant employed to look after a young child or children.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  operator: {
    sv: 2500,
    type: '',
    sector: '',
    description: 'a laborer who operates equipment, typically in construction.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'pastry Chef': {
    sv: 1500,
    type: '',
    sector: '',
    description: 'makes desserts, especially cakes and pastries.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  plumber: {
    sv: 3000,
    type: '',
    sector: '',
    description: 'installs and repairs the fittings of water supply and sanitation.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  porter: {
    sv: 3000,
    type: '',
    sector: '',
    description: 'carries luggage and other loads.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  prostitute: {
    sv: 400,
    type: '',
    sector: '',
    description: 'engages in sexual activity for payment.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'quarryman/Quarrywoman': {
    sv: 1200,
    type: '',
    sector: '',
    description: 'quarries stone.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  stagehand: {
    sv: 2500,
    type: '',
    sector: '',
    description: 'moves scenery or props before or during the performance of a theatrical production.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'street Cleaner': {
    sv: 4000,
    type: '',
    sector: '',
    description: 'cleans streets and alleyways after dark.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'talent Scout': {
    sv: 7000,
    type: '',
    sector: '',
    description: 'searches for talented individuals who can be employed or promoted.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  trainer: {
    sv: 5000,
    type: '',
    sector: '',
    description: 'trains someone in a particular skill, usually physical, for money.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'water Bearer': {
    sv: 200,
    type: '',
    sector: '',
    description: 'brings water from rivers, wells, and lakes back to their settlement.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  abjurer: {
    sv: 5000,
    type: '',
    sector: '',
    description: 'a mage focused in protective spells.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  alchemist: {
    sv: 2000,
    type: '',
    sector: '',
    description: 'transforms or creates something within nature through the magical and scientific manipulation of chemicals.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  archmage: {
    sv: 15000,
    type: '',
    sector: '',
    description: 'an extremely powerful mage.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  artificer: {
    sv: 7500,
    type: '',
    sector: '',
    description: 'unlocks magic in everyday objects as well as being an inventor.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },

  conjuror: {
    sv: 7000,
    type: '',
    sector: '',
    description: 'conjures spirits or familiars.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  elementalist: {
    sv: 8000,
    type: '',
    sector: '',
    description: 'manipulates nature’s elements to their will.',
    socialClass: '',
    socialClassRoll () { }
  },
  enchanter: {
    sv: 7500,
    type: '',
    sector: '',
    description: 'uses sorcery to put someone or something under a spell.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  evoker: {
    sv: 8000,
    type: '',
    sector: '',
    description: 'manipulates energy or taps into an unseen source of power in order to produce a desired kinetic end.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'hearth Witch': {
    sv: 6000,
    type: '',
    sector: '',
    description: 'incorporates spells and enchantments in cooking.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  illusionist: {
    sv: 7500,
    type: '',
    sector: '',
    description: 'performs tricks and spells that deceive the senses.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  mage: {
    sv: 5000,
    type: '',
    sector: '',
    description: 'a magic-user.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  medium: {
    sv: 8000,
    type: '',
    sector: '',
    description: 'uses extrasensory perception, magic, or divine powers to identify information hidden from the normal senses.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  meteorologist: {
    sv: 1000,
    type: '',
    sector: '',
    description: 'forecasts and manipulates weather.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  ritualist: {
    sv: 4000,
    type: '',
    sector: '',
    description: 'practices or advocates the observance of ritual (formula intended to trigger a magical effect on a person or objects).',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  runecaster: {
    sv: 10000,
    type: '',
    sector: '',
    description: 'uses special alphabets to create runes (symbols possessing magical effects capable of being used multiple times).',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  sage: {
    sv: 10000,
    type: '',
    sector: '',
    description: 'a wise and experienced magic-user.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  shapeshifter: {
    sv: 7000,
    type: '',
    sector: '',
    description: 'a person with the ability to change their physical form.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  summoner: {
    sv: 8000,
    type: '',
    sector: '',
    description: 'a mage able to summon forth magical beasts, creatures, and monsters.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  transmuter: {
    sv: 8000,
    type: '',
    sector: '',
    description: 'alters matter in form, appearance, or nature.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  witchdoctor: {
    sv: 3500,
    type: '',
    sector: '',
    description: 'a tribal mage with powers of healing, divination, and protection against the magic of others.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  witch: {
    sv: 4000,
    type: '',
    sector: '',
    description: 'a woman who has supernatural powers and practices sorcery, typically in solitude.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  wordsmith: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'draws their power from language and casts by dictation.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  admiral: {
    sv: 1000,
    type: '',
    sector: '',
    description: 'commands a fleet or naval squadron.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  bailiff: {
    sv: 5000,
    type: '',
    sector: '',
    description: 'looks after prisoners.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  bodyguard: {
    sv: 3000,
    type: '',
    sector: '',
    description: 'escorts and protects another person, especially a dignitary.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  bouncer: {
    sv: 2500,
    type: '',
    sector: '',
    description: 'prevents troublemakers from entering or to eject them from the premises of an establishment.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  castellan: {
    sv: 8000,
    type: '',
    sector: '',
    description: 'the governor of a castle.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  cavalier: {
    sv: 2000,
    type: '',
    sector: '',
    description: 'a skilled horseback rider.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'city Watch': {
    sv: 4500,
    type: '',
    sector: '',
    description: 'an officer of law enforcement who resides in larger towns or cities.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  commissar: {
    sv: 7500,
    type: '',
    sector: '',
    description: 'teaches principles and policies to military units.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  constable: {
    sv: 500,
    type: '',
    sector: '',
    description: 'an officer with limited policing authority, typically in a small town.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  investigator: {
    sv: 5000,
    type: '',
    sector: '',
    description: 'investigates and solves crimes.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  fifer: {
    sv: 3000,
    type: '',
    sector: '',
    description: 'a non-combatant foot soldier who sounds signals for changes in formation in combat.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  duelist: {
    sv: 3000,
    type: '',
    sector: '',
    description: 'skilled in one-on-one combat.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  executioner: {
    sv: 2500,
    type: '',
    sector: '',
    description: 'carries out a sentence of death on a legally condemned person.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  firefighter: {
    sv: 500,
    type: '',
    sector: '',
    description: 'extinguishes fires.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'inspection Officer': {
    sv: 4000,
    type: '',
    sector: '',
    description: 'responsible for the inspection of military units to ensure they meet appropriate standards of training and efficiency.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'intelligence Officer': {
    sv: 10000,
    type: '',
    sector: '',
    description: 'collects, compiles and organizes information about the enemy.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  lieutenant: {
    sv: 2000,
    type: '',
    sector: '',
    description: 'an officer of middle rank in the armed forces.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  marksman: {
    sv: 800,
    type: '',
    sector: '',
    description: 'in long-range weapons, such as the bow, crossbow, sling, etc. to inflict damage from afar.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  marshall: {
    sv: 5000,
    type: '',
    sector: '',
    description: 'has the charge of the cavalry in the household of a monarch.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  medic: {
    sv: 600,
    type: '',
    sector: '',
    description: 'a medical practitioner equipped for the battlefield.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  mercenary: {
    sv: 800,
    type: '',
    sector: '',
    description: 'a soldier without allegiance who works for money, typically a member of a company or guild.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  quartermaster: {
    sv: 3500,
    type: '',
    sector: '',
    description: 'responsible for providing quarters, rations, clothing, and other supplies.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'royal Guard': {
    sv: 5000,
    type: '',
    sector: '',
    description: 'responsible for the protection of a royal person.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  runner: {
    sv: 750,
    type: '',
    sector: '',
    description: 'carries information between lines in wartime.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  sapper: {
    sv: 5000,
    type: '',
    sector: '',
    description: 'a soldier responsible for tasks such as building and repairing roads and bridges, laying and clearing mines, etc.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  sergeant: {
    sv: 8000,
    type: '',
    sector: '',
    description: 'an officer instructed with a protective duty, typically worth more than other officers.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'sergeant-at-Arms': {
    sv: 5000,
    type: '',
    sector: '',
    description: 'charged with keeping order during meetings and, if necessary, participates in battle.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  scout: {
    sv: 5000,
    type: '',
    sector: '',
    description: "sent ahead of a main force so as to gather information about the enemy's position, strength, or movements.",
    socialClass: '',
    socialClassRoll () { }
  },
  'siege Artillerist': {
    sv: 10000,
    type: '',
    sector: '',
    description: 'works the artillery machines of an army.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'slave Driver': {
    sv: 1500,
    type: '',
    sector: '',
    description: 'oversees and urges on slaves at work.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'special Force Soldier': {
    sv: 6000,
    type: '',
    sector: '',
    description: 'carries out special operations.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  spy: {
    sv: 4500,
    type: '',
    sector: '',
    description: 'secretly collects and reports information on the activities, movements, and plans of an enemy or competitor.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  tactician: {
    sv: 7000,
    type: '',
    sector: '',
    description: 'uses a carefully planned military strategy to achieve a specific end.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  tollkeeper: {
    sv: 2000,
    type: '',
    sector: '',
    description: 'collects tolls at a bridge, road etc. where a charge is made.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  warden: {
    sv: 5000,
    type: '',
    sector: '',
    description: 'responsible for the supervision of a particular place or thing or for ensuring that regulations associated with it are obeyed.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  warmage: {
    sv: 10000,
    type: '',
    sector: '',
    description: 'a soldier skilled in destructive battle magic.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  abbot: {
    sv: 6000,
    type: '',
    sector: '',
    description: 'the head of an abbey of monks.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  acolyte: {
    sv: 3000,
    type: '',
    sector: '',
    description: 'assists the celebrant in a religious service or procession.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  almoner: {
    sv: 1500,
    type: '',
    sector: '',
    description: 'distributes money and food to poor people.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  archbishop: {
    sv: 5000,
    type: '',
    sector: '',
    description: 'responsible for an archdiocese, their surrounding district.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  bishop: {
    sv: 10000,
    type: '',
    sector: '',
    description: 'a senior member of the clergy, usually in charge of a diocese and empowered to confer holy orders.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  cantor: {
    sv: 2000,
    type: '',
    sector: '',
    description: 'sings liturgical music and leads prayer in a synagogue.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  cardinal: {
    sv: 6500,
    type: '',
    sector: '',
    description: 'a leading dignitary of a church, nominated by the highest official.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },

  confessor: {
    sv: 4000,
    type: '',
    sector: '',
    description: 'hears confessions and gives absolution and spiritual counsel.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  cultist: {
    sv: 2000,
    type: '',
    sector: '',
    description: 'a member of a cult who generally lives outside of conventional society and worships an unorthodox patron.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'cult Leader': {
    sv: 6000,
    type: '',
    sector: '',
    description: 'the organizational leader of a cult who is occasionally also the founder.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  deacon: {
    sv: 800,
    type: '',
    sector: '',
    description: 'an ordained minister of an order ranking below that of priest.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  diviner: {
    sv: 9000,
    type: '',
    sector: '',
    description: 'seeks ultimate divination in order to further understand or meet godly substance.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  exorcist: {
    sv: 6000,
    type: '',
    sector: '',
    description: 'expels or attempts to expel evil spirits from a person or place.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'high Priest': {
    sv: 15000,
    type: '',
    sector: '',
    description: 'the chief priest of a religion.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  inquisitor: {
    sv: 3000,
    type: '',
    sector: '',
    description: 'seeks to eliminate heresy and other things contrary to the doctrine or teachings of their faith.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  missionary: {
    sv: 2000,
    type: '',
    sector: '',
    description: 'goes on a religious mission to promote their faith in a foreign place.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  pardoner: {
    sv: 700,
    type: '',
    sector: '',
    description: 'raises money for religious works by soliciting offerings and granting indulgences.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  prophet: {
    sv: 8000,
    type: '',
    sector: '',
    description: 'regarded as an inspired teacher or proclaimer of the will of God.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  sexton: {
    sv: 800,
    type: '',
    sector: '',
    description: 'looks after a church and churchyard, sometimes acting as bell-ringer and formerly as a gravedigger.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  templar: {
    sv: 500,
    type: '',
    sector: '',
    description: 'fights in a religious military order.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  abecedarian: {
    sv: 1500,
    type: '',
    sector: '',
    description: 'teaches the illiterate.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  anthropologist: {
    sv: 5000,
    type: '',
    sector: '',
    description: 'studies the customs, beliefs, and relationships of humanoids and intellectually and culturally advanced creatures.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  apprentice: {
    sv: 200,
    type: '',
    sector: '',
    description: 'studies a trade under a skilled employer.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  archaeologist: {
    sv: 2000,
    type: '',
    sector: '',
    description: 'studies humanoid history and prehistory through the excavation of sites and the analysis of artifacts and other physical remains.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  assayer: {
    sv: 2000,
    type: '',
    sector: '',
    description: 'determiner of the proportions of metal in ore and the amount of copper, silver, gold, or platinum in coins.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },

  astronomer: {
    sv: 5000,
    type: '',
    sector: '',
    description: 'makes observations of celestial and scientific phenomena within the material plane.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  bloodletter: {
    sv: 3000,
    type: '',
    sector: '',
    description: "surgically removes some of a patient's blood for therapeutic purposes.",
    socialClass: '',
    socialClassRoll () { }
  },
  botanist: {
    sv: 2000,
    type: '',
    sector: '',
    description: 'an expert in or student of the scientific study of plants.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  chemist: {
    sv: 3500,
    type: '',
    sector: '',
    description: 'engaged in chemical research or experiments.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  dean: {
    sv: 8000,
    type: '',
    sector: '',
    description: 'the head of a college or university.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  drakologist: {
    sv: 10000,
    type: '',
    sector: '',
    description: 'studies or is an expert in the branch of zoology concerned with dragons.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  engineer: {
    sv: 5000,
    type: '',
    sector: '',
    description: 'designer of a machine or structure.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  entomologist: {
    sv: 6000,
    type: '',
    sector: '',
    description: 'studies or is an expert in the branch of zoology concerned with insects.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  horologist: {
    sv: 8000,
    type: '',
    sector: '',
    description: 'a scholar of time and entropy.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  mathematician: {
    sv: 5000,
    type: '',
    sector: '',
    description: 'a scholar of the abstract science of number, quantity, and space.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  optometrist: {
    sv: 3000,
    type: '',
    sector: '',
    description: 'examines the eyes for visual defects and prescribes eyeglasses.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  scribe: {
    sv: 2000,
    type: '',
    sector: '',
    description: 'copies out manuscripts.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  taxonomist: {
    sv: 15000,
    type: '',
    sector: '',
    description: 'groups organisms into categories.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  theologian: {
    sv: 6000,
    type: '',
    sector: '',
    description: 'engages in the study of the nature of God and religious belief.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  tutor: {
    sv: 600,
    type: '',
    sector: '',
    description: 'charged with the instruction and guidance of another.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  zoologist: {
    sv: 3500,
    type: '',
    sector: '',
    description: 'an expert in or a student of the behavior, physiology, classification, and distribution of animals.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  boatman: {
    sv: 500,
    type: '',
    sector: '',
    description: 'mans a small seacraft.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  bosun: {
    sv: 1000,
    type: '',
    sector: '',
    description: 'in charge of organizing the equipment and crew of a ship.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'cabbie/Wagoner': {
    sv: 400,
    type: '',
    sector: '',
    description: 'drives a horse-drawn wagon.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'cabin Boy/Cabin Girl': {
    sv: 9000,
    type: '',
    sector: '',
    description: 'waits on the orders of a ships officers and passengers.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  charioteer: {
    sv: 300,
    type: '',
    sector: '',
    description: 'drives a chariot.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  carter: {
    sv: 500,
    type: '',
    sector: '',
    description: 'transports goods by cart.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  ferryman: {
    sv: 2500,
    type: '',
    sector: '',
    description: 'operates a ferry.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'first Mate': {
    sv: 1000,
    type: '',
    sector: '',
    description: 'the deck officer second in command to the master of a ship.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  helmsman: {
    sv: 2000,
    type: '',
    sector: '',
    description: 'steers a ship or boat.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  navigator: {
    sv: 1500,
    type: '',
    sector: '',
    description: 'directs the route or course of a ship or other form of transportation, especially by using instruments and maps.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  purser: {
    sv: 2500,
    type: '',
    sector: '',
    description: 'keeps the accounts of a ship, especially as the head steward on a passenger vessel.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  shipwright: {
    sv: 3500,
    type: '',
    sector: '',
    description: 'a carpenter skilled in ship construction and repair.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  adventurer: {
    sv: 2000,
    type: '',
    sector: '',
    description: 'wanders the world in search of knowledge, treasure, fame, glory or a multitude of additional wants and desires.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'beggar/Pauper': {
    sv: 2500,
    type: '',
    sector: '',
    description: 'lives by asking for money or food.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'monster Hunter': {
    sv: 4500,
    type: '',
    sector: '',
    description: 'takes on jobs to hunt down and kill or capture dangerous creatures.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'bounty Hunter': {
    sv: 3500,
    type: '',
    sector: '',
    description: 'pursues a criminal or fugitive for whom a reward is offered.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'crossing Sweeper': {
    sv: 6500,
    type: '',
    sector: '',
    description: 'sweeps a path ahead of people crossing dirty urban streets in exchange for a gratuity.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  deserter: {
    sv: 3500,
    type: '',
    sector: '',
    description: 'a member of the armed forces who has deserted.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'disgraced Noble': {
    sv: 5000,
    type: '',
    sector: '',
    description: 'a person of high birth who has since loss their respect, honor, or esteem in some or all noble circles.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  drunkard: {
    sv: 550,
    type: '',
    sector: '',
    description: 'a person who is habitually drunk and considers themselves a professional in the task.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'dungeon Delver': {
    sv: 5500,
    type: '',
    sector: '',
    description: 'navigates underground labyrinths in search of any treasure they may find.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  elder: {
    sv: 600,
    type: '',
    sector: '',
    description: 'a person of a greater age, especially one with a respected position in society.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  exile: {
    sv: 750,
    type: '',
    sector: '',
    description: 'lives away from their native country, either from choice or compulsion.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  explorer: {
    sv: 3500,
    type: '',
    sector: '',
    description: 'explores unfamiliar areas in search of geographical or scientific information.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'ex-Criminal': {
    sv: 1200,
    type: '',
    sector: '',
    description: 'a person who has been convicted of a crime and has since served their sentence, or who has preemptively given up their life of crime.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'folk Hero': {
    sv: 4000,
    type: '',
    sector: '',
    description: 'a celebrity who is greatly admired by many people of a particular kind or in a particular place.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  gambler: {
    sv: 800,
    type: '',
    sector: '',
    description: 'bets money on sports, card games, or games of chance in the hope of a profit.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'grave Robber': {
    sv: 100,
    type: '',
    sector: '',
    description: 'steals valuables from graves and tombs.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  heretic: {
    sv: 2500,
    type: '',
    sector: '',
    description: 'differs in opinion from established religious dogma.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  housewife: {
    sv: 150,
    type: '',
    sector: '',
    description: 'cares for his or her family by managing household affairs and completing housework.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  prisoner: {
    sv: 350,
    type: '',
    sector: '',
    description: 'held in confinement as a punishment for crimes they have been convicted of.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'rag-and-Bone Man': {
    sv: 750,
    type: '',
    sector: '',
    description: 'collects unwanted household items and sells them to merchants.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'political Dissident': {
    sv: 4500,
    type: '',
    sector: '',
    description: 'rises in opposition or armed resistance against an established government or ruler.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  refugee: {
    sv: 5000,
    type: '',
    sector: '',
    description: 'leaves their home in order to escape war, persecution, or natural disaster.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  'runaway Slave': {
    sv: 3000,
    type: '',
    sector: '',
    description: 'a slave who has left their master and traveled without authorization.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  squatter: {
    sv: 800,
    type: '',
    sector: '',
    description: 'unlawfully occupies an uninhabited building or unused land.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  vagabond: {
    sv: 1000,
    type: '',
    sector: '',
    description: 'wanders from place to place without a permanent home or job.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  },
  urchin: {
    sv: 500,
    type: '',
    sector: '',
    description: 'a child who lives or spends most of their time in the streets, occasionally working as a thief or pickpocket.',
    dailyWage: 20,
    socialClass: '',
    socialClassRoll () { }
  }

}
