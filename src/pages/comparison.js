import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import VantaBackground from "../VantaBackground";
import PageFooter from "../components/footer";
import RadarChart from "../components/radarChart";
import PieChart from "../components/piechart";
import BarChart from "../components/barchart";
import Selector from "../components/selectors";
import useTypeTheme from "../components/useTypeTheme";

function Comparison() {
  //data
  const [poke1, setPoke1] = useState(null);
  const [poke1LevelData, setPoke1LevelData] = useState(null);
  const [poke2, setPoke2] = useState(null);
  const [poke2LevelData, setPoke2LevelData] = useState(null);

  //which sprite URL has finished loading for each side
  const [loaded1, setLoaded1] = useState(null);
  const [loaded2, setLoaded2] = useState(null);

  useTypeTheme();

  //See if all data has loaded if it has make the animation play
  const ready =
    !!poke1 && !!poke2 && loaded1 === poke1.sprite && loaded2 === poke2.sprite;

  const playClass = ready ? "play" : "";

  //render the sprites that slide in
  const renderSprite = (pokeData, onSpriteLoad) => {
    if (!pokeData) return null;
    return (
      <img
        className={`vs-sprite ${playClass}`} //if the animation plays or not
        src={pokeData.sprite}
        alt={pokeData.name}
        onLoad={() => onSpriteLoad(pokeData.sprite)}
        onError={() => onSpriteLoad(pokeData.sprite)} // don't hang if an image fails
      />
    );
  };

  //Data under the banner
  const renderName = (pokeData) => (
    <div className={`vs-name ${playClass}`}>
      {pokeData && (
        <>
          <span className="vs-name-text">{pokeData.name}</span>
          <span className="vs-type-text">{pokeData.types}</span>
        </>
      )}
    </div>
  );

  //radar chart
  const renderRadar = (pokeData, side) => {
    if (!pokeData)
      return <p className="text-center">Please select a pokemon</p>;
    return (
      <div className="radarGraph">
        <RadarChart stats={pokeData.stats} name={pokeData.name} side={side} />
      </div>
    );
  };

  return (
    <main className="vs-wrapper">
      <VantaBackground fluid></VantaBackground>
      <Container fluid className="pageBackground pt-4 m-0" id="pagebg">
        <Row>
          <Col className="m-5 containerBackground">
            {/* Selectors */}
            <Row className="mb-4">
              <Col
                lg={6}
                md={12}
                className="d-flex justify-content-center mb-3"
              >
                <Selector
                  onSelectPokemon={setPoke1}
                  levelSpeedData={setPoke1LevelData}
                />
              </Col>
              <Col
                lg={6}
                md={12}
                className="d-flex justify-content-center mb-3"
              >
                <Selector
                  onSelectPokemon={setPoke2}
                  levelSpeedData={setPoke2LevelData}
                />
              </Col>
            </Row>

            {/* VS banner */}
            <div className="vs-banner">
              <div className="vs-half vs-left">
                {renderSprite(poke1, setLoaded1)}
              </div>
              <div className="vs-half vs-right">
                {renderSprite(poke2, setLoaded2)}
              </div>
              <div className={`vs-logo ${playClass}`}>VS</div>
            </div>

            {/* Names under the banner */}
            <div className="vs-names">
              {renderName(poke1)}
              {renderName(poke2)}
            </div>

            {/* Radar charts */}
            <Row className="mt-4">
              <Col lg={6} md={12}>
                {renderRadar(poke1, "left")}
              </Col>
              <Col lg={6} md={12}>
                {renderRadar(poke2, "right")}
              </Col>
            </Row>

            <Stack gap={5} className="mt-4">
              <div className="barChartContainer">
                <BarChart
                  poke1LevelData={poke1LevelData}
                  poke2LevelData={poke2LevelData}
                ></BarChart>
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
