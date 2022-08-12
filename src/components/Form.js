import React, { useReducer } from 'react'
import formReducer from './formReducer'

const initialState = {
    userName: "",
    email: "",
    password: "",
}

const Form = () => {
    const [state, dispatch] = useReducer(formReducer, initialState);
    const handleTextChange = (e) => {
        dispatch({
            type: "HANDLE INPUT TEXT",
            field: e.target.name,
            payload: e.target.value
        })
        console.log("state...", state);
    }
    return (
        <div>
            <form>
                <label>
                    Username:
                    <input type="text" name="userName" value={state.userName} onChange={(e => handleTextChange(e))} />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" value={state.email} onChange={(e => handleTextChange(e))} />
                </label>
                <label>
                    Password:
                    <input type="text" name="password" value={state.password} onChange={(e => handleTextChange(e))} />
                </label>
            </form>
        </div>
    )
}

export default Form;