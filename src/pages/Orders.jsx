import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

export default function Orders() {
  const container = {
    width: "100%",
    minHeight: "100vh",
    background: "#f5f5f5",
    padding: "40px 20px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const card = {
    width: "100%",
    maxWidth: "1200px",
    background: "white",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  const title = {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "30px",
    color: "#111827",
  };

  const table = {
    width: "100%",
    borderCollapse: "collapse",
    borderRadius: "12px",
    overflow: "hidden",
  };

  const th = {
    background: "#f3f4f6",
    padding: "14px",
    fontSize: "15px",
    fontWeight: "600",
    textAlign: "left",
    color: "#111827",
    borderBottom: "1px solid #e5e7eb",
  };

  const td = {
    padding: "14px",
    fontSize: "15px",
    color: "#374151",
    borderBottom: "1px solid #e5e7eb",
  };

  const emptyRow = {
    textAlign: "center",
    padding: "20px",
    fontSize: "15px",
    color: "#6b7280",
  };

  return (
    <>
      <Navbar />

      <div style={container}>
        <div style={card}>
          <h1 style={title}>ORDER HISTORY</h1>

          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Order No</th>
                <th style={th}>Items</th>
                <th style={th}>Payment</th>
                <th style={th}>Status</th>
                <th style={th}>Total</th>
                <th style={th}>Action</th>
              </tr>
            </thead>

            <tbody>
              {/* When no orders */}
              <tr>
                <td colSpan="6" style={emptyRow}>
                  No orders yet ❗
                </td>
              </tr>

              {/* Example order (REMOVE once you integrate backend) */}
              {/* 
              <tr>
                <td style={td}>#12345</td>
                <td style={td}>3 Items</td>
                <td style={td}>Paid</td>
                <td style={td}>Delivered</td>
                <td style={td}>₹ 2499</td>
                <td style={td}>
                  <button
                    style={{
                      padding: "8px 12px",
                      borderRadius: "10px",
                      background: "#f97316",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
              */}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
}
