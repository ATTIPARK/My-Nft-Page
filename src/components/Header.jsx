import { useState } from "react";
import { SiAcademia } from "react-icons/si";
import { BiWallet } from "react-icons/bi";
import { RiArrowDownSLine } from "react-icons/ri";
import { GoThreeBars } from "react-icons/go";
import { Link } from "react-router-dom";

const Header = ({ account, setAccount }) => {
  const [showAccount, setShowAccount] = useState(true);

  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickShowAccount = () => {
    setShowAccount(!showAccount);
  };

  return (
    <header className="flex justify-between bg-black">
      <div className="flex items-center font-bold">
        <Link to="/">
          <div className="flex items-center text-yellow-400 p-4 ml-2">
            <SiAcademia size={27} />
            <div className="ml-2 text-2xl max-lg:hidden">ATTI-BCS</div>
          </div>
        </Link>
        <div className="bg-black h-16 w-96 border-x-[1px] border-gray-500 ml-6 max-lg:hidden">
          <form className="w-full h-full">
            <input
              className="h-full pl-4 w-full bg-black text-white text-md focus:outline-none"
              type="text"
              placeholder="🔍 원하는 컬렉션 또는 아이템을 검색해주세요."
            />
          </form>
        </div>
        <button className="text-lg ml-6 text-gray-500 hover:text-white max-lg:hidden">
          Originals
        </button>
        <button className="text-lg ml-6 text-gray-500 hover:text-white max-lg:hidden">
          Collections
        </button>
      </div>
      <div className="flex items-center">
        <button className="text-xl mr-6 text-gray-500 font-bold max-lg:hidden">
          FAQ
        </button>
        <button className="font-bold mr-6 text-gray-500 flex items-center max-lg:hidden">
          KRW
          <RiArrowDownSLine size={16} />
        </button>
        {account ? (
          <>
            <button
              onClick={onClickShowAccount}
              className={`mr-4  font-bold rounded-full flex justify-center items-center ${
                showAccount
                  ? "h-9 w-9 bg-yellow-400 text-black"
                  : "py-2 px-4 bg-zinc-800 text-yellow-400"
              }`}
            >
              <BiWallet
                className={`${showAccount ? "inline-block" : "hidden"}`}
                size={25}
              />
              <div className={`${showAccount ? "hidden" : "inline-block"}`}>
                {account.substring(0, 4)}...
                {account.substring(account.length - 4)}
              </div>
            </button>
            <button className="mr-4 pl-[6px] font-bold rounded-full h-9 w-9 bg-zinc-800 text-white inline-block lg:hidden">
              <GoThreeBars size={25} />
            </button>
          </>
        ) : (
          <button
            onClick={onClickAccount}
            className="p-2 mr-6 bg-zinc-800 rounded-full ml-1 text-white flex items-center font-bold"
          >
            <div className="mr-2 h-6 w-6 bg-yellow-400 text-black rounded-full flex justify-center items-center">
              <BiWallet size={17} />
            </div>
            Connect
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
