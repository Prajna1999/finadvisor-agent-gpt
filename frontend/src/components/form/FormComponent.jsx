import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { createExpense } from '../../api/v1/transaction';

function FormComponent() {
  // const [form, setForm] = useState({
  //   amount: '',
  //   transactionType: '',
  //   category: '',
  //   description: '',
  //   date: ''
  // });

  // const navigate = useNavigate();

  // const handleChange = (event) => {
  //   setForm({ ...form, [event.target.name]: event.target.value });
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   await createExpense(form.amount, form.transactionType, form.category, form.description, form.date);
  //   navigate('/dashboard');
  // };

  return (
    <Form onSubmit={handleSubmit} style={{
      backgroundColor: "#fdfdfd",
      minWidth: "max-content",
      padding: "16px",
      borderRadius: "4px",
      width: "480px",
      boxShadow: "-1px -1px 11px 0px rgba(0,0,0,0.75)"
    }}>
      <Form.Group className="mb-3">
        <Form.Label>Amount</Form.Label>
        <Form.Control name="amount" type="text" placeholder="Enter amount" value={form.amount} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Transaction</Form.Label>
        <Form.Select name="transactionType" aria-label="Default select example" value={form.transactionType} onChange={handleChange}>
          <option>Transaction</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select name="category" aria-label="Default select example" value={form.category} onChange={handleChange}>
          <option>Category</option>
          <option value="entertainment">Entertainment</option>
          <option value="food">Grocery</option>
          <option value="travel">Travel</option>
          <option value="education">Education</option>
          <option value="subscription">Subscription</option>
          <option value="miscellanous">Miscellaneous</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control name="description" type="text" placeholder="Enter description" value={form.description} onChange={handleChange} />
        <Form.Text  muted>
          Add a small note
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        <Form.Control name="date" type="date" value={form.date} onChange={handleChange} />
        <Form.Text  muted>
          Date of transaction
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit" style={{ marginRight: "8px" }}>
        Save Transaction
      </Button>

      <Button variant="secondary">
        Cancel
      </Button>
    </Form>
  );
}

export default FormComponent;
