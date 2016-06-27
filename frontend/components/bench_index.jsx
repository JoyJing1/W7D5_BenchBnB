const React = require('react');
const BenchStore = require('../stores/bench_store');
const BenchActions = require('../actions/bench_actions');
const BenchIndexItem = require('./bench_index_item');


const BenchIndex = React.createClass({
  getInitialState() {
    return { benches: BenchStore.all() };
  },

  componentDidMount() {
    BenchStore.addListener(this._onChange);
    BenchActions.fetchAllBenches();
  },

  _onChange() {
    this.setState( { benches: BenchStore.all() } );
  },

  render() {
    return(
      <div>
        <h1>The Best Benches in SF!</h1>
        {
          this.state.benches.map( bench => {
            return <BenchIndexItem bench={bench} key={bench.description}/>;
          })
        }
      </div>
    );
  }
});

module.exports = BenchIndex;
