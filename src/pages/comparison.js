import react, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import placeholderImage from '../PlaceHolderImage.png';
import VantaBackground from "../VantaBackground";
import PageFooter from '../components/footer';
import Autocomplete from '@mui/material/Autocomplete'
import TextField from "@mui/material/TextField";
import Card from 'react-bootstrap/Card';
import RadarChart from "../components/radarChart";
import PieChart from "../components/piechart";
import BarChart from "../components/barchart";
import Selector from "../components/selectors";



function Comparison() {

    const [poke1, setPoke1] = useState(null);
    const [poke1LevelData, setPoke1LevelData] = useState(null);
    const [poke2, setPoke2] = useState(null);
    const [poke2LevelData, setPoke2LevelData] = useState(null);
    
   

    const GeneratePanel = (pokeData) => {
        if (!pokeData) {
            return <p>Please select a pokemon</p>
        }

        return (
            <>
                <Card style={{ width: '25rem' }} className="mx-auto pokemonCard">
                    <Card.Img variant="top" src={pokeData.sprite} />
                    <Card.Body>
                        <Card.Title>{pokeData.name}</Card.Title>
                        <Card.Text>
                            Type: {pokeData.types}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <RadarChart stats={pokeData.stats} />
            </>
        )
    }

    return (
        <main>
            <VantaBackground></VantaBackground>
            <Container fluid className="pageBackground pt-4" id="pagebg" >

                <Row>
                    <Col className="m-5 containerBackground">
                        <Row>
                            <Col lg={6} md={12} >

                                <Stack gap={5} className="mx-auto">
                                    <Stack direction="horizontal" className="mx-auto" gap={3}>
                                       <Selector onSelectPokemon={setPoke1} levelSpeedData={setPoke1LevelData}/>
                                       
                                    </Stack>
                                    {console.log(poke1)}
                                    {console.log(poke1LevelData)}
                                    {GeneratePanel(poke1)};

                                </Stack>

                            </Col>
                            <Col lg={6} md={12} className="">

                                <Stack gap={5} className="mx-auto">
                                    <Stack direction="horizontal" className="mx-auto" gap={3}>
                                        <Autocomplete className="selectPokemon"
                                            options={["option1"]}
                                            disablePortal
                                            sx={{ width: 300 }}
                                            renderInput={(params) => <TextField {...params} label="Pokemon" />}
                                        />
                                        <button className="randomBtn">Random</button>
                                    </Stack>
                                    <Card style={{ width: '25rem' }} className="mx-auto pokemonCard">
                                        <Card.Img variant="top" src={placeholderImage} />
                                        <Card.Body>
                                            <Card.Title>PokemonName</Card.Title>
                                            <Card.Text>
                                                Type: Type
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <RadarChart />
                                </Stack>

                            </Col>
                        </Row>
                        <BarChart></BarChart>
                        <PieChart></PieChart>
                    </Col>
                </Row>

            </Container>
            <PageFooter></PageFooter>
        </main>
    );
}

export default Comparison;