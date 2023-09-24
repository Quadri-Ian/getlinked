// components/LogosAndLines.js
import React from 'react';
import Image from 'next/image';

const LogosAndLines = () => {
  return (
    <div className=" container border border-[v] bg-[150E28] backdrop-opacity-10  backdrop-blur-md p-4">
      <div className="top-row">
        <div className="logo-container">
          <Image width={60} height={60} src="/logo1.png" alt="Logo 1" />
        </div>
        <div className="line-vertical"></div>
        <div className="logo-container">
          <Image width={60} height={60} src="/logo2.png" alt="Logo 2" />
        </div>
        <div className="line-vertical"></div>
        <div className="logo-container">
          <Image width={60} height={60} src="/logo3.png" alt="Logo 3" />
        </div>
      </div>
      <div className="horizontal-line"></div>
      <div className="flex">
        <div className='h-1 w-6 bg-white'></div>
        <div className='h-1 w-6 bg-white'></div>
        <div className='h-1 w-6 bg-white'></div>
      </div>
      <div className="bottom-row">
        <div className="logo-container">
          <Image width={60} height={60} src="/logo4.png" alt="Logo4" />
        </div>
        <div className="line-vertical"></div>
        <div className="logo-container">
          <Image width={60} height={60} src="/logo5.png" alt="Logo5" />
        </div>
        <div className="line-vertical"></div>
        <div className="logo-container">
          <Image width={60} height={60} src="/logo6.png" alt="Logo6" />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
        }

        .top-row,
        .bottom-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-container {
          position: relative;
        }

        .line-vertical {
          width: 1px;
          height: 60px;
          background-color: white; /* Change the line color to white */
        }


        }
      `}</style>
    </div>
  );
};

export default LogosAndLines;
