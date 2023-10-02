import moment from 'moment';

const Header = () => {
    return (
        <div className="text-center pt-3">
            <h2 className="font-bold text-4xl">The Dragon News</h2>
            <p className="font-normal text-lg mt-4 mb-2 text-[#706F6F]">Journalism Without Fear or Favour</p>
            <h5 className="text-[#403F3F] font-medium text-xl">{moment().format("dddd, MMMM d, YYYY")}</h5>
        </div>
    );
};

export default Header;