import React, { useState } from "react";
import styled from "styled-components";

const H1 = styled.h1`
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 562px;
  padding: 10px 0px;
  margin-bottom: 30px;
`;

const LabelContainer = styled.div`
  display: flex;
  margin-top: 20px;

  padding: 20px;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
`;

const DataForm = ({ onAdd }) => {
  const [state, setState] = useState({
    content: "",
    title: "",
    attitude: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onButton = () => {
    if (state.content.length < 10) {
      alert("내용을 10글자 이상 입력하시오");
    } else if (state.title.length < 5) {
      alert("제목을 5글자 이상 입력하시오");
    } else if (state.attitude.length < 0) {
      alert("점수를 입력하시오");
    } else {
      onAdd({
        content: state.content,
        title: state.title,
        score: state.attitude,
      });
      alert("저장 성공");
      setState({
        content: "",
        title: "",
        attitude: "",
      });
    }
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  let formlength =
    state.content.length !== 0 &&
    state.title.length !== 0 &&
    state.attitude.length !== 0
      ? true
      : false;
  return (
    <section>
      <H1>오늘의 일기</H1>
      <Form onSubmit={onSubmit}>
        <Input name="title" value={state.title} onChange={handleChange} />
        <textarea
          name="content"
          value={state.content}
          onChange={handleChange}
          id="text"
          placeholder="Write your content"
          rows="9"
          cols="68"
        />
        <LabelContainer>
          <label htmlFor="emotionscore">오늘의 감정점수: </label>

          <select
            name="attitude"
            value={state.attitude}
            id="emotionscore"
            placeholder="Name"
            onChange={handleChange}
          >
            <option value="">--점수를 입력하세요--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </LabelContainer>
        <button type="submit" onClick={onButton} disabled={!formlength}>
          일기 저장하기
        </button>
      </Form>
    </section>
  );
};

export default DataForm;
