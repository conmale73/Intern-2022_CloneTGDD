import { useState, useEffect } from 'react';
import firebase from 'firebase';
import { userService } from '~/services';
import { useNavigate } from 'react-router-dom';
const Welcome = () => {
    const user = JSON.parse(localStorage.getItem('customerInfo'));
    const navigate = useNavigate();

    const handleLogOut = () => {
        if (confirm('Bạn có muốn thoát không?')) {
            try {
                firebase
                    .auth()
                    .signOut()
                    .then(() => {
                        console.log('Log out success');
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                localStorage.removeItem('customerInfo');
                location.reload();
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className="flex justify-between my-4">
            <div>
                Chào &nbsp;
                <b id="profileName" className="">
                    {user?.sex} {user?.username} &nbsp;
                </b>
                <b id="profilePhoneNumber" className="">
                    - &nbsp; {user?.phone} &nbsp;
                </b>
            </div>

            <div className="">
                <span className="cursor-pointer text-yellow-300" onClick={(e) => handleLogOut(e)}>
                    Thoát tài khoản
                </span>
                <span>|</span>
                <span>
                    Phản hồi, góp ý
                    <img
                        className="inline-block"
                        src="https://www.thegioididong.com/lich-su-mua-hang/images/icon-mes.png"
                    ></img>
                </span>
            </div>
        </div>
    );
};
export default Welcome;
