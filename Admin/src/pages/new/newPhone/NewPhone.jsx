import "../new.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import { productInputs, phoneProduct, watchProduct, smartWatchProduct, laptopProduct, typeAccessory } from "../../../formSource";
import { renderMatches, useParams } from "react-router-dom";
import { ProductService } from '~/services'
import productService from "../../../services/product.service";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from 'firebase/storage';
import { storage } from '../../../utils/firebase';
import { v4 } from 'uuid';
const NewPhone = ({ inputs, title }) => {
    const param = useParams()
    const [file, setFile] = useState(null)
    const [arrFile, setArrFile] = useState([])
    const [type, setType] = useState(0)
    const [typeA,setTypeA] = useState(0)
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    const imagesListRef = ref(storage, 'images/');
    // const uploadFile = () => {
    //     if (imageUpload == null) return;
    //     const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    //     uploadBytes(imageRef, imageUpload).then((snapshot) => {
    //         getDownloadURL(snapshot.ref).then((url) => {
    //             setImageUrls((prev) => [...prev, url]);
    //         });
    //     });
    // };
    useEffect(() => {
        listAll(imagesListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    // let curentArr = imageUrls.filter(item => item === url)
                    setImageUrls(url);
                });
            });
        });
    }, []);
    const handleChangeSlug =(titleP, value)=>{
        if(titleP === 'title'){
            document.getElementById('slug').value=parseStringToSlug(value)
        }
    }
    const parseStringToSlug = (string) => {
        return string.toLowerCase().split(' ').join('-')
    }
    const generateString = (length) => {
        const characters = '0123456789';
        let result = ' ';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return parseInt(result);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (file == null) return;
        const imageRef = ref(storage, `images/${file.name + v4()}`);
        uploadBytes(imageRef, file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls((prev) => [...prev, url]);
            });
        });
        const title = document.getElementById('title').value
        const price = document.getElementById('price').value
        const brand = document.getElementById('brand').value
        const discount = document.getElementById('discount').value
        const colors = document.getElementById('colors').value
        const info = document.getElementById('info').value
        const slug = document.getElementById('slug').value
        let dataPhone = {
            
        }
        let parameter = {

        }
        if (type === 1) {
            const screen = document.getElementById('screen').value
            const os = document.getElementById('os').value
            const cameraBehind = document.getElementById('cameraBehind').value
            const cameraBefore = document.getElementById('cameraBefore').value
            const chip = document.getElementById('chip').value
            const sim = document.getElementById('sim').value
            const pin = document.getElementById('pin').value
            const ram = document.getElementById('ram').value
            const rom = document.getElementById('rom').value
            parameter = {
                'SCREEN': screen,
                "H??? ??i???u h??nh": os,
                "Camera sau": cameraBehind,
                "Camera tr?????c": cameraBefore,
                "Chip": chip,
                "RAM": [
                    ram
                ],
                "ROM": rom,
                "SIM": sim,
                "Pin, S???c": pin
            }
            dataPhone = {
                "id": generateString(4),
                "img": imageUrls,
                "title": title,
                "price": parseInt(price),
                "url": "/dtdd/"+slug,
                "slug": slug,
                "promotion": "Tr??? g??p 0%",
                "discount": parseInt(discount),
                "tag": "??u ????i sinh nh???t",
                "gift": "",
                "star": 0,
                "totalVote": 0,
                "brand": brand,
                "category": inputs[type - 1].type,
                "brandId": 1,
                "cateId": 1,
                "baohanh": "18T",
                "new": true,
                "location": "T???nh Long Xuy??n",
                "gallery": [
                    "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/2-1020x570.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/2-1020x570.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/3-1020x570.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/SamsungGalaxyM53-1020x570.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/5-1020x570.jpg",
                    "https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/bg_csmh_tgdd-min.png?v=11"
                ],
                "colors": [
                    colors
                ],
                "RAM": [
                    ram
                ],
                "ROM": rom,
                "parameter": {
                    ...parameter
                },
                "info": info
            }
            
        } else if (type === 2) {
            const screen = document.getElementById('screen').value
            const os = document.getElementById('os').value
            const chip = document.getElementById('chip').value
            const pin = document.getElementById('pin').value
            const graphicCard = document.getElementById('graphicCard').value
            const design = document.getElementById('design').value
            const portConect = document.getElementById('portConect').value
            const ram = document.getElementById('ram').value
            const rom = document.getElementById('rom').value
            parameter = {
                
                'SCREEN': screen,
                "H??? ??i???u h??nh": os,
                "Card m??n h??nh": graphicCard,
                "Thi???t k???": design,
                "Chip": chip,
                "RAM": [
                    ram
                ],
                "ROM": rom,
                "Pin, S???c": pin,
                "C???ng k???t n???i": portConect
            }
            dataPhone = {
                "id": generateString(4),
                "img": imageUrls,
                "title": title,
                "price": parseInt(price),
                "url": "/dtdd/"+slug,
                "slug": slug,
                "promotion": "Tr??? g??p 0%",
                "discount": parseFloat(discount),
                "tag": "??u ????i sinh nh???t",
                "gift": "",
                "star": 0,
                "totalVote": 0,
                "brand": brand,
                "category": inputs[type - 1].type,
                "brandId": 1,
                "cateId": 1,
                "baohanh": "18T",
                "new": true,
                "location": "T???nh Long Xuy??n",
                "gallery": [
                    "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/2-1020x570.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/2-1020x570.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/3-1020x570.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/SamsungGalaxyM53-1020x570.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/5-1020x570.jpg",
                    "https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/bg_csmh_tgdd-min.png?v=11"
                ],
                "colors": [
                    colors
                ],
                "RAM": [
                    ram
                ],
                "ROM": rom,
                "parameter": {
                    ...parameter
                },
                "info": info
            }
        } else if (type === 3) {
            dataPhone = {
                "id": generateString(4),
                "img": imageUrls,
                "title": title,
                "price": parseInt(price),
                "url": "/dtdd/"+slug,
                "slug": slug,
                "promotion": "Tr??? g??p 0%",
                "discount": parseFloat(discount),
                "tag": "??u ????i sinh nh???t",
                "gift": "",
                "star": 0,
                "totalVote": 0,
                "brand": brand,
                "category": inputs[type - 1].type,
                "gallery": [
                    "https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/bg_csmh_tgdd-min.png?v=11"
                ],
                "nameType": typeAccessory[typeA - 1].title,
                "info": info
            }
        } else if (type === 4) {
            const sex = document.getElementById('sex').value
            const diameter = document.getElementById('diameter').value
            const typeFaceWatch = document.getElementById('typeFaceWatch').value
            const material = document.getElementById('material').value
            const batery = document.getElementById('batery').value
            const waterProof = document.getElementById('waterProof').value
            parameter = {
                'Gi???i t??nh': sex,
                "???????ng k??nh m???t": diameter,
                "Lo???i m???t ?????ng h???": typeFaceWatch,
                "Ch???t li???u d??y": material,
                "B??? m??y": batery,
                "Ch???ng n?????c": waterProof,
            }
            dataPhone = {
                "id": generateString(4),
                "img": imageUrls,
                "title": title,
                "price": parseInt(price),
                "url": "/dtdd/"+slug,
                "slug": slug,
                "promotion": "Tr??? g??p 0%",
                "discount":  parseFloat(discount),
                "tag": "??u ????i sinh nh???t",
                "gift": "",
                "star": 0,
                "totalVote": 0,
                "brand": brand,
                "category": inputs[type - 1].type,
                "brandId": 1,
                "cateId": 1,
                "baohanh": "18T",
                "new": true,
                "location": "T???nh Long Xuy??n",
                "gallery": [
                    "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/2-1020x570.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/2-1020x570.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/3-1020x570.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/SamsungGalaxyM53-1020x570.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/5-1020x570.jpg",
                    "https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/bg_csmh_tgdd-min.png?v=11"
                ],
                "colors": [
                    colors
                ],
                "parameter": {
                    ...parameter
                },
                "info": info
            }
        }else if (type === 5) {
            const sex = document.getElementById('sex').value
            const face = document.getElementById('face').value
            const conectOS = document.getElementById('conectOS').value
            const battery = document.getElementById('battery').value
            const healcare = document.getElementById('healcare').value
            parameter = {
                'Gi???i t??nh': sex,
                "M???t": face,
                "K???t n???i h??? ??i???u h??nh": conectOS,
                "Th???i l?????ng pin": battery,
                "T??nh n??ng cho s???c kh???e": healcare,
            }
            dataPhone = {
                "id": generateString(4),
                "img": imageUrls,
                "title": title,
                "price": parseInt(price),
                "url": "/dtdd/"+slug,
                "slug": slug,
                "promotion": "Tr??? g??p 0%",
                "discount":  parseFloat(discount),
                "tag": "??u ????i sinh nh???t",
                "gift": "",
                "star": 0,
                "totalVote": 0,
                "brand": brand,
                "category": inputs[type - 1].type,
                "brandId": 1,
                "cateId": 1,
                "baohanh": "18T",
                "new": true,
                "location": "T???nh Long Xuy??n",
                "gallery": [
                    "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/2-1020x570.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/2-1020x570.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/3-1020x570.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/SamsungGalaxyM53-1020x570.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/5-1020x570.jpg",
                    "https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/bg_csmh_tgdd-min.png?v=11"
                ],
                "colors": [
                    colors
                ],
                "parameter": {
                    ...parameter
                },
                "info": info
            }
        }

       

        async function postData(url = '', data = {}) {
            // Default options are marked with *
            const response = await fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
            return response.json(); // parses JSON response into native JavaScript objects
        }

        postData('https://jsonserv.glitch.me/products', dataPhone)
            .then((data) => {
                console.log(data); // JSON data parsed by `data.json()` call
            });
    }
    return (
        <div className="new">
            <div className="newContainer">
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        />

                    </div>
                    <div className="right">
                        <form onSubmit={handleSubmit}>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => { setFile(e.target.files[0]) }}
                                    style={{ display: "none" }}
                                />
                            </div>

                            {<div className="formContainer">

                                {(productInputs.map((input) => (
                                    <div className="formInput" key={input.id}>
                                        <label>{input.label}</label>
                                        <input type={input.type} placeholder={input.placeholder} id={input.title} onChange={(e)=>handleChangeSlug(input.title, e.target.value)} />
                                    </div>
                                )))}
                                <div className="formInput">
                                    <label htmlFor="file1">
                                        Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                    </label>
                                    <input
                                        type="file"
                                        id="file1"
                                        onChange={(e) => { setArrFile([...arrFile, e.target.files[0]]) }}
                                        style={{ display: "none" }}
                                    />
                                </div>
                                <div className="imgcontent" >
                                    {arrFile.map(img => (
                                        <img
                                            src={
                                                URL.createObjectURL(img)}
                                            alt=""
                                        />
                                    ))}


                                </div>
                                <div style={{
                                    display: 'flex',
                                    width: '100%'
                                }}>
                                    <select className="formInput">
                                        <option onClick={() => setType(0)}>Ch???n lo???i s???n ph???m</option>
                                        {inputs.map((type) => (
                                            <option value={type.id} onClick={() => setType(type.id)}>{type.label}</option>
                                        ))}
                                    </select>
                                </div>
                                {(type === 1) && <>
                                    <select className="formInput" id='ram'>
                                        <option >Ch???n lo???i RAM</option>
                                        <option>4 GB</option>
                                        <option>6 GB</option>
                                        <option>8 GB</option>
                                        <option>12 GB</option>
                                        <option>16 GB</option>
                                    </select>
                                    <select className="formInput" id='rom'>
                                        <option >B??? nh??? trong</option>
                                        <option >32 GB</option>
                                        <option >64 GB</option>
                                        <option >128 GB</option>
                                        <option >256 GB</option>
                                        <option >512 GB</option>
                                        <option >1 TB</option>
                                    </select>
                                    {phoneProduct.map(input => (
                                        <div className="formInput" key={input.id}>
                                            <label>{input.label}</label>
                                            <input type={input.type} placeholder={input.placeholder} id={input.title} />
                                        </div>
                                    ))}
                                </>
                                }
                                {(type === 2) && <>
                                    <select className="formInput" id='ram'>
                                        <option >Ch???n lo???i RAM</option>
                                        <option>4 GB</option>
                                        <option>6 GB</option>
                                        <option>8 GB</option>
                                        <option>12 GB</option>
                                        <option>16 GB</option>
                                    </select>
                                    <select className="formInput" id='rom'>
                                        <option >B??? nh??? trong</option>
                                        <option >32 GB</option>
                                        <option >64 GB</option>
                                        <option >128 GB</option>
                                        <option >256 GB</option>
                                        <option >512 GB</option>
                                        <option >1 TB</option>
                                    </select>
                                    {laptopProduct.map(input => (
                                        <div className="formInput" key={input.id}>
                                            <label>{input.label}</label>
                                            <input type={input.type} placeholder={input.placeholder} id={input.title} />
                                        </div>
                                    ))}
                                </>
                                }
                                {(type === 3) && <>
                                    <select className="formInput">
                                        <option onClick={() => setTypeA(0)}>Ch???n lo???i ph??? ki???n</option>
                                        {typeAccessory.map((type) => (
                                            <option value={type.id} onClick={() => setTypeA(type.id)}>{type.label}</option>
                                        ))}
                                    </select>
                                </>
                                }
                                {type === 4 && <>
                                    {watchProduct.map(input => (
                                        <div className="formInput" key={input.id}>
                                            <label>{input.label}</label>
                                            <input type={input.type} placeholder={input.placeholder} id={input.title} />
                                        </div>
                                    ))}
                                </>
                                }
                                {type === 5 && <>
                                    {smartWatchProduct.map(input => (
                                        <div className="formInput" key={input.id}>
                                            <label>{input.label}</label>
                                            <input type={input.type} placeholder={input.placeholder} id={input.title} />
                                        </div>
                                    ))}
                                </>
                                }
                            </div>
                            }

                            <button >Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default NewPhone;
