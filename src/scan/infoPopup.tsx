import { useState, useEffect } from "react";
import axios from "axios";

interface PieceData {
  part_img_url: string;
  name: string;
  design_id: string;
  element_id: string;
  rebrickable_url: string;
}

const InfoPopup = (): JSX.Element => {
  const [pieceData, setPieceData] = useState<PieceData | null>(null);

  useEffect(() => {
    const apiKey = 'b28a21d50bb2c27c9c4adcaca8fc588c';
    const url = 'https://rebrickable.com/api/v3/lego/elements/6244914/';

    axios
      .get(url, {
        headers: {
          'Accept': 'application/json',
          'Authorization': `key ${apiKey}`
        }
      })
      .then(response => {
        setPieceData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
      });
  }, []);

  return (
    <div className="w-[350px] h-[500px] bg-white">
      <div className="relative h-[500px] bg-[#ffcf00] rounded-[30px]">
        <div className="absolute w-[300px] h-[200px] top-[25px] left-[25px] bg-white rounded-[5px]">
          <div className="absolute w-[124px] h-[39px] top-[62px] left-[86px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-xs text-center tracking-[0] leading-[normal]">
            {pieceData ? <img src={pieceData.part_img_url} alt="Piece" /> : "Image of the Piece"}
          </div>
        </div>
        <div className="absolute w-[300px] h-[170px] top-[243px] left-[25px] bg-white rounded-[5px]">
          <div className="absolute w-[300px] h-[131px] top-[39px] left-0">
            <div className="absolute w-[106px] h-[19px] top-0.5 left-6 [font-family:'Inter-Medium',Helvetica] font-medium text-black text-xs text-center tracking-[0] leading-[normal]">
              {pieceData ? pieceData.name : "Lego Piece Name"}
            </div>
            <div className="absolute w-[106px] h-4 top-1 left-[175px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-xs text-center tracking-[0] leading-[normal]">
              {pieceData ? pieceData.design_id : "Lego Design ID"}
            </div>
            <div className="absolute w-[106px] h-4 top-[67px] left-[23px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-xs text-center tracking-[0] leading-[normal]">
              {pieceData ? pieceData.element_id : "Lego Element ID"}
            </div>
            <div className="absolute w-[106px] h-4 top-[67px] left-[175px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-xs text-center tracking-[0] leading-[normal]">
              {pieceData ? <a href={pieceData.rebrickable_url} target="_blank" rel="noopener noreferrer">Rebrickable Link</a> : "Rebrickable Link"}
            </div>
            <div className="absolute w-[300px] h-[131px] top-0 left-0">
              <img className="w-px h-[131px] top-0 left-[149px] absolute object-cover" alt="Line" src="line-8.svg" />
              <img className="w-[300px] h-px top-[66px] left-0 absolute object-cover" alt="Line" src="line-9.svg" />
            </div>
          </div>
          <div className="absolute w-[124px] h-[25px] top-1.5 left-1.5 [font-family:'Inter-Bold',Helvetica] font-bold text-black text-xl text-center tracking-[0] leading-[normal]">
            Information
          </div>
          <img className="w-[300px] h-px top-[38px] left-0 absolute object-cover" alt="Line" src="line-7.svg" />
        </div>
        <div className="absolute w-[50px] h-[50px] top-[430px] left-[150px] bg-[#d01012] rounded-[25px]" />
        <div className="left-4 absolute w-[130px] h-16 top-[423px]">
          <div className="absolute w-16 h-16 top-0 left-0 bg-[#ffcf00]">
            <div className="relative w-11 h-11 top-2.5 left-2.5 bg-[#ffcf00] rounded-[22px] shadow-[2px_4px_2px_#0000001a,inset_2px_2px_2px_#ffffff33]">
              <div className="h-11 bg-[#ffffff1a] rounded-[22px]" />
            </div>
          </div>
          <div className="absolute w-16 h-16 top-0 left-16 bg-[#ffcf00]">
            <div className="relative w-11 h-11 top-2.5 left-2.5 bg-[#ffcf00] rounded-[22px] shadow-[2px_4px_2px_#0000001a,inset_2px_2px_2px_#ffffff33]">
              <div className="h-11 bg-[#ffffff1a] rounded-[22px]" />
            </div>
          </div>
        </div>
        <div className="left-[204px] absolute w-[130px] h-16 top-[423px]">
          <div className="absolute w-16 h-16 top-0 left-0 bg-[#ffcf00]">
            <div className="relative w-11 h-11 top-2.5 left-2.5 bg-[#ffcf00] rounded-[22px] shadow-[2px_4px_2px_#0000001a,inset_2px_2px_2px_#ffffff33]">
              <div className="h-11 bg-[#ffffff1a] rounded-[22px]" />
            </div>
          </div>
          <div className="absolute w-16 h-16 top-0 left-16 bg-[#ffcf00]">
            <div className="relative w-11 h-11 top-2.5 left-2.5 bg-[#ffcf00] rounded-[22px] shadow-[2px_4px_2px_#0000001a,inset_2px_2px_2px_#ffffff33]">
              <div className="h-11 bg-[#ffffff1a] rounded-[22px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPopup;
