import React, { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            break;
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <h1>{state}</h1>
            <div>
                <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
            </div>
            <div>
                <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
            </div>
        </>
    )
}

export default UseReducer;

// const useReducer = () => {
//     const [count, setCount] = useState(0);
//     return (
//         <>
//             <h1>{count}</h1>
//             <div>
//                 <button onClick={() => { setCount(count + 1) }}>INCREMENT</button>
//             </div>
//             <div>
//                 <button onClick={() => { setCount(count - 1) }}>DECREMENT</button>
//             </div>
//         </>
//     )
// }

// export default useReducer