import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Autrhantication = () => {
    const [nav, setNav] = useState('login');
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [password, setPassword] = useState(null);
    const [msg, setMsg] = useState(null)

    useEffect(() => {
        setMsg(null);
    }, [username, phone, email, password, nav]);

    const handleRegister = () => {
        const data = {
            username,
            email,
            phone,
            password
        }
        setMsg(null);
        axios.post(`/users/register`, data).then((res) => {
            console.log('done');
            localStorage.setItem("token", res.data.accessToken)
            window.location.reload();
        }).catch(() => {
            // setMsg('The Email or Password is incorrect');
            setMsg('The information entered is incorrect');
        })
    }
    return (
        <div>
            <div className="modal fade" id="authModal" tabindex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="authModalLabel">Authantication</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mt-2 auth">
                                <ul className="auth__nav">
                                    <li onClick={() => setNav('login')} className="nav-item text-center">
                                        <a className={`nav-link btl ${nav == 'login' && 'active'}`}>Login</a>
                                    </li>
                                    <li onClick={() => setNav('signup')} className="nav-item text-center">
                                        <a className={`nav-link btl ${nav == 'signup' && 'active'}`}>Signup</a>
                                    </li>
                                </ul>
                                {nav == 'login' ?
                                    <div className="tab-pane">
                                        <div className="form px-4 pt-3">
                                            <input type="text" className="form-control p-2 my-3" placeholder="Email or Phone" />
                                            <input type="text" className="form-control p-2 my-3" placeholder="Password" />
                                            <button className="btn">Login</button>
                                        </div>
                                    </div>
                                    :
                                    <div className="tab-pane">
                                        <div className="form px-4 pt-3">
                                            {msg &&
                                                <h5 className='text-danger h6 text-center mx-auto'>{msg}</h5>
                                            }
                                            <input type="text" onChange={(e) => setUsername(e.target.value)} className="form-control p-2 my-3" placeholder="User Name" />
                                            <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control p-2 my-3" placeholder="Email" />
                                            <input type="text" onChange={(e) => setPhone(e.target.value)} className="form-control p-2 my-3" placeholder="Phone" />
                                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control p-2 my-3" placeholder="Password" />
                                            <button className="btn" onClick={() => handleRegister()}>Sign Up</button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Autrhantication;