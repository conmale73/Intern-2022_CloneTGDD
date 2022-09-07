import { useEffect, useState } from 'react';
import SmallSlick from '~/components/Slick/SmallSlick';
import ButtonTablink from '../../../components/Button/ButtonTablink';
import CardSlide from './CardSlide';
import { productService } from '~/services';
import SeeAll from './SeeAll';

function Type({ type}) {
    const [active, setActive] = useState("0");
    const [title, setTitle] = useState(type.btn.title[0]);
    const [all, setAll] = useState(type.btn.all[0]);
    const [slug, setSlug] = useState(type.btn.slug[0]);
    const [string, setString] = useState(type.btn.string[0]);
    const [data, setData] = useState("0");

    const handleClickButton = (e,index) => {
        setActive(index)
        setTitle(type.btn.title[index])
        setSlug(type.btn.slug[index])
        setAll(type.btn.all[index])
        setString(type.btn.string[index])
        
    };
    useEffect(() => {

            async function getProducts() {
                let res=''
                if(all==='thông minh' && type.name==='nữ')
                {
                    res = await productService.getProductByCategorySex(
                        "smartwatch",'female'
                     );
                }
                else if(all==='thông minh' && type.name==='nam')
                {
                    res = await productService.getProductByCategorySex(
                        "smartwatch",'male'
                     );
                }
                else{
                    res = await productService.queryProductWatch(
                        string
                     );
                }
               
                setData(res);
            }
       
        
        getProducts();
    }, [string]);
   
    return (
        <div className={`container w-[1200px] flex my-[1rem] ${type.bg} rounded-md`}>
            <div className="wrap w-[27.5%] ">
                <a href={type.url} className="img block">
                    <img
                        src={type.img}
                        alt=""
                        className="img w-full max-w-full"
                    />
                </a>
            </div>
            <div className="aside w-[calc(72.5%+70px)] ml-[-7rem] pr-[1.5rem]">
                <div className="box-top mt-[1rem] mb-[2rem]">
                    <div className="button-wrap  float-left mt-[5px]">
                    {/* Button */}
                    {type.btn.title.map((e,index)=>{
                        return (
                            <div className='inline' id={index} key={index} onClick={(e  )=>handleClickButton(e,index)}>
                                <ButtonTablink title={e} bg={type.btn.bg} color={type.btn.color} active={active==index ? true : false} />
                            </div>
                        )
                    } )}
                    </div>
                    {/* See All */}
                    <SeeAll title={title} slug={slug} name={type.name} all={all}/>
                </div>
                <div className="slide mt-[6.8rem] bg-white h-[333px] rounded-3xl p-[1rem] flex">
                    <SmallSlick autoplay={false}>
                        {/* Image */}
                        { 
                            Array.isArray(data) && data.map((src,index) => {
                                return <CardSlide data={src} key={index} />
                            })
                        }
                    </SmallSlick>
                </div>
            </div>
        </div>
    );
}

export default Type;
