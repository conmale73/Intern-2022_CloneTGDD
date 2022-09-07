import { useState, useEffect } from "react";
import Sidebar from "~/components/sidebar/Sidebar";
import Navbar from "~/components/navbar/Navbar";
import Datatable from "~/components/datatable/Datatable";
import { useLocation } from "react-router-dom";
import { ProductService } from "~/services";
import { productColumns } from "~/datatablesource";

const Comment = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        function getProducts() {
            ProductService.getProducts(1, 9).then((res) => setData(res.data));
        }
        getProducts();
    }, []);
    return (
        <div>
            <div>
                <Datatable
                    rows={data}
                    title=""
                    productColumns={productColumns}
                    type="comment"
                />
            </div>
        </div>
    );
};

export default Comment;
