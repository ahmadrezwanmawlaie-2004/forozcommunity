import coverImg from "../assets/cover 1.png";
import CEO from "../assets/ceo.png";
const HomeBody = () => {
  return (
    <div className="font-sans">
      <div className="flex flex-col gap-20">
        <div className="flex justify-between px-6 gap-5">
          <div className=" font-sans flex flex-col gap-3">
            <div>
              <p className="text-3xl md:text-6xl  lg:text-6xl font-bold">
                Unlocking opportunites.
              </p>
              <p className="lg:text-5xl md:text-5xl text-2xl font-bold text-[#062B80]">
                Tranforming lives.
              </p>
            </div>
            <div>
              <p className="text-lg">
                {" "}
                Empowering Afghan youth to unlock their potential,{" "}
                <span className="font-bold">Foroz</span> provides services that
                includes both opportunities and education. it’s a lifeline of
                opportunity that enables youth to pursue their dreams.
              </p>
              <button className="mt-5 rounded-4xl text-white bg-[#062A7F] font-sans px-[22px] py-3 hover:bg-[#2154c9] active:bg-[#2154c9]">
                Join Us
              </button>
            </div>
          </div>
          <div>
            <img
              src={coverImg}
              alt="Cover Image"
              className="shadow-lg rounded-2xl lg:h-[400px] lg:w-[600px] md:h-[300px] md:w-[400px] sm:h-[200px] sm:w-[300px] h-[80px] w-[200px]"
            />
          </div>
        </div>
        <div>
          <p className="text-center text-2xl md:text-5xl lg:text-5xl font-semibold">
            Laying the groundwork
          </p>
          <p class="text-center text-2xl md:text-5xl lg:text-5xl mb-10 font-semibold">
            for lasting impact
          </p>
          <div class="text-center lg:px-44 md:px-20 px-4">
            <p class="text-center">
              Since coming into power, the Taliban has barred millions of Afghan
              women from attending secondary and post-secondary school. Together
              with our partners, we want to help them access transformational
              educational and career opportunities.
            </p>
          </div>
        </div>
        <div className="flex justify-between px-6 gap-5">
          <div>
            <img
              src={CEO}
              alt="Cover Image"
              className="shadow-lg rounded-2xl lg:h-[360px] lg:w-[400px] md:h-[300px] md:w-[300px] sm:h-[200px] sm:w-[300px] h-[80px] w-[200px]"
            />
          </div>
          <div className=" font-sans flex flex-col gap-3">
            <div>
              <p className="text-3xl md:text-6xl  lg:text-6xl font-bold">
                Universial access
              </p>
              <p className="lg:text-5xl md:text-5xl text-2xl font-bold text-[#062B80]">
                to opportunities.
              </p>
            </div>
            <div>
              <p className="text-lg">
                We believe every individual deserves access to quality education
                and the chance to realize their dreams.
              </p>
              <button className="mt-5 rounded-4xl text-white bg-[#062A7F] font-sans px-[22px] py-3 hover:bg-[#2154c9] active:bg-[#2154c9]">
                Join Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBody;
