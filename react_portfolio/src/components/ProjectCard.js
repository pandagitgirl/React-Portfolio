import React, { Component } from "react";
import image1 from "../img/food-and-music.jpg"
// import { Row, Col, Card } from "../contents/Skills"
import { Card, Button, CardImg, CardBody, CardTitle, CardText, Row, Col  } from "reactstrap"

// class Card extends Component {
 
function ProjectCard(props) {
  return (
    <Row>
      <Col>
    <Card>
      <CardImg src={props.image} />
        <CardBody>
          <CardTitle>{props.Title}</CardTitle>
            <CardText> Test</CardText>
              <Button></Button>
        </CardBody>
    </Card>
    </Col>
      <Col>
    <Card>
      <CardImg src={props.image} />
        <CardBody>
          <CardTitle>{props.Title}</CardTitle>
            <CardText> Test</CardText>
              <Button></Button>
        </CardBody>
    </Card>
    </Col>
      <Col>
    <Card>
      <CardImg src={props.image} />
        <CardBody>
          <CardTitle>{props.Title}</CardTitle>
            <CardText> Test</CardText>
              <Button></Button>
        </CardBody>
    </Card>
    </Col>
      <Col>
    <Card>
      <CardImg src={props.image} />
        <CardBody>
          <CardTitle>{props.Title}</CardTitle>
            <CardText> Test</CardText>
              <Button></Button>
        </CardBody>
    </Card>
    </Col>
    </Row>
  );
}

export default ProjectCard;

