import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    return <>Loading...</>;
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
          return (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 text-center p-4">
                <img
                  src={product.image}
                  class
                  alt={product.title}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {product.title.substring(0, 12)}
                  </h5>
                  <p className="card-text">${product.price}</p>
                  <Link to="#" className="btn btn-outline-dark ">
                    Buy NOW
                  </Link>
                </div>
              </div>
            </div>
          );
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
