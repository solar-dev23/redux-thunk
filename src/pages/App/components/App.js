import React, { Component } from 'react';
import {Container,Row,Col} from 'reactstrap'
import './App.css';
import SearchForm from './SearchForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchGit = this.fetchGit.bind(this);
    const {initval} = this.props;
    //console.log("---");console.log(initval);
    this.fetchGit(initval);
  }
  fetchGit(options) {
    this.props.fetchGit(options);
  }
  render() {
    const {loading,userdata,initval} = this.props;
    //console.log(userdata)
    return (
      <Container>
        <Row>
          <Col align = 'center' className="title-class">
            <h1>GitHub Gallery Thunk</h1>
          </Col>
        </Row>
        <Row>
          <Col className="ml-20">
            <SearchForm onSubmit={this.fetchGit} initValues={initval}/>
          </Col>
        </Row>
        { loading && <div>loading...</div> }
        { !loading && userdata && userdata.length > 0 &&
          userdata.map((user, index) => {
            return (
              <Row key={index} >
                <Col> <div className="block-class">
                  <Col>
                    <img src={user.avatar_url} alt="avatar" className="avatar-class"/>
                  </Col>
                  <Col>
                    <Row>
                      <a href={user.html_url}><h5>{user.login}</h5></a>
                    </Row>
                    <Row>
                      <a href={user.html_url + "?tab=repositories"}><h5>Repository</h5></a>
                    </Row>
                  </Col>
                  </div>
                </Col>
              </Row>)
          })
        }
      </Container>
    );
  }
}

export default App;
