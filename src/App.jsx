import React, { useState } from "react";

import styled from "styled-components";

import DataForm from "./components/DataForm";
import DataLists from "./components/DataLists";
import DataRatio from "./components/DataRatio";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

let id = 0;
const App = () => {
  const [data, setData] = useState([
    // {
    //   id: 0,
    //   title: "ex1",
    //   content: "sasdjnkasldjsalkdajsldsajdsadsadsadsadsadsadsa",
    //   score: 5,
    //   // date: new Date().toLocaleDateString("en-kr", {
    //   //   weekday: "long",
    //   //   year: "numeric",
    //   //   month: "short",
    //   //   day: "numeric",
    //   // }),
    //   date: new Date().toLocaleString(),
    // },
    // {
    //   id: 1,
    //   title: "ex2",
    //   content: "sasdjnkasldjsalkdajsldsajdwqewqewqewqe",
    //   score: 3,
    //   date: new Date().toLocaleString(),
    // },
    // {
    //   id: 2,
    //   title: "ex3",
    //   content: "sasdjnkasldjsalkdajsldsajdqwewqeqw",
    //   score: 2,
    //   date: new Date().toLocaleString(),
    // },
  ]);

  // data추가, content는 객체형태
  const PlusContent = (content) => {
    let newData = {
      id: id++,
      date: new Date().toLocaleString(),
      ...content,
    };
    // 업데이트된 데이터가 맨위로감
    localStorage.setItem("key", JSON.stringify([newData, ...data]));
    setData([newData, ...data]);
  };
  // data 제거
  const filteringData = (id) => {
    const filterdata = data.filter((item) => item.id !== id);

    localStorage.setItem("key", JSON.stringify([...filterdata]));
    setData(filterdata);
  };
  // 데이터 수정
  const onEdit = (id, newItem) => {
    let editdata = data.map((item) => {
      if (item.id === id) {
        return newItem;
      } else {
        return item;
      }
    });

    setData(editdata);
    localStorage.setItem("key", JSON.stringify([...editdata]));
  };

  let datas = "";
  console.log("ok: ", localStorage.getItem("key"));
  console.log("ok: ", localStorage.getItem("key") === null);
  if (localStorage.getItem("key") === null) {
    datas = data;
  } else {
    datas = JSON.parse(localStorage.getItem("key"));
  }
  console.log("22: ", datas);
  // let datas = localStorage.getItem("key");
  return (
    <Container>
      <DataForm onAdd={PlusContent} />
      <DataRatio data={datas} />

      <DataLists data={datas} onDelete={filteringData} onEdit={onEdit} />
    </Container>
  );
};

export default App;

// 참고
// 날짜:https://www.freecodecamp.org/korean/news/how-to-format-dates-in-javascript/
