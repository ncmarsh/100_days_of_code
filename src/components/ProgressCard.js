import React from "react";
import { Card } from "react-bootstrap";

function ProgressCard() {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Day 1</Card.Title>
            <Card.Text>Mon Mar 8, 2021</Card.Text>
            <Card.Title>Today's Progress: </Card.Title>
            <Card.Text>
                Began working on a tracker for the 100 days of code challenge
            </Card.Text>
            <Card.Title>Successes: </Card.Title>
            <Card.Text>
                I started!
            </Card.Text>
            <Card.Title>Challenges: </Card.Title>
            <Card.Text>
                Deciding what to work on
            </Card.Text>
            <Card.Title>Thoughts: </Card.Title>
            <Card.Text>
                Remember you're not alone! It helped me to read some articles from others who said the hardest part is getting started.
            </Card.Text>
            <Card.Link href="https://github.com/ncmarsh/100_days_of_code/commit/c18783e690487a3a79e9e5301d8f8388419e6ed5">One of today's commits</Card.Link>
        </Card.Body>
        </Card>
    )
}

export default ProgressCard;