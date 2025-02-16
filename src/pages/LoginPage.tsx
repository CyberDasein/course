import { useState } from "react";
import Input from "../components/Input";
import { useAuth } from "../context/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";

export const Login = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from || "/"

  const [formData, setFormData] = useState({
    password: "",
    name: "alexey"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth.signin(formData, () => {
      navigate(from);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Имя"
        type="text"
        name="name"
        placeholder="введите имя"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        error=""
      />
      <button type="submit">Войти</button>
    </form>
  );
};

