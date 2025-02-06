import { useDispatch, useSelector } from "react-redux";
import "./minicatalog.css";
import { selectMiniCatalogData } from "../../../../features/miniCatalog/miniCatalogSelector";
import { useEffect } from "react";
import { fetchMiniCatalogThunk } from "../../../../features/miniCatalog/miniCatalogSlice";
import { MiniProduct } from "../../../../widgets/reusedComponents/miniProduct/MiniProduct";
import { Loader } from "../../../../shared/components/loader/Loader";
import { ErrorComponent } from "../../../../shared/components/errorComp/ErrorComponent";

export const MiniCatalog = ({ onLoaded }) => {
  const dispatch = useDispatch();
  const { minicatalog, status } = useSelector(selectMiniCatalogData);

  useEffect(() => {
    dispatch(fetchMiniCatalogThunk());
  }, [dispatch]);

  if (status === "loading") {
    return <Loader />;
  }

  // if (status === "successfully") {
  //   onLoaded();
  // }

  if (status === "failed") {
    return <ErrorComponent text={"товары"} />;
  }

  if (minicatalog.length === 0) {
    return null;
  }

  return (
    <div className="miniCat-container">
      <p className="miniCat-title">Каталог</p>
      <div className="miniCat-cont">
        {minicatalog?.map((element) => (
          <MiniProduct infoProduct={element} key={element.id} />
        ))}
      </div>
      <button className="miniCat-btn">Смотреть больше</button>
    </div>
  );
};
