import img1 from "../assets/icon-delivery.png";
import img2 from "../assets/Icon-Customer service.png";
import img3 from "../assets/Icon-secure.png";
const FeatureSection = () => {
  const features = [
    {
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
      img: img1,
    },
    {
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
      img: img2,
    },
    {
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
      img: img3,
    },
  ];

  return (
    <section className="">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="rounded-full p-2 mb-4 bg-[#2F2E30]/30 ">
                <div className="bg-black rounded-full p-2">
                  <div className="text-blue-600">
                    <img src={feature.img} />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              {feature.description && (
                <p className="text-gray-600 text-sm">{feature.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
