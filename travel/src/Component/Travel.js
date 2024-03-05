import React from 'react'

export default function Travel(props)
{console.log(props)
    return (
        <div className='component-tag'>

            <img className='image-tag' src={props.img} alt='' ></img>
            <div className='info-tag'>
                <div className='locate-tag'>
                <img className='location-tag'  src={props.locationImage} alt=''></img>
                <p className='country-name'>{props.country} </p>
                <a  href={props.map} >View on Google Maps</a>
                </div>
                <div className='name-tag'><h2>{props.name}</h2></div>
                <div className='paragraph-tag'>
                    <p className='information-tag'>{props.paragraph}</p>
                </div>
            </div>
        </div>
    )
}