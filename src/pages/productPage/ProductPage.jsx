import "./productpage.css";
import exit from "../../assets/images/exit.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProductData } from "../../features/product/productSelector";
import { fetchProductThunk } from "../../features/product/productSlice";
import { Loader } from "../../shared/components/loader/Loader";
import { ErrorComponent } from "../../shared/components/errorComp/ErrorComponent";
import { PhotoComponent } from "./components/photoComponent/PhotoComponent";
import { InfoProductComponent } from "./components/infoProductComponent/InfoProductComponent";

export const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, status } = useSelector(selectProductData);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProductThunk(id));
  }, [dispatch]);

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "failed") {
    return <ErrorComponent text={"товар"} />;
  }
  console.log(product);

  return (
    <>
      <img
        src={exit}
        alt=""
        className="product-exit"
        onClick={() => navigate(-1)}
      />
      <div className="product-main-container">
        <PhotoComponent
          mainPhoto={product.mainPhotoUrl}
          additionalPhotos={product.additionalPhotos}
        />
        <InfoProductComponent data={product} />
      </div>
    </>
  );
};
