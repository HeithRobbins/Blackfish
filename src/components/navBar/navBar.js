import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

export default class NavigationComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="nav-wrapper">
                <div className="main-navbar">
                    <div className='nav-link-wrapper'>
                        <NavLink exact to='/' activeClassName='nav-link-active'>Home</NavLink>
                    </div>
                    <div className='nav-link-wrapper'>
                        <NavLink to='/typeOf' activeClassName='nav-link-active'>Type Of</NavLink>
                    </div>
                    <div className='nav-link-wrapper'>
                        <NavLink to='/Knowledge' activeClassName='nav-link-active'>Knowledge</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}