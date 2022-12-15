import { useEffect } from "react";
import { useState } from "react"
import { Table } from "react-bootstrap"
import { getAllTransactions } from "../../../utils/transaction.utils";
import TransactionCell from "./TransactionCell";

function Transactions() {
    const [transactions, setTransactions] = useState([]);
    
    useEffect(() => {
        getAllTransactions().then((res) => {
            setTransactions(res);
        })
    },[])
    return (
        <>
            <h3 className="text-center">
                Transactions table
            </h3>
            <Table bordered hover>
                <thead className="bg-secondary text-white">
                    <tr>
                        <th>#</th>
                        <th>Customer Information</th>
                        <th>TransactionId</th>
                        <th>Status</th>
                        <th>Total price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map((transaction,index ) => {
                            return <TransactionCell transaction={transaction} index = {index+1} key={transaction.id}/>
                        })
                    }
                </tbody>
            </Table>
        </>

    )
}

export default Transactions