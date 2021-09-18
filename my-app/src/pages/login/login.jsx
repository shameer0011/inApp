import LoginForm from '../../components/login/login';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
const LoginPage = () => {
    const [datas, setDatas] = useState('')
    const history = useHistory();
    let dat = JSON.parse(localStorage.getItem('user'));

    const onSubmits = (data) => {
        console.log(data, "login data");
        console.log(dat, "localStorage value")
        if (dat.username === data.name && dat.password === data.password) {
            history.push('/')
        }
    }
    useEffect(() => {
        setDatas(localStorage.getItem('user'));
    }, [])
    return (
        <div>
            <LoginForm onSubmits={ onSubmits } />
        </div>
    )
}
export default LoginPage;
