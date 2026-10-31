import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VantaBackground from "../VantaBackground";
import PageFooter from "../components/footer";
import LineChart from "../components/linechart";
import placeholderImage from "../PlaceHolderImage.png";
import Stack from "react-bootstrap/Stack";
import ToggleButtons from "../components/toggleButtons";
import useTypeTheme from "../components/useTypeTheme";

function Timeline() {
  const [selectPokemon, setSelectedPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentStat, setCurrentStat] = useState("hp");
  const [currentStatVal, setCurrentStatVal] = useState(48);
  const [pokemon, setPokemon] = useState([]);

  useTypeTheme(selectPokemon?.types);

  const getPokiList = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1350")
      .then((response) => response.json())
      .then((data) => {
        const info = data.results.map((poke) => ({
          label: poke.name,
          id: poke.url,
        }));
        setPokemon(info);
      })
      .catch(console.error);
  };

  const getRandomPokemon = () => {
    if (pokemon.length === 0) return;
    const randomId = Math.floor(Math.random() * pokemon.length);
    getPokiDetails(pokemon[randomId].id);
  };

  //api call to get clefairy data
  const getPokiDetails = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {

        const pokiData = {
          name: data.name,
          sprite: data.sprites.other["official-artwork"].front_default,
          stats: [
            { name: "hp", value: data.stats[0].base_stat },
            { name: "atk", value: data.stats[1].base_stat },
            { name: "def", value: data.stats[2].base_stat },
            { name: "spatk", value: data.stats[3].base_stat },
            { name: "s_def", value: data.stats[4].base_stat },
            { name: "spd", value: data.stats[5].base_stat },
          ],
          baseExp: data.base_experience,
          species: data.species.name,
          speciesUrl: data.species.url,
          types: data.types[0].type.name,
        };
        setSelectedPokemon(pokiData);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPokiList();
  }, []);

  useEffect(() => {
    getRandomPokemon();
  }, [pokemon]);

  //get selected stat value based on API and toggle buttons
  useEffect(() => {
    if (selectPokemon == null) return;
    for (let i = 0; i < selectPokemon.stats.length; i++) {
      if (currentStat == selectPokemon.stats[i].name) {
        setCurrentStatVal(selectPokemon.stats[i].value);
        break;
      }
    }
  }, [currentStat]);

  const GenerateTimelinePage = () => {
    var name;
    var types;
    var species;
    var sprite;
    var stats;

    if (loading) {
      // Use placeholder data when API dies
      name = "Ditto";
      types = "normal";
      species = "Ditto";
      sprite = placeholderImage;
      stats = [
        { value: 48 },
        { value: 48 },
        { value: 48 },
        { value: 48 },
        { value: 48 },
        { value: 48 },
      ];
    } else {
      name = selectPokemon?.name;
      types = selectPokemon?.types;
      species = selectPokemon?.species;
      sprite = selectPokemon?.sprite;
      stats = selectPokemon?.stats;
    }

    return (
      <>
        <Row className="textContainer containerBackground2 mx-1 mb-4">
          <Col lg={6} md={12}>
            <div className="containerBackground2 statsText">
              <Stack gap={3}>
                <Stack className="pokemonInfo">
                 <h3 className="pokemonName">{name}</h3>
                  <p className="pokemonType">Type: {types}</p>
                  <p className="pokemonSpecies">Species: {species}</p>
                </Stack>
                <Stack gap={2}>
                  <p className="pokemonType">Pokémon Stat explanation:</p>
                  <div className="pokemonStatDesc">
                    <p className="stat">Base HP - {stats[0].value}</p>
                  </div>
                  <div className="pokemonStatDesc">
                    <p className="stat">Base Atk - {stats[1].value}</p>
                  </div>
                  <div className="pokemonStatDesc">
                    <p className="stat">Base Def - {stats[2].value}</p>
                  </div>
                  <div className="pokemonStatDesc">
                    <p className="stat">Base Sp-atk - {stats[3].value}</p>
                  </div>
                  <div className="pokemonStatDesc">
                    <p className="stat"> Base Spd - {stats[5].value}</p>
                  </div>
                </Stack>
              </Stack>
            </div>
          </Col>
          <Col lg={6} md={12} className="m-lg-auto timelineImage mt-4">
            <img src={sprite} className="" />
          </Col>
        </Row>
      </>
    );
  };

  return (
    <main>
      <VantaBackground type={selectPokemon?.types}></VantaBackground>
      <Container fluid className="pageBackground pt-4 " id="pagebg">
        <Row>
          <Col className="m-5 containerBackground">
            {GenerateTimelinePage()}

            <Col className="containerBackground2 mb-4">
              <h2 className="chartHeading">Stat Growth</h2>
              <Row>
                <Col className="d-flex justify-content-center mb-4">
                  <ToggleButtons
                    onButtonChange={setCurrentStat}
                  ></ToggleButtons>
                </Col>
              </Row>
              <LineChart
                currentStat={currentStat}
                currentStatVal={currentStatVal}
                type={selectPokemon?.types}
              ></LineChart>
            </Col>
            <Col className="containerBackground2 pokemonStatDesc">
              <h5 className="chartHeading">Stat Growth Explanation:</h5>
              <div>
                <p>
                  A pokemon's stat growth is determined by two random values
                  determined in game during play time their level and their base
                  stats using the following formulas.
                </p>
                <p>
                  Other stats = (((((2 * (B + IV)) + (EV / 4)) * Lvl) / 100) +
                  5)
                </p>
                <p>
                  HP = (((((2 * (B + IV)) + (EV / 4)) * Lvl) / 100) + Lvl + 10)
                </p>
                <p>B: base stat value</p>
                <p>IV: pokemon's random individual value</p>
                <p>EV: the pokemon's effort value</p>
                <p>Lvl: is the pokemon's level</p>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
      <PageFooter></PageFooter>
    </main>
  );
}

export default Timeline;
