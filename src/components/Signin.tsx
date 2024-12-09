// @ts-nocheck
import { useState } from "react";
import Input from "./Input";


const Signin = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="введите почту"
        description="Описание поля"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        error="error text"
      />
      <button type="submit">Войти</button>
    </form>
  );
};

export default Signin;
