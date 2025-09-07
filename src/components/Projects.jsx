import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

export default function Projects() {
  const projects = [
    {
      title: "Project Alpha",
      desc: "A modern web app built with React and Node.js featuring real-time data visualization.",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Project Beta",
      desc: "An interactive 3D experience using Three.js and WebGL.",
      tech: ["Three.js", "WebGL", "GSAP"],
    },
    {
      title: "Project Gamma",
      desc: "A mobile-first PWA with offline capabilities.",
      tech: ["PWA", "TypeScript", "IndexedDB"],
    },
  ];

  return (
    <section className="py-5 bg-black" id="projects">
      <Container>
        <h2 className="mb-4 text-center">Featured Projects</h2>
        <Row>
          {projects.map((proj, i) => (
            <Col md={4} className="mb-4" key={i}>
              <Card bg="dark" text="light" className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>{proj.title}</Card.Title>
                  <Card.Text>{proj.desc}</Card.Text>
                  <div className="mb-3">
                    {proj.tech.map((t, idx) => (
                      <Badge key={idx} bg="secondary" className="me-1">{t}</Badge>
                    ))}
                  </div>
                  <Button variant="outline-light" size="sm" className="me-2">Live Demo</Button>
                  <Button variant="outline-info" size="sm">GitHub</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
