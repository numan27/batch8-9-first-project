// import Header from "../components/layout/Header";

import { useState } from "react";
import CustomButton from "../components/common/customButton";

export default function Home() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

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
    </div>
  );
}
