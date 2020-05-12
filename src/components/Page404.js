import React from 'react'
import {Link} from "react-router-dom";

function Page404() {
    return (
        <div className="text-center my-5" >
            <h1>404 --- PAGE NOT FOUND</h1>
            <Link to='/' style={{color:'black'}}>
                Back to Homepage
            </Link>
        </div>
    )
}

export default Page404
