import { Product } from "@/types";
import qs from "query-string";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  potId?:string;
  isFeatured?: boolean;
  isArchived?: boolean;
  isBestSeller?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: { 
      colorId: query.colorId,
      sizeId: query.sizeId,
      potId: query.potId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
      isArchived: query.isArchived,
      isBestSeller: query.isBestSeller,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getProducts;