import React, { useState } from 'react';
import api from '../services/api';

const Auth = ({ mode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const { name, email, password, role } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post(`/auth/${mode}`, formData);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      {mode === 'register' && (
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="Name"
        />
      )}
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Password"
      />
      {mode === 'register' && (
        <select name="role" value={role} onChange={onChange}>
          <option value="">Select Role</option>
          <option value="Charity">Charity</option>
          <option value="Vendor">Vendor</option>
          <option value="DeliveryPerson">Delivery Person</option>
        </select>
      )}
      <button type="submit">{mode === 'register' ? 'Register' : 'Login'}</button>
    </form>
  );
};

export default Auth;
