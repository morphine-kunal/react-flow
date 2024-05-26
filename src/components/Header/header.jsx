/* eslint-disable react/prop-types */

// created header with a save changes button which will run the OnSave function comming from props..
const Header = ({ onSave }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-20">
      <nav className="bg-gray-200">
        <div className=" p-4 flex justify-end items-center max-w-[90%] mx-auto">
          <button
            className="bg-transparent border-2 border-blue-700 rounded px-5 font-semibold py-1 text-blue-700"
            onClick={onSave}
          >
            Sava Changes
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
