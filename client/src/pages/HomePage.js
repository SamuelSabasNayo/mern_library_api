import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const HomePage = () => {
  return (
    <>
    <Jumbotron>
      <h1 className='text-center'>
        Welcome to MERN Library API
      </h1>
      <p className='text-center'>
        This is MERN Library, a Fullstack Application built with MongoDB, Express JS, React JS, Redux, Node JS, and Docker....🌶  🎭 🖊 🐤
      </p>
      <p className='text-center'>
        <LinkContainer to='/books'>
          <Button variant='success' size='md'>
            My books
          </Button>
        </LinkContainer>
      </p>
    </Jumbotron>
    </>
  )
}

export default HomePage;

