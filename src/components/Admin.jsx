import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [reservations, setReservations] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    loadReservations();
    loadContacts();
    loadSubscribers();
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
      .get("http://localhost:5000/api/subscribers")
      .then(res => setSubscribers(Array.isArray(res.data) ? res.data : []))
      .catch(() => console.log("Failed to load subscribers"));
  };

  const unreserveTable = (tableNumber) => {
    if (!window.confirm("Cancel reservation?")) return;
    axios
      .delete(`http://localhost:5000/api/admin/${tableNumber}`)
      .then(loadReservations);
  };

  const deleteContact = (id) => {
    if (!window.confirm("Delete message?")) return;
    axios
      .delete(`http://localhost:5000/api/contact/admin/${id}`)
      .then(loadContacts);
  };

  return (
    <div style={page}>
      <div style={container}>
        <h1 style={title}>☕ Sakhe Cafe – Admin Dashboard</h1>
        <p style={subtitle}>Manage subscribers, reservations & messages</p>

        {/* ================= SUBSCRIBERS ================= */}
        <Section title="📧 Subscribers" color="#0ea5e9">
          {subscribers.length === 0 ? (
            <Empty text="No subscribers yet" />
          ) : (
            subscribers.map((s, i) => (
              <Card key={s._id}>
                <strong style={{ color: "#0ea5e9" }}>
                  {i + 1}. {s.email}
                </strong>
                <small style={muted}>
                  Joined: {new Date(s.createdAt).toLocaleString()}
                </small>
              </Card>
            ))
          )}
        </Section>

        {/* ================= RESERVATIONS ================= */}
        <Section title="📅 Reservations" color="#22c55e">
          {reservations.length === 0 ? (
            <Empty text="No reservations" />
          ) : (
            reservations.map(r => (
              <Card key={r._id} row>
                <div>
                  <strong style={{ color: "#22c55e" }}>
                    Table {r.tableNumber}
                  </strong>
                  <div>{r.name}</div>
                  <small style={muted}>{r.date} • {r.time}</small>
                </div>
                <button style={dangerBtn} onClick={() => unreserveTable(r.tableNumber)}>
                  unreserveTable
                </button>
              </Card>
            ))
          )}
        </Section>

        {/* ================= CONTACTS ================= */}
        <Section title="📩 Contact Messages" color="#f59e0b">
          {contacts.length === 0 ? (
            <Empty text="No contact messages" />
          ) : (
            contacts.map(c => (
              <Card key={c._id} row>
                <div>
                  <strong style={{ color: "#f59e0b" }}>{c.name}</strong>
                  <small style={muted}>{c.email}</small>
                  <p style={{ marginTop: 6 }}>{c.message}</p>
                </div>
                <button style={dangerBtn} onClick={() => deleteContact(c._id)}>
                  Delete
                </button>
              </Card>
            ))
          )}
        </Section>
      </div>
    </div>
  );
};

/* ================= REUSABLE UI ================= */

const Section = ({ title, color, children }) => (
  <div style={{ marginBottom: 50 }}>
    <h2 style={{ ...sectionTitle, color }}>{title}</h2>
    {children}
  </div>
);

const Card = ({ children, row }) => (
  <div
    style={{
      ...card,
      flexDirection: row ? "row" : "column",
      alignItems: row ? "center" : "flex-start"
    }}
  >
    {children}
  </div>
);

const Empty = ({ text }) => (
  <p style={{ color: "#6b7280", textAlign: "center" }}>{text}</p>
);

/* ================= STYLES ================= */

const page = {
  minHeight: "100vh",
  paddingTop: 120,
  background: "linear-gradient(135deg,#f8fafc,#eef2ff)",
  paddingInline: 20
};

const container = {
  maxWidth: 900,
  margin: "auto"
};

const title = {
  textAlign: "center",
  fontSize: 32,
  fontWeight: "bold"
};

const subtitle = {
  textAlign: "center",
  color: "#6b7280",
  marginBottom: 40
};

const sectionTitle = {
  fontSize: 22,
  marginBottom: 16
};

const card = {
  display: "flex",
  justifyContent: "space-between",
  gap: 12,
  padding: 18,
  marginBottom: 14,
  background: "#ffffff",
  borderRadius: 14,
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
};

const muted = {
  display: "block",
  fontSize: 13,
  color: "#6b7280",
  marginTop: 4
};

const dangerBtn = {
  background: "#ef4444",
  color: "#fff",
  border: "none",
  padding: "8px 14px",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: "bold"
};

export default AdminPanel;