import { axiosClient } from '~/api';

export const productService = {
    getProducts(page, limit) {
        return axiosClient.get(`/products/?_page=${page}&_limit=${limit}`);
    },
    getAllProducts() {
        return axiosClient.get(`/products/`);
    },
    getProduct(id) {
        return axiosClient.get(`/products/${id}`);
    },
    getProductByName(name) {
        return axiosClient.get(`/products/${name}`);
    },
    getProductByBrand(category, brand) {
        return axiosClient.get(`/products/?category=${category}&brand=${brand}`);
    },
    getProductByCategoryBrandSex(category, brand, sex) {
        return axiosClient.get(`/products/?category=${category}&brand=${brand}&sex=${sex}`);
    },
    getProductByCategorySex(category, sex) {
        return axiosClient.get(`/products/?category=${category}&sex=${sex}`);
    },
    getProductByCategory(category) {
        return axiosClient.get(`/products/?category=${category}`);
    },
    getProductByPolicy(category, brand) {
        return axiosClient.get(`/products/?category=${category}${brand}`);
    },
    getProductBySlug(slug) {
        return axiosClient.get(`/products/?slug=${slug}`);
    },
    getProductByLocation(location) {
        return axiosClient.get(`/products/?location=${location}`);
    },
    queryProduct() {
        const query = Array.from(arguments)
            .map((param) => {
                return `${param[0]}=${param[1]}`;
            })
            .join('&');
        return axiosClient.get(`/products/?${query}`);
    },
    queryProductWatch(string) {
        const query = string.map((e) => {
                const key = Object.keys(e)
                const value = Object.values(e)
                return `${key[0]}=${value[0]}`;
            }).join('&');
        return axiosClient.get(`/products/?category=watch&${query}`);
    },
    // queryProduct(["brand", "nokia"], ["title", "Nokia 500"])
    getArticle(id) {
        return axiosClient.get(`/productarticle/?productId=${id}`);
    },
};
