import moment from 'moment';
import logo from '../../../../assets/logo.png'

const Header = () => {
    return (
        <div className='text-center'>
            <img src={logo} alt="" className='mx-auto'/>
            <p className='text-lg font-normal'>Journalism Without Fear or Favour</p>
            <p className='text-lg font-normal'>{moment().format("dddd, MMMM D, YYYY,")}</p>
        </div>
    );
};

export default Header;