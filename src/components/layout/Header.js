import React from 'react'
const headersStyle={
    background:'#333',
    color:'#fff',
     textAlign:'center'
}
export default function header() {
    return (
        <header style={headersStyle}>
            <h1>TodoList</h1>
        </header>
    )
}

