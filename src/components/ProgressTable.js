import React from "react";
import { Table } from "react-bootstrap";

function ProgressTable() {
    return (
        <Table striped bordered hover>
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
                <tr>
                    <td>1</td>
                    <td>Mon Mar 8, 2021</td>
                    <td>Began working on a tracker for the 100 days of code challenge</td>
                    <td>I started!</td>
                    <td>Deciding what to work on</td>
                    <td>Remember you're not alone! It helped me to read some articles from others who said the hardest part is getting started.</td>
                    <td>
                        <a href="https://github.com/ncmarsh/100_days_of_code/commit/c18783e690487a3a79e9e5301d8f8388419e6ed5">
                            One of today's commits
                        </a>
                    </td>
                </tr>
                {/* <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>@fat</td>
                </tr> */}
            </tbody>
            </Table>
    )
}

export default ProgressTable;