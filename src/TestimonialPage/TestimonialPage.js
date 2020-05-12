import React from 'react'
import {testimonialData} from '../data'
import TestimonialCard from './TestimonialCard'
import { CardGroup } from 'react-bootstrap';




let testimonialCardData = testimonialData.cards.map( item =>
                                                            <TestimonialCard
                                                                    key={item.id}
                                                                    {...item}
                                                            />
)

function TestimonialPage() {
    return (
        <div>
            <div className="text-center my-5 py-5">
                <h1> {testimonialData.title} </h1>
                <p> {testimonialData.subTitle} </p>
            </div>

            <CardGroup className='container'>
            {testimonialCardData}
            </CardGroup>
        </div>
    )
}

export default TestimonialPage
