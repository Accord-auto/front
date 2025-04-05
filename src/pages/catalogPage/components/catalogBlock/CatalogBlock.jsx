import "./catalogblock.css";
import { MiniProduct } from "../../../../widgets/reusedComponents/miniProduct/MiniProduct";
import { useSelector } from "react-redux";
import { selectMiniCatalogData } from "../../../../features/miniCatalog/miniCatalogSelector";
import { selectFiltersData } from "../../../../features/filters/filtersSelector";

export const CatalogBlock = ({ filters }) => {
  const { minicatalog } = useSelector(selectMiniCatalogData);
  const { filteredProducts } = useSelector(selectFiltersData);

  const listProducts = filters ? filteredProducts : minicatalog;

  if (listProducts?.length === 0) {
    return <p className="no-products">Нет товаров для отображения</p>;
  }

  return (
    <div className="miniCat-cont catalog-page-cont">
      {listProducts?.map((element) => (
        <MiniProduct infoProduct={element} key={element.id} />
      ))}
    </div>
  );
};
