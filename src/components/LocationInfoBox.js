import React from 'react'
import cross from '@iconify/icons-mdi/close'
import { Icon } from '@iconify/react'

const LocationInfoBox = ({ info, someClick }) => {
    return (
        <div className="location-info">
            <div className="cancel-container" onClick={()=>{someClick()}}>
                <Icon icon={cross} />
            </div>
            <h2>Event Location Info</h2>
            <ul>
                <li>ID: <strong>{info.id}</strong></li>
                <li>TITLE: <strong>{info.title}</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox