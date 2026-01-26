import React, { useState } from "react";

// Component for adding a new menu item
function AddMenuItem({ onAdd }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !img) return alert("Please fill all fields");
    onAdd({ name, price, img });
    setName("");
    setPrice("");
    setImg("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

// Main Admin Component
function Admin() {
  const [menu, setMenu] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editImg, setEditImg] = useState("");

  // Add new item
  const addItem = (item) => {
    setMenu([...menu, item]);
  };

  // Delete item
  const deleteItem = (index) => {
    const newMenu = menu.filter((_, i) => i !== index);
    setMenu(newMenu);
  };

  // Start editing item
  const startEdit = (index) => {
    setEditingIndex(index);
    setEditName(menu[index].name);
    setEditPrice(menu[index].price);
    setEditImg(menu[index].img);
  };

  // Save edited item
  const saveEdit = (index) => {
    const newMenu = [...menu];
    newMenu[index] = { name: editName, price: editPrice, img: editImg };
    setMenu(newMenu);
    cancelEdit();
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditName("");
    setEditPrice("");
    setEditImg("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      <h2>Add New Menu Item</h2>
      <AddMenuItem onAdd={addItem} />

      <h2>Menu List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {menu.map((item, index) => (
          <li key={index} style={{ marginBottom: "15px" }}>
            {editingIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <input
                  type="text"
                  value={editPrice}
                  onChange={(e) => setEditPrice(e.target.value)}
                />
                <input
                  type="text"
                  value={editImg}
                  onChange={(e) => setEditImg(e.target.value)}
                />
                <button onClick={() => saveEdit(index)}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </div>
            ) : (
              <div>
                <strong>{item.name}</strong> - {item.price}{" "}
                <img src={item.img} alt={item.name} width="50" />
                <button onClick={() => startEdit(index)}>Edit</button>
                <button onClick={() => deleteItem(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
