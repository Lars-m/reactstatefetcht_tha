import React, { Component } from 'react';
import '../css/exam.css';
import { Table, Button, Image } from 'react-bootstrap';
export default class ReactState extends Component {
  constructor() {
    super();
    this.state = { data: [], candidate: { image: '' } };
  }

  async componentWillMount() {
    //Could be a good place to fetch data
  }
  
  render = () => {

    return (
      <div>
        <h1>Candidates for the election 2017</h1>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Municipality</th>
              <th>Party</th>
              <th>Candidate</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           
          </tbody>
        </Table>
        <div>Add Details here</div>
      </div>
    )

  }
}


