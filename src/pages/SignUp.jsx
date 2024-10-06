/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignUp() {

    // Variables //
    // URL For The API Database // https://66f16df8415379191550df7c.mockapi.io/users
    const url               = "https://66f16df8415379191550df7c.mockapi.io/users/";

    // UserName //
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get(url)
        .then(function (response) {
            // Handle Success
           setUser(response.data.items);
           {user}
        })
        .catch(function (error) {
            // Handle Error //
            console.log(error);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const signUp = () => {

        if (username.length > 5 && password.length > 7) {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    name: username,
                    username: username,
                    email: username,
                    password: password,
                    points: 0,
                    comment: ""
                }),
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((_json) => {
                alert("تم تسجيلك")
                    // Go To Sign In Page //
                    window.location.href = "/signIn";
        })
        
    } }
    // ------------------------------------------------------------------------------------------------------------------------------------------- //




    return (
        <>
            <div className=" p-3 min-h-screen w-screen flex flex-row justify-center items-center bg-red-400" dir="rtl">
                <div className="p-4 my-3 w-full md:w-1/2 ">

                    
                    <h1 className="text-center mb-4 text-5xl text-white font-bold">تسجيل جديد</h1>


                    <div className="mb-3">
                        <label htmlFor="nameEmail" className="form-label text-4xl text-white font-bold">اسم المستخدم</label>
                        <input type="text" id="nameEmail" className="form-control mb-1 text-3xl" dir="auto" onChange={(e) => { setUsername(e.target.value)}} required pattern="[A-Za-z]{6,}" placeholder="أكثر من 5 أحرف" />
                        <div id="checkUserLo" className="p-1 check text-center"><h6 id="checkPragLo" className="text-2xl font-bold text-light m-0"></h6></div>
                    </div>


                    <div className="mb-4">
                        <label className="form-label text-4xl text-white font-bold" htmlFor="password">كلمة المرور</label>
                        <input className="form-control mb-1 text-2xl" type="password" dir="auto" onChange={(e) => { setPassword(e.target.value)}} required id="password"  pattern="[0-9]{8,}" placeholder="أكثر من 7 أرقام" />
                        <div id="checkPassLo" className="p-1 check text-center"><h6 id="checkPragPassLo" className="text-2xl font-bold text-light m-0"></h6></div>
                    </div>


                    <button id="logBtn" type="submit" className="btn form-control text-3xl font-bold mb-3" onClick={signUp}>تسجيل</button>


                    <span className="text-3xl font-bold text-white"> لديك حساب ؟ <Link to={"/signIn"} className="text-xl text-decoration-underline">سجل دخولك الآن</Link></span>
                </div>
            </div>
        </>
    )
}