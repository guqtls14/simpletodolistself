import React, { useState } from "react";
import { Li, BTN } from "./styles";

const DataItem = ({ onEdit, onDelete, id, content, date, score, title }) => {
  const [newdata, setNewData] = useState(content);
  const [bool, setBool] = useState(false);

  const isBool = () => {
    setBool(!bool);
  };

  const onClickOk = (id, score) => {
    setBool(!bool);
    onEdit(id, {
      id,
      content: newdata,
      date: new Date().toLocaleString(),
      score,
    });
  };

  const handleQuitEdit = () => {
    setBool(false);
    setNewData(content);
  };

  //   지우기전 확인
  const handleClickRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onDelete(id);
    }
  };

  return (
    <Li>
      <h1>{title}</h1>
      {!bool ? (
        <p>{content}</p>
      ) : (
        <textarea onChange={(e) => setNewData(e.target.value)}>
          {newdata}
        </textarea>
      )}
      <p>{score}</p>
      <p>{date}</p>
      {!bool ? (
        <BTN onClick={() => isBool()}>수정</BTN>
      ) : (
        <BTN onClick={() => onClickOk(id, score)}>확인</BTN>
      )}
      {!bool ? (
        <BTN onClick={handleClickRemove}>삭제</BTN>
      ) : (
        <BTN onClick={handleQuitEdit}>취소</BTN>
      )}
    </Li>
  );
};

export default DataItem;
