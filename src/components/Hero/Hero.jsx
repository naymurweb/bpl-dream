const Hero = () => {
  return (
    <div
      className="my-10 bg-black hero rounded-xl py-10"
      style={{
        backgroundImage: `url('/src/assets/images/bg-shadow.png')`,
      }}
    >
      <div className=" "></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="">
          <div className="flex justify-center my-5">
            <img src="/src/assets/images/banner-main.png" alt="" />
          </div>
          <h1 className="mb-5 md:text-5xl text-3xl font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="mb-5 text-gray-400 text-2xl">
            Beyond Boundaries Beyond Limits
          </p>
          <button className="btn btn-warning font-bold">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
