import { useState, useEffect } from "react";
import { createDonation, getDonations, deleteDonation } from "./api";

function App() {
  const [form, setForm] = useState({
    donorName: "",
    email: "",
    phone: "",
    itemType: "",
    quantity: "",
    address: "",
    pickupDate: "",
  });

  const [donations, setDonations] = useState([]);

  const fetchData = async () => {
    const res = await getDonations();
    setDonations(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createDonation(form);
    alert("Donation Submitted ✅");
    setForm({
      donorName: "",
      email: "",
      phone: "",
      itemType: "",
      quantity: "",
      address: "",
      pickupDate: "",
    });
    fetchData();
  };

  const handleDelete = async (id) => {
    await deleteDonation(id);
    fetchData();
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2 style={{ textAlign: "center" }}>Donation Form</h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input name="donorName" placeholder="Name" value={form.donorName} onChange={handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
        <input name="itemType" placeholder="Item Type" value={form.itemType} onChange={handleChange} />
        <input name="quantity" placeholder="Quantity" value={form.quantity} onChange={handleChange} />
        <input name="address" placeholder="Address" value={form.address} onChange={handleChange} />
        <input type="date" name="pickupDate" value={form.pickupDate} onChange={handleChange} />

        <button style={{ padding: "10px", background: "green", color: "white" }}>
          Submit
        </button>
      </form>

      <h2 style={{ textAlign: "center", marginTop: "30px" }}>All Donations</h2>

      {donations.map((d) => (
        <div
          key={d._id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            margin: "10px 0",
            background: "#f9f9f9",
            textAlign: "center",
          }}
        >
          <p><b>Name:</b> {d.donorName}</p>
          <p><b>Email:</b> {d.email}</p>
          <p><b>Phone:</b> {d.phone}</p>
          <p><b>Item:</b> {d.itemType}</p>
          <p><b>Quantity:</b> {d.quantity}</p>
          <p><b>Address:</b> {d.address}</p>
          <p><b>Date:</b> {new Date(d.pickupDate).toLocaleDateString()}</p>

          <button
            onClick={() => handleDelete(d._id)}
            style={{ background: "red", color: "white", padding: "6px 12px" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;