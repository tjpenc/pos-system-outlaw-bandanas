import getItems from '../../api/itemData';
import renderOrderDetailsPage from '../pages/orderDetailsPage';
import getOrders from '../../../.github/orderData';
import { showOrders, createOrderPage } from '../pages/viewOrdersPage';
import renderHomePage from '../pages/homePage';

const navEvents = (user) => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    if (e.target.id.includes('itemDetails')) {
      getItems().then((data) => {
        console.warn(data);
        renderOrderDetailsPage(data);
      });

      if (e.target.id.includes('go-home')) {
        renderHomePage(user);
      }
      if (e.target.id.includes('nav-view-orders')) {
        console.warn('nav view orders clicked');
        createOrderPage();
        getOrders().then(showOrders);
      }

      if (e.target.id.includes('go-home')) {
        renderHomePage(user);
      }
    }
  });
};

export default navEvents;
