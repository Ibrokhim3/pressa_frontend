import { useEffect, useState } from "react";

export const Option = ({ item: { category } }) => {
  return (
    <option className="option" value={category}>
      {category}
    </option>
  );
};
