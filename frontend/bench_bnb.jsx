const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const hashHistory = ReactRouter.hashHistory;

const Search = require('./components/search');
window.BenchStore = require('./stores/bench_store');
window.BenchIndex = require('./components/bench_index');

const App = React.createClass({
  render() {
    return(
      <h1>Welcome to the App!</h1>
    );
  }
});

// const routes = (
// const routes = (
//   <Route path="/" component={App}>
//
//   </Route>
// );

document.addEventListener( "DOMContentLoaded", () => {
  ReactDOM.render(
    <Search/>,
    document.getElementById("content"));
});
