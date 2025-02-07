import "./catalogblock.css";
import { MiniProduct } from "../../../../widgets/reusedComponents/miniProduct/MiniProduct";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMiniCatalogThunk } from "../../../../features/miniCatalog/miniCatalogSlice";
import { selectMiniCatalogData } from "../../../../features/miniCatalog/miniCatalogSelector";
import { Loader } from "../../../../shared/components/loader/Loader";
import { ErrorComponent } from "../../../../shared/components/errorComp/ErrorComponent";
import { paramsChange } from "../../../../shared/api/miniCatalog";

export const CatalogBlock = () => {
  const dispatch = useDispatch();
  const { minicatalog, status } = useSelector(selectMiniCatalogData);

  useEffect(() => {
    paramsChange(20);

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
    <div className="miniCat-container second-cat">
      <p className="miniCat-title">Каталог</p>
      <div className="miniCat-cont">
        {minicatalog?.map((element) => (
          <MiniProduct infoProduct={element} key={element.id} />
        ))}
      </div>
    </div>
  );
};
