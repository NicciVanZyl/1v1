import react from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import placeholderImage from '../PlaceHolderImage.png';

function home() {
    return (
        <Container fluid className="pageBackground">
            <Row>
                <Col className="m-5 containerBackground">
                <Stack gap={5}>
                    <Stack direction="vertical" gap={1}>
                        <div>
                            <h2>Welcome to 1V1</h2>
                        </div>
                        <div>
                            <p className="welcomeText">1v1 aims to make comparing Pokémon statistics easier and more accessible for beginners by making the data clear and concise. Each Pokémon has a set of statistics that can make them better for certain tasks than others. All you have to do is pick two Pokémon and have us do the heavy lifting. You’ll be able to see a layout of how the two Pokémon's base statistics compare to each other as well as how much experience they need to level up and the amount of experience they give when defeated in battle. On the timeline you’ll be able to see how a Pokémon's stats will change as they level up. Below you’ll be able to see what the basic layout of a Pokémon's stats will look like as well as the stats we’ll be comparing to one another. </p>
                        </div>
                    </Stack>

                    <Stack direction="horizontal" >
                        <div className="containerBackground">
                            <Stack gap={3}>
                               <Stack>
                                <h3>PokemonName</h3>
                                <p>Type: Pokemon Type</p>
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
                        <img src={placeholderImage} className="ms-auto homeImage"></img>
                    </Stack>
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
}

export default home;