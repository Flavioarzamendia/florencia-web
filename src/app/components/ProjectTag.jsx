import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-black border-pink-500"
    : "text-gray-500 border-purple-500 hover:border-purple-600";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 md:text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;