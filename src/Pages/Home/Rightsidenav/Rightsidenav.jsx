import { FcGoogle } from "react-icons/fc";
import { FaGithub,  FaFacebook, FaTwitter, FaInstagramSquare  } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const Rightsidenav = () => {
    return (
        <div>
            <div className="p-4">
                <h1 className="text-3xl font-semibold mb-4">Login With</h1>
                <button className="btn btn-outline w-full mb-2">
                    <FcGoogle className="text-3xl"></FcGoogle>
                    Login with google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub className="text-3xl"></FaGithub>
                    Login with github
                </button>
            </div>
            <h1 className="text-3xl font-semibold mb-4">Find Us On</h1>
            <div className="p-4">
                <a href="" className="flex items-center border text-lg p-4 rounded-t-lg gap-2">
                    <FaFacebook></FaFacebook>
                    <span>facebook</span>
                </a>
                <a href="" className="flex items-center border text-lg p-4 gap-2">
                    <FaTwitter></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a href="" className="flex items-center border text-lg p-4 rounded-b-lg gap-2">
                    <FaInstagramSquare></FaInstagramSquare>
                    <span>Instegram</span>
                </a>
            </div>
            <div className="bg-slate-100">
                <h1 className="text-3xl font-semibold mb-5">Q zone</h1>
                <img className="mx-auto" src={qZone1} alt="" />
                <img className="mx-auto" src={qZone2} alt="" />
                <img className="mx-auto" src={qZone3} alt="" />

            </div>
        </div>
    );
};

export default Rightsidenav;