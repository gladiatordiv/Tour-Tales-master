import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Button} from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/login.css'
import login from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'

const Register = () => {

  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined
  });

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value}));
  }

  const handleClick = e =>{
    e.preventDefault();
  }


  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={login} alt="" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                <FormGroup>
                    <input type="text" placeholder='username' required id='username' onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="email" placeholder='Email' required id='email' onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='password' required id='password' onChange={handleChange} />
                  </FormGroup>
                  <Button className='btn secondary_btn auth_btn' type='submit'>Creacte Account </Button>
                </Form>
                <p>Don't have an account? <Link to='/login'>Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register