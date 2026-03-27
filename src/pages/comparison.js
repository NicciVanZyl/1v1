import react, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import VantaBackground from "../VantaBackground";
import PageFooter from '../components/footer';
import Card from 'react-bootstrap/Card';
import RadarChart from "../components/radarChart";
import PieChart from "../components/piechart";
import BarChart from "../components/barchart";
import Selector from "../components/selectors";



function Comparison() {
    //data
    const [poke1, setPoke1] = useState(null);
    const [poke1LevelData, setPoke1LevelData] = useState(null);
    const [poke2, setPoke2] = useState(null);
    const [poke2LevelData, setPoke2LevelData] = useState(null);

    //load data from API onto panel
    const GeneratePanel = (pokeData) => {
        if (!pokeData) {
            return <p>Please select a pokemon</p>
        }

        return (
            <>
                <Card style={{ width: '25rem' }} className="mx-auto pokemonCard">
                    <Card.Img variant="top" src={pokeData.sprite} />
                    <Card.Body className="pokemonCard">
                        <Card.Title>{pokeData.name}</Card.Title>
                        <Card.Text>
                            Type: {pokeData.types}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div className="radarGraph">
                    <RadarChart stats={pokeData.stats} />
                </div>

            </>
        )
    }

    return (
        <main >
            <VantaBackground fluid key={[poke1, poke2]}></VantaBackground> {/*//I think this fixed the background or It does nothing but the background fixed itself so it's fine */}
            <Container fluid className="pageBackground pt-4" id="pagebg" >

                <Row>
                    <Col className="m-5 containerBackground">
                        <Row>
                            <Col lg={6} md={12} >

                                <Stack gap={5} className="mx-auto">
                                    <Stack direction="horizontal" className="mx-auto" gap={3}>
                                        <Selector onSelectPokemon={setPoke1} levelSpeedData={setPoke1LevelData} /> {/*Get data from selector with API calls*/}

                                    </Stack>
                                    {GeneratePanel(poke1)};{/*Generate panel with data*/}

                                </Stack>

                            </Col>
                            <Col lg={6} md={12} className="">

                                <Stack gap={5} className="mx-auto">
                                    <Stack direction="horizontal" className="mx-auto" gap={3}>
                                        <Selector onSelectPokemon={setPoke2} levelSpeedData={setPoke2LevelData} />

                                    </Stack>
                                    {GeneratePanel(poke2)};

                                </Stack>

                            </Col>
                        </Row>
                        <Stack gap={5}>
                            {/*Send data to the charts*/}
                            <div className="barChartContainer">
                                <BarChart poke1LevelData={poke1LevelData} poke2LevelData={poke2LevelData}></BarChart>
                            </div>
                            <div className="">
                                <PieChart poke1={poke1} poke2={poke2}></PieChart>
                            </div>
                        </Stack>
                    </Col>
                </Row>

            </Container>
            <PageFooter></PageFooter>
        </main>
    );
}

export default Comparison;