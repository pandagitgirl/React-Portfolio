import React, { Component } from "react";
import image1 from "../img/food-and-music.jpg"
// import { Row, Col, Card } from "../contents/Skills"
import { Card, Button, CardImg, CardBody, CardTitle, CardText } from "reactstrap"

// class Card extends Component {
 
function ProjectCard(props) {
  return (
    <Card>
      <CardImg src={props.image} />
        <CardBody>
          <CardTitle>{props.Title}</CardTitle>
            <CardText> Test</CardText>
              <Button></Button>
        </CardBody>
    </Card>
  );
}

export default ProjectCard;

