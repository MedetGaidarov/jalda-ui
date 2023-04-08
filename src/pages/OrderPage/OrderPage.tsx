import React from 'react';
import OrdersList from '../components/OrdersList/OrdersList';
import styles from './OrdersPage.module.css';

const mockOrders = [
  // Add your mock data for orders here
];

const OrdersPage: React.FC = () => {
  return (
    <div className={styles.ordersPage}>
      <h1>Orders</h1>
      <OrdersList orders={mockOrders} />
    </div>
  );
};

export default OrdersPage;
