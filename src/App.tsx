import React from 'react';
import { Resizable } from 'react-resizable';
import { Link } from 'react-router-dom';

function Main() {
  const [width, setWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [height, setHeight] = React.useState(typeof window !== 'undefined' ? window.innerHeight : 0);
  
  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Resizable width={width} height={height}>
      <div className="flex flex-col mx-auto w-full bg-white max-w-[100vw]">
        <div className="flex flex-col justify-center py-10 w-full bg-zinc-300">
          <div className="flex gap-5 justify-between mt-36 mb-20 w-full">
            <img
              loading="lazy"
              srcSet="/LegoLens/images/leftarrow.svg"
              className="shrink-0 aspect-square w-[15vw]"
            />
            <img
              loading="lazy"
              srcSet="/LegoLens/images/rightarrow.svg"
              className="shrink-0 aspect-square w-[15vw]"
            />
          </div>
        </div>
        <div className="flex flex-col px-8 py-6 w-full bg-yellow-400 shadow-sm">
          <div className="flex gap-5 justify-between">
            <Link to="/scan">
            <div className="flex justify-center items-center px-8 bg-red-700 rounded-full border-2 border-black border-solid h-[30vw] stroke-[2vw] w-[30vw]">
                <img
                  loading="lazy"
                  srcSet="/LegoLens/images/camera.svg"
                  className="aspect-square w-[22.5vw]"
                />
            </div>
            </Link>
            <Link to="/browse">
            <div className="flex justify-center items-center px-8 bg-green-600 rounded-full border-2 border-black border-solid h-[30vw] stroke-[2vw] w-[30vw]">
                <img
                  loading="lazy"
                  srcSet="/LegoLens/images/set.svg"
                  className="aspect-square w-[22.5vw]"
                />
            </div>
            </Link>
          </div>
          <div className="flex gap-5 justify-between mt-8">
          <Link to="/myset">
            <div className="flex justify-center items-center px-8 bg-blue-700 rounded-full border-2 border-black border-solid h-[30vw] stroke-[2vw] w-[30vw]">
              <img
                loading="lazy"
                srcSet="/LegoLens/images/user.svg"
                className="aspect-square w-[22.5vw]"
              />
            </div>
            </Link>
            <div className="flex justify-center items-center px-8 rounded-full border-2 border-black border-solid bg-yellow-400 bg-opacity-80 h-[30vw] stroke-[2vw] w-[30vw]">
              <img
                loading="lazy"
                srcSet="/LegoLens/images/tripledot.svg"
                className="aspect-square w-[22.5vw]"
              />
            </div>
          </div>
        </div>
      </div>
    </Resizable>   
  );
}

export default Main;