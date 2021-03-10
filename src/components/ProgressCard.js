import React from "react";
import { Card } from "react-bootstrap";

const styles = {
    width: "18rem",
    margin: 0,
    float: "left",
    minHeight: "550px"
}

function ProgressCard(props) {
    return (
        <Card style={styles}>
            <Card.Body>
                <Card.Title>Day {props.id}</Card.Title>
                <Card.Text>{props.date}</Card.Text>
                <Card.Title>Today's Progress: </Card.Title>
                <Card.Text>
                    {props.progress}
                </Card.Text>
                <Card.Title>Successes: </Card.Title>
                <Card.Text>
                    {props.success}
                </Card.Text>
                <Card.Title>Challenges: </Card.Title>
                <Card.Text>
                    {props.challenge}
                </Card.Text>
                <Card.Title>Thoughts: </Card.Title>
                <Card.Text>
                    {props.thoughts}
                </Card.Text>
                <Card.Link href={props.link} target="_blank">
                    {props.linkTitle}
                </Card.Link>
            </Card.Body>
        </Card>
    )
}

export default ProgressCard;