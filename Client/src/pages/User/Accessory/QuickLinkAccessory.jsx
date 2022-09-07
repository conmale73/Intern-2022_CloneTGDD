import Section from '~/components/Section';
import QuickLink from '~/components/QuickLink';
import './quicklinkaccessory-module.scss';
const data = [
    {
        type: 'MacBook',
        link: '//cdn.tgdd.vn/Brand/1/logo-macbook-149x40.png',
    },
    {
        type: 'ASSUS',
        link: '//cdn.tgdd.vn/Brand/1/logo-asus-149x40.png',
    },
    {
        type: 'HP',
        link: '//cdn.tgdd.vn/Brand/1/logo-hp-149x40-1.png',
    },
    {
        type: 'LENOVO',
        link: '//cdn.tgdd.vn/Brand/1/logo-lenovo-149x40.png',
    },
    {
        type: 'ACER',
        link: '//cdn.tgdd.vn/Brand/1/logo-acer-149x40.png',
    },
    {
        type: 'DELL',
        link: '//cdn.tgdd.vn/Brand/1/logo-dell-149x40.png',
    },
    {
        type: 'MSI',
        link: '//cdn.tgdd.vn/Brand/1/logo-msi-149x40.png',
    },
    {
        type: 'SURFACE',
        link: '//cdn.tgdd.vn/Brand/1/logo-surface-149x40-1.png',
    },
    {
        type: 'LG',
        link: '//cdn.tgdd.vn/Brand/1/logo-lg-149x40.png',
    },
    {
        type: 'GIGABYTE',
        link: '//cdn.tgdd.vn/Brand/1/logo-gigabyte-149x40.png',
    },
    {
        type: 'INTEL NUC',
        link: '//cdn.tgdd.vn/Brand/1/logo-intel-149x40.png',
    },
    {
        type: 'CHUWI',
        link: '//cdn.tgdd.vn/Brand/1/logo-chuwi-149x40.png',
    },
    {
        type: 'INTEL',
        link: '//cdn.tgdd.vn/Brand/1/logo-itel-149x40.png',
    },
];
const QuickLinkAccessory = () => {
    return (
        <div className="container__quicklink-accessory">
            <div>
                <h3>Chuyên trang thương hiệu</h3>
                <div className="quicklink">
                    <div>
                        {data.map((item) => (
                            <QuickLink type={item.type} link={item.link}></QuickLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickLinkAccessory;
