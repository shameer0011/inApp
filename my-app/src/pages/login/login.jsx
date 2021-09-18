import LoginForm from '../../components/login/login';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
const LoginPage = () => {
    const [datas, setDatas] = useState('')
    const history = useHistory();
    let dat = JSON.parse(localStorage.getItem('user'));
    const [userError, setUserError] = useState(null)

    const onSubmits = (data) => {
        if (dat) {

            if (dat.username === data.name && dat.password === data.password) {
                history.push('/')
            }
        }
        else {
            setUserError("Invalid User");
        }
    }

    useEffect(() => {
        setDatas(localStorage.getItem('user'));
    }, [])

    return (
        <div>
            <LoginForm onSubmits={ onSubmits } userError={ userError } />
        </div>
    )
}
export default LoginPage;