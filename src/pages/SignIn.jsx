import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignIn() {

    // Variables //
    // URL For The API Database //
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

    const signIn = () => {
        console.log(username)
        console.log(password)

        
    }
    // ------------------------------------------------------------------------------------------------------------------------------------------- //

    // Click On Button Form //
    // uLogBtn.addEventListener("click", (e) => {
    //     e.preventDefault();

    //     // Variable For User //
    //     let findUser    = [];

    //     // Get Fetch To Test Data That Exist In Database //
    //     fetch(url)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         data.find((item) => {
    //             if (typeof(uUsernameEmail.value) === 'string' && uUsernameEmail.value == item.username ||
    //                 typeof(uUsernameEmail.value) === 'string' && uUsernameEmail.value == item.email) {
    //                     findUser.push(item);
    //             };
    //         });
                
    //         // Test Data Come From The Form //
    //         if (findUser.length != 0) {
    //             // Finduser Variable != 0 //
    //             if (typeof(uUsernameEmail.value) === 'string' && uUsernameEmail.value == findUser[0].username ||
    //                 typeof(uUsernameEmail.value) === 'string' && uUsernameEmail.value == findUser[0].email) {
    //                 // True Username Or Email //
    //                 if (typeof(uPassword.value) === 'string' && uPassword.value == findUser[0].password) {
    //                     // True Password //
    //                     // sessionStorage //
    //                     sessionStorage.setItem("idForUser", findUser[0].id);
    //                     sessionStorage.setItem("nameForUser", findUser[0].name);
    //                     sessionStorage.setItem("usernameForUser", findUser[0].username);
    //                     sessionStorage.setItem("emailForUser", findUser[0].email);
    //                     sessionStorage.setItem("passForUser", findUser[0].password);
    //                     sessionStorage.setItem("PointsForUser", findUser[0].points);
                        
    //                     // Go To Home Page //
    //                     window.location.to { "index.html";
    //                 } else {
    //                     // False Password //
    //                     checkPassDiv.style.display      = "block";
    //                     pragPass.textContent            = "كلمة المرور غير صحيحة";

    //                     setTimeout(() => {
    //                         checkPassDiv.style.display  = "none";
    //                     }, 3000);
    //                 };
    //             } else {
    //                 // False Username Or Email //
    //                 chechUserEmailDiv.style.display     = "block";
    //                 pragUserEmail.textContent           = "اسم المستخدم أو البريد الإلكتروني غير صحيح";
                    
    //                 setTimeout(() => {
    //                     chechUserEmailDiv.style.display = "none";
    //                 }, 3000);
    //             };
    //         } else {
    //             // False Username Or Email //
    //             chechUserEmailDiv.style.display     = "block";
    //             pragUserEmail.textContent           = "اسم المستخدم أو البريد الإلكتروني غير صحيح";
                
    //             setTimeout(() => {
    //                 chechUserEmailDiv.style.display = "none";
    //             }, 3000);
    //         };
    //     });
    // });



    return (
        <>
            <form className=" p-3 min-h-screen w-screen flex flex-row justify-center items-center bg-red-400">
                <div className="p-4 my-3 w-full md:w-1/2 ">

                    
                    <h1 className="text-center mb-4 text-5xl text-white font-bold">تسجيل الدخول</h1>


                    <div className="mb-3">
                        <label htmlFor="nameEmail" className="form-label text-4xl text-white font-bold">اسم المستخدم</label>
                        <input type="text" id="nameEmail" className="form-control mb-1 text-3xl" dir="auto" onChange={(e) => { setUsername(e.target.value)}} required />
                        <div id="checkUserLo" className="p-1 check text-center"><h6 id="checkPragLo" className="text-2xl font-bold text-light m-0"></h6></div>
                    </div>


                    <div className="mb-3">
                        <label className="form-label text-4xl text-white font-bold" htmlFor="password">كلمة المرور</label>
                        <input className="form-control mb-1 text-2xl" type="password" dir="auto" onChange={(e) => { setPassword(e.target.value)}} required id="password" />
                        <div id="checkPassLo" className="p-1 check text-center"><h6 id="checkPragPassLo" className="text-2xl font-bold text-light m-0"></h6></div>
                        <Link to={"forgetPass.jsx"} className="font-semibold text-xl text-white">نسيت كلمة المرور ؟</Link>
                    </div>


                    <button id="logBtn" type="submit" className="btn form-control text-3xl font-bold mb-3" onClick={signIn}>دخول</button>


                    <span className="text-3xl font-bold text-white">ليس لديك حساب ؟ <Link to={"/signUp"} className="text-xl text-decoration-underline">سجل الآن</Link></span>
                </div>
            </form>
        </>
    )
};