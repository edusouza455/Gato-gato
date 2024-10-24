import React, { useState, useEffect } from "react";
import { Card, Button, Spinner, Container, Row, Col } from "react-bootstrap";

const CatCard = () => {
  const [catImage, setCatImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCatImage = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search", {
        headers: {
          "x-api-key": "live_BwwJDRv5tkekF5zjt7gw2mbI6zgnW3oET0v4f5LWrP3FoXoSwIP5qmBV7QxtuFUL"
        }
      });
      const data = await response.json();
      setCatImage(data[0].url);
    } catch (error) {
      console.error("Erro ao buscar a imagem do gato:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
        <img src="https://media.tenor.com/0EDznml5BDAAAAAj/cat-spinning.gif"></img>
          <Card className=" mt-5" >
            
            {loading ? (
              <div className="d-flex justify-content-center align-items-center" style={{ height: "300px" }}>
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Carregando...</span>
                </Spinner>
              </div>
            ) : (
              <Card.Img
                variant="top"
                src={catImage}
                alt="Gato"
                className="img-fluid"
                style={{ objectFit: "cover", height: "300px" }}
              />
            )}
            <Card.Body className="text-center">
              <Button variant="primary" onClick={fetchCatImage} disabled={loading}>
                {loading ? "Carregando..." : "Mais um gato?"}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
  

export default CatCard;
