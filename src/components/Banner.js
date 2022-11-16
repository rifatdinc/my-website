import { Container, Row, Col } from "react-bootstrap";
import { Route, Routes } from "react-router";
import Introduce from "../routes/Introduce";
import Projects  from './Projects';

const Banner = () => {

  return (

    <>
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <Routes>
                <Route path="/" element={<Introduce />}></Route>
                <Route path="/Blog" element={<Projects/>}></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
export default Banner;