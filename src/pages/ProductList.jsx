import { useState, useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";
import ProductItem from "../component/ProductItem";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <div className="d-flex justify-content-center">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <div className="btn btn-outline-dark me-2">ALL</div>
          <div className="btn btn-outline-dark me-2">Mens Clothing</div>
          <div className="btn btn-outline-dark me-2">Womens Clothing</div>
          <div className="btn btn-outline-dark me-2">Jewellary</div>
          <div className="btn btn-outline-dark me-2">Electronics</div>
        </div>
        {filter.map((product) => {
          return <ProductItem product={product} key={product.id} />;
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">latest Products</h1>
            <hr />
          </div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
