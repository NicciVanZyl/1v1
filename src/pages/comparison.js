import react from "react";
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

function comparison() {
    return (
        <main>
            <VantaBackground></VantaBackground>
            <Container fluid className="pageBackground pt-4" id="pagebg" >

                <Row>
                    <Col className="m-5 containerBackground">
                        <Row>
                            <Col lg={6} md={12} className="">

                                <Stack gap={5} className="mx-auto">
                                    <Autocomplete className="mx-auto"
                                        disablePortal
                                        options={["option 1", "option 2", "option 3"]}
                                        sx={{ width: 300 }}
                                        renderInput={(params) => <TextField {...params} label="Pokemon" />}
                                    />
                                    <Card style={{ width: '25rem' }} className="mx-auto">
                                        <Card.Img variant="top" src={placeholderImage} />
                                        <Card.Body>
                                            <Card.Title>PokemonName</Card.Title>
                                            <Card.Text>
                                                Type: Type
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <RadarChart/>
                                </Stack>

                            </Col>
                                                        <Col lg={6} md={12} className="">

                                <Stack gap={5} className="mx-auto">
                                    <Autocomplete className="mx-auto"
                                        disablePortal
                                        options={["option 1", "option 2", "option 3"]}
                                        sx={{ width: 300 }}
                                        renderInput={(params) => <TextField {...params} label="Pokemon" />}
                                    />
                                    <Card style={{ width: '25rem' }} className="mx-auto">
                                        <Card.Img variant="top" src={placeholderImage} />
                                        <Card.Body>
                                            <Card.Title>PokemonName</Card.Title>
                                            <Card.Text>
                                                Type: Type
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <RadarChart/>
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

export default comparison;