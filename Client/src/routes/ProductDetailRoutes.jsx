import { lazy, Suspense } from 'react';
const ProductDetail = lazy(() => import('../pages/User/ProductDetail'));
import Loading from '~/components/Loading';
import { ProductDetailProvider } from '~/context/ProductDetailContext';
const urls = [
    'dienthoai/:productSlug',
    'laptop/:productSlug',
    'tablet/:productSlug',
    'watch/:productSlug',
    'may-in/:productSlug',
    'muc-in/:productSlug',
    'man-hinh-may-tinh/:productSlug',
    'may-tinh-de-ban/:productSlug',
    'phukien/:productSlug',
    'smartwatch/:productSlug',
];

export const productDetailRoutes = urls.map((url) => ({
    path: url,
    element: (
        <Suspense fallback={<Loading />}>
            <ProductDetailProvider>
                <ProductDetail />
            </ProductDetailProvider>
        </Suspense>
    ),
}));
