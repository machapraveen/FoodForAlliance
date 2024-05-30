// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const res = await api.get('/tickets');
      setTickets(res.data);
    };
    fetchTickets();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket._id}>
            {ticket.type} - {ticket.foodType} - {ticket.quantity}kg
            {ticket.status === 'Pending' && (
              <button onClick={() => acceptTicket(ticket._id)}>Accept</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const acceptTicket = async id => {
  try {
    await api.put(`/tickets/${id}`);
    // Update the state after accepting the ticket
  } catch (err) {
    console.error(err.response.data);
  }
};

export default Dashboard;
