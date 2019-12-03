import React, { Component } from 'react';

//Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components
import Header from './components/layout/Header';
import Todos from './components/Todos';
import Footer from './components/layout/Footer';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

import axios from 'axios';

// plugin to creat unique id´s for the AddTodos
// import uuid from 'uuid';

//import css file
import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))

  }

  // Toggle completed todo
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  //Delete Todo
  delTodo = (id) => {

    axios.delete('https://jsonplaceholder.typicode.com/todos/$(id)')
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));

  }

  //Add Todo
  addTodo = (title) => {

    axios.post('http://jsonplaceholder.typicode.com/todos ', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            {/* exact path is to not show the todos when going to /about  */}
            <Route exact path="/" render={props => (
              <React.Fragment>

                <Todos todos={this.state.todos} markComplete={this.markComplete}
                  delTodo={this.delTodo} />
                <AddTodo addTodo={this.addTodo} />

              </React.Fragment>
            )} />

            <Route path="/about" component={About} />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
