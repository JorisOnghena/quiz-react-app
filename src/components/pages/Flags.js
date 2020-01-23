import React from 'react';
import { Link } from 'react-router-dom';
import { VectorMap } from 'react-jvectormap';
import mapData from '../json/mapdata.json';

class Flags extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: 'unknown',
            countryCode: '',
            countryName: '',
            countryImage: '',
            selectedMap: 'europe_mill'
        };
    }

    componentDidMount() {
        const { mapid } = this.props.match.params
        console.log("Selected map: " + mapid);
        if (mapid === "world") {
            this.setState({ selectedMap: 'world_mill' })
        }
        else if (mapid === "europe") {
            this.setState({ selectedMap: 'europe_mill' })
        }
        else if (mapid === "oceania") {
            this.setState({ selectedMap: 'oceania_mill' })
        }
        this.setRandom();
    }

    shuffleArray = (array) => {
        let i = array.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    setRandom = () => {
        console.log(mapData.countries);
        let shuffledCountries = this.shuffleArray(mapData.countries.filter(f => f.maps.some(m => m === this.state.selectedMap)));
        console.log(shuffledCountries);
        this.setState({ result: 'unknown', countryCode: shuffledCountries[0].iso2, countryName: shuffledCountries[0].name, countryImage: shuffledCountries[0].image });
    }

    handleRegionClick = (event, data) => {
        //this.refs.map.getMapObject.setFocus = "BE";
        //event.preventDefault();
        if (this.state.countryCode.toLowerCase() === data.toLowerCase()) {
            this.setState({ result: 'correct' });
        } else {
            this.setState({ result: 'wrong' });
        }
    }

    handleMapChange = (event) => {
        this.setState({ selectedMap: event.target.value });
        this.onResetClick();
        //this.setState({ [event.target.name]: event.target.value });
    }

    onResetClick = () => {
        this.setRandom();
        console.log(this.state);
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">

                    <div className="row">

                        <div className="col-12">

                            <h1 style={{ fontFamily: "Baby Blocks", color: "white", margin: "30px" }}>Link flag to country</h1>

                            <div className="form-group mb-2">
                                <Link to="/" className="btn btn-light btn-lg">Return to menu</Link>
                                &nbsp;
                                    <select className="form-control-lg" id="selectMapType"
                                    defaultValue={this.state.selectedMap}
                                    onChange={this.handleMapChange}>

                                    <option value="world_mill">World</option>
                                    <option value="europe_mill">Europe</option>
                                    <option value="oceania_mill">Oceania</option>
                                </select>
                                &nbsp;
                                <button type="button" className="btn btn-primary btn-lg" onClick={this.onResetClick}>Try another flag</button>
                            </div>

                            <div className="card border border-dark">

                                {(this.state.result === 'wrong') ?
                                    <div className="alert alert-danger" style={{ position: "absolute", width: "100%", height: "100%", zIndex: 997 }}>
                                        Incorrect! <br />
                                        The answer was: {this.state.countryName}
                                    </div>
                                    : null
                                }
                                {(this.state.result === 'correct') ?
                                    <div className="alert alert-success" style={{ position: "absolute", width: "100%", height: "100%", zIndex: 997 }}>
                                        Correct!  <br />
                                        It was indeed: {this.state.countryName}
                                    </div>
                                    : null
                                }

                                <img className="" src={this.state.countryImage} style={{ position: "absolute", width: "220px", zIndex: 999 }} alt="Flag to guess" />

                                <div style={{ display: 'block', position: 'absolute', top: -9999 }}>
                                    <div>
                                        <VectorMap ref="map1" containerClassName="map1" containerStyle={{ width: '100%', height: '100%' }} map="world_mill"></VectorMap>
                                    </div>
                                    <div>
                                        <VectorMap ref="map2" containerClassName="map2" containerStyle={{ width: '100%', height: '100%' }} map="europe_mill"></VectorMap>
                                    </div>
                                    <div>
                                        <VectorMap ref="map3" containerClassName="map3" containerStyle={{ width: '100%', height: '100%' }} map="oceania_mill"></VectorMap>
                                    </div>
                                </div>

                                <div style={{ width: '100%', height: 600 }}>
                                    <VectorMap ref="map" map={this.state.selectedMap}
                                        backgroundColor="transparant"
                                        zoomOnScroll={true}
                                        regionsSelectable={true}
                                        regionsSelectableOne={true}
                                        regionStyle={
                                            {
                                                initial: {
                                                    fill: '#D3D3D3',
                                                    "fill-opacity": 1,
                                                    stroke: 'none',
                                                    "stroke-width": 0,
                                                    "stroke-opacity": 1
                                                },
                                                hover: {
                                                    "fill-opacity": 0.8,
                                                    cursor: 'pointer',
                                                    fill: '#0069d9'
                                                },
                                                selected: {
                                                    fill: 'yellow'
                                                },
                                                selectedHover: {
                                                }
                                            }
                                        }
                                        zoomButtons={false}
                                        containerStyle={{
                                            width: '100%',
                                            height: '100%'
                                        }}
                                        containerClassName="map"
                                        onRegionClick={this.handleRegionClick}
                                        onRegionTipShow={
                                            function (event, label, code) {
                                                event.preventDefault();
                                                //label.html(
                                                /*'<b>'+label.html()+'</b></br>'+
                                                '<b>Unemployment rate: </b>'+'%'*/
                                                //);
                                            }
                                        }
                                    />
                                </div>
                            </div>
                            <br />


                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Flags;