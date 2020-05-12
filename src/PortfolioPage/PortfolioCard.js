import React from 'react'
import {Card} from 'react-bootstrap'
import Bounce from 'react-reveal/Bounce'

function PortfolioCard({image, title, subTitle}) {

    return (
        <Bounce bottom>
            <div style={{width:'33%' , height:'420px', borderRadius:'20px'}}>
                <div className="m-3">
                    <Card>
                        <Card.Img src={image} />
                    </Card>
                    <h6 style={{teatAlign:'center', fontWeight:'bold', margin:'15px 0 0 0'}}> {title} </h6>
                    <p style={{teatAlign:'center', color:'grey', fontSize:'14px'}}> {subTitle} </p>
                </div>
            </div>

        </Bounce>
    )
}

export default PortfolioCard
