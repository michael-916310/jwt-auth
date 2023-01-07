import React, {useContext, useEffect} from 'react';
import LoginForm from "./components/LoginForm";
import {Context} from "./index";
import {observer} from "mobx-react-lite";

function App() {
    const {store} = useContext(Context);

    useEffect(()=>{
        if (localStorage.getItem('token')) {
            store.checkAuth();
        }
    },[]);

    if (store.isLoading) {
        return <div>Loading...</div>
    }

    if (!store.isAuth) {
        return (
            <LoginForm/>
        )
    }

    return (
        <div>
            <h1>{store.isAuth ? `User: ${store.user.email}` : `Not authorized`}</h1>
            <button onClick={()=>store.logout()}>Logout</button>
        </div>
    );
}

export default observer(App);
