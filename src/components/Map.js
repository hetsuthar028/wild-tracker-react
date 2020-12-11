import React, {useState} from 'react' 
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({eventData, center, zoom, markType}) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(ev =>{
        if(ev.categories[0].id === markType){
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} markType={markType} lng={ev.geometries[0].coordinates[0]}
            onClick={()=>{setLocationInfo({id: ev.id, title: ev.title})}}
            />
        }
        return null
    })
    return (
        <div className="map">


            <GoogleMapReact
            // Your API Goes here
            bootstrapURLKeys={{key:''}}
            defaultCenter={center}
            defaultZoom={zoom}>
                {markers}
                </GoogleMapReact>         
                {locationInfo && <LocationInfoBox info={locationInfo} someClick={()=> setLocationInfo(null)} />} 
                
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 23.0225,
        lng: 72.5714
    },
    zoom:6
}

export default Map
