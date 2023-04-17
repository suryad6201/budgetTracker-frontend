import { useState, useContext } from "react";
import { transactionContext } from "../context/TransactionContext/TransactionsContext";
import { accountContext } from "../context/AccountContext/AccountContext";
import { useParams } from "react-router-dom";

export default function DeleteTransaction() {
  const { id } = useParams();
  const { account } = useContext(accountContext);

  const fetchedData = account?.data?.transactions?.find(
    (data) => data.id === id
  );

  const { deleteTransactionAction, error } = useContext(transactionContext);
  const [formData, setFormData] = useState({
    name: fetchedData.name,
    transactionType: fetchedData.transactionType,
    amount: fetchedData.amount,
    category: fetchedData.category,
    notes: fetchedData.notes,
    color: fetchedData.color,
    date: fetchedData.date,
  });
  //handle form change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    deleteTransactionAction(id, { ...formData });
    window.location.href = `/account-details/${account?.data?.id}`;
  };

  return <></>;
}
