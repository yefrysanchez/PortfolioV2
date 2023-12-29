import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-[#EDEDED] text-5xl  md:text-7xl font-bold text-center mt-40 leading- ">
        Infinite Possibilities <br /> in Every Line of Code.
      </h1>
      <h2 className="text-[#BDBDC0] text-2xl font-light text-center mt-10">
        Hello, I am{" "}
        <span className="font-bold text-white">Yefry Sanchez 👋🏽</span> <br />a
        Web Developer based in{" "}
        <span className="font-bold text-white">NYC 🗽🏙️</span>
      </h2>
    </>
  );
};

export default Home;
