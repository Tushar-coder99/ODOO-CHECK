import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedUser =
      JSON.parse(localStorage.getItem("user")) || {
        name: "Guest User",
        email: "guest@example.com",
      };

    const storedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const storedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setUser(storedUser);
    setOrders(storedOrders);
    setWishlist(storedWishlist);
  }, []);

  return (
    <section className="profilePage">
      <div className="profileCard">
        <h1 className="profileTitle">Profile</h1>
        {user && (
          <div className="profileInfo">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        )}

        <div className="profileActions">
          <Link to="/orders" className="primaryBtn">
            View All Orders
          </Link>
          <Link to="/wishlist" className="secondaryBtn">
            View Wishlist
          </Link>
        </div>
      </div>

      <div className="profileSection">
        <h2>Recent Orders</h2>
        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          <ul className="profileList">
            {orders.slice(0, 3).map((order) => (
              <li key={order.id} className="profileListItem">
                <div>
                  <span className="profileBadge">#{order.id}</span>
                  <span>{order.items?.length || 0} items</span>
                </div>
                <div>
                  <strong>₹{order.total}</strong>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="profileSection">
        <h2>Wishlist</h2>
        {wishlist.length === 0 ? (
          <p>No items in wishlist.</p>
        ) : (
          <ul className="profileList">
            {wishlist.slice(0, 4).map((item) => (
              <li key={item._id} className="profileListItem">
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Profile;
