import React, { Component } from 'react';
import {Container,Row,Col,Card,CardImg} from 'reactstrap'
import './App.css';
import SearchForm from './SearchForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchGit = this.fetchGit.bind(this);
    const {initval} = this.props;
    console.log("---");console.log(initval);
    this.fetchGit(initval);
  }
  fetchGit({ keyword }) {
    this.props.fetchGit(keyword);
  }
  render() {
    const {loading,userdata,initval} = this.props;
    console.log(userdata)
    return (
      <Container>
        <Row>
          <Col>
            <h1>GitHub Gallery</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <SearchForm onSubmit={this.fetchGit} initValues={initval}/>
          </Col>
        </Row>
        { loading && <div>loading...</div> }
        { !loading && userdata && userdata.length > 0 &&
          userdata.map((user, index) => {
            return <Row key={index}><Col  xs="12" sm="6" md="4" lg="3">
              <Card>
                <CardImg src={user.owner.avatar_url} />
              </Card>
            </Col>
            <Col xs="12" sm="6" md="4" lg="3">
            <a href={user.owner.html_url}><h5>{user.owner.login}</h5></a>
            <a href={user.html_url}><h5>{user.name}</h5></a>
            </Col>
            </Row>
          })
        }
      </Container>
    );
  }
}

export default App;
