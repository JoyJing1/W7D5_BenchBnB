const React = require('react');

const BenchIndexItem = React.createClass({
  render() {
    const bench = this.props.bench;
    return(
      <div>
        <p>Description: {bench.description}</p>
        <p>Coordinates: ({bench.lat}, {bench.lng})</p>
      </div>
    );
  }
});

module.exports = BenchIndexItem;
