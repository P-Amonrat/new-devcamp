import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css';
import './profile.css';

const Profile = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let name = location.state;
    const [cart, setCart] = useState([]);

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    useEffect(() => {
       let token = localStorage.getItem('token');
        if (token) {
            axios
                .get('/api/profile/mycart', {
                    headers: {
                        Authorization: `Bearer ${token}`, // JWT in Authorization header
                    },
                })
                .then((res) => {
                    setCart(res.data);
                })
                .catch((err) => {
                    if (err.response.status === 401) {
                        // token expired - remove and redirect to login
                        localStorage.removeItem('token');
                        navigate('/login');
                    }
                });
        } else {
            navigate('/login');
            alert("Please Login !!")
        }
    }, []);

    return (
        <div className='block'>
            <div className='cart'>
                <h2 className='profile'>My profile page</h2>
                <h3>My shopping cart items</h3>
                <ul>{cart && cart.map((c) =>
                    <li>{c.item}</li>)}
                </ul>
                <button className='btn' onClick={logout}>Logout</button>
            </div>
            <div>
                <h3 className='hello'>Hello {name} !!</h3>
            </div>

        </div>
    );
}

export default Profile;
