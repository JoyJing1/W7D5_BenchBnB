const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const Search = require('./components/search');
const BenchForm = require('./components/bench_Form');
// window.BenchStore = require('./stores/bench_store');
// window.BenchIndex = require('./components/bench_index');

const App = React.createClass({
  render() {
    return(
      <div>
        <header><h1>Bench BnB</h1></header>
        {this.props.children}
      </div>
    );
  }
});

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Search}/>
      <Route path="/benches/new" component={BenchForm}/>
    </Route>
  </Router>
);


document.addEventListener( "DOMContentLoaded", () => {
  const root = document.getElementById('content');
  ReactDOM.render(router, root);
});
