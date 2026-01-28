import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [reservations, setReservations] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [subscriberCount, setSubscriberCount] = useState(0);

  useEffect(() => {
    loadReservations();
    loadContacts();
    loadSubscribers();

    // 🔄 refresh subscriber count every 5 seconds
    const interval = setInterval(loadSubscribers, 5000);
    return () => clearInterval(interval);
  }, []);

  const loadReservations = () => {
    axios
      .get("http://localhost:5000/api/admin")
      .then(res => setReservations(res.data))
      .catch(() => alert("Failed to load reservations"));
  };

  const loadContacts = () => {
    axios
      .get("http://localhost:5000/api/contact/admin")
      .then(res => setContacts(res.data))
      .catch(() => alert("Failed to load contacts"));
  };

  const loadSubscribers = () => {
    axios
      .get("http://localhost:5000/api/subscribers/count")
      .then(res => setSubscriberCount(res.data.total))
      .catch(() => console.log("Failed to load subscribers"));
  };

  const unreserveTable = (tableNumber) => {
    if (!window.confirm("Cancel reservation?")) return;

    axios
      .delete(`http://localhost:5000/api/admin/${tableNumber}`)
      .then(loadReservations)
      .catch(() => alert("Failed"));
  };

  const deleteContact = (id) => {
    if (!window.confirm("Delete message?")) return;

    axios
      .delete(`http://localhost:5000/api/contact/admin/${id}`)
      .then(loadContacts)
      .catch(() => alert("Failed"));
  };

  return (
    <div style={{ minHeight: "100vh", paddingTop: 120 }}>
      <div style={{ maxWidth: 900, margin: "auto" }}>
        <h2 style={{ textAlign: "center" }}>
          ☕ Sakhe Cafe – Admin Dashboard
        </h2>

        {/* 🔢 LIVE SUBSCRIBER COUNT */}
        <div
          style={{
            margin: "30px 0",
            padding: 20,
            borderRadius: 14,
            background: "#ecfeff",
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold"
          }}
        >
          📧 Total Subscribers: {subscriberCount}
        </div>

        {/* RESERVATIONS */}
        <h3>📅 Reservations</h3>
        {reservations.length === 0 ? (
          <p>No reservations</p>
        ) : (
          reservations.map(r => (
            <div key={r._id} style={cardStyle}>
              <div>
                <b>Table {r.tableNumber}</b><br />
                {r.name}<br />
                {r.date} – {r.time}
              </div>
              <button onClick={() => unreserveTable(r.tableNumber)}>
                Cancel
              </button>
            </div>
          ))
        )}

        <hr style={{ margin: "40px 0" }} />

        {/* CONTACTS */}
        <h3>📩 Contact Messages</h3>
        {contacts.length === 0 ? (
          <p>No contact messages</p>
        ) : (
          contacts.map(c => (
            <div key={c._id} style={cardStyle}>
              <div>
                <b>{c.name}</b><br />
                {c.email}<br />
                {c.message}
              </div>
              <button onClick={() => deleteContact(c._id)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const cardStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: 16,
  marginBottom: 12,
  background: "#f9fafb",
  borderRadius: 12
};

export default AdminPanel;