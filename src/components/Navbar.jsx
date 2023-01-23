import React from 'react'

export default function Navbar(props) {
    console.log(props)
    return (
        <nav className="navbar bg-body-tertiary">
            <div className='container-fluid'>
                <a className='navbar-brand' href='/'>Welcome {props.name}</a>
            </div>
        </nav>
    )
}
