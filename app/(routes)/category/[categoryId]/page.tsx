import Container from "@/app/components/ui/container";
import Billboard from "@/app/components/billboard";
import ProductCard from "@/app/components/ui/product-card";
import NoResults from "@/app/components/ui/no-results";

import getProducts from "@/actions/get-products";
import getCategory from "@/actions/get-category";
import getSizes from "@/actions/get-sizes";
import getColors from "@/actions/get-colors";

import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";
import getBillboards from "@/actions/get-billboards";
import getPots from "@/actions/get-pots";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
    potId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
    potId: searchParams.potId
  });
  const sizes = await getSizes();
  const colors = await getColors();
  const pots = await getPots();
  const category = await getCategory(params.categoryId);
  const billboards = await getBillboards();

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} allData={billboards} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <div className="lg:hidden md:hidden sm:block">
            <MobileFilters sizes={sizes} colors={colors} pots={pots}/>
            </div>
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
              <Filter valueKey="potId" name="Material Type" data={pots} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
