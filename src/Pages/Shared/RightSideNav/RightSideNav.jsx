import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
  return (
    <div className="p-4 space-y-12">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Login With</h2>
        <div className="space-y-3">
          <button className="btn btn-outline w-full">
          <FaGoogle />
            Login with Google
          </button>
          <button className="btn btn-outline w-full">
          <FaGithub />
            Login with gitHub
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Find Us On</h2>
        <div className="border-2 rounded-xl">
        <button className="btn w-full">
          <FaFacebook />
            facebook
          </button>
          <hr />
        <button className="btn w-full ">
          <FaTwitter />
            Twitter
          </button>
          <hr />
        <button className="btn w-full">
          <FaInstagram />
            Instagram
          </button>
        </div>
      </div>

      <div className="bg-[#F3F3F3] space-y-3 p-3 rounded-xl">
        <h2 className="text-2xl font-bold ">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
