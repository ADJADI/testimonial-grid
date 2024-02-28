import React from "react";
import infoArray from "./infoArray";

export default function CommentPost() {
  const backgroundColor = [
    " hsl(263, 55%, 52%)",
    "hsl(217, 19%, 35%)",
    " hsl(0, 0%, 100%)",
    "hsl(219, 29%, 14%)",
    "hsl(0, 0%, 100%)",
  ];

  return (
    <div className="flex flex-col gap-5 p-5 pt-20 text-white xl:grid xl:grid-cols-4 xl:grid-rows-2 xl:gap-8 xl:p-5 xl:px-24">
      {infoArray.map((info, index) => (
        <div
          key={index}
          style={{
            backgroundColor: backgroundColor[index],
          }}
          className={`p-8 mr-3 rounded-lg flex flex-col gap-5 min-h-full relative xl:gap-3
            ${index === 0 || index === 3 ? "xl:col-span-2 " : ""} ${
            index === 2 ? "shadow-xl xl:row-end-3 text-darkBlue" : " "
          }  ${
            index === 4
              ? "shadow-xl xl:col-start-4 xl:row-start-1 xl:col-span-2 xl:row-span-2 text-darkBlue"
              : ""
          }`}
        >
          {index === 0 && (
            <svg
              width="104"
              height="102"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-5 top-0 z-0 xl:right-20 "
            >
              <path
                d="M104 102V59.727H84.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C95.01 25.86 98.909 22.257 104 19.375V0c-9.758 4.27-17.712 9.874-23.864 16.813-6.151 6.939-10.712 14.545-13.681 22.818C63.485 47.904 62 59.941 62 75.74V102h42zm-62 0V59.727H22.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C33.01 25.86 36.909 22.257 42 19.375V0c-9.652 4.27-17.58 9.874-23.784 16.813C12.01 23.752 7.424 31.358 4.455 39.631 1.485 47.904 0 59.941 0 75.74V102h42z"
                fill="#A775F1"
                fill-rule="nonzero"
              />
            </svg>
          )}
          <div className="flex items-center gap-5">
            <img
              src={info.url}
              alt=""
              className="rounded-full bg-white p-0.5 h-10"
            />
            <div className="flex flex-col">
              <h2 className="font-semibold z-50">{info.name}</h2>
              <h3 className="opacity-50">{info.status}</h3>
            </div>
          </div>

          <div className="font-semibold text-lg z-50">
            <p>{info.title}</p>
          </div>

          <div className="opacity-70 text-[16px] xl:pt-5">
            <p>{info.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
