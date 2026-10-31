import react from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import placeholderImage from "../PlaceHolderImage.png";
import VantaBackground from "../VantaBackground";
import PageFooter from "../components/footer";
import { useState, useEffect } from "react";
import useTypeTheme from "../components/useTypeTheme";

function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [selectPokemon, setSelectedPokemon] = useState(null);
  const [loading, setLoading] = useState(true); //loading so the api can load the data and have placeholder data in the meantime

  useTypeTheme(selectPokemon?.types);

  //API call
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

  //API call
  const getPokiDetails = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const pokiData = {
          name: data.name,
          sprite: data.sprites.other["official-artwork"].front_default,
          stats: [
            { name: "hp", value: data.stats[0].base_stat },
            { name: "atk", value: data.stats[1].base_stat },
            { name: "def", value: data.stats[2].base_stat },
            { name: "s_atk", value: data.stats[3].base_stat },
            { name: "s_def", value: data.stats[4].base_stat },
            { name: "speed", value: data.stats[5].base_stat },
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
    //get random id
    if (pokemon.length === 0) return;
    const idx = Math.floor(Math.random() * pokemon.length);
    getPokiDetails(pokemon[idx].id);
  }, [pokemon]);

  useEffect(() => {
    if (selectPokemon == null) return;
    if (selectPokemon.name == null) return;
  }, [selectPokemon]);

  const GenerateHomePage = () => {
    var name;
    var types;
    var species;
    var sprite;
    var stats;

    if (loading) {
      //placeholder data if the API kills itself
      name = "Ditto";
      types = "Normal";
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
      //check if there is data :)
      name = selectPokemon?.name;
      types = selectPokemon?.types;
      species = selectPokemon?.species;
      sprite = selectPokemon?.sprite;
      stats = selectPokemon?.stats;
    }

    return (
      //add api/ placeholder data
      <>
        <Row className="textContainer mx-1 mb-4">
          <h2 className="welcomeTitle">Stat Explanations & Examples</h2>
          <Col lg={6} md={12} className="m-lg-auto mt-4">
            <img src={sprite} className="ms-auto homeImage" />
          </Col>
          <Col lg={6} md={12} className="d-flex align-items-center px-5">
            <div className="containerBackground2 statsText w-100">
              <Stack gap={3}>
                <Stack className="pokemonInfo">
                  <h3 className="pokemonName">{name}</h3>
                  <p className="pokemonType">Type: {types}</p>
                  <p className="pokemonSpecies">Species: {species}</p>
                </Stack>
              </Stack>
            </div>
          </Col>
          <Col lg={12}>
            <Row
              className="containerBackground2 statsText mt-3"
              xs={1}
              md={2}
              lg={2}
            >
              <Col>
                <div className="pokemonStatDesc">
                  <h6>Hit Points</h6>
                  <p>
                    The Pokémon's hit point value is the amount of damage they
                    can take before fainting in battle.
                  </p>
                  <p className="stat">HP: {stats[0].value}</p>
                </div>
              </Col>{" "}
              <Col>
                <div className="pokemonStatDesc">
                  <h6>Attack</h6>
                  <p>
                    The Pokémon's attack is used to calculate damage for
                    physical attack moves during battle
                  </p>
                  <p className="stat">ATK: {stats[1].value}</p>
                </div>
              </Col>{" "}
              <Col>
                <div className="pokemonStatDesc">
                  <h6>Defense</h6>
                  <p>
                    The Pokémon's defense value is used to calculate the amount
                    of damage they can block from physical attacks
                  </p>
                  <p className="stat">DEF: {stats[2].value}</p>
                </div>
              </Col>{" "}
              <Col>
                <div className="pokemonStatDesc">
                  <h6>Special-Attack</h6>
                  <p>
                    The Pokémon's special-attack is used to calculate damage for
                    type specific moves during battle
                  </p>
                  <p className="stat">SP-ATK: {stats[3].value}</p>
                </div>
              </Col>{" "}
              <Col>
                <div className="pokemonStatDesc">
                  <h6>Special-Defense</h6>
                  <p>
                    The Pokémon's special-defense value is used to calculate the
                    amount of damage they can block from type specific attacks
                  </p>
                  <p className="stat">SP-DEF: {stats[4].value}</p>
                </div>
              </Col>{" "}
              <Col>
                <div className="pokemonStatDesc">
                  <h6>Speed</h6>
                  <p>
                    The Pokémon's speed value is used to calculate which pokemon
                    will move first during battle
                  </p>
                  <p className="stat">SPD: {stats[5].value}</p>
                </div>
              </Col>{" "}
              <Col>
                <div className="pokemonStatDesc">
                  <h6>Accuracy</h6>
                  <p>
                    The Pokémon's accuracy is used to calculate how likely a
                    move is to hit an opponent
                  </p>
                </div>
              </Col>{" "}
              <Col>
                <div className="pokemonStatDesc">
                  <h6>Evasion</h6>
                  <p>
                    The Pokémon's evasion value is used to calculate how likely
                    they are to dodge an incoming attack
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  };

  return (
    <main>
      <VantaBackground type={selectPokemon?.types}></VantaBackground>
      <Container fluid className="pageBackground pt-4" id="pagebg">
        {/* <VantaBackground > */}

        <Row>
          <Col className="m-5 containerBackground">
            <Stack gap={1}>
              <Stack
                direction="vertical"
                gap={1}
                className="welcomeTextContainer containerBackground2 mx-1 mb-4"
              >
                <div>
                  <h2 className="welcomeTitle">Welcome to 1V1</h2>
                </div>
                <div>
                  <p className="welcomeText">
                    1v1 aims to make comparing Pokémon statistics easier and
                    more accessible for beginners by making the data clear and
                    concise. Each Pokémon has a set of statistics that can make
                    them better for certain tasks than others. All you have to
                    do is pick two Pokémon and have us do the heavy lifting.
                    You’ll be able to see a layout of how the two Pokémon's base
                    statistics compare to each other as well as how much
                    experience they need to level up and the amount of
                    experience they give when defeated in battle. On the
                    timeline you’ll be able to see how a Pokémon's stats will
                    change as they level up. Below you’ll be able to see what
                    the basic layout of a Pokémon's stats will look like as well
                    as the stats we’ll be comparing to one another.{" "}
                  </p>
                </div>
              </Stack>

              {GenerateHomePage(selectPokemon)}
            </Stack>
          </Col>
        </Row>
        {/* </VantaBackground> */}
      </Container>
      <PageFooter></PageFooter>
    </main>
  );
}

export default Home;
