import React from 'react'
import CardItems from '../CardItems'
import'../../App.css'

export default function Articles() {
    return(
    <div className='cards'>
        <h1>Recent Articles</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItems
                src='images/img-9.jpg'
                text="Hiker goes missing 5 days and counting"
                label="Mystery"
                path='/aricles'
                />
                <CardItems
                src='images/img-2.jpg'
                text="Spring breaker's vacation takes a turn for the worst as they drift out as sea"
                label="Missing"
                path='/aricles'
                />
            </ul>
            <ul className="cards__items">
                <CardItems
                src='images/img-3.jpg'
                text="Pirates seize control of a local fishing boat"
                label="Hostage"
                path='/aricles'
                />
                <CardItems
                src='images/img-4.jpg'
                text="Millionare Athlete shocks the world with a private tennis island"
                label="individual"
                path='/aricles'
                />
                <CardItems
                src='images/img-5.jpg'
                text="Reports of shots fired at the continental says eye witness"
                label="Shooting"
                path='/aricles'
                />
                <CardItems
                src='images/img-6.jpg'
                text="Record breaking rainfall drenches the city folk in New Jersy. Should you be worried?"
                label="Weather"
                path='/aricles'
                />

            </ul>
            </div>  
        </div>
    

    </div>
    )
}