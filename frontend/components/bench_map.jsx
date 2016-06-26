const React = require('react');
const ReactDOM = require('react-dom');
const BenchStore = require('../stores/bench_store');
const BenchActions = require('../actions/bench_actions');


const BenchMap = React.createClass({
  getInitialState() {
    return { benches: BenchStore.all() };
  },

  componentDidMount(){
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);

    BenchStore.addListener(this._onChange);
    this.listenForMove();
  },

  _onChange(){
    this._updateBenchList();
  },

  _updateBenchList() {
    const bounds = this.map.getBounds();

    if (bounds) {
      const minLat = bounds.getSouthWest().lat();
      const minLng = bounds.getSouthWest().lng();
      const maxLat = bounds.getNorthEast().lat();
      const maxLng = bounds.getNorthEast().lng();

      const benches = BenchStore.all().filter( bench => {
        return bench.lat >= minLat &&
        bench.lat <= maxLat &&
        bench.lng >= minLng &&
        bench.lng <= maxLng;
      });

      this.setState({ benches: benches });
    }
  },

  listenForMove() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const fullBounds = this.map.getBounds();

      console.log('center');
      console.log(fullBounds.getCenter().lat(), fullBounds.getCenter().lng());
      console.log("north east");
      console.log(fullBounds.getNorthEast().lat(), fullBounds.getNorthEast().lng());
      console.log("south west");
      console.log(fullBounds.getSouthWest().lat(), fullBounds.getSouthWest().lng());

      const bounds = {
        northEast: {lat: fullBounds.getNorthEast().lat(), lng: fullBounds.getNorthEast().lng()},
        southWest: {lat: fullBounds.getSouthWest().lat(), lng: fullBounds.getSouthWest().lng()}
      };

      // console.log(bounds);
      BenchActions.fetchAllBenches(bounds);
    });
  },

  _addBench(bench) {
    const pos = { lat: bench.lat, lng: bench.lng };
    const marker = new google.maps.Marker({
        position: pos,
        map: this.map
      });
    // console.log(pos);
  },

  render() {
    // this.state.benches.forEach( bench => {
    //   this._addBench(bench);
    // });

    return(
      <div className="map" ref="map">
        <h1>Bench Map Here!</h1>
      </div>
    );
  }
});

module.exports = BenchMap;
