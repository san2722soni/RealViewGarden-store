import Container from "../components/ui/container";
import Billboard from "../components/billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "../components/product-list";
import WhyChooseUs from "../components/whyChooseUs";
import Services from "../components/Services";
import Testimonial from "../components/testimonial";
import { Feedback } from "../components/feedback";
import getReviews from "@/actions/get-reviews";
import getBillboards from "@/actions/get-billboards";
import Video from "../components/ui/video";
import About from "../components/about";

export const revalidate = 0;

const Home = async () => {
  const products = await getProducts({ isFeatured: true });
  const newProducts = await getProducts({ isArchived: true });
  const bestProducts = await getProducts({ isBestSeller: true });
  const reviews = await getReviews();
  const billboard = await getBillboard("3e47dcc8-f883-48f4-88cf-e5d6f86cee5c");
  const billboards = await getBillboards();
  return (
    <>
      <Container>
        <div className="space-y-10 pb-10 ">
          <Billboard data={billboard} allData={billboards} />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products} />
          </div>
          <Video />
          <WhyChooseUs />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Our Best Sellers" items={bestProducts} />
          </div>
          <Services />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Our Newly Arrivals" items={newProducts} />
          </div>
          <About />
          <Testimonial reviews={reviews} />
          <Feedback />
        </div>
      </Container>
    </>
  );
};

export default Home;
