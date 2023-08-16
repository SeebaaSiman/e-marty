import { useParams } from "react-router-dom";
import { extractProductIdFromParams } from "../../../../helpers/extractProductIdFromParams";
import { Slider } from "./Slider";
import { apiData } from "../../../../api/api";
import { ContentProduct } from "./ContentProduct";

export const ProductDetail = () => {
  const { title } = useParams();
  const { products } = apiData();
  const productId = extractProductIdFromParams(title);
  const product = products?.find((item) => item.id == productId) || null; // find devuelve el primer elemento que coincide, de esta manera obtengo el objeto y no un array con el objeto si uso filter
  return (
    <div>
      <Slider product={product}>
        <ContentProduct product={product} />
      </Slider>
    </div>
  );
};
