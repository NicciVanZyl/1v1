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
import LineChart from "../components/linechart";

function timeline() {
    return (
        <main>
            <VantaBackground></VantaBackground>
            <Container fluid className="pageBackground pt-4" id="pagebg" >

                <Row>
                    <Col className="m-5 containerBackground">
                        <LineChart></LineChart>
                    </Col>
                </Row>

            </Container>
            <PageFooter></PageFooter>
        </main>
    );
}

export default timeline;