import { lazy, Suspense } from 'react';
import Loading from '~/components/Loading';
const Home = lazy(() => import('../pages/User/Home'));
const Phone = lazy(() => import('../pages/User/Phone'));
const Laptop = lazy(() => import('../pages/User/Laptop'));
const Tablet = lazy(() => import('../pages/User/Tablet'));
const Accessory = lazy(() => import('../pages/User/Accessory'));
const Smartwatch = lazy(() => import('../pages/User/Smartwatch'));
const Watch = lazy(() => import('../pages/User/Watch'));
const Cart = lazy(() => import('../pages/User/Cart'));
const History = lazy(() => import('../pages/User/History'));
const PurchaseHistory = lazy(() => import('../pages/User/History/PurchaseHistory'));
const Profile = lazy(() => import('../pages/User/History/Profile'));
const DangNhap = lazy(() => import('../pages/User/History/DangNhap'));
const Samsung = lazy(() => import('../pages/User/Samsung'));
const Lenovo = lazy(() => import('../pages/User/Lenovo'));
const News = lazy(() => import('../pages/User/News'));
const Pc = lazy(() => import('../pages/User/Pc'));
const Maycu = lazy(() => import('../pages/User/Maycu'));
const Dichvu = lazy(() => import('../pages/User/Dichvu'));
const Sim = lazy(() => import('../pages/User/Sim'));
const Gameapp = lazy(() => import('../pages/User/Gameapp'));
const About = lazy(() => import('../pages/User/About'));
const Contact = lazy(() => import('../pages/User/Contact'));
const Khuyenmai = lazy(() => import('../pages/User/Khuyenmai'));
const Order = lazy(() => import('../pages/User/Order'));
const SearchPage = lazy(() => import('../pages/User/Search'));
const WatchFilter=lazy(()=>import('../pages/User/Watch/PageFilter/WatchFilter'));
export const publishRoutes = [
    {
        index: true,
        element: (
            <Suspense fallback={<Loading />}>
                <Home title="Thegioididong.com - Điện thoại, Laptop, Phụ kiện, Đồng hồ chính hãng" />
            </Suspense>
        ),
    },
    {
        path: 'dienthoai',
        element: (
            <Suspense fallback={<Loading />}>
                <Phone title="Điện thoại, smartphone chính hãng giá rẻ, trả góp 0%" />
            </Suspense>
        ),
    },
    {
        path: 'laptop',
        element: (
            <Suspense fallback={<Loading />}>
                <Laptop title="Laptop | Máy tính xách tay Giá rẻ, Trả góp 0%" />
            </Suspense>
        ),
    },
    {
        path: 'tablet',
        element: (
            <Suspense fallback={<Loading />}>
                <Tablet title="Máy tính bảng, tablet giá rẻ, trả góp 0%" />
            </Suspense>
        ),
    },
    {
        path: 'accessory',
        element: (
            <Suspense fallback={<Loading />}>
                <Accessory tilte="Phụ kiện chính hãng, giá rẻ cho điện thoại, laptop, máy tính bảng" />
            </Suspense>
        ),
    },
    {
        path: 'smartwatch',
        element: (
            <Suspense fallback={<Loading />}>
                <Smartwatch title="Đồng hồ thông minh, Smartwatch chính hãng, có trả góp 0%" />
            </Suspense>
        ),
    },
    {
        path: 'watch',
        element: (
            <Suspense fallback={<Loading />}>
                <Watch title="Đồng hồ giá rẻ chính hãng - Giá tốt nhất, có trả góp 0%" />
            </Suspense>
        ),
    },
    {
        path:'dong-ho/:slug',
        element: (
            <Suspense fallback={<Loading />}>
            <WatchFilter title="Đồng hồ giá rẻ chính hãng - Giá tốt nhất, có trả góp 0%"/>
            </Suspense>)
    },
    {
        path: 'cart',
        element: (
            <Suspense fallback={<Loading />}>
                <Cart title="Giỏ hàng - Thegioididong.com" />
            </Suspense>
        ),
    },
    {
        path: 'order',
        element: (
            <Suspense fallback={<Loading />}>
                <Order title="Đơn hàng - Thegioididong.com" />
            </Suspense>
        ),
    },
    {
        path: 'tim-kiem',
        element: (
            <Suspense fallback={<Loading />}>
                <SearchPage title="Tìm kiếm | Thegioididong.com" />
            </Suspense>
        ),
    },
    {
        path: 'history',
        element: (
            <Suspense fallback={<Loading />}>
                <History title="Lịch sử mua hàng | Thegioididong.com" />
            </Suspense>
        ),
    },
    
    {
        path: 'history/purchaseHistory',
        element: (
            <Suspense fallback={<Loading />}>
                <PurchaseHistory title="Lịch sử mua hàng | Thegioididong.com" />
            </Suspense>
        ),
    },
    {
        path: '/history/dang-nhap',
        element: (
            <Suspense fallback={<Loading />}>
                <DangNhap title="Lịch sử mua hàng | Thegioididong.com" />
            </Suspense>
        ),
    },
    {
        path: '/history/profile',
        element: (
            <Suspense fallback={<Loading />}>
                <Profile title="Lịch sử mua hàng | Thegioididong.com" />
            </Suspense>
        ),
    },
    {
        path: 'samsung',
        element: (
            <Suspense fallback={<Loading />}>
                <Samsung title="Chuyên trang Samsung | Thegioididong.com" />
            </Suspense>
        ),
    },
    {
        path: 'lenovo',
        element: (
            <Suspense fallback={<Loading />}>
                <Lenovo title="Chuyên trang Lenovo | Thegioididong.com" />
            </Suspense>
        ),
    },
    {
        path: 'news',
        element: (
            <Suspense fallback={<Loading />}>
                <News title="Tin tức công nghệ cập nhật 24h - Thegioididong.com" />
            </Suspense>
        ),
    },
    {
        path: 'pc',
        element: (
            <Suspense fallback={<Loading />}>
                <Pc title="Mua PC, máy in, mực in giá rẻ, chính hãng, trả góp 0%" slug="may-in&category=muc-in&category=man-hinh-may-tinh&category=may-tinh-de-ban" name='PC, Máy in'/>
            </Suspense>
        ),
    },
    {
        path: 'may-in',
        element: (
            <Suspense fallback={<Loading />}>
                <Pc title="Mua PC, máy in, mực in giá rẻ, chính hãng, trả góp 0%" slug="may-in" name='Máy in'/>
            </Suspense>
        ),
    },
    {
        path: 'muc-in',
        element: (
            <Suspense fallback={<Loading />}>
                <Pc title="Mua PC, máy in, mực in giá rẻ, chính hãng, trả góp 0%" slug="muc-in" name='Mực in'/>
            </Suspense>
        ),
    },
    {
        path: 'man-hinh-may-tinh',
        element: (
            <Suspense fallback={<Loading />}>
                <Pc title="Mua PC, máy in, mực in giá rẻ, chính hãng, trả góp 0%" slug="man-hinh-may-tinh" name='Màn hình máy tính'/>
            </Suspense>
        ),
    },
    {
        path: 'may-tinh-de-ban',
        element: (
            <Suspense fallback={<Loading />}>
                <Pc title="Mua PC, máy in, mực in giá rẻ, chính hãng, trả góp 0%" slug="may-tinh-de-ban" name='máy tính để bàn'/>
            </Suspense>
        ),
    },
    {
        path: 'maycu',
        element: (
            <Suspense fallback={<Loading />}>
                <Maycu title="Điện thoại, máy tính bảng, laptop cũ giá rẻ, có bán trả góp" />
            </Suspense>
        ),
    },
    {
        path: 'dichvu',
        element: (
            <Suspense fallback={<Loading />}>
                <Dichvu title="Đóng tiền trả góp, thanh toán trả góp online - Thegioididong.com" />
            </Suspense>
        ),
    },
    {
        path: 'sim',
        element: (
            <Suspense fallback={<Loading />}>
                <Sim title="Mua online thẻ cào, sim số đẹp, sim 3G, sim 4G, thẻ game giá rẻ" />
            </Suspense>
        ),
    },
    {
        path: 'gameapp',
        element: (
            <Suspense fallback={<Loading />}>
                <Gameapp title="Chuyên trang Game - Ứng dụng Thegioididong.com Mẹo thủ thuật, HDSD, tải Free" />
            </Suspense>
        ),
    },
    {
        path: 'contact',
        element: (
            <Suspense fallback={<Loading />}>
                <Contact />
            </Suspense>
        ),
    },
    {
        path: 'about',
        element: (
            <Suspense fallback={<Loading />}>
                <About title="Hỏi đáp về sản phẩm và dịch vụ tại Thegioididong.com" />
            </Suspense>
        ),
    },
    {
        path: 'khuyen-mai',
        element: (
            <Suspense fallback={<Loading />}>
                <Khuyenmai title="Hỏi đáp về sản phẩm và dịch vụ tại Thegioididong.com" />
            </Suspense>
        ),
    },
];
