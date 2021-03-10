import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookListPage from './pages/BookListPage';
import BookPage from './pages/BookPage';

const App = () => {
  return (
    <Router>
        <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/books' component={BookListPage} />
          <Route exact path='/books/:id' component={BookPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  ) 
}

export default App;
