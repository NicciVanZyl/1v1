import react, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VantaBackground from "../VantaBackground";
import PageFooter from '../components/footer';
import LineChart from "../components/linechart";


function Timeline() {



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

export default Timeline;