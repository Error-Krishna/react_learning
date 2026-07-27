const Cart = () => {
    return (
        <main className="cart-page page-shell">
            <section className="page-hero cart-hero">
                <p className="page-kicker">Cart</p>
                <h1>Review your order before checkout.</h1>
                <p className="page-copy">
                    Keep track of what you&apos;ve added, check the total, and make
                    quick adjustments from one simple screen.
                </p>
            </section>

            <section className="cart-layout">
                <div className="cart-items-card">
                    <div className="cart-section-head">
                        <div>
                            <h2>Your Items</h2>
                            <p>2 items saved for checkout</p>
                        </div>
                        <span className="cart-badge">Saved for later</span>
                    </div>

                    <div className="cart-item">
                        <div className="cart-item-thumb cart-thumb-orange">
                            Veg
                        </div>
                        <div className="cart-item-info">
                            <h3>Margherita Pizza</h3>
                            <p>Classic cheese and tomato base</p>
                            <div className="cart-item-meta">
                                <span>Qty 1</span>
                                <span>15-20 mins</span>
                            </div>
                        </div>
                        <div className="cart-item-price">
                            <strong>449</strong>
                            <button type="button">Remove</button>
                        </div>
                    </div>

                    <div className="cart-item">
                        <div className="cart-item-thumb cart-thumb-cream">
                            New
                        </div>
                        <div className="cart-item-info">
                            <h3>Paneer Wrap</h3>
                            <p>Spiced paneer with fresh veggies</p>
                            <div className="cart-item-meta">
                                <span>Qty 1</span>
                                <span>10-15 mins</span>
                            </div>
                        </div>
                        <div className="cart-item-price">
                            <strong>299</strong>
                            <button type="button">Remove</button>
                        </div>
                    </div>

                    <div className="cart-note">
                        Tip: add a drink or dessert to complete the meal.
                    </div>
                </div>

                <aside className="cart-summary-card">
                    <h2>Order Summary</h2>

                    <div className="summary-row">
                        <span>Item total</span>
                        <strong>748</strong>
                    </div>
                    <div className="summary-row">
                        <span>Delivery fee</span>
                        <strong>29</strong>
                    </div>
                    <div className="summary-row">
                        <span>Taxes and charges</span>
                        <strong>42</strong>
                    </div>

                    <div className="summary-total">
                        <span>To pay</span>
                        <strong>819</strong>
                    </div>

                    <button type="button" className="checkout-btn">
                        Proceed to Checkout
                    </button>

                    <div className="coupon-box">
                        <span>Apply coupon</span>
                        <p>Use a promo code before placing your order.</p>
                    </div>
                </aside>
            </section>

            <section className="cart-reco">
                <div className="cart-section-head">
                    <div>
                        <h2>You may also like</h2>
                        <p>Quick add-ons to finish the order</p>
                    </div>
                </div>

                <div className="cart-reco-grid">
                    <article className="cart-reco-card">
                        <h3>Cold Coffee</h3>
                        <p>Refreshing drink to pair with your meal</p>
                        <span>129</span>
                    </article>
                    <article className="cart-reco-card">
                        <h3>Chocolate Brownie</h3>
                        <p>Warm dessert with a rich finish</p>
                        <span>149</span>
                    </article>
                    <article className="cart-reco-card">
                        <h3>Garlic Bread</h3>
                        <p>Simple side that fits any order</p>
                        <span>99</span>
                    </article>
                </div>
            </section>
        </main>
    );
};

export default Cart;
