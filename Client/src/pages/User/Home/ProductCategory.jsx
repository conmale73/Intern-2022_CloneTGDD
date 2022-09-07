import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Section from './Section';
import styles from './productcategory.module.scss';
function ProductCategory() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://json.msang.repl.co/categories')
            .then((response) => response.json())
            .then((data) => setCategories(data));
    }, []);
    return (
        <Section title="DANH MỤC NỔI BẬT" styles="bg-white">
            <div className={styles.body}>
                {categories.map((item) => (
                    <Link to={item.href} key={item.title}>
                        <div className={styles.cateIcon}>
                            <img src={item.img} alt="" className={styles.image} />
                            <p className={styles.title}>{item.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </Section>
    );
}

export default ProductCategory;
