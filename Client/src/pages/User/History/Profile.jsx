import { useState, useEffect } from 'react';
import Welcome from './Welcome';
import { userService } from '~/services';

const Profile = (props) => {
    const user = JSON.parse(localStorage.getItem('customerInfo'));
    const { address } = user;
    const phoneNumber = user.phone.toString();
    const [checkGender, setCheckGender] = useState(-1);
    const [edit, setEdit] = useState(false);
    const stringAddress = `${address.homeAdd}, ${address.ward}, ${address.district}, ${address.city}`;

    const [userName, setUserName] = useState(user.username);
    const dataPost = {
        id: user.id,
        username: userName,
    };

    const choiceGender = [
        {
            id: 1,
            content: 'Anh',
        },
        {
            id: 2,
            content: 'Chị',
        },
    ];

    const handleClickGender = (id) => {
        setCheckGender(id);
    };
    const handleSubmitInfo = (e) => {
        e.preventDefault();
    };
    return (
        <div className="text-gray-800">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-4xl">Thông tin cá nhân</h3>
                <button className="text-yellow-300" onClick={(e) => setEdit((old) => !old)}>
                    {edit ? 'Hủy' : 'Sửa'}
                </button>
            </div>

            <form onSubmit={(e) => handleSubmitInfo(e)}>
                <div className="w-full flex gap-3 items-center">
                    {choiceGender.map((item, index) => (
                        <div key={index}>
                            <input
                                className="p-2"
                                checked={checkGender === item.id}
                                type="radio"
                                onClick={() => handleClickGender(item.id)}
                            ></input>
                            <label className="ml-2">{item.content}</label>
                        </div>
                    ))}
                </div>

                <div className="my-4">
                    <input
                        type="text"
                        name="username"
                        value={userName}
                        className="text-2xl py-4 rounded-xl mr-8 border-gray-200"
                        disabled={!edit}
                        id="username"
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                        required
                    />
                    <input
                        type="tel"
                        name="id"
                        className="text-2xl py-4 rounded-xl border-gray-200"
                        value={phoneNumber}
                        disabled={!edit}
                        id="tel"
                        required
                    />
                </div>
                <h3 className="font-semibold text-4xl">Địa chỉ nhận hàng</h3>
                <input
                    type="text"
                    className="text-2xl py-4 rounded-xl mr-8 border-gray-200"
                    value={stringAddress}
                    style={{ width: '34%' }}
                    disabled={!edit}
                    required
                ></input>
                {edit && (
                    <button type="submit" disabled={!edit} className="cursor-pointer text-white px-7 py-3 bg-blue-400 rounded-md">
                        CẬP NHẬT
                    </button>
                )}
            </form>
        </div>
    );
};
export default Profile;
