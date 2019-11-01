import React, { forwardRef } from 'react';
import { VectorMap } from 'react-jvectormap'

const handleRegionClick = (event, data) => {
    console.log(event)
    //.tip.hide();
}

/*const handleLabelShow = (event, label, code) => {
    alert(code);
}*/

const CreateMap = forwardRef((props, ref) => {    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md">
                    <div style={{ width: 1000, height: 600 }}>
                        <VectorMap ref={ref} map={'world_mill'}
                            backgroundColor="#b2c2bf"
                            zoomOnScroll={true}
                            regionsSelectable={true}
                            regionsSelectableOne={true}
                            containerStyle={{
                                width: '100%',
                                height: '100%'
                            }}
                            containerClassName="map"
                            onRegionClick={handleRegionClick}
                        />
                    </div></div></div></div>
    )
});


function Flags() {
    return (

        <div className="container">
            <div className="row">
                <div className="col-md">
                    <h1>Link flag to country</h1>
                    <p>Please select the country from the map below.</p>
                    <img src="https://www.countryflags.io/be/shiny/64.png" alt="country to guess"></img>
                </div>
            </div>
            <CreateMap />
            <div className="row">
                <div className="col-md">
                    <button type="button" class="btn btn-light" diabled>Please select a country</button>
                </div>
            </div>
        </div>

    )
}

export default Flags;