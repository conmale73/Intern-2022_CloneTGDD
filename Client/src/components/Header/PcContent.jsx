import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { data } from 'jquery';
function PcContent() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://json.msang.repl.co/pc')
            .then((response) => response.json())
            .then((data) => setItems(data));
    }, []);
    return (
        <div className="text-gray-800 w-80">
            {items.map((item, index) => {
                return (
                    <ul className="" key={index}>
                        <li className="font-bold text-2xl">{item.title}</li>
                        {item.contents.map((content, index) => {
                            return (
                                <li className="py-4 hover:text-blue-600 break-words" key={index}>
                                    <Link to={content.url}>{content.title}</Link>
                                </li>
                            );
                        })}
                    </ul>
                );
            })}
        </div>
    );
}

export default PcContent;
