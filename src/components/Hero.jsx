import { Container, Row, Col, Badge, Image } from "react-bootstrap";

export default function Hero() {
  return (
    <section className="py-5 mt-5" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <h1 className="fw-bold">Raunak Tiwari</h1>
            <h4 className="text-secondary">FullStack & ML Engineer</h4>
            <p className="mt-3">
              I'm a passionate developer and designer who loves creating digital experiences
              that matter. With a focus on clean code and intuitive design, I bring ideas
              to life through thoughtful development and creative problem-solving.
            </p>
            <div className="mt-3">
              <Badge bg="primary" className="me-2">React</Badge>
              <Badge bg="success" className="me-2">Node.js</Badge>
              <Badge bg="warning" text="dark" className="me-2">Python</Badge>
              <Badge bg="info" text="dark">UI/UX</Badge>
            </div>
          </Col>
          <Col md={5} className="text-center">
            <Image
              src="/pfp.jpg"
              roundedCircle
              fluid
              className="shadow-lg border border-light"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
