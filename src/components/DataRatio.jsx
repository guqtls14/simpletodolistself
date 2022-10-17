import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 562px;
  margin: 0 auto;
`;

const DataRatio = ({ data }) => {
  const positivedata = data.filter((item) => item.score >= 3);
  const negativedata = data.filter((item) => item.score < 3);
  return (
    <Container>
      <div>전체 데이터수: {data.length}</div>
      <div>긍정의 데이터수:{positivedata.length}</div>
      <div>부정의 데이터수:{negativedata.length}</div>
    </Container>
  );
};

export default DataRatio;
