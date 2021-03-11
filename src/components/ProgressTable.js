import React from "react";
import { Table } from "react-bootstrap";

function ProgressTable(props) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th style={{ minWidth: "75px" }}>Day #</th>
                    <th style={{ minWidth: "100px" }}>Date</th>
                    <th>Today's Progress</th>
                    <th>Successes</th>
                    <th>Challenges</th>
                    <th>Thoughts</th>
                    <th style={{ minWidth: "100px" }}>Link(s) to Work</th>
                </tr>
            </thead>
            <tbody>
                {props.codeProgress.map(item => 
                    <tr key={item.id}>
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