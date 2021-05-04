import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Container, Col, Card, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import LoginUserActionDispatcher from '../../../Actions/ActionDispatchers/LoginUserActionDispatcher.js'


const mapDispatchToProps = dispatch => {
  return {
    loginUser: () => {
      dispatch(LoginUserActionDispatcher())
    }
  }
}

function LoginUserForm(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = event => {
    event.preventDefault()
    props.loginUser()
    props.parent.history.push('/MainScreen')
  }

  return (
    <div style={{height: "100vh", width: "100vw"}} className="d-flex justify-content-center align-items-center">
    <div style={{height: "50vh", width: "50vw"}} className="d-flex justify-content-center align-items-center">
    <Container className="mt-5">
      <Row className="d-flex justify-content-center">
	      <Col xs={12} sm={8} lg={4}>
          <Card body inverse style={{ backgroundColor: '#222', borderColor: '#222' }}>
            <Form className="form" onSubmit={handleSubmit}>
              <Col>
              <FormGroup>
               <Label>Email</Label>
                <Input
                value={email}
                onChange={event => setEmail(event.target.value)}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                />
              </FormGroup>
             </Col>
        <Col>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            value={password}
            onChange={event => setPassword(event.target.value)}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="********"
          />
        </FormGroup>
      </Col>
      <Col className="d-flex justify-content-around">
			<Button onClick={() => props.parent.history.push('/Register') }>New User?</Button>
			<Button>Submit</Button>
		</Col>
    </Form>
  </Card>
  </Col>
</Row>
  </Container>
  
</div>

    </div>
    
    
  )
  
}

export default connect(null,mapDispatchToProps)(LoginUserForm)
