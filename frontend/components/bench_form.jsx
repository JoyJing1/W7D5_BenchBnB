const React = require('react');
const BenchActions = require('../actions/bench_actions');
const BenchStore = require('../stores/bench_store');
const hashHistory = require('react-router').hashHistory;

const BenchForm = React.createClass({
  getInitialState() {
    return {  description: '',
              seats: 1,
              lat: parseFloat(this.props.location.query.lat),
              lng: parseFloat(this.props.location.query.lng)};
  },


  _createBench(e) {
    console.log("_createBench in bench_form.jsx");
    console.log(this.state);

    e.preventDefault();
    BenchActions.createBench(this.state, this._redirectToRoot);
  },

  _redirectToRoot() {
    return hashHistory.push("/");
  },
  _onChange(e) {
    const stateName = e.target.attributes.label.value;

    const stateObj = function() {
      let returnObj = {};

      if (stateName === "lat" || stateName === "lng") {
        returnObj[stateName] = parseFloat(e.target.value);
      } else if (stateName === "seats") {
        returnObj[stateName] = parseInt(e.target.value);
      } else {
        returnObj[stateName] = e.target.value;
      }
      return returnObj;
    }();

    this.setState( stateObj );
    console.log(this.state);
  },

  render() {
    return(
      <form className="new-bench" onSubmit={this._createBench} >
        <label for="bench-description">Description:</label>
        <input type="string" id="bench-description"
                value={this.state.description}
                onChange={this._onChange}
                label="description" key="description">
        </input>
        <br/>

        <label for="bench-seats">Number of Seats:</label>
        <input type="number" id="bench-seats"
                value={this.state.seats}
                onChange={this._onChange}
                label="seats" key="seats">
        </input>
        <br/>

        <label for="bench-lat">Latitude:</label>
        <input type="number" step="any" id="bench-lat"
                value={this.props.location.query.lat}
                onChange={this._onChange}
                label="lat" key="lat"
                disabled>
        </input>
        <br/>

        <label for="bench-lng">Longitude:</label>
        <input type="number" step="any" id="bench-lng"
                value={this.props.location.query.lng}
                onChange={this._onChange}
                label="lng" key="lng"
                disabled>
        </input>
        <br/>

        <input type="submit" value="Create Bench"></input>
      </form>
    );
  }
});

module.exports = BenchForm;
