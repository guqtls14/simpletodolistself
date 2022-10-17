import React from "react";
import { Ul } from "./styles";

import DataItem from "./DataItem";

const DataLists = ({ data, onDelete, onEdit }) => {
  //   const [newdata, setNewData] = useState();
  //   const [bool, setBool] = useState(false);

  //   const isBool = () => {
  //     setBool(!bool);
  //   };

  //   const onClickOk = (id, score) => {
  //     setBool(!bool);
  //     onEdit(id, {
  //       id,
  //       content: newdata,
  //       date: new Date().toLocaleString(),
  //       score,
  //     });
  //   };

  const items = data.map((item) => {
    return (
      <>
        <DataItem key={item.id} {...item} onDelete={onDelete} onEdit={onEdit} />
      </>
    );

    // 이렇게 하면 안됨!!!
    // 분리시 컴포넌트에 key로 구분을해야 컴포넌트가 구별됨, 분리한상태에서 해당컴포넌트에서 key를해도 의미x

    // return (
    //   <Li key={id}>
    //     <h1>{title}</h1>
    //     {!bool ? (
    //       <p>{content}</p>
    //     ) : (
    //       <textarea onChange={(e) => setNewData(e.target.value)}>
    //         {newdata}
    //       </textarea>
    //     )}
    //     <p>{score}</p>
    //     <p>{date}</p>
    //     {!bool ? (
    //       <BTN onClick={() => isBool()}>수정</BTN>
    //     ) : (
    //       <BTN onClick={() => onClickOk(id, score)}>확인</BTN>
    //     )}
    //     {!bool ? (
    //       <BTN onClick={() => onDelete(id)}>삭제</BTN>
    //     ) : (
    //       <BTN onClick={() => isBool()}>취소</BTN>
    //     )}
    //   </Li>
    // );
  });
  return (
    <>
      <Ul>{items}</Ul>;
    </>
  );
};

export default DataLists;
