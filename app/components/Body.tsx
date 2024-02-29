import Bottom from "./Bottom";
import Heading from "./Heading";
import Middle from "./Middle";

const Body = () => {
  return (
    <div className="flex flex-col">
      <Heading />
      <Middle />
      <Bottom />
    </div>
  );
};

export default Body;
