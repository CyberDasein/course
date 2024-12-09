// @ts-nocheck
import Input from './Input';
import { useState } from "react";

const Signup = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    nickname: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
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
        label="Имя"
        placeholder="Введите имя"
        name="name"
        value={formData.name}
        onChange={handleChange}
        size='l'
      />
      <Input
        label="Ник"
        name="nickname"
        size="lg"
        error="enter nickname"
        value={formData.nickname}
        onChange={handleChange}
        icon={
          <span role="img" aria-label="icon">
            👤
          </span>
        } // Пример иконки
      />
      <Input
        label="Почта"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <div>
        <label>
          Пол:
          <div className='flex'>
            <label>
              Мужчина
              <Input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />
            </label>
            <label>
              Женщина
              <Input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />
            </label>
          </div>
        </label>
      </div>
      <Input
        label="Пароль"
        type="password"
        name="password"
        radius='lg'
        value={formData.password}
        onChange={handleChange}
        disabled={true}
      />
      <Input
        label="Повторите пароль"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default Signup;
