import { useRoutes } from 'react-router-dom';
import { CommonLayout } from '../components/Layout';
import NotFound from '../pages/User/NotFound';
import { publishRoutes } from './PublishRoutes';
import { productDetailRoutes } from './ProductDetailRoutes';
import { newsDetailRoutes } from './NewsDetailRoutes';
import { Outlet } from 'react-router-dom';
export default function Routes() {
    const routes = [
        {
            path: '/',
            element: <CommonLayout />,
            children: [
                ...publishRoutes,
                ...productDetailRoutes,
                ...newsDetailRoutes,
                { path: '*', element: <NotFound title="Not found" /> },
            ],
        },
    ];
    return useRoutes(routes);
}
