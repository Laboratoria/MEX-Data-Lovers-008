window.lol = {
  
  showData: (lolData) => {
    let newArrayInfo = [];
    let champsInfo = {};
    for (const key in lolData) {
      if (lolData.hasOwnProperty(key)) {
        const element = lolData[key];
        champsInfo = {
          name: element.name,
          title: element.title,
          id: element.id,
          img: element.img,
          splash: element.splash,
          blurb: element.blurb,
          primaryRol: element.tags[0],
          secondaryRol: element.tags[1],
          attack: element.info.attack,
          defense: element.info.defense,
          magic: element.info.magic,
          difficulty: element.info.difficulty,
          hp: element.stats.hp,
          hpperlevel: element.stats.hpperlevel,
          hpregen: element.stats.hpregen,
          hpregenperlevel: element.stats.hpregenperlevel,
          mp: element.stats.mp,
          mpperlevel: element.stats.mpperlevel,
          mpregen: element.stats.mpregen,
          mpregenperlevel: element.stats.mpregenperlevel,
          movespeed: element.stats.movespeed,
          armor: element.stats.armor,
          armorperlevel: element.stats.armorperlevel,
          spellblock: element.stats.spellblock,
          spellblockperlevel: element.stats.spellblockperlevel,
          attackrange: element.stats.attackrange,
          attackdamage: element.stats.attackdamage,
          attackdamageperlevel: element.stats.attackdamageperlevel,
          crit: element.stats.crit,
          critperlevel: element.stats.critperlevel,
          attackspeedoffset: element.stats.attackspeedoffset,
          attackspeedperlevel: element.stats.attackspeedperlevel,
        };
        if (!element.tags[1]) {
          champsInfo.secondaryRol = "";
        }
      }
      newArrayInfo.push(champsInfo);
    }
    return newArrayInfo;
  },

  filterByRol: (newArrayChamp, rolId) => {
    const filtering = newArrayChamp.filter(element => element.primaryRol == rolId || element.secondaryRol == rolId);
    return filtering;
  },

  
  filterByName: (newArrayChamp, name2) => {
    const filteringName = newArrayChamp.filter(element => (element.id.toLowerCase().match(name2.toLowerCase())));
    return filteringName;
  },

  toCard: (data, champSelect) => {
    let champ = {};
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const element = data[key];
        if (element.id === champSelect) {
          champ = element;
          return element;
        }
      }
    }
    return champ;
  },
  
};

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };

// window.example = example;