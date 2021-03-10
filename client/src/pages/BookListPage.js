import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { listBooks, createBook, deleteBook } from '../actions/bookActions';
import Book from '../components/Book';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { BOOK_CREATE_RESET } from '../actions/types';
import { useHistory } from 'react-router-dom';

const BookListPage = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [ISBN, setISBN] = useState('');

  const dispatch = useDispatch();
  const bookList = useSelector(state => state.bookList);
  const { loading, books, error } = bookList;
  
  const bookCreate = useSelector(state => state.bookCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    book: createdBook
  } = bookCreate;
  
  const bookDelete = useSelector(state => state.bookDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = bookDelete;
  
  const history = useHistory();
  
  useEffect(() => {
    dispatch({type: BOOK_CREATE_RESET});
    
    if (successCreate) {
      history.push(`/books/${createdBook._id}`);
    } else {
      dispatch(listBooks());
    }
  }, [dispatch, history, successCreate, successDelete, createdBook]);
  
  const createBookHandler = (e) => {
    e.preventDefault();
    
    dispatch(
      createBook({
        title,
        subtitle,
        description,
        author,
        ISBN
      })
    );
  };
  
  const deleteBookHandler = (id) => {
    dispatch(deleteBook(id));
  };
  
  return (
    <>
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      <Row>
        <Col>
          <Form onSubmit={createBookHandler}>
            <Form.Group controlId='bookTitle'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Enter Title'
              />
            </Form.Group>
            <Form.Group controlId='bookSubTitle'>
              <Form.Label>Sub-Title</Form.Label>
              <Form.Control
                type='text'
                value={subtitle}
                onChange={(e) => setSubTitle(e.target.value)}
                placeholder='Enter Sub-Title'
              />
            </Form.Group>
            <Form.Group controlId='bookAuthor'>
              <Form.Label>Author</Form.Label>
              <Form.Control
                type='text'
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder='Enter Author'
              />
            </Form.Group>
            <Form.Group controlId='bookDescription'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Enter Description'
              />
            </Form.Group>
            <Form.Group controlId='bookISBN'>
              <Form.Label>ISBN</Form.Label>
              <Form.Control
                type='text'
                value={ISBN}
                onChange={(e) => setISBN(e.target.value)}
                placeholder='Enter ISBN'
              />
            </Form.Group>
            
            <Button
              variant='warning'
              type='submit'
              onClick={createBookHandler}
              size='md'
              block
            >
              <i className='fas fa-plus'></i>{' '}Create Book
            </Button>
          </Form>
        </Col>
      </Row>
      
      <Row>
        <Col className='pt-5'>
          <h1>The Books in MERN Library</h1>
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ): error ? (
        <Message variant='danger'>{error}</Message>
      ): books ? (
        <>
          <Row>
            {books.map((book) => (
              <Col key={book._id} sm={12} md={6} lg={4} >
                <Book book={book} deleteBookHandler={deleteBookHandler} />
              </Col>
            ))}
          </Row>
        </>
      ) : <h3>No book found in MERN Library...🌶  🎭 🖊 🐤</h3> }
    </>
  )
}

export default BookListPage;
