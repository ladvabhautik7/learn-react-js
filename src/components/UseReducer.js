import React, { useReducer, useState } from 'react'

const initialState = 0;

// const reducer = (state, action) => {
//     switch (action.type) {
//         case "INCREMENT":
//             return state + 1;
//         case "DECREMENT":
//             return state - 1;
//         default:
//             break;
//     }
// }

const UseReducer = () => {

    // const [state, dispatch] = useReducer(reducer, initialFormState);

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        age: ""
    };

    const [formValues, setFormValues] = useReducer(
        (curVals, newVals) => ({ ...curVals, ...newVals }), initialValues
    );
    console.log("formValues..", formValues);

    const { firstName, lastName, email, age } = formValues;

    const handleFormChanges = (event) => {
        // console.log(event.target.value);
        const { name, value } = event.target;
        setFormValues({ [name]: value })
    }

    return (
        <>
            {/* <h1>{state}</h1> */}
            {/* <div>
                <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
            </div>
            <div>
                <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
            </div> */}

            <input type="text" name='firstName' placeholder='name' value={firstName} onChange={handleFormChanges} />
            <input type="text" name='lastName' placeholder='lastname' value={lastName} onChange={handleFormChanges} />
            <input type="email" name='email' placeholder='email' value={email} onChange={handleFormChanges} />
            <input type="number" name='age' placeholder='age' value={age} onChange={handleFormChanges} />
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