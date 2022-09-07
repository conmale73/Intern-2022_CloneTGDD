import CardSlide from "./CardSlide";


function CardSlides({data}) {
    return data.map((src,index) => {
        return <CardSlide data={src} key={index} />;
    });
       
}

export default CardSlides;
