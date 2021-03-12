import React, { Component } from "react";
import image1 from "../img/food-and-music.jpg";
import image2 from "../img/dayplanner.jpg";
import image3 from "../img/ryan-wallace-kTNS9ElVxE4-unsplash.jpg";
import image4 from "../img/comingsoon.jpg";
// import { Row, Col, Card } from "../contents/Skills"
import { Card, Button, CardImg, CardBody, CardTitle, CardText, Row, Col  } from "reactstrap"

// class Card extends Component {
 
function ProjectCard(props) {
  return (
    <Row>
      <Col>
    <Card>
      <CardImg src="../img/food-and-music.jpg" />
        <CardBody>
          <CardTitle>{props.Title}</CardTitle>
            <CardText>Taste the Music</CardText>
              <Button href="https://enevarez-ops.github.io/projectOne/">Link to Site</Button>
        </CardBody>
    </Card>
    </Col>
      <Col>
    <Card>
      <CardImg src="../img/dayplanner.jpg" />
        <CardBody>
          <CardTitle>{props.Title}</CardTitle>
            <CardText>Scheduler</CardText>
              <Button href="https://pandagitgirl.github.io/05-Third-Party-APIs-Work-Day-Schedule/">Link to Site</Button>
        </CardBody>
    </Card>
    </Col>
      <Col>
    <Card>
      <CardImg src="../img/ryan-wallace-kTNS9ElVxE4-unsplash.jpg" />
        <CardBody>
          <CardTitle>{props.Title}</CardTitle>
            <CardText>Top Board Games</CardText>
              <Button href=" https://peaceful-spire-39350.herokuapp.com/">Link to Site</Button>
        </CardBody>
    </Card>
    </Col>
      <Col>
    <Card>
      <CardImg src="../img/comingsoon.jpg" />
        <CardBody>
          <CardTitle>{props.Title}</CardTitle>
            <CardText>Coming Soon</CardText>
              <Button></Button>
        </CardBody>
    </Card>
    </Col>
    </Row>
  );
}

export default ProjectCard;

