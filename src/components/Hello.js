import React from 'react'

const Hello = () => {
    // With JSX Example

    // return (
    //     <h1>Hello Bhautik</h1>
    // )

    // without JSX Example
    return React.createElement('div', null, React.createElement('h1', null, "Bhautik"))
}

export default Hello;