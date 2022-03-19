import React from "react";

const dataArray = ["Angular", "React", "VueJS", "Flutter"];

type Props = {};

export default function StockPage({}: Props) {
  return (
    <>
      <ul>
        {dataArray.map((item, index) => (
          <li>
            {index + 1}. {item}
          </li>
        ))}
      </ul>
    </>
  );
}
