// import Header from "../components/layout/Header";
import Image1 from "../assets/img/blog-1.png";
import Image2 from "../assets/img/blog-2.png";
import Image3 from "../assets/img/blog-3.png";
import Image4 from "../assets/img/blog-4.png";
import Image5 from "../assets/img/blog-5.png";
import Image6 from "../assets/img/blog-6.png";
import Image7 from "../assets/img/careers-banner.png";
import Image8 from "../assets/img/ceo.png";

import { useState } from "react";
import CustomButton from "../components/common/customButton";

export default function Home() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const galleryData = [
    {
      id: 1,
      title: "Image 1",
      imageUrl: Image1,
    },
    {
      id: 2,
      title: "Image 2",
      imageUrl: Image2,
    },
    {
      id: 3,
      title: "Image 3",
      imageUrl: Image3,
    },
    {
      id: 4,
      title: "Image 4",
      imageUrl: Image4,
    },
    {
      id: 5,
      title: "Image 5",
      imageUrl: Image5,
    },
    {
      id: 6,
      title: "Image 6",
      imageUrl: Image6,
    },
    {
      id: 7,
      title: "Image 7",
      imageUrl: Image7,
    },
    {
      id: 8,
      title: "Image 8",
      imageUrl: Image8,
    },
    {
      id: 7,
      title: "Image 7",
      imageUrl: Image7,
    },
    {
      id: 8,
      title: "Image 8",
      imageUrl: Image8,
    },
  ];

  return (
    <div>
      <h1>Home Page Content</h1>
      <CustomButton bgColor="aqua" textColor="blue" buttonText="Get Started" />
      <br />
      <br />

      <button onClick={handleClick}>+</button>

      <div className="mt-5">
        <h2> Count: {count}</h2>
      </div>

      {/* Map Method */}

      <div>
        <h2>Map Method</h2>

        <div className="d-flex align-items-center justify-content-center flex-wrap gap-4">
          {galleryData.map((data) => (
            <div className="galleryItem">
              <div className="galleryImage">
                <img src={data.imageUrl} alt="Gallery" />
              </div>
              <div className="galleryTitle">{data.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
