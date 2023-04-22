import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';

import styled from "styled-components";
import OverViewComponent from "./OverViewComponent";
import TransactionsComponent from "./TransactionsComponent";

const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  padding: 10px 22px;
  font-size: 18px;
  width: 360px;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
  font-size: 25px;
  font-weight: bold;
`;

const FinanceTracker = () => {
    const [transactions, updateTransaction] = useState([]);
    const [expense, updateExpense] = useState(0);
    const [income, updateIncome] = useState(0);

    const calculateBalance = () => {
        let exp = 0;
        let inc = 0;
        transactions.map((payload) =>
            payload.type === "EXPENSE"
                ? (exp = exp + payload.amount)
                : (inc = inc + payload.amount),
        );
        updateExpense(exp);
        updateIncome(inc);
    };
    useEffect(() => calculateBalance(), [transactions]);

    const addTransaction = (payload) => {
        const transactionArray = [...transactions];
        transactionArray.push(payload);
        updateTransaction(transactionArray);
    };
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            className="whiteBox"
            sx={{ minHeight: "85vh" }}
        >
            <Container>
                <Header>Finance Tracker</Header>
                <OverViewComponent
                    expense={expense}
                    income={income}
                    addTransaction={addTransaction}
                />
                {transactions?.length ? (
                    <TransactionsComponent transactions={transactions} />
                ) : (
                    ""
                )}
            </Container>
        </Grid>
    );
};
export default FinanceTracker;
