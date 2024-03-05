import React from 'react'
import NavBar from './NavBar'
import Travel from './Travel.js'
import Items from './Items.js'


export default function Main()
{
    const array=Items.map(item=>{
        return (
        
        <Travel
        {...item}
        />)
    })
    return (
        <div>
            <NavBar/>
             {array}
        </div>
    )
}