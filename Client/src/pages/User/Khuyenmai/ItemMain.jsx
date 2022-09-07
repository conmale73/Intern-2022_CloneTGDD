import Slick from '~/components/Slick';
import ProductCard from '~/components/ProductCard';
import { useCallback, useEffect, useState } from 'react';
import ItemTopMain from './ItemTopMain';
import { productService } from '../../../services/product.service';
const choice = [
    {
        title: 'phone',
        contentChoice: '',
    },
    {
        title: 'laptop',
        contentChoice: '',
    },
];
const optionsFillter = [
    {
        id: 1,
        name: 'Nổi bật',
    },
    {
        id: 2,
        name: '% giảm nhiều',
    },
    {
        id: 3,
        name: 'Giá thấp đến cao',
    },
];

function ItemMain({ name, type, product, click, clicktatca }) {
    const [choiceSet, setChoiceSet] = useState([]);
    const [getindex, setGetindex] = useState(0);
    // const [choiceAll,setChoiceAll] = useState({
    //     itemPhone:false,
    //     itemLaptop:false
    // })
    const [choiceAll, setChoiceAll] = useState(true);

    let colorbg = 'bg-orange-400';
    let getContentChoice = {};
    const hanldeClickLi = (title, data, index) => {
        choice.forEach((item) => {
            if (item.title === title) {
                item.contentChoice = data.title;
            }
        });
        getContentChoice = choice.filter((item) => {
            return item.contentChoice === data.title;
        });

        setChoiceSet([...choice]);
        setChoiceAll(false);
        // const object2 = { title:title,contentChoice:item.title}
    };
    // let getPhone = product?.dienthoai
    // let getLaptop = product?.laptop;
    let getPhone = product;
    let getLaptop = product;

    const limitPhone = getPhone?.slice(0, 2);
    const limitLaptop = getLaptop?.slice(0, 2);
    const [checked, setChecked] = useState(1);
    const [sex, setSex] = useState('male');
    const [category, setCategory] = useState('');
    const [itemBrand, setItemBrand] = useState({
        title: 'tatca',
        Image: '',
    });
    const handleClickFillter = (id) => {
        setChecked(id);
    };
    if (checked === 3) {
        product = product.sort((a, b) => parseInt(a.price) - parseInt(b.price));
        // getLaptop = getLaptop.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    }
    if (checked === 1) {
        product = product?.sort((a, b) => -parseInt(a.totalVote) + parseInt(b.totalVote));
        // getLaptop = getLaptop?.sort((a, b) => -parseInt(a.totalVote) + parseInt(b.totalVote));
    }
    if (checked === 2) {
        product = product?.sort((a, b) => -a.discount + b.discount);
        // getLaptop = getLaptop?.sort((a, b) => parseInt(a.discount) - parseInt(b.discount));
        console.log(parseInt(getPhone[0].discount));
    }

    const handleClickBrand = (item = {}, category2, index, sex2) => {
        setGetindex(index);
        setSex(sex2 || sex);
        setItemBrand(item);
        setCategory(category2);
        click(category2, item, sex2);
    };

    return (
        <div name={name} className="max-w-[1200px] m-auto py-4 my-1 ">
            <div className="w-full px-[12px] pr-[17px] ">
                <img className="rounded-xl object-fill w-full max-h-[95px]" src={type?.img}></img>
            </div>
            <ul className=" flex justify-between gap-x-3 w-full h-[56px] my-4 px-4 py-2 pr-[17px]">
                {/* <li
                    key="-1"
                    className={
                        choiceAll
                            ? `rounded-lg justify-center  text-[16.6px]rounded-lg w-[65px] ${colorbg} flex items-center text-gray-700`
                            : 'flex items-center text-gray-700 justify-center text-[16.6px] rounded-lg w-[65px]'
                    }
                    onClick={() => {
                        setChoiceAll(true);
                        setGetindex(-1);
                        // clicktatca('tatca');
                        handleClickBrand({},type)
                    }}
                >
                    Tất cả
                </li> */}
                {type?.data.map((item, index) => (
                    <li
                        key={index}
                        className={
                            getindex === index
                                ? `w-[110px] h-auto ${colorbg} p-1 rounded-lg flex items-center justify-center`
                                : 'w-[110px] h-auto rounded-lg flex items-center justify-center'
                        }
                        onClick={() => {
                            handleClickBrand(item, type.category, index, sex);
                            setChoiceAll(false);
                        }}
                    >
                        <div className="w-[90px] h-[28px] flex items-center">
                            {item.Image ? (
                                <img className="w-full h-full rounded-xl" src={item.Image}></img>
                            ) : (
                                <div className="text-[16px]  text-center w-full">{item.content}</div>
                            )}
                            {/* <img className="w-full h-full rounded-xl" src={item.Image}></img> */}
                            {/* <span>{item.title}</span> */}
                        </div>
                    </li>
                ))}
            </ul>
            <div className="flex items-center px-5 mb-6 pr-[17px]">
                {optionsFillter.map((item) => (
                    <div>
                        <input type="radio" checked={checked === item.id} onClick={() => handleClickFillter(item.id)} />
                        <label className="mr-4 ml-2">{item.name}</label>
                    </div>
                ))}
            </div>
            {name === 'smartwatch' && (
                <div className="w-full flex items-center justify-start px-5 mb-6 pr-[17px] gap-x-4">
                    <span
                        key="male"
                        className={
                            sex === 'male'
                                ? `border-1 border-gray-800 rounded-full p-2 text-[16px] w-[80px] text-center`
                                : `border-1 border-gray-300 rounded-full p-2 text-[16px] w-[80px] text-center`
                        }
                        onClick={() => {
                            handleClickBrand(itemBrand, 'smartwatch', getindex, 'male');
                        }}
                    >
                        Nam
                    </span>
                    <span
                        key="female"
                        className={
                            sex === 'female'
                                ? `border-1 border-gray-800 rounded-full p-2 text-[16px] w-[80px] text-center`
                                : `border-1 border-gray-300 rounded-full p-2 text-[16px] w-[80px] text-center`
                        }
                        onClick={() => {
                            handleClickBrand(itemBrand, 'smartwatch', getindex, 'female');
                        }}
                    >
                        Nữ
                    </span>
                </div>
            )}
            {
                <ul className="px-[12px] pr-[17px] mb-5 flex gap-x-4">
                    {limitPhone?.map((item) => (
                        <ItemTopMain product={item}></ItemTopMain>
                    ))}
                </ul>
            }

            {
                <Slick className="">
                    {product?.map((item) => (
                        <ProductCard {...item}></ProductCard>
                    ))}
                </Slick>
            }
        </div>
    );
}

export default ItemMain;
