import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'
import locationIcon2 from '@iconify-icons/noto/volcano'
import locationIcon3 from '@iconify-icons/openmoji/iceberg'

const LocationMarker = ({ lat, lng, onClick, markType }) => {
    return (
        <div>

            <div className="location-marker" onClick={onClick}>
                {
                    markType == 8 ? <Icon icon={locationIcon} className="location-icon" /> :
                        markType == 12 ?
                            <Icon icon={locationIcon2} className="location-icon" /> :
                            <Icon icon={locationIcon3} className="location-icon" />

                }
            </div>
        </div>
    )
}

export default LocationMarker;