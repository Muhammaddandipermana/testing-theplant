import Header from "./../components/Header";
import Message from "./../components/LoadingError/Error";
import { useSelector } from "react-redux";
import Loading from "../components/LoadingError/Loading";

const SingleProduct = ({ history, match }) => {
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails; 
  
  return (
    <>
      <Header />
      <div className="container single-product">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                  <img src={product.image} alt={product.name} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">{product.name}</div>
                  </div>
                  <p>{product.description}</p>

                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SingleProduct;
