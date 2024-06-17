import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // replace with the path to your logo

const Header = () => {
  return (
    <nav className="flex justify-between items-center bg-[#201b50]  bg-opacity-50  h-28 p-2 relative">
      <ul className="flex  justify-center gap-4 items-center w-[100%]">
        <li>
          <Link
            className="text-[#ffffff] font-bold text-lg hover:bg-[#e8b34b] p-2 rounded"
            to="/winners"
          >
            الفائزون في المسابقه
          </Link>
        </li>
        <li>
          <Link
            className="text-[#ffffff] font-bold text-lg hover:bg-[#e8b34b] p-2 rounded"
            to="/"
          >
            الرئيسيه
          </Link>
        </li>
      </ul>
      <div className="flex justify-center items-center absolute top-0 right-0 ">
        <img className="h-28" src={logo} alt="Logo" />
      </div>
    </nav>
  );
};

export default Header;

/*<header className="relative bg-[#f0ebe5] p-6 text-center overflow-hidden">
      <div className="absolute top-0 left-30px w-[40%] h-[100px]">
        <svg
          width="300"
          height="92"
          viewBox="0 0 1524 332"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_2)">
            <path
              d="M38.1 -12.45C386.981 -12.45 612.603 -12.45 1268.5 -12.45C743.072 110.611 568.258 186.237 38.1 257V-12.45Z"
              fill="#25244C"
            />
            <path
              d="M64.5583 294.65C679.5 177 683.5 177 1406 -5.375L1270.5 6L657 161.5L30.1625 294.65H64.5583Z"
              fill="#CAA151"
            />
            <path
              d="M44.45 332C895 199.5 899.5 204 1524 1.5H1435L875 159.5L672.5 204L462.975 243.5L44.45 332Z"
              fill="#299552"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_2">
              <rect width="1524" height="332" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="relative z-10">
        <div className="absolute right-0 top-[-10px] border-t-2 border-secondary w-1/2">
          <div className="absolute top-0 translate-y-[-50%] right-0 w-4 h-4 bg-secondary rounded-full"></div>{" "}
          <div className="absolute top-0 translate-y-[-50%] left-0 w-4 h-4 bg-secondary rounded-full"></div>{" "}
        </div>{" "}
        <div className="absolute right-0 bottom-[-10px] border-b-2 border-secondary w-2/3">
          <div className="absolute top-0 translate-y-[-50%] right-0 w-4 h-4 bg-secondary rounded-full"></div>{" "}
          <div className="absolute top-0 translate-y-[-50%] left-0 w-4 h-4 bg-secondary rounded-full"></div>{" "}
        </div>{" "}
        <h1 className="text-2xl font-bold text-primary">
          المسابقة الثقافية لطلبة الكلية
        </h1>
        <p className="mt-1 text-textDark">بمناسبة موسم الحج لعام 1445 هـ</p>
      </div>
    </header>*/