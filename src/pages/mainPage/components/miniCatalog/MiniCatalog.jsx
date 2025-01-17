import { useDispatch, useSelector } from "react-redux";
import "./minicatalog.css";
import { selectMiniCatalogData } from "../../../../features/miniCatalog/miniCatalogSelector";
import { useEffect } from "react";
import { fetchMiniCatalogThunk } from "../../../../features/miniCatalog/miniCatalogSlice";
import { MiniProduct } from "../../../../widgets/reusedComponents/miniProduct/MiniProduct";

export const MiniCatalog = () => {
  const dispatch = useDispatch();
  const { minicatalog, status } = useSelector(selectMiniCatalogData);

  useEffect(() => {
    dispatch(fetchMiniCatalogThunk());
  }, [dispatch]);

  return (
    <div className="miniCat-container">
      <p className="miniCat-title">Каталог</p>
      <div className="miniCat-cont">
        {minicatalog?.map((element) => (
          <MiniProduct infoProduct={element} />
        ))}
      </div>
      <button className="miniCat-btn">Смотреть больше</button>
    </div>
  );
};
