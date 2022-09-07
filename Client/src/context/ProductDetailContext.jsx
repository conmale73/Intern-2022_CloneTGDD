import { createContext, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productService, ratingService } from '~/services';

const ProductDetailContext = createContext({});

const ProductDetailProvider = ({ children }) => {
    const [productDetailData, setProductDetailData] = useState({});

    const { productSlug } = useParams();

    //console.log(productDetailData);

    useEffect(() => {
        async function getProductBySlug() {
            //const resProduct = await productService.getProductBySlug(productSlug);
            //const resArticle = await productService.getArticle(resProduct[0].id);
            //const resRating = await ratingService.getRating(resProduct[0].id);
            //const article = resArticle.lenght > 0 ? resArticle[0]?.article : 'no content'
            //const product = { ...resProduct[0], article, rating: resRating };
            //const product = { ...resProduct[0], article: resProduct[0].info, rating: resRating };
            //setProductDetailData(product);
        }
        getProductBySlug();
    }, []);

    return (
        <ProductDetailContext.Provider
            value={{
                productDetailData,
            }}
        >
            {children}
        </ProductDetailContext.Provider>
    );
};

const useProductDetail = () => {
    const context = useContext(ProductDetailContext);

    if (context === undefined) {
        throw new Error('useProductDetail must be used within ProductDetailProvider');
    }

    return context;
};

export { ProductDetailProvider, useProductDetail };
