import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="flex p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
        <div className="text-linkedin-blue mr-2">
          <FiberManualRecordIcon className="text-sm" />
        </div>

        <div className="flex-1">
          <h4 className="text-sm mb-1">{heading}</h4>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="sticky top-20 flex-0.2 bg-white rounded-lg h-fit pb-3 ml-3 shadow-sm lg:order-3 order-3">
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <h2 className="text-base font-medium">LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Inder Singh Negi is back", "Top news - 9909 readers")}
      {newsArticle("React 19 released", "Trending in web dev")}
      {newsArticle("AI is taking over", "Tech - 12k readers")}
      {newsArticle("Jobs in 2025", "Career - 4.5k readers")}
      {newsArticle("How to use Tailwind", "Frontend - 8.2k readers")}
    </div>
  );
}

export default Widgets;
