import ModalBox from './ModalBox';
import { useSelector } from 'react-redux';

function Article(props) {
    const initProductDetail = useSelector((state) => state.products.productDetail.data);
    const { article, info } = initProductDetail;

    const data = article ? aricle : info;
    const Art = () => {
        return <div dangerouslySetInnerHTML={{ __html: data }} />;
    };
    return (
        <div>
            <img src={''} alt={''} />
            <h3>Thông tin sản phẩm</h3>
            <Art />
            <ModalBox />
        </div>
    );
}

export default Article;
