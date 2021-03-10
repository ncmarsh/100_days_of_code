import React from "react";
import { Table } from "react-bootstrap";

const styles = {
    marginLeft: "15px",
    marginRight: "50px"
}

function ProgressTable(props) {
    return (
        <Table striped bordered hover style={styles}>
            <thead>
                <tr>
                    <th>Day #</th>
                    <th>Date</th>
                    <th>Today's Progress</th>
                    <th>Successes</th>
                    <th>Challenges</th>
                    <th>Thoughts</th>
                    <th>Link(s) to Work</th>
                </tr>
            </thead>
            <tbody>
                {props.codeProgress.map(item => 
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.date}</td>
                        <td>{item.progress}</td>
                        <td>{item.success}</td>
                        <td>{item.challenge}</td>
                        <td>{item.thoughts}</td>
                        <td>
                            <a href={item.link} target="_blank" rel="noreferrer">
                                {item.linkTitle}
                            </a>
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}

export default ProgressTable;