import React from "react";
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

import GoogleIcon from '../../assets/images/GoogleIcon.png';
// import { Auth } from "../../redux/Actions";

const GoogleAuth = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            console.log(tokenResponse);
            localStorage.setItem("authCode", tokenResponse.access_token);
            sessionStorage.setItem("isMySessionActive", true);
            const userInfo = await axios.get(
                'https://www.googleapis.com/oauth2/v3/userinfo',
                { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } },
            );

            console.log(userInfo)
            // dispatch(Auth("user/login", userInfo.data));
            navigate('/pages/dashboard');
        },
        onError: errorResponse => console.log(errorResponse),
    });

    return (
        <Button className="authButton" onClick={googleLogin}>
            Sign in with Google &nbsp;
            <img src={GoogleIcon} alt="google logo" width="20px" />
        </Button>
    );
}

export default GoogleAuth;