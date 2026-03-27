import react, { useState, useEffect, use } from "react";
import Autocomplete from '@mui/material/Autocomplete'
import TextField from "@mui/material/TextField";
import '../App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {

    
    MuiAutocomplete: {
      styleOverrides: {
        //label colours
        root: {
          '& .MuiInputLabel-root': {
            color: 'rgb(226, 194, 255)',                 
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'rgb(238, 219, 255)',             
          },
        },
        //the dropdown's styling stuff
        paper: {
          borderRadius: '10px',
          borderColor: 'rgb(227, 197, 255)',
          borderWidth:'2px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.28)',
          backgroundColor: 'rgb(232, 208, 255)',
        },

        //scrolling part little bar
        listbox: {

          '&::-webkit-scrollbar': { width: '6px' },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgb(231, 212, 255)', //scrollbar colour
            borderRadius: '3px',
          },
        },

        //hover and selected options 
        option: {
          borderRadius: '6px',
          fontSize: '16px',
          color: 'rgb(15, 0, 29)',
          '&:hover': {
            backgroundColor: 'rgb(15, 0, 29)',
          },
          
          '&.Mui-focused': {
            backgroundColor: 'rgba(200, 146, 250, 0.25)', //colour of focused row
            color: 'rgb(15, 0, 29)',//colour of focused text
            fontWeight: 600,
          },
          
          '&[aria-selected="true"]': {
            backgroundColor: 'rgba(200, 146, 250, 0.25)',
            color: 'rgb(15, 0, 29)',
            fontWeight: 700,
          },
          '&[aria-selected="true"]:hover': {
            backgroundColor: 'rgba(170, 80, 255, 0.25)',
          },
          
          '&[aria-selected="true"].Mui-focused': {
            backgroundColor: 'rgba(176, 93, 255, 0.25)',
          },
        },

        //x icon
        clearIndicator: {
          color: 'rgb(231, 212, 255)',
          '&:hover': { backgroundColor: 'rgba(151, 104, 194, 0.25)' },
        },

        //dropdown icon
        popupIndicator: {
          color: 'rgb(231, 212, 255)',
          '&:hover': { backgroundColor: 'rgba(200, 146, 250, 0.25)' },
        },
        //input 
        input: {
          fontSize: '16px',
          color: 'rgb(231, 212, 255)',
        },

      },
    },

    //outlines 
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          '& fieldset': {
            borderColor: 'rgb(124, 58, 187)',          
            borderWidth: '1.5px',
          },
          '&:hover fieldset': {
            borderColor: 'rgb(191, 140, 238)',          
          },
          '&.Mui-focused fieldset': {
            borderColor: 'rgb(145, 76, 209)',           
            borderWidth: '2px',
          },
          '&.Mui-error fieldset': {
            borderColor: 'rgb(233, 56, 56)',       
          },
          backgroundColor: 'rgba(200, 146, 250, 0.25)',
        },
      },
    },

    //little label 
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'rgb(231, 212, 255)',
          '&.Mui-focused': { color: 'rgb(231, 212, 255)' },
          '&.Mui-error': { color: 'rgb(255, 125, 125)' },
        },
      },
    },

  },
});

function Selector({ onSelectPokemon, levelSpeedData }) {


    const [levelSpeedList, setLevelSpeedList] = useState([]);

    const [allLevelDetails, setAllLevelDetails] = useState([]);
    const [activePokiLevelSpeed, setActiveLevelSpeed] = useState({});

    const [pokemon, setPokemon] = useState([]);
    const [selectPokemon, setSelectedPokemon] = useState(null);

    //Api calls
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

    //get random id
    const getRandomPokemon = () => {
        if (pokemon.length === 0) return;
        const randomId = Math.floor(Math.random() * pokemon.length);
        getPokiDetails(pokemon[randomId].id);
    }

    //get all of the API data 
    useEffect(() => {
        getPokiList();
        getLevelList();
    }, []);

    //get level data from API
    useEffect(() => {
        if (levelSpeedList[0] == null) return;
        getLevelDetails(levelSpeedList[0].url, levelSpeedList[1].url, levelSpeedList[2].url, levelSpeedList[3].url, levelSpeedList[4].url, levelSpeedList[5].url);

    }, [levelSpeedList])

    //get random pokemon to display when page loads 
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
        <ThemeProvider theme={theme}>

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
        </ThemeProvider>
    )
}



export default Selector;