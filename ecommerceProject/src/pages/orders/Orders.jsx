import { usePageMeta } from "../../hooks/usePageMeta";
import { OrderGrid } from "./OrderGrid";
import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import "./Orders.css";

export function Orders({ cart, loadCart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrdersData = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };
    fetchOrdersData();
  }, []);

  usePageMeta("Orders", "/orders-favicon.png");

  return (
    <>
      <Header cart={cart} />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrderGrid orders={orders} loadCart={loadCart} />
      </div>
    </>
  );
}
