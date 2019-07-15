//require('../src/data.js');


// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });
require('../src/data.js');
    require('../src/data/pokemon/pokemon.js');
    global.window = global;

    const dataTest = {
        "pokemon": [{
            "id": 1,
            "num": "001",
            "name": "Bulbasaur",
            "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
            "type": [
                "Grass",
                "Poison"
            ],
            "height": "0.71 m",
            "weight": "6.9 kg",
            "candy": "Bulbasaur Candy",
            "candy_count": 25,
            "egg": "2 km",
            "spawn_chance": 0.69,
            "avg_spawns": 69,
            "spawn_time": "20:00",
            "multipliers": [1.58],
            "weaknesses": [
                "Fire",
                "Ice",
                "Flying",
                "Psychic"
            ],
            "next_evolution": [{
                "num": "002",
                "name": "Ivysaur"
            }, {
                "num": "003",
                "name": "Venusaur"
            }]
        }, {
            "id": 2,
            "num": "002",
            "name": "Ivysaur",
            "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
            "type": [
                "Grass",
                "Poison"
            ],
            "height": "0.99 m",
            "weight": "13.0 kg",
            "candy": "Bulbasaur Candy",
            "candy_count": 100,
            "egg": "Not in Eggs",
            "spawn_chance": 0.042,
            "avg_spawns": 4.2,
            "spawn_time": "07:00",
            "multipliers": [
                1.2,
                1.6
            ],
            "weaknesses": [
                "Fire",
                "Ice",
                "Flying",
                "Psychic"
            ],
            "prev_evolution": [{
                "num": "001",
                "name": "Bulbasaur"
            }],
            "next_evolution": [{
                "num": "003",
                "name": "Venusaur"
            }]
        }, {
            "id": 3,
            "num": "003",
            "name": "Venusaur",
            "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
            "type": [
                "Grass",
                "Poison"
            ],
            "height": "2.01 m",
            "weight": "100.0 kg",
            "candy": "Bulbasaur Candy",
            "egg": "Not in Eggs",
            "spawn_chance": 0.017,
            "avg_spawns": 1.7,
            "spawn_time": "11:30",
            "multipliers": null,
            "weaknesses": [
                "Fire",
                "Ice",
                "Flying",
                "Psychic"
            ],
            "prev_evolution": [{
                "num": "001",
                "name": "Bulbasaur"
            }, {
                "num": "002",
                "name": "Ivysaur"
            }]
        }, {
            "id": 4,
            "num": "004",
            "name": "Charmander",
            "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
            "type": [
                "Fire"
            ],
            "height": "0.61 m",
            "weight": "8.5 kg",
            "candy": "Charmander Candy",
            "candy_count": 25,
            "egg": "2 km",
            "spawn_chance": 0.253,
            "avg_spawns": 25.3,
            "spawn_time": "08:45",
            "multipliers": [1.65],
            "weaknesses": [
                "Water",
                "Ground",
                "Rock"
            ],
            "next_evolution": [{
                "num": "005",
                "name": "Charmeleon"
            }, {
                "num": "006",
                "name": "Charizard"
            }]
        }]
    };
    const arrdataTest = dataTest.pokemon;

    // // const testFilterbyGrass = [{
    //     "id": 1,
    //     "num": "001",
    //     "name": "Bulbasaur",
    //     "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
    //     "type": [
    //         "Grass",
    //         "Poison"
    //     ],
    //     "height": "0.71 m",
    //     "weight": "6.9 kg",
    //     "candy": "Bulbasaur Candy",
    //     "candy_count": 25,
    //     "egg": "2 km",
    //     "spawn_chance": 0.69,
    //     "avg_spawns": 69,
    //     "spawn_time": "20:00",
    //     "multipliers": [1.58],
    //     "weaknesses": [
    //         "Fire",
    //         "Ice",
    //         "Flying",
    //         "Psychic"
    //     ],
    //     "next_evolution": [{
    //         "num": "002",
    //         "name": "Ivysaur"
    //     }, {
    //         "num": "003",
    //         "name": "Venusaur"
    //     }]
    // }, {
    //     "id": 2,
    //     "num": "002",
    //     "name": "Ivysaur",
    //     "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
    //     "type": [
    //         "Grass",
    //         "Poison"
    //     ],
    //     "height": "0.99 m",
    //     "weight": "13.0 kg",
    //     "candy": "Bulbasaur Candy",
    //     "candy_count": 100,
    //     "egg": "Not in Eggs",
    //     "spawn_chance": 0.042,
    //     "avg_spawns": 4.2,
    //     "spawn_time": "07:00",
    //     "multipliers": [
    //         1.2,
    //         1.6
    //     ],
    //     "weaknesses": [
    //         "Fire",
    //         "Ice",
    //         "Flying",
    //         "Psychic"
    //     ],
    //     "prev_evolution": [{
    //         "num": "001",
    //         "name": "Bulbasaur"
    //     }],
    //     "next_evolution": [{
    //         "num": "003",
    //         "name": "Venusaur"
    //     }]
    // }, {
    //     "id": 3,
    //     "num": "003",
    //     "name": "Venusaur",
    //     "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
    //     "type": [
    //         "Grass",
    //         "Poison"
    //     ],
    //     "height": "2.01 m",
    //     "weight": "100.0 kg",
    //     "candy": "Bulbasaur Candy",
    //     "egg": "Not in Eggs",
    //     "spawn_chance": 0.017,
    //     "avg_spawns": 1.7,
    //     "spawn_time": "11:30",
    //     "multipliers": null,
    //     "weaknesses": [
    //         "Fire",
    //         "Ice",
    //         "Flying",
    //         "Psychic"
    //     ],
    //     "prev_evolution": [{
    //         "num": "001",
    //         "name": "Bulbasaur"
    //     }, {
    //         "num": "002",
    //         "name": "Ivysaur"
    //     }]
    // }];



    const testFilterbyFire = [{
        "id": 4,
        "num": "004",
        "name": "Charmander",
        "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
        "type": [
            "Fire"
        ],
        "height": "0.61 m",
        "weight": "8.5 kg",
        "candy": "Charmander Candy",
        "candy_count": 25,
        "egg": "2 km",
        "spawn_chance": 0.253,
        "avg_spawns": 25.3,
        "spawn_time": "08:45",
        "multipliers": [1.65],
        "weaknesses": [
            "Water",
            "Ground",
            "Rock"
        ],
        "next_evolution": [{
            "num": "005",
            "name": "Charmeleon"
        }, {
            "num": "006",
            "name": "Charizard"
        }]
    }];

    const testNameAsc = [{
        "id": 1,
        "num": "001",
        "name": "Bulbasaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
        "type": [
            "Grass",
            "Poison"
        ],
        "height": "0.71 m",
        "weight": "6.9 kg",
        "candy": "Bulbasaur Candy",
        "candy_count": 25,
        "egg": "2 km",
        "spawn_chance": 0.69,
        "avg_spawns": 69,
        "spawn_time": "20:00",
        "multipliers": [1.58],
        "weaknesses": [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
        "next_evolution": [{
            "num": "002",
            "name": "Ivysaur"
        }, {
            "num": "003",
            "name": "Venusaur"
        }]
    }, {
        "id": 4,
        "num": "004",
        "name": "Charmander",
        "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
        "type": [
            "Fire"
        ],
        "height": "0.61 m",
        "weight": "8.5 kg",
        "candy": "Charmander Candy",
        "candy_count": 25,
        "egg": "2 km",
        "spawn_chance": 0.253,
        "avg_spawns": 25.3,
        "spawn_time": "08:45",
        "multipliers": [1.65],
        "weaknesses": [
            "Water",
            "Ground",
            "Rock"
        ],
        "next_evolution": [{
            "num": "005",
            "name": "Charmeleon"
        }, {
            "num": "006",
            "name": "Charizard"
        }]
    }, {
        "id": 2,
        "num": "002",
        "name": "Ivysaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
        "type": [
            "Grass",
            "Poison"
        ],
        "height": "0.99 m",
        "weight": "13.0 kg",
        "candy": "Bulbasaur Candy",
        "candy_count": 100,
        "egg": "Not in Eggs",
        "spawn_chance": 0.042,
        "avg_spawns": 4.2,
        "spawn_time": "07:00",
        "multipliers": [
            1.2,
            1.6
        ],
        "weaknesses": [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
        "prev_evolution": [{
            "num": "001",
            "name": "Bulbasaur"
        }],
        "next_evolution": [{
            "num": "003",
            "name": "Venusaur"
        }]
    }, {
        "id": 3,
        "num": "003",
        "name": "Venusaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
        "type": [
            "Grass",
            "Poison"
        ],
        "height": "2.01 m",
        "weight": "100.0 kg",
        "candy": "Bulbasaur Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.017,
        "avg_spawns": 1.7,
        "spawn_time": "11:30",
        "multipliers": null,
        "weaknesses": [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
        "prev_evolution": [{
            "num": "001",
            "name": "Bulbasaur"
        }, {
            "num": "002",
            "name": "Ivysaur"
        }]
    }];

    const testNameDesc = [{
        "id": 3,
        "num": "003",
        "name": "Venusaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
        "type": [
            "Grass",
            "Poison"
        ],
        "height": "2.01 m",
        "weight": "100.0 kg",
        "candy": "Bulbasaur Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.017,
        "avg_spawns": 1.7,
        "spawn_time": "11:30",
        "multipliers": null,
        "weaknesses": [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
        "prev_evolution": [{
            "num": "001",
            "name": "Bulbasaur"
        }, {
            "num": "002",
            "name": "Ivysaur"
        }]
    }, {
        "id": 2,
        "num": "002",
        "name": "Ivysaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
        "type": [
            "Grass",
            "Poison"
        ],
        "height": "0.99 m",
        "weight": "13.0 kg",
        "candy": "Bulbasaur Candy",
        "candy_count": 100,
        "egg": "Not in Eggs",
        "spawn_chance": 0.042,
        "avg_spawns": 4.2,
        "spawn_time": "07:00",
        "multipliers": [
            1.2,
            1.6
        ],
        "weaknesses": [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
        "prev_evolution": [{
            "num": "001",
            "name": "Bulbasaur"
        }],
        "next_evolution": [{
            "num": "003",
            "name": "Venusaur"
        }]
    }, {
        "id": 4,
        "num": "004",
        "name": "Charmander",
        "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
        "type": [
            "Fire"
        ],
        "height": "0.61 m",
        "weight": "8.5 kg",
        "candy": "Charmander Candy",
        "candy_count": 25,
        "egg": "2 km",
        "spawn_chance": 0.253,
        "avg_spawns": 25.3,
        "spawn_time": "08:45",
        "multipliers": [1.65],
        "weaknesses": [
            "Water",
            "Ground",
            "Rock"
        ],
        "next_evolution": [{
            "num": "005",
            "name": "Charmeleon"
        }, {
            "num": "006",
            "name": "Charizard"
        }]
    }, {
        "id": 1,
        "num": "001",
        "name": "Bulbasaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
        "type": [
            "Grass",
            "Poison"
        ],
        "height": "0.71 m",
        "weight": "6.9 kg",
        "candy": "Bulbasaur Candy",
        "candy_count": 25,
        "egg": "2 km",
        "spawn_chance": 0.69,
        "avg_spawns": 69,
        "spawn_time": "20:00",
        "multipliers": [1.58],
        "weaknesses": [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
        "next_evolution": [{
            "num": "002",
            "name": "Ivysaur"
        }, {
            "num": "003",
            "name": "Venusaur"
        }]
    }];

    const sumWeight = "weight";
    const resultSumWeight = "32.10";


    describe('sorData', () => {
        test('Debería ser una función', () => {
            expect(typeof sorData).toBe('function');
        });
        test('Debería retornar un array para sorData(arrdataTest,"name","ASC")', () => {
            expect(typeof(sorData(arrdataTest, 'name', 'ASC'))).toBe('object');
        });
        test('Debería retornar testNameAsc para sorData(arrdataTest,"name","ASC")', () => {
            expect(sorData(arrdataTest, 'name', 'ASC')).toEqual(testNameAsc);
        });

        test('Debería retornar un array para sorData(arrdataTest,"name","DESC")', () => {
            expect(typeof(sorData(arrdataTest, 'name', 'DESC'))).toBe('object');
        });
        test('Debería retornar testNameDesc para sorData(arrdataTest,"name","DESC")', () => {
            expect(sorData(arrdataTest, 'name', 'DESC')).toEqual(testNameDesc);
        });
    });

    describe('filterBy', () => {
        test('Debería ser una función', () => {
            expect(typeof filterBy).toBe('function');
        });
        test('Debería retornar un array para testFilterbyFire', () => {
            expect(typeof(filterBy(arrdataTest, 'Fire'))).toBe('object');
        });
        test('Debería retornar testFilterbyFire para filterBy(arrdataTest, "Fire")', () => {
            expect(filterBy(arrdataTest, 'Fire')).toEqual(testFilterbyFire);
        });
        // test('debería retornar un array para testFilterbyGrass ', () => {
        //     expect(typeof(filterBy(arrdataTest, 'Grass'))).toBe('object');
        // });
        // test('debería retornar testFilterbyGrass para filterBy(arrdataTest, "Grass")', () => {
        //     expect(filterBy(arrdataTest, 'Grass')).toEqual(testFilterbyGrass);
        // });
    });

    describe('computeStats', () => {
        it('Debería ser una función', () => {
            expect(typeof window.computeStats.statsPromedy).toBe('function');
        });

        it('Debería retornar el promedio de "weight" de los Pokémones', () => {
            expect(window.computeStats.statsPromedy(arrdataTest, sumWeight)).toEqual(resultSumWeight);
        });


    });