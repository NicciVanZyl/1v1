import react from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import placeholderImage from '../PlaceHolderImage.png';
import VantaBackground from "../VantaBackground";
import PageFooter from '../components/footer';
import { useState, useEffect } from "react";


function Home() {
    //     class pokiDetails {
    //         constructor(name, baseExp, species, speciesURL, sprite, stats) {
    //             this.name = name;
    //             this.baseExp = baseExp;
    //             this.species = species;
    //             this.speciesURL = speciesURL;
    //             this.sprite = sprite;
    //             this.stats = stats;
    //         }
    //     }

    const [pokiList, setList] = useState([]);
    const [activePoki, setActivePoke] = useState()


    const getPokiList = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1350")
            .then(response => response.json())
            .then(data => {
                const urls = data.results.map(poke => poke.url);
                setList(urls);
            })
            .catch(console.error);
    };

    const getPokiDetails = (url) => {

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setActivePoke({
                    name: data.name,
                    sprite: data.sprites.other['official-artwork'].front_default,
                    stats:
                        [
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
                });
            })
            .catch((error) => console.log(error));

    }
    useEffect(() => { getPokiList(); }, []);

    useEffect(() => {
        if (pokiList.length === 0) return;
        const idx = Math.floor(Math.random() * pokiList.length);
        getPokiDetails(pokiList[idx]);
    }, [pokiList]);

    useEffect(() => console.log(pokiList), [pokiList]);
    useEffect(() => console.log(activePoki), [activePoki]);

    return (
        <main>
            <VantaBackground></VantaBackground>
            <Container fluid className="pageBackground pt-4" id="pagebg" >
                {/* <VantaBackground > */}

                <Row>
                    <Col className="m-5 containerBackground">
                        <Stack gap={1}>
                            <Stack direction="vertical" gap={1} className="welcomeTextContainer containerBackground2 mx-1 mb-4">
                                <div>
                                    <h2 className="welcomeTitle">Welcome to 1V1</h2>
                                </div>
                                <div>
                                    <p className="welcomeText">1v1 aims to make comparing Pokémon statistics easier and more accessible for beginners by making the data clear and concise. Each Pokémon has a set of statistics that can make them better for certain tasks than others. All you have to do is pick two Pokémon and have us do the heavy lifting. You’ll be able to see a layout of how the two Pokémon's base statistics compare to each other as well as how much experience they need to level up and the amount of experience they give when defeated in battle. On the timeline you’ll be able to see how a Pokémon's stats will change as they level up. Below you’ll be able to see what the basic layout of a Pokémon's stats will look like as well as the stats we’ll be comparing to one another. </p>
                                </div>
                            </Stack>

                            {/* <Stack direction="horizontal" className="containerBackground textContainer"> */}
                            <Row className="textContainer containerBackground2 mx-1" >
                                <Col lg={6} md={12}>

                                    <div className="containerBackground2 statsText">
                                        <Stack gap={3}>
                                            <Stack>
                                                <h3>Pokimon Name</h3>
                                                <p>Type: Pokimon Types</p>
                                            </Stack>
                                            <Stack>
                                                <h5>Pokémon Stats:</h5>
                                                <p>HP - The Pokémon's hit point value</p>
                                                <p>Attack - Atk</p>
                                                <p>Defense - Def</p>
                                                <p>Special-Attack - sp-Atk</p>
                                                <p>Special-Defense - sp-Def</p>
                                                <p>Speed - Spd</p>
                                                <p>Accuracy</p>
                                                <p>Evasion</p>
                                                <p>Special</p>
                                            </Stack>
                                        </Stack>

                                    </div>
                                </Col>
                                <Col lg={6} md={12} className="m-lg-auto mt-4">

                                    <img src={placeholderImage} className="ms-auto homeImage"></img>
                                </Col>
                            </Row>

                            {/* </Stack> */}
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