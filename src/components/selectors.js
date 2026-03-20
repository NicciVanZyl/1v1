import react, { useState, useEffect, use } from "react";
import Autocomplete from '@mui/material/Autocomplete'
import TextField from "@mui/material/TextField";

function Selector({ onSelectPokemon, levelSpeedData }) {


    const [levelSpeedList, setLevelSpeedList] = useState([]);

    const [allLevelDetails, setAllLevelDetails] = useState([]);
    const [activePokiLevelSpeed, setActiveLevelSpeed] = useState({});

    const [pokemon, setPokemon] = useState([]);
    const [selectPokemon, setSelectedPokemon] = useState(null);

    const getPokiList = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1350")
            .then(response => response.json())
            .then(data => {
                const info = data.results.map((poke) => ({ label: poke.name, id: poke.url }));
                setPokemon(info);
            })
            .catch(console.error);
    };
    const getLevelList = () => {
        fetch("https://pokeapi.co/api/v2/growth-rate")
            .then(response => response.json())
            .then(data => {
                const info = data.results.map((level) => ({ speed: level.name, url: level.url }));
                setLevelSpeedList(info);
            })
            .catch(console.error);

    };

    const getLevelDetails = (url0, url1, url2, url3, url4, url5) => {
        const allLevelDetails = [];

        fetch(url0)
            .then(response => response.json())
            .then(data => {
                const info = {
                    name: data.name,
                    levels: data.levels,
                    species: data.pokemon_species.map((s) => s.name)
                };
                allLevelDetails.push(info);
            })
            .catch(console.error);
        fetch(url1)
            .then(response => response.json())
            .then(data => {
                const info = {
                    name: data.name,
                    levels: data.levels,
                    species: data.pokemon_species.map((s) => s.name)
                };
                allLevelDetails.push(info);
            })
            .catch(console.error);
        fetch(url2)
            .then(response => response.json())
            .then(data => {
                const info = {
                    name: data.name,
                    levels: data.levels,
                    species: data.pokemon_species.map((s) => s.name)
                };
                allLevelDetails.push(info);
            })
            .catch(console.error);
        fetch(url3)
            .then(response => response.json())
            .then(data => {
                const info = {
                    name: data.name,
                    levels: data.levels,
                    species: data.pokemon_species.map((s) => s.name)
                };
                allLevelDetails.push(info);
            })
            .catch(console.error);
        fetch(url4)
            .then(response => response.json())
            .then(data => {
                const info = {
                    name: data.name,
                    levels: data.levels,
                    species: data.pokemon_species.map((s) => s.name)
                };
                allLevelDetails.push(info);
            })
            .catch(console.error);
        fetch(url5)
            .then(response => response.json())
            .then(data => {
                const info = {
                    name: data.name,
                    levels: data.levels,
                    species: data.pokemon_species.map((s) => s.name)
                };
                allLevelDetails.push(info);
            })
            .catch(console.error);
        setAllLevelDetails(allLevelDetails);
    };

    const getPokiDetails = (url) => {

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                
                const pokiData = {
                    name: data.name,
                    sprite: data.sprites.other['official-artwork'].front_default,
                    stats: [
                        { hp: data.stats[0].base_stat },
                        { atk: data.stats[1].base_stat },
                        { def: data.stats[2].base_stat },
                        { s_atk: data.stats[3].base_stat },
                        { s_def: data.stats[4].base_stat },
                        { speed: data.stats[5].base_stat }
                    ],
                    baseExp: data.base_experience,
                    species: data.species.name,
                    speciesUrl: data.species.url,
                    types: data.types[0].type.name
                };
                setSelectedPokemon(pokiData);
            })
            .catch((error) => console.log(error));

    }

    const getRandomPokemon = () => {
        if (pokemon.length === 0) return;
        const randomId = Math.floor(Math.random() * pokemon.length);     
        getPokiDetails(pokemon[randomId].id);
    }

    useEffect(() => {
        getPokiList();
        getLevelList();
    }, []);

    useEffect(() => {
        if (levelSpeedList[0] == null) return;
        console.log(levelSpeedList[0].url);
        getLevelDetails(levelSpeedList[0].url, levelSpeedList[1].url, levelSpeedList[2].url, levelSpeedList[3].url, levelSpeedList[4].url, levelSpeedList[5].url);
        console.log(levelSpeedList);
        
    }, [levelSpeedList])

    useEffect(() => {
        getRandomPokemon();
    }, [pokemon]);

    useEffect(() => {
        for (let i = 0; i < allLevelDetails.length - 1; i++) {
            if (allLevelDetails[i].species.includes(selectPokemon.species)) {
                setActiveLevelSpeed({ name: allLevelDetails[i].name, levels: allLevelDetails[i].levels });
                break;
            }
        }
        if (onSelectPokemon) onSelectPokemon(selectPokemon);
    }, [selectPokemon]);
    
    useEffect(() => {
        if (levelSpeedData) levelSpeedData(activePokiLevelSpeed);
    }, [activePokiLevelSpeed]);

    return (
        <Autocomplete className="selectPokemon"
            defaultValue={selectPokemon}
            onChange={(event, value) => {
                if (!value) return;
                getPokiDetails(value.id);
            }}
            disablePortal
            options={pokemon}
            getOptionLabel={(option) => option.label || ""}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Pokemon" />}
            
        />
    )
}



export default Selector;