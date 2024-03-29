import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class List extends Component {

    //Displaying the Heroku addon service and database and delete prompt
    async deleteTask(task) {
        const BASE_URL = 'https://heroku-todos-api.herokuapp.com/api/v1';
        const DEST_URL = 'todos/3/items';
        if (window.confirm(`Are you sure you want to delete: "${task.name}"`)) {
            await fetch(`${BASE_URL}/${DEST_URL}/${task.id}`, { method: 'DELETE' });
            this.props.loadTasks();
        }
    }

    //Displaying the Heroku addon service and database and completed task 
    async checkTask(task) {
        const BASE_URL = 'https://heroku-todos-api.herokuapp.com/api/v1';
        const DEST_URL = 'todos/3/items';
        let form = { 'item': { 'done': 'true' } }
        await fetch(`${BASE_URL}/${DEST_URL}/${task.id}`,
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form),
            }
        )

        this.props.loadTasks();
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Table responsive>
                            <tbody>
                                {this.props.tasks.map((task, index) => {
                                    return <tr key={task.id}>
                                        <td className="col-md-10">{task.name}</td>
                                        <td>
                                            {
                                                task.done == false
                                                    ? <a className="check" href="#">
                                                        <FontAwesomeIcon icon="check-circle" size="lg" onClick={() => this.checkTask(task)} size="lg"/>
                                                    </a>
                                                    : null
                                            }
                                        </td>
                                        <td>
                                            <a className="delete" href="#" onClick={() => this.deleteTask(task)}>
                                                <FontAwesomeIcon icon="trash-alt" />
                                            </a>
                                        </td>
                                    </tr>;
                                })}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default List;