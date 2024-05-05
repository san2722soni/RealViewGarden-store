import AppBgImg from "../AppBgImg";

const WhyChooseUs = () => {
  return (
    <div className="space-y-4">
      <section className="text-gray-600 body-font relative">
        <AppBgImg />
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Why Choose Us ?
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              What makes us different?
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
            <div className="p-4 flex flex-col text-center items-center ">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 p-1 text-indigo-500 mb-5 flex-shrink-0">
                <picture>
                  <img
                    width={95}
                    height={95}
                    className="object-cover object-center "
                    alt="save-plants"
                    src="/save-plants.png"
                  />
                </picture>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Plants Enthusiasts
                </h2>
                <p className="leading-relaxed text-base">
                  Just like you we are plant lovers too!
                </p>
              </div>
            </div>
            <div className="p-4  flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 p-1 text-indigo-500 mb-5 flex-shrink-0">
                <picture>
                  <img
                    width={100}
                    height={100}
                    className="object-cover object-center "
                    alt="save-plants"
                    src="/water-plant.png"
                  />
                </picture>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Plant Care
                </h2>
                <p className="leading-relaxed text-base">
                  Our homegrown plants get ulmost care and attention
                </p>
              </div>
            </div>
            <div className="p-4  flex flex-col text-center items-center ">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 p-1 text-indigo-500 mb-5 flex-shrink-0">
                <picture>
                  <img
                    width={95}
                    height={95}
                    className="object-cover object-center "
                    alt="save-plants"
                    src="/pot-plant.png"
                  />
                </picture>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Plant Guidance
                </h2>
                <p className="leading-relaxed text-base">
                  We bring you plant care guide by gardening experts
                </p>
              </div>
            </div>
            <div className="p-4  flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 p-1 text-indigo-500 mb-5 flex-shrink-0">
                <picture>
                  <img
                    width={100}
                    height={100}
                    className="object-cover object-center "
                    alt="save-plants"
                    src="/fast-delivery.png"
                  />
                </picture>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Quick Delivery
                </h2>
                <p className="leading-relaxed text-base">
                  We ensure quick delivery, and hassle-free replacement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
