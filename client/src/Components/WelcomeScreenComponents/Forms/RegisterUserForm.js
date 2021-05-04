import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Container, Col, Card, Row, Form, FormGroup, FormFeedback, Label, Input, Button } from 'reactstrap'
import RegisterUserActionDispatcher from '../../../Actions/ActionDispatchers/RegisterUserActionDispatcher.js'

const mapDispatchToProps = dispatch => {
  return {
    registerUser: () => {
      dispatch(RegisterUserActionDispatcher())
    }
  }
}

function RegisterUserForm(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [emailState, setEmailState] = useState('has-success')
  const [userNameState, setUserNameState] = useState('has-success')
  const [passwordState, setPasswordState] = useState('has-success')
  const [confirmPasswordState, setConfirmPasswordState] = useState('has-success')

  const handleLoginSwitch = () => {
    props.parent.history.push('/')
  }

  const handleEmailChange = e => {
    setEmail(e.target.value)
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    setEmailState(emailRex.test(e.target.value) ? 'has-success' : 'has-danger')
  }
    
  const handleUserNameChange = e => {
    setUserName(e.target.value)
    setUserNameState(e.target.value.length >= 6 ? 'has-success' : 'has-danger')
  }
  
  const handlePasswordChange = e => {
    setPassword(e.target.value)
    const passwordRex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/
    setPasswordState(passwordRex.test(e.target.value) ? 'has-success' : 'has-danger')
  }

  const handleConfirmPasswordChange = e => {
    setConfirmPassword(e.target.value)
    setConfirmPasswordState(password === e.target.value ? 'has-success' : 'has-danger')
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.registerUser()
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
                  valid={emailState === 'has-success'}
                  invalid={emailState === 'has-danger'}
                  onChange={handleEmailChange}
                  value={ email }
                  type="email"
                  name="email"
                  id="email"
                  placeholder="myemail@email.com"
                  />
                  <FormFeedback invalid>
                    Email Format must be: ***@***.****
                  </FormFeedback>
                  </FormGroup>
               </Col>
              <Col>
                <FormGroup>
                <Label>UserName</Label>
                <Input
                valid={userNameState === 'has-success'}
                invalid={userNameState === 'has-danger'}
                onChange={handleUserNameChange}
                value={userName}
                type="text"
                name="username"
                id="username"
                placeholder="myusername"
                />
                <FormFeedback invalid>
                    UserName must be atleast six characters
                  </FormFeedback>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                <Label for="password">Password</Label>
                <Input
                valid={passwordState === 'has-success'}
                invalid={passwordState === 'has-danger'}
                onChange={handlePasswordChange}
                value={password}
                type="password"
                name="password"
                id="password"
                placeholder="********"
                />
                <FormFeedback invalid>
                    Password must be atleast 8 characters long with one number, and upper and lower case letters
                  </FormFeedback>
                </FormGroup>
              </Col>
            <Col>
              <FormGroup>
              <Label for="confirmPassword">Confirm Password</Label>
              <Input
              valid={confirmPasswordState === 'has-success'}
              invalid={confirmPasswordState === 'has-danger'}
              onChange={handleConfirmPasswordChange}
              value={confirmPassword}
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="********"
              />
              <FormFeedback invalid>
                Both passwords must match
              </FormFeedback>
              </FormGroup>
            </Col>
            <Col className="d-flex justify-content-around">
              <Button onClick={handleLoginSwitch}>Registered?</Button>
              <Button>Submit</Button>
            </Col>
          </Form>
        </Card>
     </Col>
    </Row>
  </Container>
</div>
</div>      
)}

export default connect(null,mapDispatchToProps)(RegisterUserForm)