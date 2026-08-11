import { AIKnowledgeExplanation, ObjectCategory, PersonProfile, LandmarkProfile, VehicleProfile, MobilePhoneProfile, WeaponProfile, BuildingProfile, FurnitureProfile, ClothingProfile, AnimalProfile, PlantProfile } from './types';

const KNOWLEDGE_DATABASE: Record<string, AIKnowledgeExplanation> = {

  // ─────────────────────────────────────────────
  // WORLD HISTORICAL FIGURES (Old to New)
  // ─────────────────────────────────────────────
  'wristwatch': {
    scientificOrTechName: 'Wristwatch — Portable Personal Timekeeping Accessory',
    primaryUses: 'Worn on the wrist for personal timekeeping. Modern smartwatches add health monitoring (heart rate, ECG, SpO2), GPS navigation, notifications, and mobile payments.',
    specifications: [
      'Types: Mechanical (manual wind), Automatic (self-winding), Quartz, Smartwatch',
      'Luxury Brands: Rolex, Omega, Patek Philippe, Cartier, Audemars Piguet',
      'Smartwatch Features: Heart rate, ECG, GPS, sleep tracking, call notifications',
    ],
    keyFeatures: [
      'Automatic watches wind themselves using wrist movement via a rotor mechanism',
      'Apple Watch outsells all Swiss watchmakers combined — most popular watch globally',
    ],
    humanDetails: 'Wristwatches became popular during World War I when soldiers needed hands-free timekeeping.',
    safetyAndLegalStatus: 'Consumer fashion accessory and personal health device. Safe for all ages.',
    funFact: 'A Patek Philippe Grandmaster Chime wristwatch sold at auction for $31 million — making it the most expensive watch ever sold!',
  },


  'aristotle': {
    scientificOrTechName: 'Aristotle (384–322 BC) – Ancient Greek Philosopher',
    primaryUses: 'Father of Western Philosophy, Logic, Natural Sciences, Biology, and Political Theory. Founded the Lyceum and wrote foundational works in every field of human knowledge.',
    specifications: [
      'Period: Ancient Greece (384–322 BC)',
      'Fields: Logic, Metaphysics, Ethics, Biology, Politics, Rhetoric, Poetics',
      'Student of Plato; Teacher of Alexander the Great',
    ],
    keyFeatures: [
      'Classified living organisms into species and genus — founding modern biology taxonomy',
      'Created formal logic (syllogism) still taught in philosophy today',
    ],
    humanDetails: 'Ancient Greek philosopher born in Stagira, Macedonia. Tutor of Alexander the Great.',
    safetyAndLegalStatus: 'Global Historical Legacy: UNESCO listed thinker, foundational to Western civilization.',
    funFact: 'Aristotle wrote over 200 treatises on topics ranging from logic and biology to theater — only about 31 survive today!',
  },

  'archimedes': {
    scientificOrTechName: 'Archimedes of Syracuse (c. 287–212 BC) – Greek Mathematician and Inventor',
    primaryUses: 'Pioneer of mathematics, physics, and engineering. Discovered the principle of buoyancy, calculated pi, and invented war machines to defend Syracuse.',
    specifications: [
      'Period: c. 287–212 BC, Syracuse, Sicily',
      'Fields: Mathematics, Physics, Astronomy, Engineering',
      'Inventions: Archimedes Screw, Claw of Archimedes, heat ray mirrors',
    ],
    keyFeatures: [
      'Eureka! Discovered buoyancy principle while stepping into a bathtub',
      'Calculated the most accurate value of Pi in ancient times (3.14159)',
    ],
    humanDetails: 'Ancient Greek mathematician and inventor, considered greatest mathematician of antiquity.',
    safetyAndLegalStatus: 'Historical Legacy: foundational figure in science and engineering.',
    funFact: 'Archimedes reportedly said "Give me a lever long enough and I will move the Earth!" — demonstrating the principle of mechanical advantage!',
  },

  'leonardo da vinci': {
    scientificOrTechName: 'Leonardo da Vinci (1452–1519) – Renaissance Polymath',
    primaryUses: 'Painter, sculptor, architect, musician, mathematician, engineer, inventor, anatomist, geologist, botanist, and writer — the ultimate Renaissance man.',
    specifications: [
      'Period: Italian Renaissance (1452–1519)',
      'Masterpieces: Mona Lisa, The Last Supper, Vitruvian Man',
      'Inventions: Flying machine, solar power, armored vehicle, calculator (in concept)',
    ],
    keyFeatures: [
      'Left-handed mirror writing in personal notebooks for secrecy',
      'Anatomy drawings 300 years ahead of his time — used actual cadavers',
    ],
    humanDetails: 'Born in Vinci, Tuscany, Italy. Illegitimate son of a Florentine notary.',
    safetyAndLegalStatus: 'Priceless cultural heritage: Mona Lisa estimated worth over $900 million.',
    funFact: 'Leonardo wrote backwards in his notebooks using mirror script — possibly to prevent copying, or because he was left-handed!',
    personProfile: {
      fullName: 'Leonardo di ser Piero da Vinci',
      profession: 'Painter, Sculptor, Architect, Engineer, Scientist, Inventor',
      nationality: 'Italian',
      birthDate: '15 April 1452',
      deathDate: '2 May 1519',
      birthPlace: 'Vinci, Republic of Florence',
      majorContributions: [
        'Renaissance art masterpieces',
        'Anatomical studies',
        'Engineering inventions',
        'Scientific observations',
        'Architectural designs'
      ],
      famousDiscoveries: [
        'Detailed anatomical drawings',
        'Concepts for flying machines',
        'Hydraulic engineering principles',
        'Military inventions',
        'Mathematical proportions in art'
      ],
      awards: [
        'Patronage by Ludovico Sforza (Duke of Milan)',
        'Patronage by Francis I (King of France)',
        'Considered the archetype of the Renaissance Man'
      ],
      historicalImportance: 'Epitome of the Renaissance humanist ideal. His work bridged art and science, influencing countless generations of artists, scientists, and engineers.',
      timeline: [
        '1452: Born in Vinci, Italy',
        '1466: Apprenticed to Andrea del Verrocchio in Florence',
        '1482: Moved to Milan to work for Ludovico Sforza',
        '1490s: Created The Last Supper and Vitruvian Man',
        '1503-1519: Painted Mona Lisa',
        '1516: Moved to France under patronage of Francis I',
        '1519: Died in Amboise, France'
      ],
      interestingFacts: [
        'Wrote backwards in mirror script',
        'Dissected over 30 human corpses for anatomical studies',
        'Designed flying machines, tanks, and submarines',
        'Never married or had children',
        'Mona Lisa has no visible eyebrows or eyelashes'
      ],
      booksOrWorks: [
        'Mona Lisa (1503–1519)',
        'The Last Supper (1495–1498)',
        'Vitruvian Man (c. 1490)',
        'Lady with an Ermine (1489–1490)',
        'Codex Leicester (scientific notebooks)'
      ],
      relatedPeople: [
        'Michelangelo (rival artist)',
        'Raphael (contemporary artist)',
        'Ludovico Sforza (patron)',
        'Francis I of France (patron)',
        'Andrea del Verrocchio (teacher)'
      ]
    }
  },

  // Privacy-focused entry for ordinary people
  'person': {
    scientificOrTechName: 'Human Being — Ordinary Person',
    primaryUses: 'This appears to be an ordinary person. For privacy reasons, I will not attempt to identify them or guess their identity.',
    specifications: [
      'Privacy Mode: Only visible attributes are described',
      'No personal identification or inference attempted',
      'Respects individual privacy and anonymity',
    ],
    keyFeatures: [
      'Visible attributes may include clothing, accessories, pose, and activity',
      'No assumptions about age, gender, ethnicity, or occupation',
      'Privacy-first approach to person detection',
    ],
    humanDetails: 'This is an ordinary person detected in the image. The system respects their privacy by only describing visible characteristics.',
    safetyAndLegalStatus: 'Privacy-protected detection. No personal information is collected or stored.',
    funFact: 'Modern AI systems are designed with privacy in mind to protect individuals from unauthorized identification and surveillance.',
  },

  'isaac newton': {
    scientificOrTechName: 'Sir Isaac Newton (1643–1727) – Father of Classical Physics',
    primaryUses: 'Discovered the Laws of Motion and Universal Gravitation, invented calculus (independently of Leibniz), studied optics, and revolutionized astronomy and physics.',
    specifications: [
      'Period: 1643–1727, England',
      'Key Laws: Three Laws of Motion, Universal Law of Gravitation',
      'Works: Principia Mathematica (1687), Opticks (1704)',
      'Inventions: Reflecting telescope, co-inventor of calculus',
    ],
    keyFeatures: [
      'Proved white light is made of all colors of the spectrum using a prism',
      'Predicted that Earth is slightly flattened at the poles — later confirmed!',
    ],
    humanDetails: 'English mathematician, physicist, and astronomer born in Woolsthorpe, Lincolnshire.',
    safetyAndLegalStatus: 'Global Scientific Legacy: Knighted by Queen Anne in 1705.',
    funFact: 'Newton was deeply religious and spent more time studying theology and alchemy than physics! He wrote over 1 million words on religious topics.',
    personProfile: {
      fullName: 'Sir Isaac Newton',
      profession: 'Mathematician, Physicist, Astronomer, Author',
      nationality: 'English',
      birthDate: '4 January 1643',
      deathDate: '20 March 1727',
      birthPlace: 'Woolsthorpe Manor, Lincolnshire, England',
      majorContributions: [
        'Laws of Motion',
        'Universal Law of Gravitation',
        'Calculus (co-inventor)',
        'Reflecting Telescope',
        'Theory of Light and Color'
      ],
      famousDiscoveries: [
        'Three Laws of Motion',
        'Universal Gravitation',
        'Composition of white light',
        'Law of Cooling'
      ],
      awards: [
        'Knight Bachelor (1705)',
        'President of the Royal Society (1703-1727)',
        'Lucasian Professor of Mathematics (1669-1702)'
      ],
      historicalImportance: 'Considered one of the most influential scientists of all time. His work laid the foundation for classical mechanics and revolutionized our understanding of the universe.',
      timeline: [
        '1643: Born in Woolsthorpe, England',
        '1661: Entered Trinity College, Cambridge',
        '1665-1666: Annus Mirabilis (Year of Wonders) - major discoveries',
        '1687: Published Philosophiæ Naturalis Principia Mathematica',
        '1696: Appointed Warden of the Royal Mint',
        '1703: Elected President of the Royal Society',
        '1705: Knighted by Queen Anne',
        '1727: Died in London, aged 84'
      ],
      interestingFacts: [
        'Wrote over 1 million words on theology and alchemy',
        'Was deeply religious and studied biblical prophecy',
        'Never married and died a virgin',
        'Had a bitter rivalry with Leibniz over calculus invention',
        'Conducted dangerous experiments on himself (including staring at the sun)'
      ],
      booksOrWorks: [
        'Philosophiæ Naturalis Principia Mathematica (1687)',
        'Opticks (1704)',
        'Method of Fluxions (published posthumously 1736)',
        'Arithmetica Universalis (1707)'
      ],
      relatedPeople: [
        'Gottfried Wilhelm Leibniz (rival mathematician)',
        'Edmond Halley (astronomer and supporter)',
        'Robert Hooke (scientific rival)',
        'Galileo Galilei (influenced by his work)'
      ]
    }
  },

  'napoleon bonaparte': {
    scientificOrTechName: 'Napoleon Bonaparte (1769–1821) – French Emperor and Military General',
    primaryUses: 'French military commander and emperor who conquered much of Europe. Implemented the Napoleonic Code — foundation of modern civil law worldwide.',
    specifications: [
      'Period: 1769–1821, French First Empire',
      'Major Battles: Austerlitz, Jena, Waterloo',
      'Napoleonic Code: Foundation of civil law in 40+ countries',
    ],
    keyFeatures: [
      'Napoleonic Code became the basis of law in France, Louisiana USA, Quebec, and most of Europe',
      'Shortest period from private to Emperor in European history (15 years)',
    ],
    humanDetails: 'Born in Corsica, France. Rose from military officer to Emperor of the French.',
    safetyAndLegalStatus: 'Historical Military and Legal Legacy: exiled twice — Elba and St. Helena.',
    funFact: 'Napoleon was actually average height for his time (5 feet 7 inches) — his "short" reputation was British propaganda!',
    personProfile: {
      fullName: 'Napoleon Bonaparte',
      profession: 'Military General, Emperor of the French',
      nationality: 'French (born in Corsica)',
      birthDate: '15 August 1769',
      deathDate: '5 May 1821',
      birthPlace: 'Ajaccio, Corsica, France',
      majorContributions: [
        'Napoleonic Code (civil law)',
        'Military strategy and tactics',
        'Modernization of French administration',
        'Merit-based military promotion',
        'Spread of revolutionary ideals across Europe'
      ],
      famousDiscoveries: [
        'Napoleonic Code legal system',
        'Corps d\'armée military organization',
        'Artillery tactics innovations',
        'Centralized administrative system'
      ],
      awards: [
        'Emperor of the French (1804–1814, 1815)',
        'King of Italy (1805–1814)',
        'Mediator of the Swiss Confederation (1803–1813)',
        'Protector of the Confederation of the Rhine (1806–1813)'
      ],
      historicalImportance: 'Transformed European politics and law. His military campaigns reshaped national boundaries. The Napoleonic Code remains the foundation of civil law in many countries today.',
      timeline: [
        '1769: Born in Corsica',
        '1784: Graduated from École Militaire in Paris',
        '1793: Promoted to Brigadier General after Siege of Toulon',
        '1796: Italian Campaign victories',
        '1799: Coup of 18 Brumaire, became First Consul',
        '1804: Crowned Emperor of the French',
        '1805: Victory at Battle of Austerlitz',
        '1812: Failed invasion of Russia',
        '1814: Exiled to Elba',
        '1815: Hundred Days return, defeated at Waterloo',
        '1821: Died in exile on St. Helena'
      ],
      interestingFacts: [
        'Actually average height for his time (5\'7")',
        'Spoke French with a Corsican accent',
        'Could dictate to multiple secretaries simultaneously',
        'Was exiled twice - to Elba and St. Helena',
        'Died possibly from arsenic poisoning (debated)'
      ],
      booksOrWorks: [
        'Napoleonic Code (1804)',
        'Military maxims and writings',
        'Letters and correspondence',
        'Constitution of the Year VIII (1799)'
      ],
      relatedPeople: [
        'Josephine de Beauharnais (first wife)',
        'Marie Louise (second wife)',
        'Duke of Wellington (defeated at Waterloo)',
        'Tsar Alexander I (ally turned enemy)',
        'Horatio Nelson (British admiral, enemy)'
      ]
    }
  },

  'mahatma gandhi': {
    scientificOrTechName: 'Mohandas Karamchand Gandhi (1869–1948) – Father of the Indian Nation',
    primaryUses: 'Leader of Indian Independence Movement. Pioneered nonviolent civil disobedience (Satyagraha) and inspired global freedom movements.',
    specifications: [
      'Period: 1869–1948',
      'Philosophy: Ahimsa (Non-violence) and Satyagraha (Truth-force)',
      'Key Events: Salt March (1930), Quit India Movement (1942)',
    ],
    keyFeatures: [
      'Inspired Martin Luther King Jr., Nelson Mandela, and civil rights movements globally',
      'Turned spinning wheel (charkha) into a symbol of Indian self-reliance',
    ],
    humanDetails: 'Indian lawyer and political ethicist born in Porbandar, Gujarat.',
    safetyAndLegalStatus: 'Global Peace Icon: UN observes Oct 2 as International Day of Non-Violence.',
    funFact: 'Gandhi was nominated for the Nobel Peace Prize five times but never received it — the Nobel Committee later called this their biggest regret!',
    personProfile: {
      fullName: 'Mohandas Karamchand Gandhi',
      profession: 'Lawyer, Political Activist, Freedom Fighter',
      nationality: 'Indian',
      birthDate: '2 October 1869',
      deathDate: '30 January 1948',
      birthPlace: 'Porbandar, Gujarat, India',
      majorContributions: [
        'Indian Independence Movement',
        'Nonviolent Civil Disobedience',
        'Satyagraha Philosophy',
        'Champaran and Kheda Satyagraha',
        'Salt March (Dandi March)'
      ],
      famousDiscoveries: [
        'Philosophy of Satyagraha (Truth-force)',
        'Ahimsa (Non-violence) as political weapon',
        'Swadeshi (Self-reliance) movement'
      ],
      awards: [
        'Title "Mahatma" (Great Soul) given by Rabindranath Tagore',
        'Time Magazine Person of the Year (1930)',
        'Nobel Peace Prize nominations (5 times)'
      ],
      historicalImportance: 'Led India to independence from British rule through nonviolent means. His philosophy influenced civil rights movements worldwide and remains a beacon of peace and justice.',
      timeline: [
        '1869: Born in Porbandar, Gujarat',
        '1888: Went to London to study law',
        '1893: Went to South Africa, faced racial discrimination',
        '1906: First Satyagraha campaign in South Africa',
        '1915: Returned to India',
        '1920: Launched Non-Cooperation Movement',
        '1930: Led Salt March (Dandi March)',
        '1942: Launched Quit India Movement',
        '1947: India gained independence',
        '1948: Assassinated in Delhi'
      ],
      interestingFacts: [
        'Nominated for Nobel Peace Prize 5 times but never won',
        'His birthday (Oct 2) is International Day of Non-Violence',
        'Walked 18,000 miles during his lifetime',
        'Wore only dhoti woven from khadi (hand-spun cloth)',
        'Corresponded with Leo Tolstoy and influenced by his ideas'
      ],
      booksOrWorks: [
        'The Story of My Experiments with Truth (Autobiography)',
        'Hind Swaraj (Indian Home Rule)',
        'Key to Health',
        'Non-Violence in Peace and War'
      ],
      relatedPeople: [
        'Jawaharlal Nehru (first PM of India)',
        'Sardar Vallabhbhai Patel (deputy PM)',
        'Martin Luther King Jr. (influenced by Gandhi)',
        'Nelson Mandela (influenced by Gandhi)',
        'Rabindranath Tagore (gave him "Mahatma" title)'
      ]
    }
  },

  'albert einstein': {
    scientificOrTechName: 'Albert Einstein (1879–1955) – Theoretical Physicist, Nobel Laureate',
    primaryUses: 'Developed the Theory of General and Special Relativity (E=mc²), explained the photoelectric effect, and revolutionized our understanding of space, time, and energy.',
    specifications: [
      'Nobel Prize: Physics 1921 (Photoelectric Effect)',
      'Key Works: Special Relativity (1905), General Relativity (1915)',
      'Famous equation: E = mc²',
    ],
    keyFeatures: [
      'E=mc² proved that mass and energy are interchangeable — basis of nuclear energy',
      'Predicted gravitational waves in 1916 — confirmed by LIGO 100 years later in 2016!',
    ],
    humanDetails: 'German-born physicist who became a Swiss and American citizen. Born in Ulm, Germany.',
    safetyAndLegalStatus: 'Global Scientific Heritage: Fled Nazi Germany in 1933 and helped initiate the Manhattan Project.',
    funFact: 'Einstein\'s brain was secretly preserved after his death in 1955 and studied by scientists — it had unusually large parietal lobes linked to mathematical thinking!',
    personProfile: {
      fullName: 'Albert Einstein',
      profession: 'Theoretical Physicist, Mathematician',
      nationality: 'German-born, later Swiss and American citizen',
      birthDate: '14 March 1879',
      deathDate: '18 April 1955',
      birthPlace: 'Ulm, Kingdom of Württemberg, German Empire',
      majorContributions: [
        'Theory of Special Relativity',
        'Theory of General Relativity',
        'Photoelectric Effect explanation',
        'Mass-energy equivalence (E=mc²)',
        'Brownian motion explanation'
      ],
      famousDiscoveries: [
        'E = mc² (mass-energy equivalence)',
        'Special Relativity (time dilation, length contraction)',
        'General Relativity (gravity as spacetime curvature)',
        'Photoelectric effect (quantum mechanics foundation)',
        'Gravitational waves prediction'
      ],
      awards: [
        'Nobel Prize in Physics (1921)',
        'Copley Medal (1925)',
        'Max Planck Medal (1929)',
        'Time Magazine Person of the Century (1999)'
      ],
      historicalImportance: 'Revolutionized our understanding of space, time, gravity, and the universe. His work laid the foundation for modern physics, quantum mechanics, and nuclear energy.',
      timeline: [
        '1879: Born in Ulm, Germany',
        '1896: Entered ETH Zurich',
        '1900: Graduated as physics teacher',
        '1902: Technical assistant at Swiss Patent Office',
        '1905: Annus Mirabilis - published 4 groundbreaking papers',
        '1915: Completed General Theory of Relativity',
        '1921: Won Nobel Prize in Physics',
        '1933: Fled Nazi Germany to USA',
        '1939: Signed letter to FDR about atomic bomb',
        '1955: Died in Princeton, New Jersey'
      ],
      interestingFacts: [
        'Brain preserved after death for scientific study',
        'Failed his first college entrance exam',
        'Did not speak until age 4, leading parents to worry he was slow',
        'Offered presidency of Israel in 1952 but declined',
        'Had a habit of not wearing socks'
      ],
      booksOrWorks: [
        'On the Electrodynamics of Moving Bodies (1905)',
        'Does the Inertia of a Body Depend Upon Its Energy Content? (1905)',
        'The Foundation of the General Theory of Relativity (1916)',
        'Relativity: The Special and General Theory (1916)',
        'The World As I See It (1949)'
      ],
      relatedPeople: [
        'Marie Curie (colleague and friend)',
        'Niels Bohr (debated quantum mechanics)',
        'Max Planck (mentor and colleague)',
        'Stephen Hawking (held same Cambridge chair)',
        'J. Robert Oppenheimer (Manhattan Project)'
      ]
    }
  },

  'stephen hawking': {
    scientificOrTechName: 'Stephen William Hawking (1942–2018) – Theoretical Physicist and Cosmologist',
    primaryUses: 'Pioneered research on black holes, Hawking radiation, and quantum cosmology. Wrote "A Brief History of Time" — sold over 25 million copies worldwide.',
    specifications: [
      'Fields: Theoretical Physics, Cosmology, Quantum Gravity',
      'Diagnosis: ALS (Motor Neurone Disease) at age 21; lived 55 more years',
      'Key Works: A Brief History of Time (1988), The Grand Design (2010)',
    ],
    keyFeatures: [
      'Hawking Radiation: Proved black holes emit thermal radiation and eventually evaporate',
      'Communicated entirely via a speech-generating device using cheek muscle twitches',
    ],
    humanDetails: 'British physicist born in Oxford. Diagnosed with ALS at 21 and given 2 years to live.',
    safetyAndLegalStatus: 'Scientific Legacy: Held the same Lucasian Chair of Mathematics as Isaac Newton at Cambridge.',
    funFact: 'Hawking once hosted a party for time travelers but only sent out invitations AFTER the party — nobody showed up, which he used as proof that time travel to the past is impossible!',
    personProfile: {
      fullName: 'Stephen William Hawking',
      profession: 'Theoretical Physicist, Cosmologist, Author',
      nationality: 'British',
      birthDate: '8 January 1942',
      deathDate: '14 March 2018',
      birthPlace: 'Oxford, England',
      majorContributions: [
        'Hawking Radiation theory',
        'Black hole thermodynamics',
        'Quantum cosmology',
        'Popular science writing',
        'Disability rights advocacy'
      ],
      famousDiscoveries: [
        'Hawking Radiation (black holes emit radiation)',
        'Black hole information paradox',
        'No-boundary proposal for universe origin',
        'Primordial black holes theory'
      ],
      awards: [
        'Presidential Medal of Freedom (2009)',
        'Copley Medal (2006)',
        'Fellow of the Royal Society',
        'Lucasian Professor of Mathematics (1979-2009)'
      ],
      historicalImportance: 'Made complex physics accessible to millions through his books. Overcame severe disability to become one of the most influential scientists of his generation.',
      timeline: [
        '1942: Born in Oxford, England',
        '1962: Graduated from Oxford, entered Cambridge',
        '1963: Diagnosed with ALS at age 21',
        '1966: Completed PhD thesis',
        '1974: Discovered Hawking Radiation',
        '1979: Became Lucasian Professor of Mathematics',
        '1988: Published A Brief History of Time',
        '2009: Awarded Presidential Medal of Freedom',
        '2018: Died in Cambridge, aged 76'
      ],
      interestingFacts: [
        'Hosted time traveler party with invitations sent after the event',
        'Appeared on The Simpsons, Star Trek, and The Big Bang Theory',
        'Bet against himself that black holes don\'t exist (later conceded)',
        'Zero-gravity flight in 2007 at age 65',
        'Lived 55 years with ALS after being given 2 years to live'
      ],
      booksOrWorks: [
        'A Brief History of Time (1988)',
        'The Universe in a Nutshell (2001)',
        'The Grand Design (2010)',
        'Brief Answers to the Big Questions (2018)',
        'On the Shoulders of Giants (2002)'
      ],
      relatedPeople: [
        'Isaac Newton (held same Cambridge chair)',
        'Albert Einstein (built upon his work)',
        'Roger Penrose (collaborator on singularity theory)',
        'Kip Thorne (collaborator on black hole research)',
        'Jane Hawking (first wife and caregiver)'
      ]
    }
  },

  'subhas chandra bose': {
    scientificOrTechName: 'Netaji Subhas Chandra Bose (1897–1945) – Indian Freedom Fighter',
    primaryUses: 'Formed the Indian National Army (INA) to fight British colonial rule through armed resistance. Inspired millions with the call "Give me blood, and I shall give you freedom!"',
    specifications: [
      'Period: 1897–1945',
      'Led: Indian National Army (Azad Hind Fauj)',
      'Founded: Forward Bloc political party',
    ],
    keyFeatures: [
      'Organized Indian POWs in Southeast Asia into a fighting force against the British',
      'Escaped British house arrest by disguising himself as a Pathan trader',
    ],
    humanDetails: 'Indian nationalist leader born in Cuttack, Odisha. President of the Indian National Congress in 1938–39.',
    safetyAndLegalStatus: 'National Hero: Honored with Bharat Ratna posthumously; Parakram Diwas (Jan 23) celebrates his birth.',
    funFact: 'Netaji escaped from British India disguised as "Mohammad Ziauddin" — traveled through Afghanistan and Soviet Union to reach Nazi Germany to seek Hitler\'s support for India\'s independence!',
    personProfile: {
      fullName: 'Subhas Chandra Bose',
      profession: 'Freedom Fighter, Political Leader',
      nationality: 'Indian',
      birthDate: '23 January 1897',
      deathDate: '18 August 1945 (disappeared)',
      birthPlace: 'Cuttack, Odisha, India',
      majorContributions: [
        'Indian National Army (INA) formation',
        'Forward Bloc political party',
        'Armed resistance against British rule',
        'Azad Hind government',
        'Revolutionary independence movement'
      ],
      famousDiscoveries: [
        'Organized INA with Japanese support',
        'Established Azad Hind government in exile',
        'Inspired armed resistance movement',
        'Mobilized Indian diaspora for independence'
      ],
      awards: [
        'Bharat Ratna (posthumous, 1992)',
        'Parakram Diwas celebrated annually on January 23',
        'Netaji Subhas Chandra Bose Jayanti'
      ],
      historicalImportance: 'One of India\'s most influential freedom fighters. His call for armed resistance inspired millions. His mysterious disappearance remains one of India\'s greatest historical mysteries.',
      timeline: [
        '1897: Born in Cuttack, Odisha',
        '1919: Passed Indian Civil Service examination',
        '1921: Resigned from ICS to join independence movement',
        '1938: Elected President of Indian National Congress',
        '1939: Resigned from INC, founded Forward Bloc',
        '1941: Escaped house arrest, reached Germany',
        '1942: Reached Japan, took command of INA',
        '1943: Established Azad Hind government',
        '1944: INA marched toward India',
        '1945: Disappeared after plane crash in Taiwan'
      ],
      interestingFacts: [
        'Escaped British India disguised as Pathan trader',
        'Traveled through Afghanistan, USSR, Germany, Japan',
        'Sought Hitler\'s support for Indian independence',
        'INA had over 40,000 soldiers',
        'Disappearance remains unsolved mystery'
      ],
      booksOrWorks: [
        'The Indian Struggle (1920–1942)',
        'Letters to family and colleagues',
        'Speeches and writings',
        'Azad Hind radio broadcasts'
      ],
      relatedPeople: [
        'Mahatma Gandhi (ideological differences)',
        'Jawaharlal Nehru (colleague)',
        'Rash Behari Bose (mentor)',
        'Emperor Hirohito (Japanese support)',
        'Adolf Hitler (sought support)'
      ]
    }
  },

  'bhagat singh': {
    scientificOrTechName: 'Bhagat Singh (1907–1931) – Revolutionary Indian Freedom Fighter',
    primaryUses: 'Revolutionary socialist who fought against British colonial rule. Famous for the 1929 Central Legislative Assembly bombing as a protest against oppressive laws.',
    specifications: [
      'Period: 1907–1931',
      'Key Actions: Lahore Conspiracy Case, Central Assembly bombing (1929)',
      'Hanged at age 23 by British colonial government',
    ],
    keyFeatures: [
      'Shouted "Inquilab Zindabad!" (Long live the revolution!) in court during his trial',
      'Read extensively in jail — philosophy, socialist theory, world history',
    ],
    humanDetails: 'Revolutionary Indian independence activist born in Banga, Punjab (now Pakistan).',
    safetyAndLegalStatus: 'National Martyr: Shaheed-e-Azam. Executed March 23, 1931.',
    funFact: 'Bhagat Singh was only 23 years old when he was hanged — making him one of the youngest martyrs in India\'s independence struggle!',
    personProfile: {
      fullName: 'Bhagat Singh',
      profession: 'Revolutionary Freedom Fighter',
      nationality: 'Indian',
      birthDate: '28 September 1907',
      deathDate: '23 March 1931',
      birthPlace: 'Banga, Punjab, British India (now Pakistan)',
      majorContributions: [
        'Revolutionary independence movement',
        'Socialist ideology in Indian freedom struggle',
        'Central Legislative Assembly bombing (protest)',
        'Inspiration for youth in independence movement',
        'Martyrdom for freedom'
      ],
      famousDiscoveries: [
        'Revolutionary tactics against British rule',
        'Socialist approach to independence',
        'Youth mobilization for freedom struggle'
      ],
      awards: [
        'Shaheed-e-Azam (Great Martyr)',
        'March 23 observed as Martyrs Day',
        'National hero status in India'
      ],
      historicalImportance: 'Icon of revolutionary nationalism. His martyrdom at age 23 inspired millions of Indians to join the freedom struggle. His socialist vision influenced India\'s political landscape.',
      timeline: [
        '1907: Born in Banga, Punjab',
        '1923: Joined National College, Lahore',
        '1928: Founded Hindustan Socialist Republican Association',
        '1929: Central Assembly bombing (protest)',
        '1930: Arrested and tried',
        '1931: Hanged at age 23 with Rajguru and Sukhdev'
      ],
      interestingFacts: [
        'Only 23 when hanged',
        'Read 40 books in jail during 2-year imprisonment',
        'Fasted for 63 days in jail',
        'Shouted "Inquilab Zindabad!" in court',
        'Inspired countless freedom fighters'
      ],
      booksOrWorks: [
        'Why I Am an Atheist (essay)',
        'Jail notebooks and writings',
        'Letters to family and comrades',
        'Revolutionary manifestos'
      ],
      relatedPeople: [
        'Sukhdev Thapar (martyred with him)',
        'Shivaram Rajguru (martyred with him)',
        'Chandrashekhar Azad (HSRA founder)',
        'Lala Lajpat Rai (mentor figure)',
        'Mahatma Gandhi (ideological differences)'
      ]
    }
  },

  'jawaharlal nehru': {
    scientificOrTechName: 'Pandit Jawaharlal Nehru (1889–1964) – First Prime Minister of India',
    primaryUses: 'First Prime Minister of independent India (1947–1964). Shaped India\'s foreign policy, founded the Non-Aligned Movement, and championed scientific development.',
    specifications: [
      'Period in Office: 1947–1964',
      'Initiatives: Indian Institutes of Technology (IITs), AIIMS, Atomic Energy Commission',
      'Foreign Policy: Non-Aligned Movement (NAM) founder',
    ],
    keyFeatures: [
      'Authored "Discovery of India" while imprisoned by British',
      'Championed secular democracy and scientific temper',
      'Established India as leader of the Non-Aligned Movement',
    ],
    humanDetails: 'Indian independence activist born in Allahabad. Close associate of Mahatma Gandhi.',
    safetyAndLegalStatus: 'National Leader: First PM of independent India. Birthday (Nov 14) celebrated as Children\'s Day.',
    funFact: 'Nehru was so fond of children that his birthday November 14 is celebrated as Children\'s Day in India — he was often called "Chacha Nehru" (Uncle Nehru) by kids!',
    personProfile: {
      fullName: 'Jawaharlal Nehru',
      profession: 'Politician, Independence Activist, First Prime Minister of India',
      nationality: 'Indian',
      birthDate: '14 November 1889',
      deathDate: '27 May 1964',
      birthPlace: 'Allahabad, North-Western Provinces, British India',
      majorContributions: [
        'First Prime Minister of India (1947–1964)',
        'Non-Aligned Movement co-founder',
        'IITs and AIIMS establishment',
        'Indian Constitution drafting',
        'Secular democratic foundation'
      ],
      famousDiscoveries: [
        'Non-Aligned Movement foreign policy',
        'Five-Year Plans for economic development',
        'Scientific and industrial development',
        'Mixed economy model'
      ],
      awards: [
        'Bharat Ratna (1955)',
        'Children\'s Day celebrated on his birthday',
        'First Prime Minister of India'
      ],
      historicalImportance: 'Architect of modern India. Established democratic institutions, secular values, and scientific infrastructure. His vision shaped India\'s path as a leader of the developing world.',
      timeline: [
        '1889: Born in Allahabad',
        '1912: Returned from England, joined Bar',
        '1919: Joined Indian National Congress',
        '1920: Imprisoned for first time',
        '1942: Quit India Movement leader',
        '1946: Interim Prime Minister',
        '1947: First Prime Minister of independent India',
        '1955: Founded Non-Aligned Movement',
        '1964: Died in office'
      ],
      interestingFacts: [
        'Birthday celebrated as Children\'s Day',
        'Wrote Discovery of India in prison',
        'Wore rose in coat buttonhole',
        'Loved children, called Chacha Nehru',
        'Spent over 9 years in British jails'
      ],
      booksOrWorks: [
        'The Discovery of India (1946)',
        'Glimpses of World History (1934)',
        'An Autobiography (1936)',
        'Letters from a Father to His Daughter'
      ],
      relatedPeople: [
        'Mahatma Gandhi (mentor)',
        'Indira Gandhi (daughter, successor)',
        'Sardar Patel (colleague)',
        'B.R. Ambedkar (colleague)',
        'Edwina Mountbatten (friend)'
      ]
    }
  },

  'dr. br ambedkar': {
    scientificOrTechName: 'Dr. B.R. Ambedkar (1891–1956) – Chief Architect of Indian Constitution',
    primaryUses: 'Chief architect of the Indian Constitution. Social reformer who fought against caste discrimination and untouchability. Father of Indian social justice.',
    specifications: [
      'Period: 1891–1956',
      'Role: Chairman of the Drafting Committee of Indian Constitution',
      'Degrees: Columbia University PhD, London School of Economics DSc',
    ],
    keyFeatures: [
      'Wrote India\'s Constitution — hailed as the world\'s longest democratic constitution',
      'Founded the Republican Party of India and converted to Buddhism with 600,000 followers',
    ],
    humanDetails: 'Born in Mhow, Madhya Pradesh. Son of a Mahar army officer who faced severe caste discrimination.',
    safetyAndLegalStatus: 'National Hero: Bharat Ratna (1990 posthumously). Babasaheb is revered as a symbol of social justice.',
    funFact: 'Dr. Ambedkar had more degrees than any other Indian statesman — MA, MSc, PhD (Columbia), DSc (LSE), Barrister-at-Law, LLD, and DLitt!',
    personProfile: {
      fullName: 'Dr. Bhimrao Ramji Ambedkar',
      profession: 'Social Reformer, Jurist, Economist, Politician',
      nationality: 'Indian',
      birthDate: '14 April 1891',
      deathDate: '6 December 1956',
      birthPlace: 'Mhow, Central Provinces, British India (now Madhya Pradesh)',
      majorContributions: [
        'Indian Constitution architect',
        'Anti-untouchability movement',
        'Social justice and equality',
        'Reservation system for marginalized communities',
        'Buddhist revival in India'
      ],
      famousDiscoveries: [
        'Indian Constitution drafting',
        'Mahad Satyagraha (water rights)',
        'Kalaram Temple entry movement',
        'Annihilation of Caste essay',
        'Conversion to Buddhism with followers'
      ],
      awards: [
        'Bharat Ratna (posthumous, 1990)',
        'Highest civilian award',
        'Father of Indian Constitution',
        'Babasaheb (revered title)'
      ],
      historicalImportance: 'Father of the Indian Constitution and champion of social justice. His fight against caste discrimination transformed Indian society. His vision of equality and justice continues to guide India.',
      timeline: [
        '1891: Born in Mhow',
        '1908: Matriculated, faced caste discrimination',
        '1913: Went to Columbia University',
        '1916: PhD from Columbia University',
        '1923: DSc from London School of Economics',
        '1927: Mahad Satyagraha for water rights',
        '1947: Chairman of Constitution Drafting Committee',
        '1950: Indian Constitution adopted',
        '1956: Converted to Buddhism with 600,000 followers'
      ],
      interestingFacts: [
        'Had 7 degrees including PhD and DSc',
        'Learned 9 languages',
        'Converted to Buddhism with 600,000 followers',
        'Faced severe caste discrimination throughout education',
        'Memorial at Chaitya Bhoomi in Mumbai'
      ],
      booksOrWorks: [
        'Annihilation of Caste (1936)',
        'The Problem of the Rupee (1923)',
        'Thoughts on Pakistan (1940)',
        'Waiting for a Visa (autobiography)',
        'Buddha and His Dhamma (1957)'
      ],
      relatedPeople: [
        'Mahatma Gandhi (ideological differences)',
        'Jawaharlal Nehru (colleague)',
        'Sardar Patel (colleague)',
        'John Dewey (teacher at Columbia)',
        'Savarkar (contemporary)'
      ]
    }
  },

  'chandrababu naidu': {
    scientificOrTechName: 'N. Chandrababu Naidu – Present Chief Minister of Andhra Pradesh',
    primaryUses: 'Chief Minister of Andhra Pradesh (CM 2024–present, also 1995–2004 and 2014–2019). Pioneered IT revolution in South India and digital governance.',
    specifications: [
      'Current Position: Chief Minister of Andhra Pradesh (2024–present)',
      'Political Party: Telugu Desam Party (TDP) President',
      'Key Achievements: HITEC City Hyderabad, Amaravati Capital City, e-governance',
    ],
    keyFeatures: [
      'Convinced Bill Gates to establish Microsoft\'s first overseas R&D center in Hyderabad',
      'Time Magazine South Asian of the Year 1999 for tech-driven governance',
    ],
    humanDetails: 'Indian statesman born in Naravaripalle, Chittoor district, Andhra Pradesh.',
    safetyAndLegalStatus: 'Current Head of State: Chief Minister of Andhra Pradesh.',
    funFact: 'Chandrababu Naidu is called the "CEO of Andhra Pradesh" — he transformed a traditional government office into a corporate-style administration!',
    personProfile: {
      fullName: 'Nara Chandrababu Naidu',
      profession: 'Politician, Chief Minister',
      nationality: 'Indian',
      birthDate: '20 April 1950',
      deathDate: 'Present',
      birthPlace: 'Naravaripalle, Chittoor district, Andhra Pradesh, India',
      majorContributions: [
        'HITEC City Hyderabad development',
        'Amaravati capital city construction',
        'E-governance and digital infrastructure',
        'IT revolution in South India',
        'Agricultural reforms'
      ],
      famousDiscoveries: [
        'Tech-driven governance model',
        'Public-private partnerships',
        'Digital administration systems',
        'Smart city initiatives'
      ],
      awards: [
        'Time Magazine South Asian of the Year (1999)',
        'Chief Minister of Andhra Pradesh (multiple terms)',
        'TDP Party President'
      ],
      historicalImportance: 'Pioneer of IT revolution in India. Transformed Hyderabad into a global IT hub. His governance model influenced digital transformation across Indian states.',
      timeline: [
        '1950: Born in Naravaripalle',
        '1978: Entered politics',
        '1995: Became Chief Minister of Andhra Pradesh',
        '1999: Time South Asian of the Year',
        '2004: Lost election',
        '2014: Returned as CM, bifurcation of Andhra Pradesh',
        '2019: Lost election',
        '2024: Re-elected as CM of Andhra Pradesh'
      ],
      interestingFacts: [
        'Called "CEO of Andhra Pradesh"',
        'Convinced Bill Gates for Microsoft R&D in Hyderabad',
        'Transformed Hyderabad into IT hub',
        'Corporate-style governance approach',
        'Longest-serving CM of undivided Andhra Pradesh'
      ],
      booksOrWorks: [
        'Governance and development policies',
        'Digital India initiatives',
        'Agricultural reform documents'
      ],
      relatedPeople: [
        'N.T. Rama Rao (mentor)',
        'Bill Gates (collaborator)',
        'Narendra Modi (colleague)',
        'Jagan Mohan Reddy (political opponent)'
      ]
    }
  },

  'narendra modi': {
    scientificOrTechName: 'Narendra Damodardas Modi – Prime Minister of India',
    primaryUses: '14th Prime Minister of India (2014–present). Launched Digital India, Make in India, Swachh Bharat Abhiyan, UPI payments, and positioned India as 5th largest economy.',
    specifications: [
      'Current Role: Prime Minister of Republic of India (2014–present)',
      'Previous Role: CM of Gujarat (2001–2014)',
      'Flagship Schemes: Digital India, UPI, Jan Dhan, Ayushman Bharat',
    ],
    keyFeatures: [
      'India accounts for 46% of all global real-time digital payments under UPI initiative',
      'Led India through G20 Presidency 2023 under theme "Vasudhaiva Kutumbakam"',
    ],
    humanDetails: 'Indian statesman born in Vadnagar, Gujarat. Started as a tea-seller.',
    safetyAndLegalStatus: 'Head of Government: Prime Minister of Republic of India.',
    funFact: 'PM Modi sleeps only 4 to 5 hours a night and reportedly reads government files until midnight daily!',
    personProfile: {
      fullName: 'Narendra Damodardas Modi',
      profession: 'Politician, Prime Minister of India',
      nationality: 'Indian',
      birthDate: '17 September 1950',
      deathDate: 'Present',
      birthPlace: 'Vadnagar, Bombay State (now Gujarat), India',
      majorContributions: [
        'Digital India initiative',
        'UPI payment system',
        'Make in India manufacturing',
        'Swachh Bharat Abhiyan',
        'G20 Presidency 2023'
      ],
      famousDiscoveries: [
        'Unified Payments Interface (UPI)',
        'Digital governance model',
        'International diplomatic outreach',
        'Economic reforms'
      ],
      awards: [
        'Prime Minister of India (2014–present)',
        'Chief Minister of Gujarat (2001–2014)',
        'Order of Abdulaziz Al Saud (Saudi Arabia)',
        'State Order of Ghazi Amir Amanullah Khan (Afghanistan)'
      ],
      historicalImportance: 'Transformed India into the 5th largest economy. Championed digital transformation and international diplomacy. His initiatives like UPI revolutionized digital payments globally.',
      timeline: [
        '1950: Born in Vadnagar, Gujarat',
        '1971: Joined RSS as pracharak',
        '2001: Became CM of Gujarat',
        '2014: Elected Prime Minister of India',
        '2016: Demonetization of high-value currency',
        '2019: Re-elected PM with larger majority',
        '2023: G20 Presidency',
        '2024: Third term as PM'
      ],
      interestingFacts: [
        'Started as tea-seller',
        'Sleeps 4-5 hours per night',
        'Reads government files until midnight',
        'First PM born after independence',
        'Most followed world leader on social media'
      ],
      booksOrWorks: [
        'Exam Warriors (book for students)',
        'Letters to mother',
        'Speeches and addresses',
        'Mann Ki Baat radio addresses'
      ],
      relatedPeople: [
        'Amit Shah (Home Minister, close associate)',
        'Sardar Patel (inspiration)',
        'Swami Vivekananda (inspiration)',
        'Barack Obama (diplomatic relationship)',
        'Donald Trump (diplomatic relationship)'
      ]
    }
  },

  'dr. apj abdul kalam': {
    scientificOrTechName: 'Dr. A.P.J. Abdul Kalam (1931–2015) – Missile Man of India, 11th President',
    primaryUses: 'Aerospace scientist who developed India\'s first Satellite Launch Vehicle and Agni and Prithvi missile systems. Served as 11th President of India (2002–2007).',
    specifications: [
      'Period: 1931–2015',
      'Role: Aerospace Scientist, DRDO and ISRO',
      'Achievements: SLV-III, Agni, Prithvi missile programs; Bharat Ratna 1997',
    ],
    keyFeatures: [
      'Called "People\'s President" for visiting schools and colleges during his presidency',
      'Co-invented Kalam-Raju Stent — affordable heart stent using aerospace materials',
    ],
    humanDetails: 'Born in Rameswaram, Tamil Nadu. Son of a boat owner who rented boats to pilgrims.',
    safetyAndLegalStatus: 'National Hero: Bharat Ratna (1997); DRDO and ISRO legend.',
    funFact: 'Dr. Kalam passed away while delivering a lecture to students at IIM Shillong on July 27, 2015 — he died doing what he loved most: inspiring young people!',
    personProfile: {
      fullName: 'Avul Pakir Jainulabdeen Abdul Kalam',
      profession: 'Aerospace Scientist, 11th President of India',
      nationality: 'Indian',
      birthDate: '15 October 1931',
      deathDate: '27 July 2015',
      birthPlace: 'Rameswaram, Madras Presidency (now Tamil Nadu), India',
      majorContributions: [
        'SLV-III satellite launch vehicle',
        'Agni and Prithvi missile systems',
        'Pokhran-II nuclear tests',
        'People\'s President (2002–2007)',
        'Youth inspiration and education advocacy'
      ],
      famousDiscoveries: [
        'India\'s first indigenous satellite launch vehicle',
        'Ballistic missile technology',
        'Kalam-Raju Stent (affordable heart stent)',
        'Nuclear weapons program leadership'
      ],
      awards: [
        'Bharat Ratna (1997)',
        'Padma Vibhushan (1990)',
        'Padma Bhushan (1981)',
        '11th President of India (2002–2007)'
      ],
      historicalImportance: 'Missile Man of India who transformed India\'s defense capabilities. As People\'s President, he inspired millions of youth. His vision for India continues to guide the nation.',
      timeline: [
        '1931: Born in Rameswaram',
        '1958: Joined DRDO',
        '1969: Transferred to ISRO',
        '1980: SLV-III successful launch',
        '1992: Scientific Advisor to Defence Minister',
        '1998: Pokhran-II nuclear tests',
        '2002: Elected 11th President of India',
        '2015: Died while lecturing at IIM Shillong'
      ],
      interestingFacts: [
        'Died while lecturing to students',
        'Called "People\'s President"',
        'Co-invented affordable heart stent',
        'Never owned a TV or refrigerator',
        'Received honorary doctorates from 48 universities'
      ],
      booksOrWorks: [
        'Wings of Fire (autobiography)',
        'India 2020',
        'Ignited Minds',
        'Target 3 Billion',
        'The Luminous Sparks'
      ],
      relatedPeople: [
        'Vikram Sarabhai (mentor at ISRO)',
        'Satish Dhawan (colleague)',
        'A.P.J. Abdul Kalam (brother)',
        'Manmohan Singh (PM during presidency)'
      ]
    }
  },

  'elon musk': {
    scientificOrTechName: 'Elon Reeve Musk (1971–present) – Entrepreneur and Technology Visionary',
    primaryUses: 'CEO of Tesla, SpaceX, xAI, and owner of X (Twitter). Pioneering electric vehicles, reusable rockets, neural interfaces (Neuralink), and AI.',
    specifications: [
      'Companies: Tesla (EV), SpaceX (rockets), xAI (Grok AI), Neuralink (brain chips), The Boring Company',
      'Net Worth: Often ranked world\'s richest person',
      'Goal: Make humanity multi-planetary via Mars colonization',
    ],
    keyFeatures: [
      'SpaceX became first private company to send humans to the International Space Station',
      'Tesla made electric cars mainstream and accelerated global EV adoption',
    ],
    humanDetails: 'Born in Pretoria, South Africa. Moved to Canada then USA. Self-made tech billionaire.',
    safetyAndLegalStatus: 'CEO of multiple global corporations. US citizen.',
    funFact: 'Elon Musk taught himself computer programming using books from a library and sold his first game "Blastar" at age 12 for just $500!',
    personProfile: {
      fullName: 'Elon Reeve Musk',
      profession: 'Entrepreneur, CEO, Engineer',
      nationality: 'South African-born, Canadian, American',
      birthDate: '28 June 1971',
      deathDate: 'Present',
      birthPlace: 'Pretoria, South Africa',
      majorContributions: [
        'Tesla electric vehicles',
        'SpaceX reusable rockets',
        'Starlink satellite internet',
        'Neuralink brain-computer interfaces',
        'xAI artificial intelligence'
      ],
      famousDiscoveries: [
        'Reusable rocket technology',
        'Electric vehicle mainstream adoption',
        'Autonomous driving technology',
        'Satellite internet constellation'
      ],
      awards: [
        'Time Magazine Person of the Year (2021)',
        'Fellow of the Royal Society',
        'Multiple honorary doctorates',
        'World\'s richest person (multiple times)'
      ],
      historicalImportance: 'Visionary entrepreneur revolutionizing multiple industries simultaneously. His work on electric vehicles and space exploration is reshaping humanity\'s future.',
      timeline: [
        '1971: Born in Pretoria, South Africa',
        '1995: Co-founded Zip2',
        '1999: Co-founded X.com (later PayPal)',
        '2002: Founded SpaceX',
        '2004: Joined Tesla as chairman',
        '2008: Became Tesla CEO',
        '2015: Founded OpenAI',
        '2016: Founded Neuralink and The Boring Company',
        '2022: Acquired Twitter (now X)',
        '2023: Founded xAI'
      ],
      interestingFacts: [
        'Sold first game at age 12 for $500',
        'Self-taught programmer',
        'Goal to make humanity multi-planetary',
        'Time Person of the Year 2021',
        'Owns approximately 20% of Tesla'
      ],
      booksOrWorks: [
        'Tesla Master Plan',
        'SpaceX presentations',
        'X platform policies',
        'AI safety research'
      ],
      relatedPeople: [
        'Peter Thiel (PayPal co-founder)',
        'Grimes (former partner)',
        'Kimbal Musk (brother)',
        'Errol Musk (father)',
        'Maye Musk (mother)'
      ]
    }
  },

  'bill gates': {
    scientificOrTechName: 'William Henry Gates III (1955–present) – Co-Founder of Microsoft',
    primaryUses: 'Co-founded Microsoft Corporation. Developed MS-DOS and Windows operating system. Now runs the Bill and Melinda Gates Foundation — the world\'s largest private charitable foundation.',
    specifications: [
      'Company: Microsoft (Co-founder, Chairman, CEO 1975–2008)',
      'Net Worth: Consistently top 5 richest persons globally',
      'Philanthropy: Bill & Melinda Gates Foundation focused on global health and poverty',
    ],
    keyFeatures: [
      'Windows OS runs on over 75% of all personal computers worldwide',
      'Foundation has spent over $50 billion fighting polio, malaria, and HIV',
    ],
    humanDetails: 'Born in Seattle, Washington. Dropped out of Harvard to co-found Microsoft.',
    safetyAndLegalStatus: 'Tech Industry Leader: US citizen, philanthropist.',
    funFact: 'Bill Gates reads approximately 50 books per year — that\'s about one book per week! He keeps a reading journal with detailed notes.',
    personProfile: {
      fullName: 'William Henry Gates III',
      profession: 'Software Developer, Investor, Philanthropist',
      nationality: 'American',
      birthDate: '28 October 1955',
      deathDate: 'Present',
      birthPlace: 'Seattle, Washington, USA',
      majorContributions: [
        'Microsoft Corporation co-founder',
        'Windows operating system',
        'Personal computer revolution',
        'Global health philanthropy',
        'Climate change initiatives'
      ],
      famousDiscoveries: [
        'MS-DOS operating system',
        'Windows graphical interface',
        'Microsoft Office suite',
        'Philanthropic giving pledge'
      ],
      awards: [
        'Presidential Medal of Freedom (2016)',
        'Knight Commander of the Order of the British Empire',
        'Bharat Ratna (proposed)',
        'Multiple honorary doctorates'
      ],
      historicalImportance: 'Pioneered the personal computer revolution through Microsoft Windows. Now focuses on global health and education through philanthropy. His foundation has saved millions of lives.',
      timeline: [
        '1955: Born in Seattle',
        '1973: Entered Harvard University',
        '1975: Dropped out, co-founded Microsoft',
        '1980: IBM partnership for MS-DOS',
        '1985: Windows 1.0 released',
        '2000: Stepped down as CEO',
        '2008: Left Microsoft full-time',
        '2010: Giving Pledge commitment',
        '2015: World\'s richest person'
      ],
      interestingFacts: [
        'Reads 50 books per year',
        'Dropped out of Harvard',
        'First billionaire at age 31',
        'Giving Pledge with Warren Buffett',
        'Foundation spent over $50 billion'
      ],
      booksOrWorks: [
        'The Road Ahead (1995)',
        'Business @ the Speed of Thought (1999)',
        'How to Avoid a Climate Disaster (2021)',
        'Gates Notes blog'
      ],
      relatedPeople: [
        'Paul Allen (Microsoft co-founder)',
        'Melinda Gates (ex-wife, foundation co-chair)',
        'Warren Buffett (friend, Giving Pledge)',
        'Steve Ballmer (Microsoft CEO successor)',
        'Satya Nadella (current Microsoft CEO)'
      ]
    }
  },

  'steve jobs': {
    scientificOrTechName: 'Steve Jobs (1955–2011) – Co-Founder of Apple Inc.',
    primaryUses: 'Co-founded Apple Inc., pioneered the personal computer, Macintosh, iPod, iPhone, iPad, and iTunes. Revolutionized music, phones, computing, and retail.',
    specifications: [
      'Companies: Apple Inc. (co-founder), Pixar Animation Studios (chairman)',
      'Key Products: Macintosh (1984), iMac, iPod, iPhone (2007), iPad, App Store',
      'Quote: "Stay hungry, stay foolish"',
    ],
    keyFeatures: [
      'iPhone revolutionized smartphones and mobile computing',
      'Pixar produced Toy Story — first fully computer-animated feature film',
    ],
    humanDetails: 'Born in San Francisco, adopted by Paul and Clara Jobs. Dropped out of Reed College.',
    safetyAndLegalStatus: 'Tech Industry Legend: US citizen. Apple became world\'s most valuable company.',
    funFact: 'Steve Jobs was fired from Apple in 1985, returned in 1997, and led Apple from near-bankruptcy to becoming the world\'s most valuable company!',
    personProfile: {
      fullName: 'Steven Paul Jobs',
      profession: 'Entrepreneur, Business Magnate, Industrial Designer',
      nationality: 'American',
      birthDate: '24 February 1955',
      deathDate: '5 October 2011',
      birthPlace: 'San Francisco, California, USA',
      majorContributions: [
        'Apple Inc. co-founder',
        'Macintosh computer',
        'iPod and iTunes',
        'iPhone smartphone',
        'iPad tablet',
        'Pixar Animation Studios'
      ],
      famousDiscoveries: [
        'Graphical user interface mainstream adoption',
        'Digital music revolution',
        'App Store ecosystem',
        'Smartphone revolution',
        'Computer animation'
      ],
      awards: [
        'Grammy Trustees Award (2012)',
        'National Medal of Technology (1985)',
        'Disney Legend Award (2013)',
        'Time Magazine Person of the Year (multiple times)'
      ],
      historicalImportance: 'Revolutionized multiple industries: personal computing, music, phones, tablets, and animation. His vision for design and user experience changed technology forever.',
      timeline: [
        '1955: Born in San Francisco',
        '1976: Co-founded Apple with Wozniak',
        '1984: Macintosh launched',
        '1985: Fired from Apple',
        '1986: Acquired Pixar',
        '1997: Returned to Apple as CEO',
        '2001: iPod launched',
        '2007: iPhone launched',
        '2010: iPad launched',
        '2011: Died after pancreatic cancer battle'
      ],
      interestingFacts: [
        'Adopted, biological father was Syrian',
        'Dropped out of Reed College',
        'Fired from Apple, later returned',
        'Was vegetarian for most of life',
        'Wore same black turtleneck daily'
      ],
      booksOrWorks: [
        'Apple product launches',
        'Stanford commencement speech (2005)',
        'Pixar films (Toy Story, Finding Nemo)',
        'Design philosophy documentation'
      ],
      relatedPeople: [
        'Steve Wozniak (Apple co-founder)',
        'Tim Cook (Apple CEO successor)',
        'Laurene Powell Jobs (widow)',
        'John Lasseter (Pixar creative director)',
        'Ronald Wayne (Apple co-founder, left early)'
      ]
    }
  },

  'marie curie': {
    scientificOrTechName: 'Marie Curie (1867–1934) – Physicist and Chemist',
    primaryUses: 'Pioneered research on radioactivity. Discovered polonium and radium. First person to win Nobel Prizes in two different sciences (Physics 1903, Chemistry 1911).',
    specifications: [
      'Period: 1867–1934',
      'Fields: Physics, Chemistry',
      'Discoveries: Polonium, Radium, Radioactivity theory',
    ],
    keyFeatures: [
      'First woman to win a Nobel Prize',
      'Only person to win Nobel Prizes in two different scientific fields',
      'Developed mobile X-ray units for World War I field hospitals',
    ],
    humanDetails: 'Polish-born physicist and chemist. Worked in France. Died from radiation exposure due to her research.',
    safetyAndLegalStatus: 'Scientific Legacy: Nobel Prize winner. Her notebooks are still radioactive today!',
    funFact: 'Marie Curie\'s research papers are still so radioactive that they must be kept in lead-lined boxes — researchers need special protective clothing to read them!',
    personProfile: {
      fullName: 'Marie Skłodowska Curie',
      profession: 'Physicist, Chemist',
      nationality: 'Polish-born, French citizen',
      birthDate: '7 November 1867',
      deathDate: '4 July 1934',
      birthPlace: 'Warsaw, Congress Poland, Russian Empire',
      majorContributions: [
        'Radioactivity research',
        'Discovery of polonium and radium',
        'Mobile X-ray units for WWI',
        'Cancer treatment research',
        'Women in science advocacy'
      ],
      famousDiscoveries: [
        'Radioactivity phenomenon',
        'Polonium (element 84)',
        'Radium (element 88)',
        'Radium therapy for cancer',
        'Isolation of pure radium'
      ],
      awards: [
        'Nobel Prize in Physics (1903)',
        'Nobel Prize in Chemistry (1911)',
        'Davy Medal (1903)',
        'Matteucci Medal (1904)'
      ],
      historicalImportance: 'Pioneer of radioactivity research. First woman to win a Nobel Prize. Her work laid foundation for nuclear physics and cancer treatment. Inspired generations of women in science.',
      timeline: [
        '1867: Born in Warsaw',
        '1891: Moved to Paris for education',
        '1895: Married Pierre Curie',
        '1898: Discovered polonium and radium',
        '1903: First Nobel Prize (Physics)',
        '1911: Second Nobel Prize (Chemistry)',
        '1914: Developed mobile X-ray units for WWI',
        '1934: Died from aplastic anemia due to radiation'
      ],
      interestingFacts: [
        'Papers still radioactive today',
        'First woman to win Nobel Prize',
        'Only person with Nobel in two sciences',
        'Developed mobile X-ray units',
        'Daughter Irène also won Nobel Prize'
      ],
      booksOrWorks: [
        'Research on Radioactive Substances (1904)',
        'Treatise on Radioactivity (1910)',
        'Radioactivity (1935)',
        'Scientific papers and research'
      ],
      relatedPeople: [
        'Pierre Curie (husband, collaborator)',
        'Irène Joliot-Curie (daughter)',
        'Henri Becquerel (colleague)',
        'Albert Einstein (friend)',
        'Ernest Rutherford (colleague)'
      ]
    }
  },

  'nikola tesla': {
    scientificOrTechName: 'Nikola Tesla (1856–1943) – Inventor and Electrical Engineer',
    primaryUses: 'Pioneered alternating current (AC) electrical system. Invented Tesla coil, induction motor, and contributed to radio, X-ray, and wireless communication.',
    specifications: [
      'Period: 1856–1943',
      'Nationality: Serbian-American',
      'Key Inventions: AC motor, Tesla coil, wireless transmission',
    ],
    keyFeatures: [
      'AC system won the "War of Currents" against Edison\'s DC system',
      'Held over 300 patents worldwide',
    ],
    humanDetails: 'Born in Smiljan, Austrian Empire (modern Croatia). Worked in America. Died in poverty in New York.',
    safetyAndLegalStatus: 'Engineering Legacy: Unit of magnetic flux density named "tesla" in his honor.',
    funFact: 'Tesla could perform integral calculus in his head and had a photographic memory — he memorized entire books and could visualize inventions in 3D before building them!',
    personProfile: {
      fullName: 'Nikola Tesla',
      profession: 'Inventor, Electrical Engineer, Physicist',
      nationality: 'Serbian-born, American citizen',
      birthDate: '10 July 1856',
      deathDate: '7 January 1943',
      birthPlace: 'Smiljan, Austrian Empire (now Croatia)',
      majorContributions: [
        'Alternating current (AC) system',
        'Tesla coil',
        'Induction motor',
        'Wireless communication',
        'X-ray research'
      ],
      famousDiscoveries: [
        'Rotating magnetic field',
        'AC electrical system',
        'Tesla coil transformer',
        'Wireless power transmission',
        'Radio control technology'
      ],
      awards: [
        'Edison Medal (1917)',
        'IEEE Medal of Honor',
        'Order of St. Sava',
        'Unit of magnetic flux named "tesla"'
      ],
      historicalImportance: 'Father of modern alternating current electricity. His inventions form the basis of modern electrical power systems. Visionary of wireless communication and free energy.',
      timeline: [
        '1856: Born in Smiljan',
        '1884: Emigrated to United States',
        '1887: Developed AC motor',
        '1891: Invented Tesla coil',
        '1893: Demonstrated wireless transmission',
        '1895: Fire destroyed laboratory',
        '1900: Wardenclyffe Tower project',
        '1943: Died in New York City'
      ],
      interestingFacts: [
        'Could perform calculus mentally',
        'Photographic memory',
        'Visualized inventions in 3D',
        'Held over 300 patents',
        'Died in poverty despite contributions'
      ],
      booksOrWorks: [
        'My Inventions (autobiography)',
        'Colorado Springs Notes',
        'Patents and technical papers',
        'Wireless transmission research'
      ],
      relatedPeople: [
        'Thomas Edison (rival in War of Currents)',
        'George Westinghouse (business partner)',
        'Mark Twain (friend)',
        'Guglielmo Marconi (radio competitor)',
        'J.P. Morgan (financial backer)'
      ]
    }
  },

  'vincent van gogh': {
    scientificOrTechName: 'Vincent van Gogh (1853–1890) – Post-Impressionist Painter',
    primaryUses: 'Dutch post-impressionist painter. Created over 2,100 artworks including Starry Night, Sunflowers, and The Bedroom. Pioneer of modern art.',
    specifications: [
      'Period: 1853–1890',
      'Style: Post-Impressionism',
      'Works: 2,100+ artworks (860 oil paintings)',
    ],
    keyFeatures: [
      'Sold only one painting during his lifetime (The Red Vineyard)',
      'Created most famous works in last 2 years of life',
      'Influenced Expressionism and Fauvism movements',
    ],
    humanDetails: 'Born in Zundert, Netherlands. Struggled with mental illness. Died by suicide at age 37.',
    safetyAndLegalStatus: 'Artistic Legacy: Works are among the most expensive paintings ever sold.',
    funFact: 'Van Gogh\'s "Portrait of Dr. Gachet" sold for $82.5 million in 1990 — making it one of the most expensive paintings ever sold, yet he died penniless!',
    personProfile: {
      fullName: 'Vincent Willem van Gogh',
      profession: 'Painter, Artist',
      nationality: 'Dutch',
      birthDate: '30 March 1853',
      deathDate: '29 July 1890',
      birthPlace: 'Zundert, Netherlands',
      majorContributions: [
        'Post-Impressionist art movement',
        'Color theory in painting',
        'Emotional expression through art',
        'Modern art influence',
        'Starry Night masterpiece'
      ],
      famousDiscoveries: [
        'Impasto painting technique',
        'Bold color use',
        'Emotional brushwork',
        'Night sky painting',
        'Self-portrait series'
      ],
      awards: [
        'Posthumous recognition as artistic genius',
        'Most expensive paintings in history',
        'Influence on modern art movements',
        'Museum dedicated to his work (Amsterdam)'
      ],
      historicalImportance: 'One of the most influential artists in Western art history. His bold use of color and emotional brushwork revolutionized painting. Influenced generations of artists.',
      timeline: [
        '1853: Born in Zundert',
        '1880: Decided to become artist',
        '1886: Moved to Paris',
        '1888: Moved to Arles, created Sunflowers',
        '1889: Voluntarily entered asylum',
        '1890: Created Starry Night',
        '1890: Died by suicide at age 37'
      ],
      interestingFacts: [
        'Sold only one painting during lifetime',
        'Created 2,100+ artworks',
        'Cut off his own ear',
        'Mental health struggles',
        'Works now worth millions'
      ],
      booksOrWorks: [
        'The Letters of Vincent van Gogh',
        'Starry Night (1889)',
        'Sunflowers series (1888–1889)',
        'The Bedroom (1888)',
        'Self-portrait series'
      ],
      relatedPeople: [
        'Theo van Gogh (brother, supporter)',
        'Paul Gauguin (friend, rival)',
        'Paul Cézanne (contemporary)',
        'Claude Monet (contemporary)',
        'Dr. Paul Gachet (physician)'
      ]
    }
  },

  'william shakespeare': {
    scientificOrTechName: 'William Shakespeare (1564–1616) – English Playwright and Poet',
    primaryUses: 'World\'s greatest playwright. Wrote 39 plays, 154 sonnets, and long poems. Created characters like Hamlet, Macbeth, Romeo, and Juliet.',
    specifications: [
      'Period: 1564–1616',
      'Works: 39 plays, 154 sonnets',
      'Genres: Tragedies, comedies, histories',
    ],
    keyFeatures: [
      'Introduced over 1,700 words to English language',
      'Most performed playwright in the world',
      'Works translated into every major language',
    ],
    humanDetails: 'Born in Stratford-upon-Avon, England. Actor and playwright for Lord Chamberlain\'s Men.',
    safetyAndLegalStatus: 'Literary Legacy: Greatest writer in English language.',
    funFact: 'Shakespeare invented the word "loneliness" — along with over 1,700 other words we use today including "eyeball", "swagger", and "bedazzled"!',
    personProfile: {
      fullName: 'William Shakespeare',
      profession: 'Playwright, Poet, Actor',
      nationality: 'English',
      birthDate: '26 April 1564',
      deathDate: '23 April 1616',
      birthPlace: 'Stratford-upon-Avon, England',
      majorContributions: [
        '39 plays (Hamlet, Macbeth, Romeo and Juliet)',
        '154 sonnets',
        'English language development',
        'Modern theater foundation',
        'Character development'
      ],
      famousDiscoveries: [
        'Over 1,700 new English words',
        'Blank verse poetry',
        'Character complexity',
        'Tragic and comic storytelling',
        'Universal human themes'
      ],
      awards: [
        'Greatest writer in English language',
        'Most performed playwright worldwide',
        'Literary immortality',
        'Cultural icon status'
      ],
      historicalImportance: 'Greatest writer in the English language. His works have been performed for over 400 years and continue to influence literature, theater, and film worldwide.',
      timeline: [
        '1564: Born in Stratford-upon-Avon',
        '1582: Married Anne Hathaway',
        '1590s: Wrote early plays',
        '1599: Globe Theatre opened',
        '1603: King James I became patron',
        '1613: Globe Theatre burned',
        '1616: Died in Stratford-upon-Avon'
      ],
      interestingFacts: [
        'Invented over 1,700 English words',
        'Wrote 39 plays and 154 sonnets',
        'Never published his own plays',
        'Globe Theatre burned during performance',
        'Birth and death on same date (April 23)'
      ],
      booksOrWorks: [
        'Hamlet (1600)',
        'Romeo and Juliet (1597)',
        'Macbeth (1606)',
        'Sonnets (1609)',
        'A Midsummer Night\'s Dream (1595)'
      ],
      relatedPeople: [
        'Anne Hathaway (wife)',
        'Queen Elizabeth I (patron)',
        'King James I (patron)',
        'Christopher Marlowe (contemporary)',
        'Ben Jonson (friend and rival)'
      ]
    }
  },

  'pele': {
    scientificOrTechName: 'Pelé (1940–2022) – Brazilian Football Legend',
    primaryUses: 'Greatest footballer of all time. Scored 1,283 goals in 1,363 matches. Won 3 World Cups with Brazil. Global ambassador for football.',
    specifications: [
      'Period: 1940–2022',
      'Position: Forward',
      'Goals: 1,283 in 1,363 matches',
      'World Cups: 3 (1958, 1962, 1970)',
    ],
    keyFeatures: [
      'Only player to win 3 World Cups',
      'Scored over 1,000 career goals',
      'Named FIFA Player of the Century',
    ],
    humanDetails: 'Born in Três Corações, Brazil. Rose from poverty to become global football icon.',
    safetyAndLegalStatus: 'Sports Legend: FIFA Player of the Century. Brazilian national treasure.',
    funFact: 'Pelé was so famous that a 48-hour ceasefire was declared in Nigeria during the Biafran War so both sides could watch him play an exhibition match!',
    personProfile: {
      fullName: 'Edson Arantes do Nascimento',
      profession: 'Footballer, Athlete',
      nationality: 'Brazilian',
      birthDate: '23 October 1940',
      deathDate: '29 December 2022',
      birthPlace: 'Três Corações, Minas Gerais, Brazil',
      majorContributions: [
        '3 World Cup victories',
        '1,283 career goals',
        'Football global popularity',
        'Sports diplomacy',
        'Youth football development'
      ],
      famousDiscoveries: [
        'Bicycle kick technique',
        'Goal scoring records',
        'Playmaking abilities',
        'Football artistry',
        'Sports ambassador role'
      ],
      awards: [
        'FIFA Player of the Century (1999)',
        '3 World Cup winner',
        'Ballon d\'Or (1970)',
        'Brazilian Football Confederation honorary president'
      ],
      historicalImportance: 'Greatest footballer of all time. His skill and sportsmanship made football a global sport. His 3 World Cup victories remain unmatched.',
      timeline: [
        '1940: Born in Três Corações',
        '1956: Signed with Santos FC',
        '1958: Won first World Cup at age 17',
        '1962: Won second World Cup',
        '1970: Won third World Cup',
        '1977: Retired from football',
        '1992: Appointed UN Sports Ambassador',
        '2022: Died in São Paulo'
      ],
      interestingFacts: [
        'Scored 1,283 career goals',
        'Won 3 World Cups',
        'Ceasefire declared during his match',
        'Scored in 6 different World Cups',
        'Named FIFA Player of the Century'
      ],
      booksOrWorks: [
        'Pelé: The Autobiography',
        'Documentaries and films',
        'Football instructional videos',
        'Sports commentary'
      ],
      relatedPeople: [
        'Garrincha (Brazilian teammate)',
        'Diego Maradona (rival)',
        'Lionel Messi (compared to)',
        'Cristiano Ronaldo (compared to)',
        'Santos FC (club)'
      ]
    }
  },

  'usain bolt': {
    scientificOrTechName: 'Usain Bolt (1986–present) – Jamaican Sprinter',
    primaryUses: 'Fastest man in history. World record holder in 100m (9.58s) and 200m (19.19s). Won 8 Olympic gold medals.',
    specifications: [
      'Period: 1986–present',
      'Events: 100m, 200m, 4x100m relay',
      'Records: 100m (9.58s), 200m (19.19s)',
    ],
    keyFeatures: [
      'First man to hold 100m and 200m world records simultaneously',
      '8 Olympic gold medals',
      'Unbeaten in major championships for years',
    ],
    humanDetails: 'Born in Trelawny Parish, Jamaica. Cricket player before switching to sprinting.',
    safetyAndLegalStatus: 'Sports Legend: Olympic champion. World record holder.',
    funFact: 'Usain Bolt once ate McDonald\'s chicken nuggets before every race at the 2008 Beijing Olympics — and still won 3 gold medals with world records!',
    personProfile: {
      fullName: 'Usain St. Leo Bolt',
      profession: 'Sprinter, Athlete',
      nationality: 'Jamaican',
      birthDate: '21 August 1986',
      deathDate: 'Present',
      birthPlace: 'Sherwood Content, Trelawny, Jamaica',
      majorContributions: [
        '100m world record (9.58s)',
        '200m world record (19.19s)',
        '8 Olympic gold medals',
        '11 World Championship gold medals',
        'Sprinting popularity'
      ],
      famousDiscoveries: [
        'World record sprinting technique',
        'Dominant sprinting era',
        'Athletic showmanship',
        'Sports entertainment',
        'Jamaican athletics prominence'
      ],
      awards: [
        '8 Olympic gold medals',
        '11 World Championship gold medals',
        'World record holder',
        'IAAF World Athlete of the Year (multiple times)',
        'BBC Sports Personality of the Year'
      ],
      historicalImportance: 'Fastest man in history. His world records in 100m and 200m may stand for decades. Transformed sprinting into a global spectacle.',
      timeline: [
        '1986: Born in Jamaica',
        '2002: Won World Junior Championships',
        '2008: Beijing Olympics (3 gold, 3 world records)',
        '2009: Berlin World Championships (world records)',
        '2012: London Olympics (3 gold)',
        '2013: Retired from sprinting',
        '2017: Final World Championships'
      ],
      interestingFacts: [
        'Ate McDonald\'s before Olympic races',
        'World records still stand',
        '8 Olympic gold medals',
        'First to hold 100m and 200m records',
        'Cricket player before sprinting'
      ],
      booksOrWorks: [
        'The Fastest Man Alive (documentary)',
        'Usain Bolt: My Story (autobiography)',
        'Sports commentary',
        'Brand endorsements'
      ],
      relatedPeople: [
        'Yohan Blake (Jamaican teammate)',
        'Tyson Gay (American rival)',
        'Justin Gatlin (American rival)',
        'Asafa Powell (Jamaican teammate)',
        'Coach Glen Mills'
      ]
    }
  },

  'banana': {
    scientificOrTechName: 'Musa acuminata (Banana) — Vegetarian Fruit',
    primaryUses: 'Energy-rich fruit consumed fresh, in smoothies, baked goods, and desserts. Rich in potassium, vitamin B6, and natural sugars for instant energy boost.',
    specifications: [
      'Type: Vegetarian Fruit (Vegan)',
      'Calories: 89 kcal per 100g',
      'Nutrients: Potassium (358mg), Vitamin B6, Vitamin C, Fiber',
    ],
    keyFeatures: [
      'Natural pre-workout food due to fast-releasing sugars and electrolytes',
      'Ripens post-harvest — ethylene gas turns skin from green to yellow',
    ],
    humanDetails: 'One of the most consumed fruits worldwide. Staple food in tropical regions.',
    safetyAndLegalStatus: 'Safe and healthy vegetarian food. Approved globally for all dietary restrictions.',
    funFact: 'Bananas are slightly radioactive due to their natural potassium-40 content — but you would need to eat 10 million bananas at once for a dangerous dose!',
  },

  'apple': {
    scientificOrTechName: 'Malus domestica (Apple) — Vegetarian Fruit',
    primaryUses: 'Nutritious fresh fruit eaten raw, in juices, jams, pies, and ciders. Rich in antioxidants, dietary fiber, and vitamin C.',
    specifications: [
      'Type: Vegetarian Fruit (Vegan)',
      'Calories: 52 kcal per 100g',
      'Nutrients: Vitamin C, Quercetin, Pectin fiber, Polyphenols',
    ],
    keyFeatures: [
      'Pectin fiber feeds beneficial gut bacteria (prebiotic effect)',
      'Over 7,500 varieties exist worldwide — from Fuji to Granny Smith to Honeycrisp',
    ],
    humanDetails: 'One of the most widely consumed fruits globally. Symbolizes health and knowledge.',
    safetyAndLegalStatus: 'Safe Vegetarian food. Low glycemic index — suitable for diabetics.',
    funFact: '"An apple a day keeps the doctor away" — the original Welsh proverb from 1866 actually said "Eat an apple on going to bed, and you\'ll keep the doctor from earning his bread!"',
  },

  'pizza': {
    scientificOrTechName: 'Pizza Pie — Vegetarian or Non-Vegetarian (depends on toppings)',
    primaryUses: 'Popular Italian-origin flat bread with tomato sauce and cheese. Can be vegetarian (Margherita) or non-vegetarian (Pepperoni, Chicken). Worldwide fast food staple.',
    specifications: [
      'Base Type: Wheat flour dough',
      'Vegetarian Options: Margherita, Veggie Supreme, Paneer Pizza',
      'Non-Veg Options: Pepperoni, BBQ Chicken, Meat Lovers',
      'Calories: 266 kcal per 100g (average)',
    ],
    keyFeatures: [
      'Tomato sauce provides lycopene — a powerful antioxidant',
      'Wood-fired Neapolitan pizza is UNESCO Intangible Cultural Heritage',
    ],
    humanDetails: 'Originally from Naples, Italy (18th century). Now a $150 billion global industry.',
    safetyAndLegalStatus: 'Safe food. Check toppings for vegetarian vs. non-vegetarian preference.',
    funFact: 'Americans eat approximately 3 billion pizzas per year — that\'s about 40 pounds (18 kg) of pizza per person annually!',
  },

  'hot dog': {
    scientificOrTechName: 'Hot Dog Sausage — Non-Vegetarian Food',
    primaryUses: 'Grilled or steamed sausage served in a sliced bun. Non-vegetarian fast food made from pork, beef, or chicken. Popular at baseball stadiums, carnivals, and BBQs.',
    specifications: [
      'Type: Non-Vegetarian (contains pork, beef, or chicken)',
      'Origin: Frankfurt, Germany (Frankfurter) or Vienna, Austria (Wiener)',
      'Calories: 290 kcal per 100g',
    ],
    keyFeatures: [
      'Most consumed street food at US sporting events',
      'Sausage casing traditionally made from sheep intestine',
    ],
    humanDetails: 'Iconic American fast food originating from German immigrants in the 19th century.',
    safetyAndLegalStatus: 'Non-Vegetarian food. Not suitable for vegetarians, vegans, or those avoiding pork.',
    funFact: 'Americans consume 7 billion hot dogs between Memorial Day and Labor Day — roughly 818 hot dogs per second during summer!',
  },

  'sandwich': {
    scientificOrTechName: 'Sandwich — Vegetarian or Non-Vegetarian (varies by filling)',
    primaryUses: 'Bread slices filled with vegetables, cheese, eggs, meat, or spreads. Quick meal available in vegetarian (cheese, veggie) and non-vegetarian (chicken, tuna) varieties.',
    specifications: [
      'Base: Wheat or multigrain bread slices',
      'Vegetarian: Cucumber, tomato, cheese, avocado sandwich',
      'Non-Veg: BLT (Bacon, Lettuce, Tomato), Club Sandwich, Tuna Melt',
      'Calories: 200–400 kcal per serving',
    ],
    keyFeatures: [
      'Named after the 4th Earl of Sandwich who requested meat between bread so he could eat while gambling',
      'World\'s most popular quick-service food item',
    ],
    humanDetails: 'Invented in 1762 by John Montagu, 4th Earl of Sandwich, England.',
    safetyAndLegalStatus: 'Safe food. Specify vegetarian or non-vegetarian preference when ordering.',
    funFact: 'The longest sandwich ever made was 735.29 meters (2411 ft) long — created in Mexico City in 2004!',
  },

  'donut': {
    scientificOrTechName: 'Doughnut (Donut) — Vegetarian Fried Sweet Pastry',
    primaryUses: 'Sweet fried dough pastry, glazed or filled with cream, jam, or chocolate. Popular breakfast pastry and dessert. Vegetarian by default.',
    specifications: [
      'Type: Vegetarian Sweet Pastry',
      'Calories: 452 kcal per 100g (glazed)',
      'Key Ingredients: All-purpose flour, sugar, eggs, milk, yeast, oil',
    ],
    keyFeatures: [
      'Ring-shaped (torus) design allows even frying without a raw center',
      'Krispy Kreme and Dunkin\' serve billions of donuts annually worldwide',
    ],
    humanDetails: 'Popularized in the United States in the 1800s. Now a global confectionery staple.',
    safetyAndLegalStatus: 'Vegetarian food. High in sugar and fat — enjoy in moderation.',
    funFact: 'The hole in the donut was supposedly invented in 1847 by American sailor Hanson Gregory who punched out the center so it would cook evenly on a ship\'s spike!',
  },

  'cake': {
    scientificOrTechName: 'Cake — Vegetarian Baked Confection (Eggless variants also available)',
    primaryUses: 'Baked sweet confection for celebrations (birthdays, weddings). Made from flour, sugar, butter, eggs, and frosting. Available in vegetarian (eggless) versions.',
    specifications: [
      'Type: Generally Vegetarian (eggless vegan variants available)',
      'Varieties: Sponge, Red Velvet, Chocolate Fudge, Cheesecake, Carrot Cake',
      'Calories: 367 kcal per 100g',
    ],
    keyFeatures: [
      'Chemical leavening (baking powder) creates light airy texture',
      'Multi-layer frosted cakes use buttercream or fondant decoration',
    ],
    humanDetails: 'Ancient Egyptians made early grain-based cakes. Modern layered cakes emerged in the 18th century.',
    safetyAndLegalStatus: 'Vegetarian food (check if egg-free needed). High sugar content — moderation advised.',
    funFact: 'The world\'s tallest cake stood 33.05 meters (108 ft) tall and was built in the United States in 2004 — requiring a crane to add the final tiers!',
  },

  'orange': {
    scientificOrTechName: 'Citrus sinensis (Sweet Orange) — Vegetarian Citrus Fruit',
    primaryUses: 'Rich source of Vitamin C, eaten fresh, juiced, or used in cooking and desserts. Boosts immunity and provides antioxidants.',
    specifications: [
      'Type: Vegetarian Fruit (Vegan)',
      'Calories: 47 kcal per 100g',
      'Nutrients: Vitamin C (88mg/100g), Folate, Thiamine, Potassium',
    ],
    keyFeatures: [
      'Highest Vitamin C content of commonly consumed citrus fruits',
      'Natural flavonoids provide anti-inflammatory and immune-boosting effects',
    ],
    humanDetails: 'Originally cultivated in ancient Southeast Asia. Now grown in 140 countries.',
    safetyAndLegalStatus: 'Safe, healthy vegetarian food. Excellent for immune health.',
    funFact: 'Oranges are actually a hybrid fruit — a cross between a pomelo and a mandarin! They don\'t exist naturally in the wild!',
  },

  'broccoli': {
    scientificOrTechName: 'Brassica oleracea (Broccoli) — Vegetarian Vegetable',
    primaryUses: 'Nutritious cruciferous vegetable eaten steamed, roasted, or raw in salads. Rich in vitamins, fiber, and cancer-fighting compounds.',
    specifications: [
      'Type: Vegetarian Vegetable (Vegan)',
      'Calories: 34 kcal per 100g',
      'Nutrients: Vitamin C (89mg/100g), Vitamin K, Folate, Fiber, Sulforaphane',
    ],
    keyFeatures: [
      'Sulforaphane is a powerful anti-cancer compound unique to cruciferous vegetables',
      'High fiber content supports digestive health and weight management',
    ],
    humanDetails: 'Originally cultivated in Italy. Now a staple vegetable worldwide.',
    safetyAndLegalStatus: 'Safe vegetarian food. May cause gas in some individuals.',
    funFact: 'Broccoli is actually a flower that hasn\'t fully bloomed — we eat the unopened flower buds!',
  },

  'carrot': {
    scientificOrTechName: 'Daucus carota (Carrot) — Vegetarian Root Vegetable',
    primaryUses: 'Root vegetable eaten raw, cooked, or juiced. Excellent source of beta-carotene (vitamin A) for eye health.',
    specifications: [
      'Type: Vegetarian Root Vegetable (Vegan)',
      'Calories: 41 kcal per 100g',
      'Nutrients: Beta-carotene, Vitamin A, Vitamin K, Fiber, Potassium',
    ],
    keyFeatures: [
      'Beta-carotene converts to vitamin A in the body — essential for night vision',
      'Orange carrots were developed by Dutch farmers in the 17th century as a tribute to their royal family',
    ],
    humanDetails: 'Originally purple or white. Orange carrots became dominant in the 17th century.',
    safetyAndLegalStatus: 'Safe vegetarian food. Excellent for eye and skin health.',
    funFact: 'Carrots were originally purple, white, and yellow — the orange carrot we know today was bred by Dutch farmers in the 1600s!',
  },

  'bowl': {
    scientificOrTechName: 'Food Bowl — Container for Food',
    primaryUses: 'Container for holding food items like soups, salads, cereals, and rice dishes. Made from ceramic, glass, plastic, or metal.',
    specifications: [
      'Materials: Ceramic, Glass, Plastic, Metal, Wood',
      'Capacities: 200ml to 2 liters',
      'Uses: Soups, Salads, Cereals, Rice dishes',
    ],
    keyFeatures: [
      'Bowl shape allows for easy mixing and eating with utensils',
      'Deep design prevents spills during eating',
    ],
    humanDetails: 'Bowls have been used since ancient times for food storage and consumption.',
    safetyAndLegalStatus: 'Food-safe container. Must meet FDA/EFSA standards for food contact.',
    funFact: 'The world\'s largest bowl of soup was made in 2014 in Brazil — it contained 4,500 liters of soup!',
  },

  'bench': {
    scientificOrTechName: 'Public Seating Bench — Outdoor Street Furniture',
    primaryUses: 'Provides seating in parks, bus stops, streets, and public spaces. Made from wood, metal, stone, or recycled plastic.',
    specifications: [
      'Materials: Hardwood, steel, aluminum, concrete, recycled plastic',
      'Capacity: 2–4 people typically',
      'Mounting: Ground-mounted, wall-mounted, or freestanding',
    ],
    keyFeatures: [
      'Armrests can deter sleeping in urban design',
      'Perforated seats prevent water accumulation',
      'Recycled plastic benches from 2,000+ milk jugs',
    ],
    humanDetails: 'Benches have been used since ancient times in public squares and gardens.',
    safetyAndLegalStatus: 'Public infrastructure maintained by municipalities. Anti-loitering designs controversial.',
    funFact: 'The world\'s longest bench is 1,001 meters (3,284 feet) long and is located in Chile!',
    furnitureProfile: {
      objectName: 'Bench',
      material: ['Wood', 'Metal', 'Stone', 'Concrete', 'Recycled Plastic'],
      uses: ['Seating', 'Resting', 'Social gathering', 'Waiting areas', 'Outdoor relaxation'],
      commonLocations: ['Parks', 'Bus stops', 'Train stations', 'Gardens', 'Shopping malls', 'Schools', 'Offices'],
      maintenanceTips: [
        'Wood benches: seal annually to prevent rot',
        'Metal benches: clean with mild soap to prevent rust',
        'Plastic benches: UV-resistant but may fade over time',
        'Regular cleaning prevents mold and mildew buildup'
      ]
    }
  },

  'chair': {
    scientificOrTechName: 'Chair — Seating Furniture',
    primaryUses: 'Individual seating for dining, working, relaxing, and various activities. Essential furniture in homes, offices, and public spaces.',
    specifications: [
      'Types: Dining chair, office chair, armchair, recliner, folding chair',
      'Materials: Wood, metal, plastic, upholstery fabrics',
      'Height: Typically 45–50 cm seat height',
    ],
    keyFeatures: [
      'Ergonomic designs reduce back pain',
      'Office chairs with lumbar support and adjustable features',
      'Folding chairs for portable seating',
    ],
    humanDetails: 'Chairs have been used for thousands of years. The oldest known chair is 5,000 years old from Egypt.',
    safetyAndLegalStatus: 'Must meet safety standards for stability and weight capacity.',
    funFact: 'The average person sits for 12 hours per day — that\'s 4,380 hours or 182 days per year!',
    furnitureProfile: {
      objectName: 'Chair',
      material: ['Wood', 'Metal', 'Plastic', 'Upholstered Fabric', 'Leather', 'Rattan'],
      uses: ['Seating', 'Dining', 'Working', 'Relaxing', 'Gaming', 'Meetings'],
      commonLocations: ['Dining rooms', 'Offices', 'Living rooms', 'Bedrooms', 'Classrooms', 'Restaurants', 'Conference rooms'],
      maintenanceTips: [
        'Tighten screws periodically to prevent wobbling',
        'Clean upholstery according to fabric care instructions',
        'Lubricate moving parts on office chairs',
        'Protect wooden chairs from moisture and direct sunlight'
      ]
    }
  },

  'table': {
    scientificOrTechName: 'Table — Flat Surface Furniture',
    primaryUses: 'Flat surface for dining, working, displaying items, and various activities. Essential in homes, offices, and public spaces.',
    specifications: [
      'Types: Dining table, coffee table, desk, side table, conference table',
      'Materials: Wood, glass, metal, stone, plastic',
      'Shapes: Rectangular, round, square, oval',
    ],
    keyFeatures: [
      'Adjustable height tables for versatility',
      'Extendable tables for accommodating more people',
      'Folding tables for storage efficiency',
    ],
    humanDetails: 'Tables have been used since ancient civilizations. The oldest known tables are from ancient Egypt and China.',
    safetyAndLegalStatus: 'Must be stable and support intended weight loads.',
    funFact: 'The world\'s largest table can seat 10,000 people and was set in Saudi Arabia in 2014!',
    furnitureProfile: {
      objectName: 'Table',
      material: ['Wood', 'Glass', 'Metal', 'Stone', 'Plastic', 'Marble'],
      uses: ['Dining', 'Working', 'Display', 'Meetings', 'Study', 'Crafts'],
      commonLocations: ['Dining rooms', 'Offices', 'Living rooms', 'Conference rooms', 'Classrooms', 'Restaurants', 'Libraries'],
      maintenanceTips: [
        'Use coasters to prevent water rings on wood',
        'Clean glass tables with appropriate cleaners to avoid streaks',
        'Protect surfaces from hot items with trivets',
        'Level tables on uneven surfaces to prevent wobbling'
      ]
    }
  },

  'sofa': {
    scientificOrTechName: 'Sofa — Upholstered Seating Furniture',
    primaryUses: 'Comfortable seating for multiple people. Primary furniture in living rooms and lounges.',
    specifications: [
      'Types: Sectional, loveseat, sleeper sofa, reclining sofa',
      'Materials: Wood frame, upholstery fabric, foam cushions',
      'Capacity: 2–6 people typically',
    ],
    keyFeatures: [
      'Sleeper sofas convert to beds for guests',
      'Reclining sofas for relaxation',
      'Sectional sofas for flexible arrangements',
    ],
    humanDetails: 'Sofas became popular in the 17th century. Modern sofas evolved from French settees and canapés.',
    safetyAndLegalStatus: 'Must meet fire safety standards for upholstery materials.',
    funFact: 'The most expensive sofa ever sold cost $1.6 million and was made of 24-karat gold!',
    furnitureProfile: {
      objectName: 'Sofa',
      material: ['Wood Frame', 'Upholstered Fabric', 'Leather', 'Foam Cushions', 'Metal Springs'],
      uses: ['Seating', 'Relaxation', 'Entertaining guests', 'Sleeping (sleeper sofas)', 'Reading'],
      commonLocations: ['Living rooms', 'Family rooms', 'Offices', 'Lobbies', 'Hotels', 'Waiting areas'],
      maintenanceTips: [
        'Vacuum regularly to remove dust and crumbs',
        'Rotate cushions for even wear',
        'Clean spills immediately to prevent staining',
        'Professional cleaning recommended for deep stains'
      ]
    }
  },

  'desk': {
    scientificOrTechName: 'Desk — Work Surface Furniture',
    primaryUses: 'Work surface for writing, computer use, studying, and various tasks. Essential in offices and home workspaces.',
    specifications: [
      'Types: Writing desk, computer desk, standing desk, executive desk',
      'Materials: Wood, metal, glass, laminate',
      'Features: Drawers, keyboard trays, cable management',
    ],
    keyFeatures: [
      'Standing desks for ergonomic health benefits',
      'Adjustable height desks for versatility',
      'Built-in storage for organization',
    ],
    humanDetails: 'Desks have evolved from medieval writing tables to modern ergonomic workstations.',
    safetyAndLegalStatus: 'Must be stable and support computer equipment safely.',
    funFact: 'Standing desks can reduce back pain by 54% and improve productivity by up to 46%!',
    furnitureProfile: {
      objectName: 'Desk',
      material: ['Wood', 'Metal', 'Glass', 'Laminate', 'Particle Board'],
      uses: ['Working', 'Studying', 'Computer use', 'Writing', 'Meetings'],
      commonLocations: ['Offices', 'Home offices', 'Bedrooms', 'Libraries', 'Classrooms', 'Study areas'],
      maintenanceTips: [
        'Keep cables organized to prevent tripping hazards',
        'Clean surfaces regularly to prevent dust buildup',
        'Use keyboard trays to maintain proper ergonomics',
        'Adjust chair height to match desk for proper posture'
      ]
    }
  },

  // ─────────────────────────────────────────────
  // LANDMARKS & PLACES
  // ─────────────────────────────────────────────
  'taj mahal': {
    scientificOrTechName: 'Taj Mahal — UNESCO World Heritage Site',
    primaryUses: 'Mausoleum built by Mughal Emperor Shah Jahan for his wife Mumtaz Mahal. Symbol of eternal love and architectural masterpiece.',
    specifications: [
      'Built: 1632–1653 (21 years)',
      'Architect: Ustad Ahmad Lahori',
      'Height: 73 meters (240 feet)',
      'Material: White marble with precious stone inlay',
    ],
    keyFeatures: [
      'Perfect symmetry in architecture',
      'Changes color at different times of day',
      'Intricate pietra dura (stone inlay) work',
    ],
    humanDetails: 'Built by Shah Jahan as a memorial for his beloved wife Mumtaz Mahal who died during childbirth.',
    safetyAndLegalStatus: 'UNESCO World Heritage Site (1983). Protected monument under Archaeological Survey of India.',
    funFact: 'The four minarets of Taj Mahal tilt slightly outward to ensure they fall away from the main tomb in case of earthquake!',
    landmarkProfile: {
      placeName: 'Taj Mahal',
      city: 'Agra',
      stateProvince: 'Uttar Pradesh',
      country: 'India',
      builtYear: '1632–1653',
      architect: 'Ustad Ahmad Lahori',
      heightOrSize: '73 meters (240 feet) tall',
      unescoStatus: 'UNESCO World Heritage Site (1983), One of New Seven Wonders of the World',
      history: 'Commissioned in 1632 by Mughal Emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal. Construction took 21 years and employed 20,000 workers. It stands as a symbol of eternal love and Mughal architectural excellence.',
      tourismInfo: 'Attracts 7-8 million visitors annually. Open from sunrise to sunset except Fridays. Night viewing available on full moon nights and two days before/after.',
      interestingFacts: [
        'Took 21 years to complete with 20,000 workers',
        'The calligraphy on the tomb creates an optical illusion - size increases as you go higher',
        'British soldiers defaced the monument during 1857 rebellion',
        'Myth says workers\' hands were cut off to prevent replication (historically disputed)',
        'Changes color from pinkish in morning, milky white in evening, golden at night'
      ],
      locationOnMap: '27.1751° N, 78.0421° E, Agra, Uttar Pradesh, India'
    }
  },

  'eiffel tower': {
    scientificOrTechName: 'Eiffel Tower — Iron Lattice Tower',
    primaryUses: 'Observation tower, radio broadcasting, and iconic symbol of Paris. Originally built as entrance arch for 1889 World\'s Fair.',
    specifications: [
      'Built: 1887–1889',
      'Architect: Gustave Eiffel',
      'Height: 330 meters (1,083 feet)',
      'Material: Wrought iron',
    ],
    keyFeatures: [
      'Tallest structure in Paris',
      'Most-visited paid monument in the world',
      'Repainted every 7 years (60 tons of paint)',
    ],
    humanDetails: 'Designed by Gustave Eiffel\'s engineering company. Initially controversial, now beloved symbol of France.',
    safetyAndLegalStatus: 'Protected historical monument. Annual maintenance ensures structural integrity.',
    funFact: 'The Eiffel Tower grows by about 15 cm (6 inches) in summer due to thermal expansion of iron!',
    landmarkProfile: {
      placeName: 'Eiffel Tower',
      city: 'Paris',
      stateProvince: 'Île-de-France',
      country: 'France',
      builtYear: '1887–1889',
      architect: 'Gustave Eiffel, Stephen Sauvestre, Maurice Koechlin',
      heightOrSize: '330 meters (1,083 feet) tall',
      unescoStatus: 'Not UNESCO site but protected French historical monument',
      history: 'Built as entrance arch for 1889 Exposition Universelle (World\'s Fair) celebrating French Revolution centennial. Nearly demolished in 1909 but saved by its use as radio antenna. Became symbol of Paris and France.',
      tourismInfo: '7 million visitors annually. Three levels with restaurants and observation decks. Summit accessible by elevator. Light show every evening.',
      interestingFacts: [
        'Grows 15 cm taller in summer due to thermal expansion',
        'Was meant to be dismantled after 20 years',
        'Saved by being repurposed as radio antenna',
        'Hit by lightning about 10 times per year',
        '120 antennas broadcast radio and TV signals'
      ],
      locationOnMap: '48.8584° N, 2.2945° E, Champ de Mars, Paris, France'
    }
  },

  'statue of liberty': {
    scientificOrTechName: 'Statue of Liberty — Neoclassical Sculpture',
    primaryUses: 'Monument symbolizing freedom and democracy. Gift from France to United States. Welcoming sight for immigrants arriving by ship.',
    specifications: [
      'Built: 1875–1886',
      'Sculptor: Frédéric Auguste Bartholdi',
      'Height: 93 meters (305 feet) including pedestal',
      'Material: Copper sheets over iron framework',
    ],
    keyFeatures: [
      'Torch represents enlightenment',
      'Tablet inscribed with date of US independence (July 4, 1776)',
      'Copper has turned green due to natural oxidation',
    ],
    humanDetails: 'Gift from French people to United States, dedicated October 28, 1886. Designed by Bartholdi with iron framework by Gustave Eiffel.',
    safetyAndLegalStatus: 'UNESCO World Heritage Site (1984). Managed by US National Park Service.',
    funFact: 'The Statue of Liberty\'s full name is "Liberty Enlightening the World" and she wears size 879 sandals!',
    landmarkProfile: {
      placeName: 'Statue of Liberty',
      city: 'New York City',
      stateProvince: 'New York',
      country: 'United States',
      builtYear: '1875–1886',
      architect: 'Frédéric Auguste Bartholdi (sculptor), Gustave Eiffel (engineer)',
      heightOrSize: '93 meters (305 feet) including pedestal',
      unescoStatus: 'UNESCO World Heritage Site (1984)',
      history: 'Gift from France to commemorate US independence and alliance between nations. Dedicated in 1886. Welcomed millions of immigrants arriving at Ellis Island. Symbol of freedom and democracy worldwide.',
      tourismInfo: '4 million visitors annually. Accessible by ferry from Manhattan. Crown requires advance reservation. Museum opened in pedestal in 2019.',
      interestingFacts: [
        'Full name: "Liberty Enlightening the World"',
        '25 windows in crown representing 25 gemstones',
        'Broken chain at feet represents broken chains of oppression',
        'Torch replaced in 1984 with new copper flame covered in 24k gold',
        'Served as lighthouse until 1916'
      ],
      locationOnMap: '40.6892° N, 74.0445° W, Liberty Island, New York Harbor, USA'
    }
  },

  'burj khalifa': {
    scientificOrTechName: 'Burj Khalifa — Skyscraper',
    primaryUses: 'Mixed-use skyscraper with hotel, residences, offices, and observation decks. Tallest building in the world.',
    specifications: [
      'Built: 2004–2010',
      'Architect: Adrian Smith (Skidmore, Owings & Merrill)',
      'Height: 828 meters (2,717 feet)',
      'Floors: 163 floors',
    ],
    keyFeatures: [
      'Tallest structure in the world',
      'Inspired by desert flower Hymenocallis',
      'Y-shaped floor plan for stability',
    ],
    humanDetails: 'Opened in 2010 as centerpiece of Downtown Dubai. Originally named Burj Dubai, renamed Burj Khalifa after UAE President.',
    safetyAndLegalStatus: 'Modern engineering marvel with advanced safety systems. Tourist attraction and residential/commercial building.',
    funFact: 'Burj Khalifa is so tall that you can watch the sunset from the base, then take elevator to top and watch the sunset again!',
    landmarkProfile: {
      placeName: 'Burj Khalifa',
      city: 'Dubai',
      stateProvince: 'Dubai',
      country: 'United Arab Emirates',
      builtYear: '2004–2010',
      architect: 'Adrian Smith (Skidmore, Owings & Merrill)',
      heightOrSize: '828 meters (2,717 feet) - tallest in the world',
      unescoStatus: 'Not UNESCO site (too modern)',
      history: 'Constructed as centerpiece of Dubai\'s urban development. Opened in 2010. Symbol of Dubai\'s transformation from desert to global city. Named after UAE President Khalifa bin Zayed Al Nahyan.',
      tourismInfo: '2 million visitors annually. Observation decks on 124th, 125th, and 148th floors. Restaurant At.mosphere on 122nd floor.',
      interestingFacts: [
        'Can watch sunset twice in one day (from base then top)',
        'Takes 1 minute to reach observation deck in elevator',
        'Uses 15 million gallons of water for cooling annually',
        'Has 2,909 stairs (though elevators are used)',
        'Visible from 95 kilometers away on clear day'
      ],
      locationOnMap: '25.1972° N, 55.2744° E, Downtown Dubai, UAE'
    }
  },

  'great wall of china': {
    scientificOrTechName: 'Great Wall of China — Ancient Fortification',
    primaryUses: 'Ancient defensive fortification built to protect Chinese states from nomadic invasions. UNESCO World Heritage Site.',
    specifications: [
      'Built: Various periods from 7th century BC to Ming Dynasty (1368–1644)',
      'Length: 21,196 kilometers (13,171 miles)',
      'Material: Stone, brick, tamped earth, wood',
    ],
    keyFeatures: [
      'Longest structure ever built by humans',
      'Not visible from space with naked eye (common myth)',
      'Multiple sections built by different dynasties',
    ],
    humanDetails: 'Built over centuries by millions of workers, including soldiers, peasants, and convicts. Many died during construction.',
    safetyAndLegalStatus: 'UNESCO World Heritage Site (1987). Protected Chinese cultural heritage site.',
    funFact: 'Despite popular belief, the Great Wall is NOT visible from the Moon with the naked eye - it\'s too narrow!',
    landmarkProfile: {
      placeName: 'Great Wall of China',
      city: 'Multiple (Beijing, Tianjin, etc.)',
      stateProvince: 'Northern China',
      country: 'China',
      builtYear: '7th century BC to Ming Dynasty (1368–1644)',
      architect: 'Multiple dynasties (Qin, Han, Ming primarily)',
      heightOrSize: '21,196 kilometers (13,171 miles) total length',
      unescoStatus: 'UNESCO World Heritage Site (1987)',
      history: 'Built over 2,000 years by various Chinese dynasties to protect against northern nomadic invasions. Ming Dynasty built most famous sections. Symbol of Chinese civilization and engineering.',
      tourismInfo: '10 million visitors annually to popular sections near Beijing. Badaling most accessible, Mutianyu less crowded. Hiking possible on remote sections.',
      interestingFacts: [
        'Not visible from Moon with naked eye (common myth)',
        'Built with sticky rice mortar for strength',
        'Millions died during construction',
        'Some sections used as roads in 20th century',
        'Rice porridge used in mortar for durability'
      ],
      locationOnMap: '40.4319° N, 116.5704° E (Badaling section), Beijing, China'
    }
  },

  'big ben': {
    scientificOrTechName: 'Big Ben — Elizabeth Tower Clock',
    primaryUses: 'Clock tower at Palace of Westminster. Iconic symbol of London and UK parliamentary democracy.',
    specifications: [
      'Built: 1843–1859',
      'Architect: Augustus Pugin, Charles Barry',
      'Height: 96 meters (315 feet)',
      'Material: Brick, stone, limestone',
    ],
    keyFeatures: [
      'Great Bell (Big Ben) weighs 13.7 tons',
      'Clock faces are 7 meters (23 feet) diameter',
      'Most accurate clock in world when built',
    ],
    humanDetails: 'Officially named Elizabeth Tower since 2012 (for Diamond Jubilee). "Big Ben" refers to the Great Bell inside.',
    safetyAndLegalStatus: 'Protected UK heritage site. Part of UNESCO Westminster Palace World Heritage Site.',
    funFact: 'Big Ben is slightly tilted - the tower leans 43.5 cm (17 inches) to the northwest due to underground excavation!',
    landmarkProfile: {
      placeName: 'Big Ben (Elizabeth Tower)',
      city: 'London',
      stateProvince: 'England',
      country: 'United Kingdom',
      builtYear: '1843–1859',
      architect: 'Augustus Pugin (design), Charles Barry (architect)',
      heightOrSize: '96 meters (315 feet) tall',
      unescoStatus: 'UNESCO World Heritage Site (1987) as part of Westminster Palace',
      history: 'Built after fire destroyed old Palace of Westminster. Clock tower completed 1859. Renamed Elizabeth Tower in 2012 for Queen Elizabeth II\'s Diamond Jubilee. Symbol of British parliamentary democracy.',
      tourismInfo: 'UK residents can tour tower with advance booking. Closed to international visitors. Clock visible from Parliament Square.',
      interestingFacts: [
        'Tower leans 43.5 cm northwest due to underground work',
        'Big Ben is the bell, not the tower',
        'Pennies used to adjust clock timing',
        'Clock faces cleaned every 5 years',
        'Survived WWII bombing of London'
      ],
      locationOnMap: '51.5007° N, 0.1246° W, Westminster, London, UK'
    }
  },

  'red fort': {
    scientificOrTechName: 'Red Fort — Historic Fortification',
    primaryUses: 'Main residence of Mughal emperors for 200 years. Symbol of Mughal architecture and Indian independence.',
    specifications: [
      'Built: 1639–1648',
      'Architect: Ustad Ahmad Lahori',
      'Size: 254.67 acres (103 hectares)',
      'Material: Red sandstone',
    ],
    keyFeatures: [
      'UNESCO World Heritage Site',
      'Prime Minister addresses nation from here on Independence Day',
      'Blend of Persian, Timurid, and Indian architecture',
    ],
    humanDetails: 'Built by Shah Jahan when he moved capital from Agra to Delhi. Captured by British in 1857.',
    safetyAndLegalStatus: 'UNESCO World Heritage Site (2007). Protected monument under Archaeological Survey of India.',
    funFact: 'The Red Fort was originally white - it turned red because the British painted it red after capturing it!',
    landmarkProfile: {
      placeName: 'Red Fort (Lal Qila)',
      city: 'New Delhi',
      stateProvince: 'Delhi',
      country: 'India',
      builtYear: '1639–1648',
      architect: 'Ustad Ahmad Lahori',
      heightOrSize: '254.67 acres (103 hectares)',
      unescoStatus: 'UNESCO World Heritage Site (2007)',
      history: 'Built by Shah Jahan as new Mughal capital. Served as imperial residence for 200 years. Captured by British in 1857 after Indian Rebellion. Site of India\'s Independence Day celebrations since 1947.',
      tourismInfo: '3 million visitors annually. Light and sound show every evening. Museums showcase Mughal history. Closed on Mondays.',
      interestingFacts: [
        'Originally white, painted red by British',
        'Cost 10 million rupees (half of annual Mughal revenue)',
        'Peacock Throne (Takht-i-Taus) housed here (now lost)',
        'British used it as army barracks after capture',
        'Independence Day speech delivered from ramparts'
      ],
      locationOnMap: '28.6562° N, 77.2410° E, Old Delhi, India'
    }
  },

  'colosseum': {
    scientificOrTechName: 'Colosseum — Roman Amphitheatre',
    primaryUses: 'Ancient Roman amphitheater for gladiatorial contests, public spectacles, and dramas. Symbol of Imperial Rome.',
    specifications: [
      'Built: 70–80 AD',
      'Emperors: Vespasian, Titus',
      'Capacity: 50,000–80,000 spectators',
      'Material: Travertine limestone, tuff, brick',
    ],
    keyFeatures: [
      'Largest ancient amphitheater ever built',
      'UNESCO World Heritage Site',
      'Advanced engineering with underground hypogeum',
    ],
    humanDetails: 'Built under emperors Vespasian and Titus. Used for 400+ years before falling into disrepair.',
    safetyAndLegalStatus: 'UNESCO World Heritage Site (1980). Protected Italian cultural heritage site.',
    funFact: 'The Colosseum had a retractable awning (velarium) to shade spectators - operated by sailors from the Roman navy!',
    landmarkProfile: {
      placeName: 'Colosseum (Flavian Amphitheatre)',
      city: 'Rome',
      stateProvince: 'Lazio',
      country: 'Italy',
      builtYear: '70–80 AD',
      architect: 'Unknown (commissioned by Emperor Vespasian)',
      heightOrSize: '189 meters (620 feet) long, 156 meters (513 feet) wide',
      unescoStatus: 'UNESCO World Heritage Site (1980)',
      history: 'Built as gift to Roman people. Hosted gladiatorial contests, animal hunts, executions, and dramas. Damaged by earthquakes in 847 and 1349. Used as quarry in Middle Ages. Major restoration since 1990s.',
      tourismInfo: '7 million visitors annually. Underground hypogeum accessible with guided tour. Night tours available. Skip-the-line tickets recommended.',
      interestingFacts: [
        'Could be flooded for naval battles (naumachiae)',
        'Retractable awning operated by Roman navy sailors',
        'Had 80 entrances for efficient crowd management',
        'Used as quarry for building materials in Middle Ages',
        'Cross placed inside in 1749, removed in 1870s'
      ],
      locationOnMap: '41.8902° N, 12.4922° E, Rome, Italy'
    }
  },

  // ─────────────────────────────────────────────
  // TREES & PLANTS
  // ─────────────────────────────────────────────
  'potted plant': {
    scientificOrTechName: 'Decorative Indoor Potted Plant (Various Species)',
    primaryUses: 'Indoor air purification, aesthetic decoration, stress reduction, and humidity regulation. Common species include Peace Lily, Snake Plant, Pothos, and Monstera.',
    specifications: [
      'Common Indoor Species: Snake Plant, Pothos, Peace Lily, Fiddle Leaf Fig',
      'Air Purification: Removes benzene, formaldehyde, and CO2',
      'Light Requirement: Low to medium indirect sunlight',
    ],
    keyFeatures: [
      'NASA Clean Air Study found indoor plants reduce indoor pollutants by up to 87%',
      'Proven to reduce stress, boost productivity, and improve mood in workplaces',
    ],
    humanDetails: 'Potted plants are used in homes, offices, and hospitals worldwide.',
    safetyAndLegalStatus: 'Generally safe. Some plants toxic to pets — check before purchasing.',
    funFact: 'Talking to your plants actually helps them grow faster! Plants absorb CO2 we breathe out — more CO2 around them boosts photosynthesis!',
    plantProfile: {
      name: 'Indoor Potted Plant',
      scientificName: 'Various species (Sansevieria, Epipremnum, Spathiphyllum, Monstera)',
      uses: ['Air purification', 'Aesthetic decoration', 'Stress reduction', 'Humidity regulation'],
      medicinalBenefits: [
        'Snake Plant: Produces oxygen at night, improves air quality',
        'Peace Lily: Removes mold spores from air',
        'Aloe Vera: Gel treats burns and skin conditions',
        'Lavender: Reduces anxiety and improves sleep'
      ],
      waterRequirement: 'Varies by species - typically water when top inch of soil is dry',
      sunlightRequirement: 'Low to medium indirect sunlight for most indoor plants'
    }
  },

  'tree': {
    scientificOrTechName: 'Woody Perennial Plant (Various Species) — Arboreal Flora',
    primaryUses: 'Produces oxygen, absorbs carbon dioxide, provides shade, food, timber, and medicine. Fundamental to all terrestrial ecosystems.',
    specifications: [
      'A single tree absorbs 21.8 kg of CO2 per year',
      'Provides habitat for over 80% of world\'s terrestrial biodiversity',
      'Root systems stabilize soil and prevent erosion',
    ],
    keyFeatures: [
      'Trees communicate through underground fungal networks (mycorrhizae) — "Wood Wide Web"',
      'A mature tree provides enough oxygen for 4 people to breathe for a year',
    ],
    humanDetails: 'Trees cover 31% of Earth\'s land area. 3 trillion trees exist globally.',
    safetyAndLegalStatus: 'Protected natural resource. Tree felling regulated by environmental laws globally.',
    funFact: 'The oldest living tree is Methuselah — a 4,855-year-old Great Basin Bristlecone Pine in California whose exact location is kept secret to protect it!',
  },

  'oak tree': {
    scientificOrTechName: 'Quercus spp. — Oak Tree',
    primaryUses: 'Provides timber for furniture, construction, and wine barrels. Produces acorns as food for wildlife. Symbol of strength and longevity.',
    specifications: [
      'Species: Over 600 species of oak trees worldwide',
      'Lifespan: 200–1,000+ years depending on species',
      'Height: 20–40 meters (65–130 feet)',
    ],
    keyFeatures: [
      'Oak wood is highly durable and resistant to fungal and insect attack',
      'Acorns are a crucial food source for deer, squirrels, birds, and other wildlife',
    ],
    humanDetails: 'Oak has been used for shipbuilding, furniture, and architecture for thousands of years.',
    safetyAndLegalStatus: 'Protected tree species in many regions. Check local regulations before pruning or removal.',
    funFact: 'The Major Oak in Sherwood Forest is estimated to be 800–1,000 years old and was allegedly Robin Hood\'s hideout!',
  },

  'pine tree': {
    scientificOrTechName: 'Pinus spp. — Pine Tree',
    primaryUses: 'Source of timber, paper pulp, resin, and turpentine. Provides habitat for wildlife and prevents soil erosion on slopes.',
    specifications: [
      'Species: Over 120 species of pine trees',
      'Lifespan: 100–1,000+ years',
      'Needles: Evergreen, remain green year-round',
    ],
    keyFeatures: [
      'Pine needles contain vitamin C and can be brewed into tea',
      'Pine cones open and close based on humidity — natural hygrometers',
    ],
    humanDetails: 'Pine forests cover vast areas of the Northern Hemisphere and are crucial for carbon sequestration.',
    safetyAndLegalStatus: 'Commercial timber species. Sustainable forestry practices required.',
    funFact: 'Pine trees can "talk" to each other by releasing chemical signals when attacked by beetles, warning neighboring trees to boost their defenses!',
  },

  'maple tree': {
    scientificOrTechName: 'Acer spp. — Maple Tree',
    primaryUses: 'Source of maple syrup, timber for furniture, and ornamental shade trees. Famous for brilliant autumn foliage colors.',
    specifications: [
      'Species: Over 130 species of maple trees',
      'Sugar Maple: Primary source of commercial maple syrup',
      'Fall Colors: Red, orange, yellow, and gold',
    ],
    keyFeatures: [
      'Maple syrup production requires 40 liters of sap to make 1 liter of syrup',
      'Maple leaves are the national symbol of Canada',
    ],
    humanDetails: 'Maple trees are planted as street trees and in parks for their shade and beauty.',
    safetyAndLegalStatus: 'Ornamental and timber tree. Protected in urban areas.',
    funFact: 'The sugar maple\'s sap flow is triggered by freezing nights and warm days — this temperature swing creates pressure that pushes sap out of the tree!',
  },

  'coconut tree': {
    scientificOrTechName: 'Cocos nucifera — Coconut Palm Tree',
    primaryUses: 'Provides coconuts for food, water, oil, and building materials. Every part of the tree is usable — "Tree of Life".',
    specifications: [
      'Height: 15–30 meters (50–100 feet)',
      'Lifespan: 60–80 years',
      'Coconuts: 50–100 coconuts per year per tree',
    ],
    keyFeatures: [
      'Coconut water is sterile and can be used as emergency IV fluid',
      'Coir (fiber) used for ropes, mats, and potting soil',
    ],
    humanDetails: 'Coconut palms are essential to tropical economies and cultures worldwide.',
    safetyAndLegalStatus: 'Agricultural crop. Safe for consumption when properly prepared.',
    funFact: 'Coconuts can travel thousands of miles across oceans and still germinate on new shores — that\'s how they spread to tropical beaches worldwide!',
  },

  'banyan tree': {
    scientificOrTechName: 'Ficus benghalensis — Banyan Tree',
    primaryUses: 'Sacred tree providing shade, shelter, and medicinal uses. Known for aerial roots that grow into new trunks.',
    specifications: [
      'Lifespan: Can live for hundreds of years',
      'Canopy: Can cover several acres',
      'Native: Indian subcontinent',
    ],
    keyFeatures: [
      'Aerial roots grow downward from branches and become new trunks',
      'Single tree can appear like a small forest',
    ],
    humanDetails: 'Banyan trees are sacred in Hinduism and Buddhism. Often used as community gathering spaces.',
    safetyAndLegalStatus: 'Protected heritage tree in many regions. Sacred tree status.',
    funFact: 'The Great Banyan Tree in Kolkata is over 250 years old and covers 3.5 acres — it\'s the widest tree in the world with over 3,000 aerial roots!',
  },

  'neem tree': {
    scientificOrTechName: 'Azadirachta indica — Neem Tree',
    primaryUses: 'Medicinal tree used in Ayurveda for thousands of years. Every part has medicinal properties. Natural pesticide and fertilizer.',
    specifications: [
      'Lifespan: 100–200 years',
      'Height: 15–20 meters (50–65 feet)',
      'Native: Indian subcontinent',
    ],
    keyFeatures: [
      'Neem oil is a natural pesticide that repels over 200 insect species',
      'Neem leaves boost immunity and treat skin conditions',
    ],
    humanDetails: 'Called "Village Pharmacy" in India — used for treating fevers, infections, and skin diseases.',
    safetyAndLegalStatus: 'Medicinal plant. Generally safe when used as directed.',
    funFact: 'Neem trees are planted near homes in India because they release oxygen at night — unlike most plants which only release oxygen during the day!',
  },

  // ─────────────────────────────────────────────
  // WEATHER & NATURAL PHENOMENA
  // ─────────────────────────────────────────────
  'cloud': {
    scientificOrTechName: 'Cumulus, Stratus, Cirrus, Cumulonimbus (Atmospheric Water Vapor Cloud)',
    primaryUses: 'Clouds regulate Earth\'s temperature, transport water in the water cycle, and produce rain, snow, and lightning. Critical for all life on Earth.',
    specifications: [
      'Low Clouds (0–2 km): Stratus, Stratocumulus, Nimbostratus — rain producers',
      'Mid Clouds (2–7 km): Altocumulus, Altostratus',
      'High Clouds (7–12 km): Cirrus, Cirrostratus — ice crystal clouds',
      'Storm Clouds (up to 18 km): Cumulonimbus',
    ],
    keyFeatures: [
      'Cumulonimbus clouds contain enough electric energy to power a small city for hours',
      'A single cumulus cloud weighs approximately 500 tons!',
    ],
    humanDetails: 'Clouds cover on average 60% of Earth\'s surface at any given moment.',
    safetyAndLegalStatus: 'Natural phenomenon. Dark cumulonimbus clouds indicate severe weather — take shelter immediately.',
    funFact: 'Despite weighing 500 tons, clouds float because the water droplets are so tiny and spread out that the upward air currents easily support them!',
  },

  'rain': {
    scientificOrTechName: 'Precipitation — Liquid Water Droplets Falling from Clouds',
    primaryUses: 'Replenishes freshwater supplies, irrigates crops, refills rivers and groundwater, and cleans the atmosphere. Critical for all terrestrial life.',
    specifications: [
      'Rainfall Rate: Drizzle (<2mm/hr), Moderate (2–10mm/hr), Heavy (>10mm/hr)',
      'Largest recorded raindrop: 8.8mm diameter',
      'Petrichor: The pleasant earthy smell of rain on dry soil',
    ],
    keyFeatures: [
      'Raindrops are NOT tear-shaped — they are spherical at top and flat at bottom due to air resistance',
      'Acid rain occurs when sulfur dioxide and nitrogen oxides mix with atmospheric moisture',
    ],
    humanDetails: 'Global annual average rainfall is 990mm. Cherrapunji, India receives 11,777mm annually.',
    safetyAndLegalStatus: 'Natural phenomenon. Heavy rain and flash floods are dangerous — heed weather warnings.',
    funFact: 'Rain has never fallen on the Atacama Desert plateau in Chile — scientists call it the driest non-polar desert on Earth with some areas having NO recorded rainfall in 500 years!',
  },

  'fire': {
    scientificOrTechName: 'Combustion Reaction — Rapid Oxidation Releasing Heat and Light',
    primaryUses: 'Fire is a rapid chemical reaction between oxygen and fuel producing heat, light, and combustion products. Used for cooking, heating, industrial processes, and energy production.',
    specifications: [
      'Temperature: Candle flame: 1,000°C; Propane: 1,980°C; Acetylene: 3,480°C',
      'Color indicates temperature: Red (800°C) → Orange → Yellow → Blue-White (1,400°C+)',
      'Requires: Fuel, Oxygen, and Heat (Fire Triangle)',
    ],
    keyFeatures: [
      'Fire is a PLASMA state of matter — not solid, liquid, or gas',
      'Human control of fire (1 million years ago) was the single most transformative event in human evolution',
    ],
    humanDetails: 'Earliest evidence of controlled fire use by Homo erectus at Wonderwerk Cave, South Africa, ~1 million years ago.',
    safetyAndLegalStatus: 'DANGEROUS: Never leave fire unattended. Call fire services immediately in emergency. Class A, B, C, D fire extinguishers for different fire types.',
    funFact: 'A candle flame is actually hollow — the bright yellow glow comes from the outside shell of burning carbon particles, while the center of the flame is cold unburned wax vapor!',
  },

  'water': {
    scientificOrTechName: 'H₂O — Dihydrogen Monoxide, Universal Solvent',
    primaryUses: 'Essential for all life on Earth. Used for drinking, agriculture, industrial cooling, transportation, electricity generation (hydropower), and chemical processes.',
    specifications: [
      'Chemical Formula: H₂O (2 hydrogen + 1 oxygen atom)',
      'Boiling Point: 100°C at sea level; Freezing Point: 0°C',
      'Covers 71% of Earth\'s surface; Only 3% is freshwater',
    ],
    keyFeatures: [
      'Water is the only natural substance that exists in all three states (solid, liquid, gas) at room temperature conditions on Earth',
      'Maximum density at 4°C — explains why ice floats and oceans don\'t freeze from the bottom',
    ],
    humanDetails: 'Human body is 60–70% water. We can survive 3 weeks without food but only 3 days without water.',
    safetyAndLegalStatus: 'Fundamental human right per UN Resolution. Water scarcity affects 2 billion people globally.',
    funFact: 'Water molecules in your body may have once been part of a dinosaur — water is recycled continuously through Earth\'s water cycle over millions of years!',
  },

  'lightning': {
    scientificOrTechName: 'Lightning — Electrostatic Discharge in Atmospheric Storms',
    primaryUses: 'Natural electrical discharge between clouds or clouds and ground. Plays critical role in nitrogen fixation — making nitrogen available for plants.',
    specifications: [
      'Temperature: 30,000 Kelvin (5x hotter than the Sun\'s surface)',
      'Duration: 0.2 seconds (main stroke)',
      'Voltage: 1 to 1 billion volts; Current: 10,000–200,000 amperes',
    ],
    keyFeatures: [
      'Thunder is the sound wave produced by rapid expansion of super-heated air around a lightning bolt',
      'A single lightning bolt fixes enough atmospheric nitrogen to fertilize 1 acre of farmland',
    ],
    humanDetails: 'Earth receives 100 lightning strikes per second — 8.6 million per day globally.',
    safetyAndLegalStatus: 'EXTREMELY DANGEROUS. Seek shelter immediately. Avoid trees, open fields, water, and metal objects during storms.',
    funFact: 'Roy Sullivan, a US park ranger, was struck by lightning SEVEN separate times and survived — earning him the Guinness World Record for most lightning strike survivals!',
  },

  // ─────────────────────────────────────────────
  // VEHICLES
  // ─────────────────────────────────────────────
  'car': {
    scientificOrTechName: 'Automobile — Motor Vehicle',
    primaryUses: 'Personal transportation, commuting, travel, and goods transport. Modern vehicles include advanced safety features, entertainment systems, and connectivity.',
    specifications: [
      'Types: Sedan, SUV, Hatchback, Coupe, Convertible, Truck',
      'Powertrain: Internal Combustion Engine (ICE), Hybrid, Electric (EV)',
      'Safety: ABS, airbags, crumple zones, ADAS, lane-keeping assist',
    ],
    keyFeatures: [
      'Modern EVs like Tesla Model S accelerate 0–100 km/h in under 2 seconds',
      'Autonomous (self-driving) vehicles use LiDAR, cameras, and AI to navigate',
    ],
    humanDetails: '1.4 billion cars on Earth roads. Karl Benz\'s 1886 Benz Patent-Motorwagen was the first true automobile.',
    safetyAndLegalStatus: 'Requires registered license, insurance, and compliance with road traffic laws.',
    funFact: 'The average car spends 95% of its life parked — unused! This is the driving force behind ride-sharing and autonomous mobility services!',
    vehicleProfile: {
      brand: 'Various',
      model: 'Various',
      vehicleType: 'Automobile',
      manufacturer: 'Various (Toyota, Volkswagen, GM, Ford, Honda, etc.)',
      engine: 'Internal Combustion Engine (ICE), Hybrid, or Electric Motor',
      fuelType: 'Gasoline, Diesel, Electric, Hybrid',
      approximatePrice: '$15,000 - $500,000+ depending on model',
      country: 'Global (manufactured in USA, Germany, Japan, South Korea, China, etc.)',
      features: [
        'Advanced Driver Assistance Systems (ADAS)',
        'Infotainment and navigation systems',
        'Bluetooth and smartphone connectivity',
        'Climate control',
        'Safety features (ABS, airbags, collision warning)',
        'Fuel efficiency or electric range optimization',
        'Autonomous driving capabilities (in premium models)'
      ]
    }
  },

  'tesla': {
    scientificOrTechName: 'Tesla Electric Vehicle — EV',
    primaryUses: 'All-electric vehicles with advanced autopilot features, over-the-air updates, and high-performance capabilities.',
    specifications: [
      'Models: Model S, Model 3, Model X, Model Y, Cybertruck',
      'Range: 250–520 miles per charge',
      'Acceleration: 0–60 mph in 1.99–5.8 seconds',
    ],
    keyFeatures: [
      'Over-the-air software updates',
      'Autopilot and Full Self-Driving capability',
      'Supercharger network access',
    ],
    humanDetails: 'Founded by Elon Musk in 2003. Accelerated global EV adoption and forced traditional automakers to electrify.',
    safetyAndLegalStatus: 'Subject to automotive safety regulations. Autopilot requires driver supervision.',
    funFact: 'Tesla\'s Model S was the first electric car to win Motor Trend Car of the Year in 2013!',
    vehicleProfile: {
      brand: 'Tesla',
      model: 'Model S, Model 3, Model X, Model Y, Cybertruck',
      vehicleType: 'Electric Vehicle (EV)',
      manufacturer: 'Tesla, Inc.',
      engine: 'Electric Motors (Dual or Tri-motor)',
      fuelType: 'Electricity (Lithium-ion batteries)',
      approximatePrice: '$40,000 - $150,000+',
      country: 'United States (manufactured in California, Texas, and Berlin)',
      features: [
        'Autopilot and Full Self-Driving capability',
        'Over-the-air software updates',
        'Supercharger network access',
        '0–60 mph in as fast as 1.99 seconds (Model S Plaid)',
        'Up to 520 miles range',
        'Minimalist interior with large touchscreen',
        'Advanced safety features and crash protection'
      ]
    }
  },

  'bmw': {
    scientificOrTechName: 'BMW — Bayerische Motoren Werke',
    primaryUses: 'German luxury vehicles known for performance, engineering excellence, and driving dynamics.',
    specifications: [
      'Series: 1, 2, 3, 4, 5, 6, 7, 8, X, Z, i (electric)',
      'Engine: Inline-4, Inline-6, V8, V12, Electric',
      'Drive: Rear-wheel drive, xDrive AWD',
    ],
    keyFeatures: [
      'Ultimate Driving Machine philosophy',
      'Advanced iDrive infotainment system',
      'M Performance division for high-performance models',
    ],
    humanDetails: 'Founded in 1916 as aircraft engine manufacturer. Now part of "German Big Three" luxury automakers.',
    safetyAndLegalStatus: 'Subject to global automotive safety standards. Premium safety features standard.',
    funFact: 'BMW\'s logo represents a spinning propeller from their aviation heritage — not a blue and white checkerboard!',
    vehicleProfile: {
      brand: 'BMW',
      model: '3 Series, 5 Series, X5, M3, M5, i4, iX, etc.',
      vehicleType: 'Luxury Automobile',
      manufacturer: 'Bayerische Motoren Werke AG',
      engine: 'Inline-4, Inline-6, V8, V12, Electric Motors',
      fuelType: 'Gasoline, Diesel, Electric, Hybrid',
      approximatePrice: '$35,000 - $200,000+',
      country: 'Germany (headquartered in Munich)',
      features: [
        'Ultimate Driving Machine dynamics',
        'iDrive infotainment system with gesture control',
        'M Performance high-performance variants',
        'Advanced driver assistance systems',
        'Luxury interior with premium materials',
        'xDrive all-wheel drive system',
        'Electric i Series with sustainable materials'
      ]
    }
  },

  'mercedes': {
    scientificOrTechName: 'Mercedes-Benz — Luxury Automobile',
    primaryUses: 'German luxury vehicles known for comfort, innovation, and prestige. Pioneer of automotive safety features.',
    specifications: [
      'Classes: A, C, E, S, G, GL, EQ (electric)',
      'Engine: Inline-4, V6, V8, V12, Electric',
      'Drive: 4MATIC AWD, RWD',
    ],
    keyFeatures: [
      'Pioneer in automotive safety (invented crumple zones, airbags)',
      'MBUX infotainment system with AI assistant',
      'AMG high-performance division',
    ],
    humanDetails: 'Founded in 1926. Invented the first automobile in 1886 (Benz Patent-Motorwagen). Symbol of German engineering.',
    safetyAndLegalStatus: 'Subject to global automotive safety standards. Pioneer in safety innovations.',
    funFact: 'Mercedes-Benz invented the crumple zone, airbag, ABS, and many other safety features now standard in all cars!',
    vehicleProfile: {
      brand: 'Mercedes-Benz',
      model: 'C-Class, E-Class, S-Class, G-Class, AMG GT, EQS, etc.',
      vehicleType: 'Luxury Automobile',
      manufacturer: 'Daimler AG',
      engine: 'Inline-4, V6, V8, V12, Electric Motors',
      fuelType: 'Gasoline, Diesel, Electric, Hybrid',
      approximatePrice: '$40,000 - $250,000+',
      country: 'Germany (headquartered in Stuttgart)',
      features: [
        'Pioneer in automotive safety innovations',
        'MBUX infotainment with "Hey Mercedes" AI assistant',
        'AMG high-performance division',
        'Luxurious interior with premium materials',
        '4MATIC all-wheel drive system',
        'EQ electric vehicle lineup',
        'Advanced autonomous driving capabilities'
      ]
    }
  },

  'toyota': {
    scientificOrTechName: 'Toyota Motor Corporation — Japanese Automaker',
    primaryUses: 'Reliable, fuel-efficient vehicles known for quality and longevity. Pioneer of hybrid technology.',
    specifications: [
      'Models: Corolla, Camry, RAV4, Prius, Land Cruiser, Hilux',
      'Engine: Inline-4, V6, Hybrid Synergy Drive',
      'Drive: FWD, AWD, 4WD',
    ],
    keyFeatures: [
      'Pioneer of hybrid technology (Prius since 1997)',
      'Known for exceptional reliability and resale value',
      'Largest automaker by sales volume',
    ],
    humanDetails: 'Founded in 1937. Revolutionized manufacturing with Toyota Production System (lean manufacturing).',
    safetyAndLegalStatus: 'Subject to global automotive safety standards. Toyota Safety Sense standard on most models.',
    funFact: 'The Toyota Corolla is the best-selling car of all time — over 50 million sold since 1966!',
    vehicleProfile: {
      brand: 'Toyota',
      model: 'Corolla, Camry, RAV4, Prius, Land Cruiser, Hilux, etc.',
      vehicleType: 'Mass Market Automobile',
      manufacturer: 'Toyota Motor Corporation',
      engine: 'Inline-4, V6, Hybrid Synergy Drive',
      fuelType: 'Gasoline, Hybrid',
      approximatePrice: '$20,000 - $85,000+',
      country: 'Japan (headquartered in Toyota City)',
      features: [
        'Pioneer of hybrid technology (Prius)',
        'Toyota Safety Sense safety suite',
        'Exceptional reliability and longevity',
        'High resale value',
        'Fuel-efficient powertrains',
        'Wide range of vehicles from economy to luxury',
        'Land Cruiser: legendary off-road capability'
      ]
    }
  },

  'motorcycle': {
    scientificOrTechName: 'Motorcycle — Two-Wheeled Motor Vehicle',
    primaryUses: 'Personal transportation, recreation, and sport. More agile and fuel-efficient than cars.',
    specifications: [
      'Types: Sport, Cruiser, Touring, Adventure, Dirt Bike, Scooter',
      'Engine: 50cc to 2,500cc',
      'Transmission: Manual, Automatic, CVT',
    ],
    keyFeatures: [
      'Superbikes can exceed 200 mph',
      'Excellent fuel efficiency (50–100 mpg)',
      'Lane splitting legal in some regions',
    ],
    humanDetails: 'First gasoline motorcycle built by Gottlieb Daimler in 1885. Over 200 million motorcycles worldwide.',
    safetyAndLegalStatus: 'Requires motorcycle license and helmet in most jurisdictions. Higher accident risk than cars.',
    funFact: 'The fastest production motorcycle is the Kawasaki Ninja H2R with 310 mph top speed — but it\'s not street legal!',
    vehicleProfile: {
      brand: 'Various',
      model: 'Various (Honda, Yamaha, Kawasaki, Harley-Davidson, etc.)',
      vehicleType: 'Motorcycle',
      manufacturer: 'Various manufacturers',
      engine: '50cc to 2,500cc gasoline engines',
      fuelType: 'Gasoline',
      approximatePrice: '$3,000 - $50,000+',
      country: 'Global (Japan, USA, Italy, India major producers)',
      features: [
        'Lightweight and agile handling',
        'Excellent fuel efficiency (50–100 mpg)',
        'Lane splitting capability (where legal)',
        'Open-air riding experience',
        'Lower purchase and operating costs than cars',
        'Sport bikes: extreme performance (200+ mph)',
        'Cruisers: comfortable long-distance touring',
        'Adventure bikes: off-road capability'
      ]
    }
  },

  // ─────────────────────────────────────────────
  // OBJECTS (Bug fixes + improvements)
  // ─────────────────────────────────────────────
  'clock': {
    scientificOrTechName: 'Wall or Desk Clock — Timekeeping Device',
    primaryUses: 'Measures and displays time. Wall clocks, alarm clocks, desk clocks, and grandfather clocks serve as time management tools in homes, offices, and public spaces.',
    specifications: [
      'Types: Analog (dial and hands), Digital (LED/LCD display)',
      'Mechanisms: Quartz oscillator (32,768 Hz), Pendulum, Spring-wound, Atomic',
      'Accuracy: Quartz clocks ±15 seconds/month; Atomic clocks ±1 second/300 million years',
    ],
    keyFeatures: [
      'Quartz crystal vibrates 32,768 times per second — each vibration tracked as exactly 1/32768 of a second',
      'Atomic clocks use cesium-133 atom oscillations — most accurate human-made instruments',
    ],
    humanDetails: 'Clocks have been used since ancient civilizations — sundials (3,500 BC), water clocks (1,500 BC), mechanical clocks (13th century).',
    safetyAndLegalStatus: 'Standard consumer timekeeping device. Safe for all ages.',
    funFact: 'All clocks in watch advertisements show 10:10 — because this position makes the hands symmetrical and forms a "smiley face" that feels pleasant and trustworthy to shoppers!',
  },

  'watch': {
    scientificOrTechName: 'Wristwatch or Pocket Watch — Portable Timekeeping Accessory',
    primaryUses: 'Worn on the wrist or carried in a pocket for personal timekeeping. Modern smartwatches add health monitoring, GPS, notifications, and apps.',
    specifications: [
      'Types: Mechanical (manual wind), Automatic, Quartz, Smartwatch',
      'Luxury Brands: Rolex, Omega, Patek Philippe, Cartier',
      'Smartwatch Features: Heart rate, ECG, GPS, sleep tracking',
    ],
    keyFeatures: [
      'Automatic watches wind themselves using wrist movement via a rotor mechanism',
      'Apple Watch is now the world\'s #1 selling watch — outselling all Swiss watchmakers combined!',
    ],
    humanDetails: 'Wristwatches became popular during World War I when soldiers needed hands-free timekeeping.',
    safetyAndLegalStatus: 'Consumer fashion accessory and health device. Safe for all ages.',
    funFact: 'A Patek Philippe Grandmaster Chime wristwatch sold at auction for $31 million — making it the most expensive watch ever sold!',
  },

  'traffic light': {
    scientificOrTechName: 'Traffic Signal Light — Road Traffic Control Device',
    primaryUses: 'Regulates vehicle and pedestrian traffic flow at intersections using a three-color system (Red, Amber/Yellow, Green) to prevent accidents and manage road safety.',
    specifications: [
      'Colors: Red (Stop), Amber/Yellow (Prepare to Stop), Green (Go)',
      'Pedestrian Signal: Walk (White/Green man), Don\'t Walk (Red man)',
      'International Standard: ISO 3: Red top, Amber middle, Green bottom',
    ],
    keyFeatures: [
      'Red light was chosen because red has the longest wavelength (700nm) — visible from greatest distance',
      'Modern smart traffic lights use AI cameras to dynamically adjust timing based on traffic density',
    ],
    humanDetails: 'First traffic light installed in London, 1868 (gas-powered). First electric traffic light: Cleveland, Ohio, 1914.',
    safetyAndLegalStatus: 'Road Safety Device: Running red lights is a serious criminal traffic offence in all countries — punishable by fines, license suspension, and imprisonment.',
    funFact: 'The world\'s busiest intersection is Shibuya Crossing in Tokyo, Japan — up to 2,500 pedestrians cross from all directions simultaneously in a single traffic light cycle!',
  },

  'stop sign': {
    scientificOrTechName: 'Octagonal Stop Sign — Mandatory Road Safety Sign',
    primaryUses: 'Traffic control sign requiring all vehicles to come to a complete stop before proceeding. Prevents intersection accidents.',
    specifications: [
      'Shape: Regular Octagon (8-sided) — unique shape so drivers identify it even when covered by snow',
      'Color: Red background with white STOP lettering',
      'Retroreflective material for night visibility',
    ],
    keyFeatures: [
      'Octagonal shape was chosen so it could be identified by shape alone even when obscured',
      'All 50 US states and most global traffic authorities use the same standard octagon',
    ],
    humanDetails: 'First stop sign installed in Detroit, Michigan, 1915.',
    safetyAndLegalStatus: 'Mandatory Traffic Sign: Failing to stop at a stop sign is a moving traffic violation — results in fines, demerit points, and potential license suspension.',
    funFact: 'The stop sign was originally yellow with black letters — it only became red in 1954 when red reflective paint became affordable enough to standardize globally!',
  },

  'bottle': {
    scientificOrTechName: 'Glass Bottle — Container for Liquids',
    primaryUses: 'Portable container for storing and carrying liquids, such as water, juice, or soda.',
    specifications: [
      'Materials: Glass, Plastic, Stainless Steel',
      'Shapes: Round, Square, Rectangular',
      'Sizes: 0.5L to 2L',
    ],
    keyFeatures: [
      'Glass bottles are non-toxic and eco-friendly',
      'Plastic bottles are lightweight and shatter-resistant',
    ],
    humanDetails: 'Bottles have been used since ancient civilizations — clay bottles (3000 BC), glass bottles (1500 BC).',
    safetyAndLegalStatus: 'Consumer product. Safe for all ages.',
    funFact: 'The first plastic bottle was invented in 1947 — it was made of polyethylene terephthalate (PET) and was used for packaging soda!',
  },

  // ─────────────────────────────────────────────
  // EXISTING OBJECTS (Kept + Enhanced)
  // ─────────────────────────────────────────────
  'sunglasses': {
    scientificOrTechName: 'UV400 Polarized Sunglasses — Ophthalmic Protective Eyewear',
    primaryUses: 'Protects eyes from UV-A and UV-B solar radiation (up to 400nm wavelength). Reduces glare from water, roads, and snow. Fashion accessory for outdoor activities.',
    specifications: [
      'UV Protection: UV400 (blocks all UV light below 400nm)',
      'Lens Type: Polarized Polycarbonate or Trivex',
      'Frame: Titanium, Acetate, or TR90 polymer',
    ],
    keyFeatures: [
      'Polarized lenses eliminate horizontal glare by filtering reflected light waves',
      'Category 3 tint (transmittance 8–18%) recommended for bright sun and water activities',
    ],
    humanDetails: 'Worn by outdoor enthusiasts, drivers, pilots, and as a fashion accessory.',
    safetyAndLegalStatus: 'Legal Consumer Eyewear. Compliant with ANSI Z80.3 and ISO 12312-1 eye safety standards.',
    funFact: 'In 12th-century China, judges wore flat panes of smoked quartz — not to block sun, but to hide their expressions while questioning witnesses in court!',
    clothingProfile: {
      name: 'Sunglasses',
      category: 'Eyewear / Accessories',
      material: ['Polycarbonate', 'Glass', 'Titanium', 'Acetate', 'TR90 Polymer'],
      uses: ['UV protection', 'Glare reduction', 'Eye safety', 'Fashion accessory', 'Sports performance'],
      popularBrands: ['Ray-Ban', 'Oakley', 'Maui Jim', 'Costa', 'Prada', 'Gucci', 'Tom Ford']
    }
  },

  'eyeglasses': {
    scientificOrTechName: 'Ophthalmic Corrective Spectacles — Prescription Vision Device',
    primaryUses: 'Corrects refractive vision errors (myopia, hyperopia, astigmatism, presbyopia). Modern anti-blue-light variants also protect from screen radiation.',
    specifications: [
      'Lens Types: Single vision, Bifocal, Progressive, Anti-Blue Light',
      'Frame Materials: Titanium, Acetate, Stainless Steel',
      'Refractive Index: Standard (1.5) to High-index (1.74)',
    ],
    keyFeatures: [
      'Anti-reflective coating reduces glare and improves night vision',
      'Photochromic lenses darken in sunlight (Transitions)',
      'Blue light blocking reduces digital eye strain',
    ],
    humanDetails: 'Worn by over 2 billion people worldwide for vision correction.',
    safetyAndLegalStatus: 'Medical device requiring prescription. Regulated by health authorities.',
    funFact: 'The first eyeglasses were invented in Italy around 1290 — they were originally called "reading stones" and were held by hand, not worn!',
    clothingProfile: {
      name: 'Eyeglasses',
      category: 'Eyewear / Medical Device',
      material: ['Polycarbonate', 'Glass', 'Titanium', 'Acetate', 'Stainless Steel'],
      uses: ['Vision correction', 'Reading', 'Computer work', 'Driving', 'Fashion accessory'],
      popularBrands: ['Ray-Ban', 'Oakley', 'Warby Parker', 'Gucci', 'Prada', 'Tom Ford', 'LensCrafters']
    }
  },

  'cell phone': {
    scientificOrTechName: 'Touchscreen Smartphone — 5G Mobile Communication Device',
    primaryUses: 'Mobile communication (calls, SMS), internet browsing, AI computing, digital photography, GPS navigation, contactless payments, and social media.',
    specifications: [
      'Display: OLED or AMOLED with 120Hz refresh rate',
      'Connectivity: 5G Sub-6GHz, Wi-Fi 6E, Bluetooth 5.3, NFC',
      'Processor: 3nm System-on-Chip with integrated AI neural processing unit',
    ],
    keyFeatures: [
      'Modern flagship phones outperform 2010 supercomputers in processing power',
      'Camera computational photography (AI stacking) replaced dedicated DSLR cameras for most users',
    ],
    humanDetails: 'Over 6.9 billion smartphones are in active use globally — nearly one per person on Earth.',
    safetyAndLegalStatus: 'Regulated telecommunications device. FCC certified for RF radiation safety.',
    funFact: 'The Apollo 11 mission computer had 72KB of memory. Today\'s average smartphone has 8,000,000KB (8GB) of RAM — over 100,000 times more computing power!',
    mobilePhoneProfile: {
      brand: 'Various',
      model: 'Various',
      operatingSystem: 'Android or iOS',
      processor: '3nm, 4nm, or 5nm System-on-Chip (Snapdragon, Apple A-series, MediaTek)',
      ram: '4GB to 16GB',
      storage: '64GB to 1TB',
      camera: '12MP to 200MP with multiple lenses',
      battery: '3000mAh to 6000mAh',
      screenSize: '5.5 inches to 7.0 inches',
      releaseYear: '2020–2024 (current models)',
      approximatePrice: '$200 - $1,500+',
      features: [
        '5G connectivity for high-speed data',
        'AI-powered computational photography',
        'Face ID or fingerprint security',
        'Wireless charging and fast charging',
        'Water and dust resistance (IP67/IP68)',
        'NFC for contactless payments',
        'High refresh rate displays (90–120Hz)',
        'Satellite connectivity (in premium models)',
        'AI assistants (Siri, Google Assistant)'
      ]
    }
  },

  'iphone': {
    scientificOrTechName: 'Apple iPhone — iOS Smartphone',
    primaryUses: 'Premium smartphone running iOS. Known for ecosystem integration, security, and user experience.',
    specifications: [
      'Models: iPhone 15, 15 Pro, 15 Pro Max, 15 Plus',
      'Processor: A17 Pro chip (3nm)',
      'iOS: Latest version with long-term support',
    ],
    keyFeatures: [
      'Face ID facial recognition',
      'Seamless Apple ecosystem integration',
      'App Store with curated apps',
    ],
    humanDetails: 'First iPhone released in 2007 revolutionized smartphones. Over 2.2 billion iPhones sold to date.',
    safetyAndLegalStatus: 'FCC certified. Strong privacy and security features built into iOS.',
    funFact: 'The original iPhone had no App Store, no copy-paste, and no 3G — yet it sold 6 million units in its first year!',
    mobilePhoneProfile: {
      brand: 'Apple',
      model: 'iPhone 15, 15 Pro, 15 Pro Max, 15 Plus, SE',
      operatingSystem: 'iOS 17+',
      processor: 'A17 Pro (3nm) or A16 Bionic',
      ram: '6GB to 8GB',
      storage: '128GB to 1TB',
      camera: '48MP main with 5x optical zoom (Pro models)',
      battery: '3349mAh to 4422mAh',
      screenSize: '6.1 inches to 6.7 inches',
      releaseYear: '2023–2024',
      approximatePrice: '$799 - $1,599+',
      features: [
        'Face ID facial recognition',
        'Dynamic Island display',
        'Titanium design (Pro models)',
        'USB-C with USB 3 speeds',
        'Action Button (Pro models)',
        'Emergency SOS via satellite',
        'Apple ecosystem integration (Mac, iPad, Watch)',
        '5-year iOS software support',
        'App Store with curated applications'
      ]
    }
  },

  'samsung': {
    scientificOrTechName: 'Samsung Galaxy — Android Smartphone',
    primaryUses: 'Premium Android smartphones with cutting-edge displays, cameras, and S Pen integration.',
    specifications: [
      'Models: Galaxy S24, S24+, S24 Ultra, Z Fold5, Z Flip5',
      'Processor: Snapdragon 8 Gen 3 or Exynos 2400',
      'Display: AMOLED with 120–144Hz refresh rate',
    ],
    keyFeatures: [
      'Industry-leading AMOLED displays',
      'S Pen stylus (Ultra and Fold models)',
      'Galaxy ecosystem integration',
    ],
    humanDetails: 'Samsung is the world\'s largest smartphone manufacturer. Galaxy S series flagship since 2010.',
    safetyAndLegalStatus: 'FCC certified. Samsung Knox security platform for enterprise.',
    funFact: 'Samsung manufactures displays for iPhone — Apple is one of Samsung\'s biggest display customers!',
    mobilePhoneProfile: {
      brand: 'Samsung',
      model: 'Galaxy S24, S24+, S24 Ultra, Z Fold5, Z Flip5',
      operatingSystem: 'Android 14 with One UI',
      processor: 'Snapdragon 8 Gen 3 or Exynos 2400',
      ram: '8GB to 12GB',
      storage: '256GB to 1TB',
      camera: '200MP main with 100x Space Zoom',
      battery: '4000mAh to 5000mAh',
      screenSize: '6.2 inches to 7.6 inches (foldable)',
      releaseYear: '2023–2024',
      approximatePrice: '$800 - $1,800+',
      features: [
        'Galaxy AI features (live translate, circle to search)',
        'S Pen stylus (Ultra and Fold models)',
        'Industry-leading AMOLED displays',
        'Samsung Knox security',
        'Galaxy ecosystem (Watch, Buds, Tablets)',
        'Wireless PowerShare',
        'IP68 water and dust resistance',
        '7 years of Android OS updates (S24 series)'
      ]
    }
  },

  'laptop': {
    scientificOrTechName: 'Mobile Personal Computer — Notebook Workstation',
    primaryUses: 'Software development, AI model training, data science, video editing, gaming, remote work, and education.',
    specifications: [
      'Processor: Multi-core ARM64 (Apple M-series) or x86-64 (Intel Core, AMD Ryzen)',
      'Storage: NVMe PCIe Gen 4 SSD (up to 8TB)',
      'Display: IPS or OLED with up to 240Hz refresh rate',
    ],
    keyFeatures: [
      'Modern laptops use Thunderbolt 4 ports delivering 40Gbps data transfer speed',
      'Apple M4 chips use 3nm fabrication with 38-trillion operations per second Neural Engine',
    ],
    humanDetails: 'Over 170 million laptops sold globally per year. Essential tool for modern work and education.',
    safetyAndLegalStatus: 'Consumer electronics. Complies with international FCC, CE, and BIS safety standards.',
    funFact: 'The first laptop, the Osborne 1 (1981), weighed 11kg (24 lbs), cost $1,795, and had a 5-inch screen — yet was considered revolutionary for being "portable"!',
  },

  'cpu': {
    scientificOrTechName: 'Central Processing Unit & Desktop System Tower (CPU Workstation)',
    primaryUses: 'Core computational unit of desktop computers executing arithmetic, logic, control, and I/O instructions. Houses CPU, GPU, motherboard, RAM, and power supply.',
    specifications: [
      'Architectures: x86-64 (Intel Core i9/Xeon, AMD Ryzen/EPYC), ARM64',
      'Clock speeds up to 6.0 GHz with multi-core parallelism (up to 96 cores)',
      'High-throughput PCIe 5.0 bus for dedicated GPU AI acceleration',
    ],
    keyFeatures: [
      'Executes billions of floating-point operations per second (FLOPS) for real-time AI & 3D rendering',
      'Liquid or high-surface area heat-pipe active thermal dissipation system',
    ],
    humanDetails: 'Central brain of personal computers and AI workstations worldwide.',
    safetyAndLegalStatus: 'Electronics consumer hardware. FCC, CE, and RoHS compliant.',
    funFact: 'A modern desktop CPU chip contains over 80 billion transistors, with individual logic gates etched at just 3 nanometers — 20,000 times thinner than a human hair!',
  },

  'computer': {
    scientificOrTechName: 'Personal Desktop Computer & Workstation System',
    primaryUses: 'High-performance computing, software development, AI model execution, graphic processing, and administrative office operations.',
    specifications: [
      'Components: Motherboard, Multi-Core Processor, Dedicated Graphics Processing Unit (GPU), NVMe SSD Storage, DDR5 RAM',
      'Operating Systems: Windows 11, macOS, Linux (Ubuntu/Debian)',
    ],
    keyFeatures: [
      'Modular expandable hardware architecture',
      'Supports high-bandwidth peripheral connectivity (USB 4, Thunderbolt 4, DisplayPort 2.1)',
    ],
    humanDetails: 'Essential computing foundation for modern digital infrastructure and human productivity.',
    safetyAndLegalStatus: 'Regulated electronic equipment. Certified under international EMC & safety standards.',
    funFact: 'The ENIAC (1945), the first general-purpose electronic computer, weighed 30 tons and occupied 1,800 square feet — today\'s average smartphone is millions of times faster!',
  },

  'mouse': {
    scientificOrTechName: 'Optical / Laser Computer Mouse (Input Peripheral)',
    primaryUses: 'Precision point-and-click graphical user interface (GUI) navigation, CAD design, gaming, and interactive computer control.',
    specifications: [
      'Sensor: High-precision optical or laser tracking (up to 30,000 DPI/CPI)',
      'Polling Rate: 1,000Hz to 8,000Hz response rate (0.125ms latency)',
      'Connectivity: Wireless 2.4GHz ultra-low latency, Bluetooth 5.3, or braided USB-C',
    ],
    keyFeatures: [
      'Uses tiny LED/laser camera taking thousands of surface photos per second to calculate motion vectors',
      'Ergonomic contouring reduces carpal tunnel strain during extended computing sessions',
    ],
    humanDetails: 'Invented by Douglas Engelbart in 1964 at Stanford Research Institute.',
    safetyAndLegalStatus: 'Class 1 eye-safe laser/LED peripheral device. FCC & CE approved.',
    funFact: 'The very first computer mouse invented in 1964 was carved out of a single block of wood and had two perpendicular metal wheels inside!',
  },

  'keyboard': {
    scientificOrTechName: 'Computer Keyboard (Hardware Alphanumeric Input Device)',
    primaryUses: 'Text input, programming, command execution, hotkey navigation, and interactive gaming control.',
    specifications: [
      'Switch Mechanisms: Mechanical (Linear, Tactile, Clicky), Membrane, Optical-Mechanical, Capacitive',
      'Layout Standards: QWERTY, AZERTY, DVORAK, Colemak (ANSI/ISO form factors)',
      'Keycap Material: Double-shot PBT or ABS plastic with RGB LED backlighting',
    ],
    keyFeatures: [
      'N-Key Rollover (NKRO) allows simultaneous matrix keypress detection without ghosting',
      'Hot-swappable PCB sockets enable custom mechanical switch customization',
    ],
    humanDetails: 'Standard primary text interface between humans and computer operating systems.',
    safetyAndLegalStatus: 'Consumer electronic peripheral. Low-voltage DC powered.',
    funFact: 'The QWERTY keyboard layout was designed in 1873 for mechanical typewriters to intentionally slow typists down so physical typewriter arms wouldn\'t jam together!',
  },

  'projector': {
    scientificOrTechName: 'Digital HD / Laser Video Projector (Optical Display System)',
    primaryUses: 'Large-screen image projection for presentations, cinema, live events, gaming, and classroom instruction.',
    specifications: [
      'Light Engine: Laser Phosphor, RGB Triple Laser, LED, or High-Efficiency Lamp',
      'Display Technologies: DLP (Digital Light Processing), 3LCD, LCoS',
      'Resolution & Brightness: 4K UHD / 1080p output with 2,000 to 10,000+ ANSI Lumens',
    ],
    keyFeatures: [
      'Projects images up to 300+ inches on walls or projection screens',
      'Keystone correction and optical lens shift allow distortion-free projection at acute angles',
    ],
    humanDetails: 'Used globally in conference rooms, home theaters, auditoriums, and educational institutions.',
    safetyAndLegalStatus: 'Laser Safety Class 2/3R. Avoid looking directly into the lens light beam.',
    funFact: 'Modern DLP projectors use a microchip containing up to 8.3 million microscopic mirrors, each tilting back and forth over 5,000 times per second to create the picture!',
  },

  'monitor': {
    scientificOrTechName: 'High-Definition Computer Monitor Display Screen',
    primaryUses: 'Visual output display for computers, video editing consoles, gaming setups, and professional graphic design workstations.',
    specifications: [
      'Panel Tech: IPS, OLED, QD-OLED, VA (1080p, 1440p, 4K UHD resolutions)',
      'Refresh Rates: 60Hz up to 360Hz with NVIDIA G-Sync / AMD FreeSync VRR',
      'Color Gamut: 99% DCI-P3 / sRGB color calibration',
    ],
    keyFeatures: [
      'Ultra-thin bezel design with HDR1000 dynamic peak brightness',
      'Eye-care technology with flicker-free DC dimming and low blue light filter',
    ],
    humanDetails: 'Primary visual display window for desktop computing users.',
    safetyAndLegalStatus: 'Consumer electronics display. Certified Energy Star and TÜV Rheinland eye-comfort.',
    funFact: 'OLED monitors emit light individually from every single sub-pixel, giving them an "infinite" contrast ratio by turning black pixels completely OFF!',
  },

  'headset': {
    scientificOrTechName: 'Over-Ear Acoustic Audio Headset & Headphones System',
    primaryUses: 'Personal audio listening, teleconferencing, voice communication, studio monitoring, and immersive gaming audio.',
    specifications: [
      'Driver Architecture: 40mm – 50mm Neodymium Dynamic Transducers',
      'Frequency Response: 20Hz – 20,000Hz (Hi-Res Audio Certified)',
      'Connectivity: Wireless Bluetooth 5.3 / 3.5mm Analog Audio / USB-C',
    ],
    keyFeatures: [
      'Ergonomic memory foam earcup cushions provide passive acoustic noise isolation',
      'Active Noise Cancellation (ANC) suppresses background ambient noise via dual beamforming microphones',
    ],
    humanDetails: 'Essential audio peripheral for communication, remote work, studio production, and entertainment.',
    safetyAndLegalStatus: 'Consumer Electronics Safety Standard. Limit volume level to < 85 dB to prevent hearing strain.',
    funFact: 'The first headphones were invented by Nathaniel Baldwin on his kitchen table in 1910 — the US Navy bought 100 pairs after testing his hand-made headset!',
  },

  'headphones': {
    scientificOrTechName: 'High-Fidelity Audio Headphones System',
    primaryUses: 'Private acoustic playback for music listening, podcasting, gaming, and professional sound editing.',
    specifications: [
      'Driver Size: 40mm High-Definition Dynamic Drivers',
      'Impedance: 32 Ohms (optimized for mobile and desktop audio output)',
    ],
    keyFeatures: [
      'Padded headband and breathable earpads ensure long-duration comfort',
      'Balanced sound signature with deep bass extension and clear treble acoustics',
    ],
    humanDetails: 'Widely used daily audio equipment across laptops, smartphones, and audio consoles.',
    safetyAndLegalStatus: 'CE / FCC Certified Consumer Electronics.',
    funFact: 'Sony\'s Walkman launched in 1979 revolutionized music by making headphones portable for the very first time in human history!',
  },

  'tablets': {
    scientificOrTechName: 'Pharmaceutical Medicine Tablets & Pill Blister Strip',
    primaryUses: 'Oral solid dosage form of active pharmaceutical ingredients (APIs) formulated for therapeutic treatment, disease management, pain relief, or health maintenance.',
    specifications: [
      'Packaging Type: Aluminum / PVC Blister Pack or Push-Through Foil Packaging',
      'Dosage Form: Film-Coated, Sustained Release (SR/PR), or Chewable Tablets',
      'Quality Standards: Pharmacopoeia Compliance (IP, BP, USP)',
    ],
    keyFeatures: [
      'Hermetically sealed foil cavities protect active medicine from moisture, light, and air oxidation',
      'Clear dosage markings, batch number, manufacturing date, and expiry date printed on reverse foil',
    ],
    humanDetails: 'Essential healthcare product. Always take under medical prescription or healthcare practitioner guidance.',
    safetyAndLegalStatus: 'Prescription / OTC Drug Regulation: Schedule H / Schedule G warning applies. Keep out of reach of children.',
    funFact: 'The word "pill" comes from the Latin "pilula" meaning "little ball" — ancient Egyptians made the first pills over 3,500 years ago using clay, bread dough, and honey!',
  },

  'medicine': {
    scientificOrTechName: 'Pharmaceutical Healthcare Product — Therapeutic Medication',
    primaryUses: 'Treatment of medical conditions, symptom alleviation, infection control, metabolic regulation, and health prevention.',
    specifications: [
      'Active Ingredients: Formulated chemical or biological therapeutic agents',
      'Storage Condition: Cool dry place below 30°C away from direct sunlight',
    ],
    keyFeatures: [
      'Standardized dosage form ensuring consistent bioavailability and therapeutic efficacy',
      'Rigorous clinical trial validation for efficacy and safety profile',
    ],
    humanDetails: 'Crucial component of modern medical science and global public health.',
    safetyAndLegalStatus: 'Regulated by FDA / CDSCO / EMA health authorities. Strictly follow prescribed dosage schedule.',
    funFact: 'Aspirin (acetylsalicylic acid), one of the world\'s most popular medicines, originated from willow tree bark used by Hippocrates in ancient Greece (400 BC) for fever and pain relief!',
  },

  'rocking horse': {
    scientificOrTechName: 'Child Ride-On Toy — Rocking / Carousel Horse Structure',
    primaryUses: 'Children\'s play equipment, balance development, sensory integration, and amusement ride.',
    specifications: [
      'Structure Material: Molded Polymer Plastic, Fiberglass, Wood, or Alloy Frame',
      'Safety Features: Ergonomic hand grips, low center of gravity, non-slip base',
    ],
    keyFeatures: [
      'Promotes balance, motor coordination, and imaginative play in young children',
      'Durable weather-resistant construction designed for indoor and outdoor play parks',
    ],
    humanDetails: 'Classic children\'s play toy popular worldwide since the 17th century.',
    safetyAndLegalStatus: 'Child Safety Standard: Complies with ASTM F963 / EN71 toy safety regulations.',
    funFact: 'Rocking horses first appeared in Europe in the early 17th century — King Charles I of England owned a famous wooden rocking horse carved in 1610!',
  },

  'toy': {
    scientificOrTechName: 'Children\'s Play & Entertainment Object — Toy',
    primaryUses: 'Recreation, cognitive development, motor skill enhancement, and imaginative play.',
    specifications: [
      'Categories: Ride-on toys, Plush animals, Educational puzzles, Figurines, Action sets',
      'Materials: Non-toxic BPA-free plastic, fabric, wood, or lightweight alloy',
    ],
    keyFeatures: [
      'Encourages sensory exploration, problem-solving, and emotional development',
      'Designed to strict child safety and non-toxic paint standards',
    ],
    humanDetails: 'Essential part of childhood growth, learning, and physical play.',
    safetyAndLegalStatus: 'Consumer Product Safety Commission (CPSC) / BIS toy safety certified.',
    funFact: 'The oldest known toy in the world is a 4,000-year-old stone doll discovered in Italy, complete with little carved clay furniture!',
  },

  'bird': {
    scientificOrTechName: 'Aves (Avian Wildlife) — Feathered Vertebrate Species',
    primaryUses: 'Ecological role in seed dispersal, insect pest control, pollination, and as bio-indicators of environmental health. ~10,000 species worldwide.',
    specifications: [
      'Biological Class: Aves (warm-blooded, egg-laying vertebrates)',
      'Hollow bones reduce weight for flight',
      'Syrinx organ produces birdsong (not larynx like humans)',
    ],
    keyFeatures: [
      'Avian vision can detect ultraviolet light invisible to the human eye',
      'Arctic tern migrates 90,000 km (56,000 miles) annually — the longest migration of any animal',
    ],
    humanDetails: 'Birds evolved from theropod dinosaurs ~150 million years ago. Closest living relatives of T-Rex are modern birds.',
    safetyAndLegalStatus: 'Most species protected under Migratory Bird Treaty Act and CITES international conventions.',
    funFact: 'Birds are the only surviving dinosaurs! The chicken on your plate is a direct descendant of the fearsome Velociraptor — confirmed by fossil feather and bone studies!',
  },

  'dog': {
    scientificOrTechName: 'Canis lupus familiaris — Domestic Dog',
    primaryUses: 'Companion animal, guide dog for visually impaired, police and military K-9, search and rescue, therapeutic support, and livestock herding.',
    specifications: [
      'Olfactory receptors: 300 million (vs 6 million in humans — 50x more powerful)',
      'Hearing range: 40Hz to 65,000Hz (vs human 20Hz to 20,000Hz)',
      'Over 340 recognized breeds worldwide',
    ],
    keyFeatures: [
      'Can detect cancer, diabetes episodes, and seizures before they occur by smell',
      'Domesticated from wolves over 15,000 years ago — oldest human-animal partnership',
    ],
    humanDetails: 'Most popular pet worldwide — 900 million dogs globally.',
    safetyAndLegalStatus: 'Protected under animal welfare laws. Requires registration, vaccination, and leash laws in urban areas.',
    funFact: 'A dog\'s nose print is as unique as a human fingerprint — the Royal Canadian Mounted Police used dog nose prints for identification as early as 1938!',
    animalProfile: {
      name: 'Domestic Dog',
      scientificName: 'Canis lupus familiaris',
      habitat: 'Domestic environments worldwide - homes, farms, urban areas',
      diet: 'Omnivorous - commercial dog food, meat, vegetables, grains',
      lifespan: '10–13 years (varies by breed)',
      conservationStatus: 'Domesticated - not applicable',
      interestingFacts: [
        'First domesticated animal - partnership with humans over 15,000 years',
        'Can detect diseases by smell (cancer, diabetes, seizures)',
        'Nose print is unique like human fingerprint',
        'Over 340 recognized breeds worldwide',
        'Can learn up to 1,000 words and commands'
      ]
    }
  },

  'cat': {
    scientificOrTechName: 'Felis catus — Domestic Cat',
    primaryUses: 'Companion animal, rodent pest control, and therapeutic support. Cats reduce stress and anxiety in humans through purring vibrations (25–50 Hz).',
    specifications: [
      'Night vision: 6x better than humans due to tapetum lucidum reflective layer',
      'Claws: retractable keratin sheaths (unlike dogs)',
      'Hearing: Can detect 64,000 Hz ultrasound (3x human range)',
    ],
    keyFeatures: [
      'Cat purring (25–50Hz) promotes bone healing and reduces stress in humans',
      'Cannot taste sweetness — only carnivore lacking sweet taste receptors',
    ],
    humanDetails: '600 million domestic cats worldwide. Second most popular pet after dogs.',
    safetyAndLegalStatus: 'Protected under animal welfare laws. Neuter and vaccinate per local regulations.',
    funFact: 'Cats spend 70% of their lives sleeping (13–16 hours daily) — a survival instinct from their predatory ancestors who needed rest between energy-intensive hunts!',
    animalProfile: {
      name: 'Domestic Cat',
      scientificName: 'Felis catus',
      habitat: 'Domestic environments worldwide - homes, farms, urban areas',
      diet: 'Carnivorous - commercial cat food, meat, fish',
      lifespan: '12–18 years (indoor cats can live 20+ years)',
      conservationStatus: 'Domesticated - not applicable',
      interestingFacts: [
        'Spend 70% of lives sleeping (13–16 hours daily)',
        'Cannot taste sweetness - only carnivore lacking sweet receptors',
        'Night vision 6x better than humans',
        'Purring promotes bone healing in humans',
        'Can rotate ears 180 degrees independently'
      ]
    }
  },

  'moon': {
    scientificOrTechName: 'The Moon (Earth\'s Natural Satellite — Luna)',
    primaryUses: 'Natural satellite regulating Earth\'s axial tilt, ocean tides, night illumination, and biological rhythmic cycles of terrestrial life.',
    specifications: [
      'Diameter: 3,474 km (approx. 27% of Earth\'s size)',
      'Average Distance: 384,400 km from Earth',
      'Orbital Period: 27.3 Earth days (synchronous rotation)',
      'Gravity: 1.62 m/s² (approx. 16.6% of Earth\'s gravity)',
    ],
    keyFeatures: [
      'Causes ocean high and low tides via gravitational pull',
      'Surface covered in impact craters, maria (basaltic plains), and regolith dust',
      'Synchronous rotation means the same side (near side) always faces Earth',
    ],
    safetyAndLegalStatus: 'Outer Space Treaty (1967): International territory — no nation can claim sovereignty over the Moon.',
    funFact: 'The Moon is drifting away from Earth at a rate of about 3.8 cm (1.5 inches) per year!',
  },

  'charger': {
    scientificOrTechName: 'Phone Charger / Power Adapter & USB Charging Cable',
    primaryUses: 'Converts household AC mains electrical power into regulated low-voltage DC power to charge batteries and operate mobile devices.',
    specifications: [
      'Input Voltage: 100V - 240V AC, 50/60Hz universal',
      'Output Technologies: USB Power Delivery (USB-PD), Qualcomm Quick Charge, GaN (Gallium Nitride)',
      'Output Power: 5W to 120W+ Fast Charging',
      'Connector Types: USB Type-C, Lightning, Micro-USB',
    ],
    keyFeatures: [
      'GaN (Gallium Nitride) technology enables ultra-compact high-wattage chargers',
      'Built-in microcontrollers regulate voltage, current, and temperature to prevent battery degradation',
      'Data transfer capabilities alongside power delivery over multi-wire braided cables',
    ],
    safetyAndLegalStatus: 'Certified safety standards: UL, CE, FCC, BIS, and RoHS compliance.',
    funFact: 'European Union mandate made USB-C the universal charging port for all smartphones and portable electronics!',
  },

  'phone charger': {
    scientificOrTechName: 'Smart Mobile Fast Charger & Power Adapter',
    primaryUses: 'Delivers high-efficiency electrical energy to modern lithium-ion smartphone batteries.',
    specifications: [
      'Protocols: USB Power Delivery 3.0, PPS (Programmable Power Supply)',
      'Output: 5V/3A, 9V/3A, 12V/3A, up to 20V/5A',
      'Material: Fire-retardant polycarbonate housing with GaN semiconductors',
    ],
    keyFeatures: [
      'Intelligent handshake protocol negotiates maximum safe power delivery',
      'Over-voltage, short-circuit, and thermal protection safety chips',
    ],
    safetyAndLegalStatus: 'Regulatory compliance: UL 62368-1 safety certification.',
    funFact: 'Modern GaN fast chargers are 3x more efficient and half the size of traditional silicon chargers!',
  },

  'cloth': {
    scientificOrTechName: 'Textile Fabric / Patterned Cloth & Garment Material',
    primaryUses: 'Flexible woven, knitted, or printed textile material used for clothing, bedsheets, upholstery, fashion, and thermal insulation.',
    specifications: [
      'Fibers: Natural (Cotton, Silk, Wool, Linen) or Synthetic (Polyester, Nylon, Rayon)',
      'Weave Types: Plain, Twill, Satin, Jacquard, Floral Printed Pattern',
      'Properties: Breathability, tensile strength, colorfastness, tactile softness',
    ],
    keyFeatures: [
      'Provides thermal regulation and physical protection for human skin',
      'Vibrant printed patterns and dyes express aesthetic style and culture',
      'Machine washable and wrinkle-resistant modern textile blends',
    ],
    safetyAndLegalStatus: 'OEKO-TEX Standard 100 certified for skin safety and non-toxic dyes.',
    funFact: 'Cotton has been grown and woven into cloth for over 7,000 years, dating back to the Indus Valley Civilization!',
  },

  'rat': {
    scientificOrTechName: 'Rat (Rattus norvegicus / Rattus rattus — Rodentia)',
    primaryUses: 'Highly intelligent mammal, critical model organism in biomedical research, psychology, genetics, and ecosystem seed dispersal.',
    specifications: [
      'Class: Mammalia | Order: Rodentia | Family: Muridae',
      'Lifespan: 2 to 3 years',
      'Diet: Omnivorous (grains, seeds, vegetation, invertebrates)',
      'Characteristics: Continuously growing incisors, keen sense of smell, ultrasonic communication',
    ],
    keyFeatures: [
      'Extremely high problem-solving capability and cognitive memory',
      'Incisor teeth grow 10-12 cm per year, kept short by constant chewing',
      'Used in over 50% of all medical breakthrough research studies',
    ],
    safetyAndLegalStatus: 'Wild urban rats require pest hygiene control; laboratory and domesticated fancy rats are human companions.',
    funFact: 'Rats are so empathetic that in scientific experiments, they repeatedly choose to rescue a trapped friend rather than eat chocolate!',
    animalProfile: {
      name: 'Brown / Black Rat',
      scientificName: 'Rattus norvegicus',
      habitat: 'Urban, agricultural, woodland, and subterranean environments globally',
      diet: 'Omnivorous',
      conservationStatus: 'Least Concern (Extremely adaptable)',
      interestingFacts: [
        'Rats laugh when tickled, emitting ultrasonic chirps of delight!',
        'A rat can tread water for up to 3 days and hold its breath for 3 minutes underwater.',
        'Rats have empathy — studies show they will free trapped companion rats before eating treats!',
      ],
    },
  },

  'horse': {
    scientificOrTechName: 'Horse (Equus caballus — Equidae Mammalian Animal)',
    primaryUses: 'Majestic equine mammal used for riding, equestrian sports, agricultural work, therapy, transport, and companion animal.',
    specifications: [
      'Family: Equidae | Genus: Equus | Species: E. caballus',
      'Lifespan: 25 to 30 years',
      'Top Speed: Up to 88 km/h (55 mph) for Thoroughbred sprinters',
      'Physical Traits: Single-toed hooves, powerful leg muscles, 360-degree monocular vision',
    ],
    keyFeatures: [
      'Can sleep both standing up and lying down thanks to a stay-apparatus lock in leg joints',
      'Expresses emotions through ears, nostrils, and facial muscle movements',
      'Largest eyes of any land mammal, providing wide-angle field of view',
    ],
    safetyAndLegalStatus: 'Domesticated livestock and equine companion. Protected under international equine welfare standards.',
    funFact: 'Horses can sleep standing up because special locking tendons in their legs prevent them from falling over!',
    animalProfile: {
      name: 'Domestic Horse',
      scientificName: 'Equus caballus',
      habitat: 'Pastures, grasslands, stables, and ranches worldwide',
      diet: 'Herbivore (Grasses, hay, grains)',
      conservationStatus: 'Domesticated (Extremely widespread)',
      interestingFacts: [
        'Horses cannot throw up (vomit) due to a one-way valve in their esophagus.',
        'A horse\'s teeth take up more space in its head than its brain!',
        'Horses drink at least 25 gallons of fresh water every single day.',
      ],
    },
  },
};

export function getKnowledgeForObject(
  className: string,
  displayName: string,
  category: ObjectCategory
): AIKnowledgeExplanation {
  const normalizedKey = className.toLowerCase().trim();

  // Exact match first
  if (KNOWLEDGE_DATABASE[normalizedKey]) {
    return KNOWLEDGE_DATABASE[normalizedKey];
  }

  // Partial match (key contains className or vice versa)
  for (const [key, value] of Object.entries(KNOWLEDGE_DATABASE)) {
    if (normalizedKey.includes(key) || key.includes(normalizedKey)) {
      return value;
    }
  }

  // Match by displayName
  const displayLower = displayName.toLowerCase();
  for (const [key, value] of Object.entries(KNOWLEDGE_DATABASE)) {
    if (displayLower.includes(key) || key.includes(displayLower)) {
      return value;
    }
  }

  // Fallback dynamic generator based on category
  return generateGenericKnowledge(displayName, category);
}

function generateGenericKnowledge(displayName: string, category: ObjectCategory): AIKnowledgeExplanation {
  switch (category) {
    case 'Human':
      return {
        scientificOrTechName: `${displayName} — Human Person (Identity Analysis Pending)`,
        primaryUses: 'Human individual identified in scene. May be a historical figure, world leader, scientist, or everyday person. Use the Deep AI System with a Gemini API key for precise facial identification.',
        specifications: [
          'Biological Species: Homo sapiens',
          'Brain: 86 billion neurons with 100 trillion synaptic connections',
          'Average IQ: 100 (global median)',
        ],
        keyFeatures: [
          'Complex multi-modal communication via language, gesture, and expression',
          'Capable of abstract reasoning, creativity, and technological innovation',
        ],
        humanDetails: 'Human subject detected. Configure Gemini API key in .env.local for precise person identification.',
        safetyAndLegalStatus: 'Human Rights Protected: Universal Declaration of Human Rights applies.',
        funFact: 'The human brain generates about 23 watts of electrical power — enough to power a dim light bulb!',
      };

    case 'Medical':
      return {
        scientificOrTechName: `${displayName} — Pharmaceutical Medical Item`,
        primaryUses: 'Therapeutic treatment, health management, oral dosage medication, or medical diagnostics.',
        specifications: [
          'Classification: Pharmaceutical Solid Oral Dosage Form / Blister Strip',
          'Complies with pharmacopoeial quality and safety standards (IP / USP)',
        ],
        keyFeatures: [
          'Formulated for controlled therapeutic delivery and patient safety',
          'Hermetically sealed packaging ensures drug stability and contamination barrier',
        ],
        safetyAndLegalStatus: 'Regulated medical / pharmaceutical product. Consult registered physician or pharmacist before use.',
        funFact: 'Penicillin, the first modern antibiotic discovered by Alexander Fleming in 1928, saved over 200 million human lives in its first 75 years!',
      };

    case 'Toy':
      return {
        scientificOrTechName: `${displayName} — Children's Play Object & Amusement Item`,
        primaryUses: 'Recreation, physical motor coordination, cognitive development, and creative play.',
        specifications: [
          'Category: Children\'s Toy & Amusement Equipment',
          'Material: Non-toxic polymer plastic, fabric, wood, or lightweight metal structure',
        ],
        keyFeatures: [
          'Designed for child safety, durability, and ergonomic engagement',
          'Promotes balance, sensory learning, and physical play',
        ],
        safetyAndLegalStatus: 'Complies with international toy safety standards (EN71 / ASTM F963).',
        funFact: 'Lego bricks made in 1958 will still interlock perfectly with Lego bricks made today — that\'s over 65 years of 0.002mm manufacturing precision!',
      };

    case 'Animal':
      return {
        scientificOrTechName: `${displayName} — Animal Wildlife Species`,
        primaryUses: 'Animal species contributes to ecosystem balance, biodiversity, and food webs. Exact species identification available when Gemini API is configured.',
        specifications: [
          'Kingdom: Animalia (multicellular, eukaryotic organism)',
          'Sensory capabilities adapted to specific habitat and hunting strategy',
        ],
        keyFeatures: [
          'Evolved specialized physical and behavioral adaptations for survival',
          'Part of the biotic web that sustains all terrestrial and aquatic ecosystems',
        ],
        safetyAndLegalStatus: 'Wildlife Protection Laws apply. Do not disturb or approach wild animals.',
        funFact: 'There are over 8.7 million animal species on Earth — and scientists estimate we have only discovered and named about 15% of them!',
      };

    case 'Food':
      return {
        scientificOrTechName: `${displayName} — Food Item (Vegetarian or Non-Vegetarian)`,
        primaryUses: 'Food item providing nutritional energy, vitamins, minerals, and macronutrients. Exact dietary classification depends on specific preparation and ingredients.',
        specifications: [
          'Macronutrients: Carbohydrates, Proteins, Fats (varies by food type)',
          'Check food label or recipe for vegetarian or non-vegetarian classification',
        ],
        keyFeatures: [
          'Provides caloric energy and essential micronutrients for bodily functions',
          'Cultural significance — food is tied to traditions and identity worldwide',
        ],
        safetyAndLegalStatus: 'Food Safety: Check expiry dates. Store at appropriate temperatures. Follow food hygiene practices.',
        funFact: 'The human tongue has approximately 10,000 taste buds, each capable of detecting sweet, salty, sour, bitter, and umami (savory) flavors!',
      };

    case 'Plant':
      return {
        scientificOrTechName: `${displayName} — Flora Species`,
        primaryUses: 'Plant species providing oxygen production, carbon dioxide absorption, shade, food, medicine, timber, or ornamental value.',
        specifications: [
          'Kingdom: Plantae (photosynthetic, eukaryotic)',
          'Photosynthesis converts CO₂ + H₂O + Sunlight → Glucose + O₂',
        ],
        keyFeatures: [
          'Root system stabilizes soil and absorbs water and minerals',
          'Plays vital role in ecosystem water cycles and carbon sequestration',
        ],
        safetyAndLegalStatus: 'Protected flora species are regulated. Collect or transplant only legal varieties.',
        funFact: 'Plants can communicate with each other through the soil — they send chemical distress signals through underground fungal networks called the "Wood Wide Web"!',
      };

    case 'Eyewear':
      return {
        scientificOrTechName: `${displayName} — Optical Eyewear`,
        primaryUses: 'Vision enhancement, eye protection from UV radiation, glare reduction, or corrective vision therapy.',
        specifications: ['Optical grade lens material', 'Ergonomic frame with nose pads and temple arms'],
        keyFeatures: ['Improves visual acuity and eye comfort', 'Reduces eye strain in bright conditions'],
        safetyAndLegalStatus: 'Consumer eyewear. Prescription lenses require optometrist consultation.',
        funFact: 'Eyewear design has not fundamentally changed in 750 years — lenses in frames on your nose is the same basic concept as 1286 Italy!',
      };

    case 'Electronics':
      return {
        scientificOrTechName: `${displayName} — Electronic Device`,
        primaryUses: 'Digital processing, data storage, communication, automation, or entertainment.',
        specifications: ['Semiconductor silicon microchip architecture', 'Regulated power supply and thermal management'],
        keyFeatures: ['Integrated circuit processing at nano-scale', 'Digital interface for human interaction'],
        safetyAndLegalStatus: 'Consumer electronics. Complies with CE, FCC, and BIS electromagnetic standards.',
        funFact: 'Modern microchips contain more transistors than the number of neurons in a human brain — a single chip can have over 100 billion transistors!',
      };

    case 'Vehicle':
      return {
        scientificOrTechName: `${displayName} — Motorized Vehicle`,
        primaryUses: 'Road, rail, air, or water transportation of passengers or cargo.',
        specifications: ['Powered by ICE, electric motor, or hybrid powertrain', 'Safety systems compliant with transport regulations'],
        keyFeatures: ['Mechanical locomotion system for efficient transport', 'Designed to safety and emission standards'],
        safetyAndLegalStatus: 'Vehicles require registration, insurance, and adherence to traffic laws.',
        funFact: 'If all the world\'s cars were placed bumper to bumper, they would stretch to the Moon and back 3.5 times!',
      };

    case 'Tool':
      return {
        scientificOrTechName: `${displayName} — Functional Implement`,
        primaryUses: 'Manual or powered mechanical task — cutting, fastening, measuring, building, or household use.',
        specifications: ['High-strength material construction (steel, composite alloy)', 'Ergonomic grip handle design'],
        keyFeatures: ['Mechanical advantage multiplies human force', 'Durable wear-resistant coating'],
        safetyAndLegalStatus: 'Consumer or industrial tool. Follow safety guidelines and wear appropriate PPE.',
        funFact: 'The oldest known tools — stone flakes and choppers — were created by Homo habilis 2.6 million years ago in what is now Ethiopia!',
      };

    case 'Outdoor':
      return {
        scientificOrTechName: `${displayName} — Outdoor Infrastructure Element`,
        primaryUses: 'Public infrastructure for traffic management, urban navigation, and road safety.',
        specifications: ['Weather-resistant construction for outdoor durability', 'Retroreflective materials for night visibility'],
        keyFeatures: ['Critical road safety function', 'Standardized globally for universal recognition'],
        safetyAndLegalStatus: 'Governed by traffic laws. Failure to comply with traffic signals is a legal offense.',
        funFact: 'Traffic signs are made of retroreflective sheeting that bounces car headlight beams directly back to the driver — making them 10x brighter than regular white paint!',
      };

    default:
      return {
        scientificOrTechName: `${displayName} — Detected Object`,
        primaryUses: `Object identified as ${displayName}. Serves functional purpose in ${category.toLowerCase()} domain.`,
        specifications: [`Standard ${category} category item`, 'Identified by AI Vision detection system'],
        keyFeatures: ['Detected using TensorFlow.js COCO-SSD neural network', 'Enhanced with Gemini Vision AI analysis'],
        safetyAndLegalStatus: 'General consumer or environmental item. Standard interaction applies.',
        funFact: 'The AI system analyzing this image processes over 1 million pixel calculations per second to identify objects with neural network precision!',
      };
  }
}
