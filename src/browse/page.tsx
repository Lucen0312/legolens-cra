import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const legoSetsData = [
  {
    "id": "45681",
    "name": "Spike Prime Expansion Set",
    "pieces": 528,
    "image": "/LegoLens/images/spike-1.png"
  },
  {
    "id": "45682",
    "name": "Lego Technic Bugatti Chiron",
    "pieces": 3599,
    "image": "/LegoLens/images/bugatti-chiron.png"
  },
  {
    "id": "45683",
    "name": "Lego Star Wars Millennium Falcon",
    "pieces": 7541,
    "image": "/LegoLens/images/millennium-falcon.png"
  }
];

const SetFinder = (): JSX.Element => {
    const navigate = useNavigate();
    const [legoSets, setLegoSets] = useState<{ id: string; name: string; pieces: number; image: string; }[]>([]);

    useEffect(() => {
      setLegoSets(legoSetsData);
    }, []);
    
    return (
    <div className="relative w-[393px] h-[852px] bg-white overflow-hidden">
      <div className="absolute w-[393px] h-[110px] top-0 left-0 bg-[#00a84f]">
        <div className="absolute w-[65px] h-[65px] top-[22px] left-[7px] bg-white rounded-[32.5px]">
        <img 
            className="absolute w-[60px] h-[60px] top-[3px] left-[3px]" 
            alt="Undo" 
            src="/LegoLens/images/undo.svg" 
            onClick={() => navigate('/')}
        />
        </div>
        <div className="absolute w-[300px] h-[65px] top-[22px] left-[83px] bg-white rounded-[20px]">
        <img 
            className="absolute w-[50px] h-[50px] top-[8px] left-[238px]" 
            alt="Search"
        />
        </div>
      </div>
      <div className="absolute w-[397px] h-[942px] top-[110px] left-0">
        {legoSets.map((set, index) => (
          <div key={set.id} className={`w-[393px] top-[${471*index}px] absolute h-[471px] left-0`}>
            <div className="relative h-[471px]">
              <img
                className="absolute w-[393px] h-[271px] top-0 left-0 object-cover"
                alt={set.name}
                src={set.image}
              />
              <div className="absolute w-[393px] h-[471px] top-0 left-0 bg-[#d9d9d9] opacity-40" />
            </div>
            <img className="absolute w-[393px] h-[11px] top-[468px] left-0" alt="Line" src="line-2.svg" />
            <div className="absolute w-[271px] h-[19px] top-[354px] left-[53px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              {set.name}
            </div>
            <div className="absolute w-[68px] h-[19px] top-[381px] left-[53px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              {set.id}
            </div>
            <div className="absolute w-[113px] h-[19px] top-[405px] left-[53px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              {set.pieces} Pieces
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SetFinder;