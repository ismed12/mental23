import React from 'react'
import { Button } from 'react-bootstrap'

import '../assets/styles/button.css'
import { Link } from 'react-router-dom'

export default function Button4(props) {
    return (
        <>
            <Link to={props.link}>
                <Button className='btn-4'>{props.textButton}</Button>{' '}
            </Link>
        </>
    )
}
