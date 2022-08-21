import React from 'react'

import Card from '../../shared/UIElements/Card'
import PlaceItem from './PlaceItem'
import Button from '../../shared/components/FormElements/Button'

import './PlaceList.css'

const PlaceList = props => {
    if (props.items.length === 0) {
        return (
        <div className='place-list center'>
            <Card>
                <h2>No Places Found, Try creating one?</h2>
                <Button to='/places/new'>Add a new place</Button>
            </Card>
        </div>
        )
    }

    return <ul className='place-list'>
            {props.items.map(place => (
            <PlaceItem 
            key={place.id}
            id={place.id} 
            image={place.image} 
            title={place.title}
            description={place.description}
            address={place.address}
            creatorId={place.creator}
            coordinates={place.location}
            onDelete={props.onDeletePlace}
            />
            ))}
    </ul>
}

export default PlaceList