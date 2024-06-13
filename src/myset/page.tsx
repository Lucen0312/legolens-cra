// Import the useNavigate hook from react-router-dom
import { useNavigate } from 'react-router-dom';

const MySets = (): JSX.Element => {
    // Use the useNavigate hook to get access to the navigate function
    const navigate = useNavigate();

    return (
    <div className="w-[393px] h-[852px] bg-white">
      <div className="relative h-[110px] bg-[#0047ff]">
        <div className="absolute w-[65px] h-[65px] top-[22px] left-[7px] bg-white rounded-[32.5px]">
        <img 
            className="absolute w-[60px] h-[60px] top-[3px] left-[3px]" 
            alt="Undo" 
            src="/LegoLens/images/undo.svg" 
            onClick={() => navigate('/')} // Use navigate to navigate
        />
        </div>
        <div className="absolute w-[300px] h-[65px] top-[22px] left-[83px] bg-white rounded-[20px]">
        <img 
            className="absolute w-[50px] h-[50px] top-[8px] left-[238px]" 
            alt="Search" 
            src="/LegoLens/images/search.svg" 
        />
          <div className="absolute w-[182px] h-[32px] top-[16px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#00000066] text-[36px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Search...
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySets;