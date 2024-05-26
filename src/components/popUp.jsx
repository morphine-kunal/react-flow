/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const PopUp = ({ message, type }) => {
  const [showPopUp, setShowPopUp] = useState(true);

  useEffect(() => {
    setShowPopUp(true); // Show the popup when the message changes
    const timer = setTimeout(() => {
      setShowPopUp(false);
    }, 5000);

    // Cleanup the timeout when the component is unmounted or message changes
    return () => clearTimeout(timer);
  }, [message]); // Reset the popup when message changes

  return (
    showPopUp && (
      <div
        className={`absolute top-0 left-1/2 transform -translate-x-1/2 z-50 ${
          type === "error"
            ? "bg-red-400 border-red-600"
            : "bg-green-400 border-green-600"
        } p-4 border rounded`}
      >
        <p className="text-sm font-semibold">{message}</p>
      </div>
    )
  );
};

export default PopUp;
