import React, { useState, useEffect } from 'react'
import Register from '../../components/register/register';
import { useHistory } from 'react-router-dom'

const RegisterPge = () => {
    const [loginData, setLoginData] = useState('')
    const history = useHistory();


    const onSubmits = (datas) => {
        console.log(datas, "in register")
        setLoginData(datas)
        localStorage.setItem('user', JSON.stringify(datas));
        history.push('/login')
    }
    return (
        <div>
            <Register onSubmits={ onSubmits } />
        </div>
    )
}
export default RegisterPge;
