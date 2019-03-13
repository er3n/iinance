import React from "react";
import styled from "styled-components";
import { View, Text, Button } from "react-native";

const Content = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: stretch;
  background-color: #f5fcff;
`;

const Summary = styled(Text)`
  flex: 1;
  text-align: center;
  border: 1px solid black;
`;

const Transactions = styled(View)`
  flex: 10;
  text-align: center;
  align-items: center;
  border: 1px solid black;
`;

const Operations = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border: 1px solid black;
  justify-content: center;
`;

const Income = styled.Button`
  flex: 1;
  text-align: center;
  background-color: red;
  color: red;
`;

const Expense = styled(Button)`
  flex: 1;
  text-align: center;
  width: 50%;
`;

export default function HomePage() {
  return (
    <Content>
      <Summary>Summary</Summary>
      <Transactions>
        <Text>Transactions</Text>
      </Transactions>
      <Operations>
        <Income title="Income">Income</Income>
        <Expense title="Expense">Expense</Expense>
      </Operations>
    </Content>
  );
}
