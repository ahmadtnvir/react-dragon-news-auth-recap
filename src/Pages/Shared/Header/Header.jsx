import logo from "../../../assets/logo.png";
import moment from 'moment';

const Header = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img className="" src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className="text-2xl">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;