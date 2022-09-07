import "../new.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import { productInputs, typeProduct, userInputs, phoneProduct, laptopProduct, typeAccessory, watchProduct, smartWatchProduct } from "../../../formSource";
import { renderMatches, useParams } from "react-router-dom";
import { ProductService } from '~/services'

const EditProduct = ({ inputs, title }) => {
    const param = useParams()
    const [file, setFile] = useState('')
    const [arrFile, setArrFile] = useState([])
    const [type, setType] = useState(0)
    const [isLoading, setLoad] = useState(true);

    let dataPhone = {
        "id": 1,
        "title": "Samsung Galaxy M53",
        "price": "12490000",
        "url": "/dtdd/samsung-galaxy-m53",
        "slug": "samsung-galaxy-m53",
        "promotion": "Trả góp 0%",
        "discount": 0.2,
        "tag": "Ưu đãi sinh nhật",
        "gift": "",
        "star": 4.1,
        "totalVote": 23,
        "brand": "samsung",
        "category": "dienthoai",
        "brandId": 1,
        "cateId": 1,
        "baohanh": "18T",
        "new": true,
        "location": "Tỉnh Long Xuyên",
        "gallery": [
            "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/2-1020x570.jpg",
            "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/2-1020x570.jpg",
            "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/3-1020x570.jpg",
            "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/SamsungGalaxyM53-1020x570.jpg",
            "https://cdn.tgdd.vn/Products/Images/42/247364/Slider/5-1020x570.jpg",
            "https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/bg_csmh_tgdd-min.png?v=11"
        ],
        "colors": [
            "Nâu",
            "Xanh dương",
            "Xanh lá"
        ],
        "RAM": [
            "4 GB",
            "8 GB"
        ],
        "ROM": "128 GB",
        "nameType": "tainghe",
        "parameter": {
            "img": "https://cdn.tgdd.vn/Products/Images/42/247364/Kit/samsung-galaxy-m53-note.jpg",
            "SCREEN": "IPS LCD6.71 HD+",
            "Hệ điều hành": "Android 11",
            "Camera sau": "Chính 13 MP & Phụ 2 MP",
            "Camera trước": "5 MP",
            "Chip": "JLQ JR510 8 nhân",
            "RAM": [
                "4 GB",
                "8 GB"
            ],
            "ROM": "64 GB",
            "SIM": "2 Nano SIMHỗ trợ 4G",
            "Pin, Sạc": "6000 mAh18 W"
        },
        "info": "<h3>Điện thoại iPhone 13 Pro Max 128 GB - siêu phẩm được mong chờ nhất ở nửa cuối năm 2021 đến từ Apple. Máy có thiết kế không mấy đột phá khi so với người tiền nhiệm, bên trong đây vẫn là một sản phẩm có màn hình siêu đẹp, tần số quét được nâng cấp lên 120 Hz mượt mà, cảm biến camera có kích thước lớn hơn, cùng hiệu năng mạnh mẽ với sức mạnh đến từ Apple A15 Bionic, sẵn sàng cùng bạn chinh phục mọi thử thách.</h3><h3>Thiết kế đẳng cấp hàng đầu</h3><p>iPhone mới kế thừa thiết kế đặc trưng từ iPhone 12 Pro Max khi sở hữu khung viền vuông vức, mặt lưng kính cùng màn hình tai thỏ tràn viền nằm ở phía trước.</p>"
    }
    const [data, setData] = useState([dataPhone])

    useEffect(() => {
        ProductService.getProduct(param.productId)
            .then(res => {
                setData(res.data)
                document.getElementById('title').value = res.data[0]?.title
                document.getElementById('price').value = res.data[0]?.price
                document.getElementById('brand').value = res.data[0]?.brand
                document.getElementById('discount').value = res.data[0]?.discount
                document.getElementById('colors').value = res.data[0]?.colors
                document.getElementById('info').value = res.data[0]?.info
                document.getElementById('typeproduct').value = res.data[0]?.category
                document.getElementById('slug').value = res.data[0]?.slug
                
                if (res.data[0].category === 'dienthoai') {
                    document.getElementById('ram').value = res.data[0]?.RAM
                    document.getElementById('rom').value = res.data[0]?.ROM
                    document.getElementById('screen').value = res.data[0]?.parameter.SCREEN
                    document.getElementById('os').value = res.data[0]?.parameter["Hệ điều hành"]
                    document.getElementById('cameraBehind').value = res.data[0]?.parameter['Camera sau']
                    document.getElementById('cameraBefore').value = res.data[0]?.parameter['Camera trước']
                    document.getElementById('chip').value = res.data[0]?.parameter['Chip']
                    document.getElementById('sim').value = res.data[0]?.parameter['SIM']
                    document.getElementById('pin').value = res.data[0]?.parameter['Pin, Sạc']
                } else if (res.data[0].category === 'laptop') {
                    console.log(res.data[0]?.ROM);
                    document.getElementById('ram').value = res.data[0]?.RAM
                    document.getElementById('rom').value = res.data[0]?.ROM
                    document.getElementById('screen').value = res.data[0]?.parameter.SCREEN
                    document.getElementById('os').value = res.data[0]?.parameter["Hệ điều hành"]
                    document.getElementById('chip').value = res.data[0]?.parameter['Chip']
                    document.getElementById('pin').value = res.data[0]?.parameter['Pin, Sạc']
                    document.getElementById('graphicCard').value = res.data[0]?.parameter['Card màn hình']
                    document.getElementById('design').value = res.data[0]?.parameter['Thiết kế']
                    document.getElementById('portConect').value = res.data[0]?.parameter['Cổng kết nối']
                } else if (res.data[0].category === 'phukien') {
                    document.getElementById('typeA').value = res.data[0]?.nameType
                } else if (res.data[0].category === 'watch') {
                    document.getElementById('sex').value = res.data[0]?.parameter['Giới tính']
                    document.getElementById('diameter').value = res.data[0]?.parameter['Đường kính mặt']
                    document.getElementById('typeFaceWatch').value = res.data[0]?.parameter['Loại mặt đồng hồ']
                    document.getElementById('material').value = res.data[0]?.parameter['Chất liệu dây']
                    document.getElementById('batery').value = res.data[0]?.parameter['Bộ máy']
                    document.getElementById('waterProof').value = res.data[0]?.parameter['Chống nước']
                }
                else if (res.data[0].category === 'smartwatch') {
                    document.getElementById('sex').value = res.data[0]?.parameter['Giới tính']
                    document.getElementById('face').value = res.data[0]?.parameter['Mặt']
                    document.getElementById('conectOS').value = res.data[0]?.parameter['Kết nối hệ điều hành']
                    document.getElementById('battery').value = res.data[0]?.parameter['Thời lượng pin']
                    document.getElementById('healcare').value = res.data[0]?.parameter['Tính năng cho sức khỏe']
                }
                setArrFile(res.data[0].gallery)
            })
        function getProducts() {

        }
        setLoad(false)
        getProducts()
    }, [isLoading])

    const handleSubmit = (e) => {
        e.preventDefault()
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
        if (data[0].category === 'dienthoai') {
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
                "Hệ điều hành": os,
                "Camera sau": cameraBehind,
                "Camera trước": cameraBefore,
                "Chip": chip,
                "RAM": [
                    ram
                ],
                "ROM": rom,
                "SIM": sim,
                "Pin, Sạc": pin
            }
            dataPhone = {
                "title": title,
                "price": parseInt(price),
                "url": "/dtdd/"+slug,
                "slug": slug,
                "promotion": "Trả góp 0%",
                "discount": parseFloat(discount),
                "tag": "Ưu đãi sinh nhật",
                "gift": "",
                "star": 4.1,
                "totalVote": 23,
                "brand": brand,
                "brandId": 1,
                "cateId": 1,
                "baohanh": "18T",
                "new": true,
                "location": "Tỉnh Long Xuyên",
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
        }else if (data[0].category === 'laptop') {
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
                "Hệ điều hành": os,
                "Card màn hình": graphicCard,
                "Thiết kế": design,
                "Chip": chip,
                "RAM": [
                    ram
                ],
                "ROM": rom,
                "Pin, Sạc": pin,
                "Cổng kết nối": portConect
            }
            dataPhone = {
                "title": title,
                "price": parseInt(price),
                "url": "/dtdd/"+slug,
                "slug": slug,
                "promotion": "Trả góp 0%",
                "discount": parseFloat(discount),
                "tag": "Ưu đãi sinh nhật",
                "gift": "",
                "star": 4.1,
                "totalVote": 23,
                "brand": brand,
                "brandId": 1,
                "cateId": 1,
                "baohanh": "18T",
                "new": true,
                "location": "Tỉnh Long Xuyên",
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
        }else if (data[0].category === 'phukien') {
            const typeA = document.getElementById('typeA').value
            dataPhone = {
                "title": title,
                "price": parseInt(price),
                "url": "/dtdd/"+slug,
                "slug": slug,
                "promotion": "Trả góp 0%",
                "discount": parseFloat(discount),
                "tag": "Ưu đãi sinh nhật",
                "gift": "",
                "star": 4.1,
                "totalVote": 23,
                "brand": brand,
                "nameType": typeA,
                "baohanh": "18T",
                "new": true,
                "location": "Tỉnh Long Xuyên",
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
                "info": info
            }
        }else if (data[0].category === 'watch') {
            const sex = document.getElementById('sex').value
            const diameter = document.getElementById('diameter').value
            const typeFaceWatch = document.getElementById('typeFaceWatch').value
            const material = document.getElementById('material').value
            const batery = document.getElementById('batery').value
            const waterProof = document.getElementById('waterProof').value
            parameter = {
                'Giới tính': sex,
                "Đường kính mặt": diameter,
                "Loại mặt đồng hồ": typeFaceWatch,
                "Chất liệu dây": material,
                "Bộ máy": batery,
                "Chống nước": waterProof,
            }
            dataPhone = {
                "title": title,
                "price": parseInt(price),
                "url": "/dtdd/"+slug,
                "slug": slug,
                "promotion": "Trả góp 0%",
                "discount":  parseFloat(discount),
                "tag": "Ưu đãi sinh nhật",
                "gift": "",
                "star": 0,
                "totalVote": 0,
                "brand": brand,
                "brandId": 1,
                "cateId": 1,
                "baohanh": "18T",
                "new": true,
                "location": "Tỉnh Long Xuyên",
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
        }else if (data[0].category === 'smartwatch') {
            const sex = document.getElementById('sex').value
            const face = document.getElementById('face').value
            const conectOS = document.getElementById('conectOS').value
            const battery = document.getElementById('battery').value
            const healcare = document.getElementById('healcare').value
            parameter = {
                'Giới tính': sex,
                "Mặt": face,
                "Kết nối hệ điều hành": conectOS,
                "Thời lượng pin": battery,
                "Tính năng cho sức khỏe": healcare,
            }
            dataPhone = {
                 "title": title,
                "price": parseInt(price),
                "url": "/dtdd/"+slug,
                "slug": slug,
                "promotion": "Trả góp 0%",
                "discount":  parseFloat(discount),
                "tag": "Ưu đãi sinh nhật",
                "gift": "",
                "star": 0,
                "totalVote": 0,
                "brand": brand,
                "brandId": 1,
                "cateId": 1,
                "baohanh": "18T",
                "new": true,
                "location": "Tỉnh Long Xuyên",
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
                method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
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

        postData('https://jsonserv.glitch.me/products/' + data[0].id, dataPhone)
            .then((data) => {
                console.log(data); // JSON data parsed by `data.json()` call
            });
        alert('Sửa thành công')

    }
    const handleDeleteImg = (index) => {
        console.log(index);
        let newArr = arrFile.filter(id => id !== index)
        setArrFile(newArr)
        console.log(newArr);
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
                                data[0]?.img
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
                                {productInputs.map((input) => {
                                    return (
                                        <div className="formInput" key={input.id}>
                                            <label>{input.label}</label>
                                            <input type={input.type} placeholder={input.placeholder} id={input.title} />
                                        </div>
                                    )
                                })}
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
                                <div className="imgcontent">
                                    {arrFile.map((img, index) => (
                                        <img
                                            src={img}
                                            alt=""
                                            onClick={() => handleDeleteImg(img)}
                                        />
                                    ))}

                                </div>
                                <select className="formInput" id="typeproduct">
                                    <option onClick={() => setType(0)}>Chọn loại sản phẩm</option>
                                    {inputs.map((type) => (
                                        <option value={type.type} onChange={() => setType(type.id)}>{type.label}</option>
                                    ))}
                                </select>
                                {data[0]?.category === 'dienthoai' &&
                                    <>
                                        <select className="formInput" id='ram'>
                                            <option id='1'>Chọn loại RAM</option>
                                            <option value='4 GB'>4 GB</option>
                                            <option value='6 GB'>6 GB</option>
                                            <option value='8 GB'>8 GB</option>
                                            <option value='12 GB'>12 GB</option>
                                            <option value='16 GB'>16 GB</option>
                                        </select>
                                        <select className="formInput" id='rom'>
                                            <option >Bộ nhớ trong</option>
                                            <option value='32 GB'>32 GB</option>
                                            <option value='64 GB'>64 GB</option>
                                            <option value='128 GB'>128 GB</option>
                                            <option value='256 GB'>256 GB</option>
                                            <option value='512GB'>512 GB</option>
                                            <option value='1 TB'>1 TB</option>
                                        </select>
                                        {
                                            phoneProduct.map(input => (
                                                <div className="formInput" key={input.id}>
                                                    <label>{input.label}</label>
                                                    <input type={input.type} placeholder={input.placeholder} id={input.title} />
                                                </div>

                                            ))}
                                    </>

                                }
                                {data[0]?.category === 'laptop' && <>
                                    <select className="formInput" id='ram'>
                                        <option id='1'>Chọn loại RAM</option>
                                        <option value='4 GB'>4 GB</option>
                                        <option value='6 GB'>6 GB</option>
                                        <option value='8 GB'>8 GB</option>
                                        <option value='12 GB'>12 GB</option>
                                        <option value='16 GB'>16 GB</option>
                                    </select>
                                    <select className="formInput" id='rom'>
                                        <option >Bộ nhớ trong</option>
                                        <option value='32 GB'>32 GB</option>
                                        <option value='64 GB'>64 GB</option>
                                        <option value='128 GB'>128 GB</option>
                                        <option value='256 GB'>256 GB</option>
                                        <option value='512 GB'>512 GB</option>
                                        <option value='1 TB'>1 TB</option>
                                    </select>
                                    {laptopProduct.map(input => (
                                        <div className="formInput" key={input.id}>
                                            <label>{input.label}</label>
                                            <input type={input.type} placeholder={input.placeholder} id={input.title} />
                                        </div>
                                    ))}
                                </>
                                }
                                {(data[0]?.category === 'phukien') && <>
                                    <select className="formInput" id="typeA">
                                        <option onClick={() => setTypeA(0)}>Chọn loại phụ kiện</option>
                                        {typeAccessory.map((type) => (
                                            <option value={type.title} onClick={() => setTypeA(type.id)}>{type.label}</option>
                                        ))}
                                    </select>
                                </>
                                }
                                {data[0]?.category === 'watch' && <>
                                    {watchProduct.map(input => (
                                        <div className="formInput" key={input.id}>
                                            <label>{input.label}</label>
                                            <input type={input.type} placeholder={input.placeholder} id={input.title} />
                                        </div>
                                    ))}
                                </>
                                }
                                {data[0]?.category === 'smartwatch' && <>
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

                            <button onClick={() => console.log()}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default EditProduct;
