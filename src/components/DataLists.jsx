import React from "react";
import { Ul } from "./styles";

import DataItem from "./DataItem";

const DataLists = ({ data, onDelete, onEdit }) => {
  const items = data.map((item) => {
    return (
      <>
        <DataItem
          key={`Item_${item.id}`}
          {...item}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      </>
    );
  });
  return (
    <>
      <Ul>{items}</Ul>;
    </>
  );
};

export default DataLists;
