import { useState } from 'react';
import { Apple, ChevronCompactDown, CaretUpFill } from 'react-bootstrap-icons';
function ItemSildeBar() {
    const [hide, setHide] = useState(false);
    return (
        <div className="flex flex-col mt-4 pt-3" onClick={() => setHide(!hide)}>
            <div className="flex justify-between items-center p-1">
                <div className="flex items-center">
                    <Apple className="text-3xl text-gray-800"></Apple>
                    <h3 className="ml-1">Apple</h3>
                </div>
                <ChevronCompactDown className="text-3xl "></ChevronCompactDown>
            </div>

            {hide && (
                <ul className="relative mt-3 pl-3 pr-3 border-2 border-solid border-gray-100 divide-y-1">
                    <CaretUpFill className="absolute -top-4 left-12 text-gray-200"></CaretUpFill>
                    <li className="text-2xl text-gray-700 mb-2 pt-2 pb-2">Khoi phuc-Reset</li>
                    <li className="text-2xl text-gray-700 mb-2 pt-2 pb-2">Thu thuat,meo- HUong dan su dung</li>
                </ul>
            )}
        </div>
    );
}

export default ItemSildeBar;
