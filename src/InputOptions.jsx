import React from "react";

function InputOptions({ Icon, color, title }) {
  return (
    <div className="flex items-center mt-4 text-gray-500 p-3 cursor-pointer hover:bg-gray-100 hover:rounded-lg">
      <Icon style={{ color: color }} />
      <h4 className="ml-2">{title}</h4>
    </div>
  );
}

export default InputOptions;
