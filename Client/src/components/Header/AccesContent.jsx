import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
function AccesContent() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://json.msang.repl.co/accessories')
            .then((response) => response.json())
            .then((data) => setItems(data));
    }, []);
    return (
        <div className="grid grid-cols-4 text-gray-800">
            {items.map((item, index) => {
                return (
                    <ul key={index} className={clsx(index === 0 && 'row-start-1 row-end-4', 'mx-4 my-2')}>
                        <li className="font-bold text-2xl border-b py-2 uppercase">{item.title}</li>
                        {item.contents.map((content, index) => {
                            return (
                                <li className="py-2 hover:text-blue-600" key={index}>
                                    <Link to="/">{content.title}</Link>
                                </li>
                            );
                        })}
                    </ul>
                );
            })}
        </div>
    );
}

export default AccesContent;
