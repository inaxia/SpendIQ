import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';

import OverViewComponent from "./OverViewComponent";
import TransactionsComponent from "./TransactionsComponent";

import PlutosLogo from "../../../assets/images/PlutosLogo.png";
import Logo from "../../../assets/images/Logo.png";

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
  font-size: 25px;
  font-weight: bold;
`;

const FinanceTracker = () => {
    const [transactions, updateTransaction] = useState([]);
    const [expense, updateExpense] = useState(0);
    const [income, updateIncome] = useState(0);
    const [coins, setCoins] = useState(23);

    const navigate = useNavigate();

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
        if(payload.amount > 0) {
            let coin = Math.floor(payload.amount / 100);
            setCoins((prev) => prev+coin);
        }
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
            <Grid item>
                {(coins>=25) && 
                    <a href="https://corover.plutos.one/" target="_blank">
                        <Alert variant="filled" severity="success" sx={{margin: "15px"}}>Claim amazing offers in return of your SpendIQ coins with PlutosOne!</Alert>
                    </a>
                }

                {(income-expense>0) && 
                    <Alert variant="filled" severity="success" sx={{margin: "15px"}} onClick={() => navigate("/pages/dashboard")}>Let your money work for you. Check investment stocks now!</Alert>
                }

                <Container style={{width: "auto"}}>
                    <Header>Finance Tracker</Header>
                    <OverViewComponent
                        expense={expense}
                        income={income}
                        coins={coins}
                        addTransaction={addTransaction}
                    />
                    {transactions?.length ? (
                        <TransactionsComponent transactions={transactions} />
                    ) : (
                        ""
                    )}
                </Container>
            </Grid>
        </Grid>
    );
};
export default FinanceTracker;
