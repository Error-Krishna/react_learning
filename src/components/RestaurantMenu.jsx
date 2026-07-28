import { Link, useLocation, useParams } from "react-router";
import { getRestaurantDetail } from "../utils/mockRestaurantDetails";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const location = useLocation();
    const restaurant = getRestaurantDetail(resId, location.state?.restaurant);

    return (
        <main className="menu-page page-shell">
            <section className="page-hero menu-hero">
                <div className="menu-hero-copy">
                    <p className="page-kicker">Restaurant details</p>
                    <h1>{restaurant.name}</h1>
                    <p className="page-copy">{restaurant.description}</p>

                    <div className="menu-hero-chips">
                        {restaurant.cuisines.map((cuisine) => (
                            <span className="menu-chip" key={cuisine}>
                                {cuisine}
                            </span>
                        ))}
                    </div>

                    <div className="menu-hero-meta">
                        <span>⭐ {restaurant.avgRating}</span>
                        <span>🕒 {restaurant.deliveryTime} mins</span>
                        <span>{restaurant.costForTwo}</span>
                        <span>{restaurant.area}</span>
                    </div>

                    <div className="menu-hero-actions">
                        <Link className="filter-btn" to="/restaurants">
                            Back to restaurants
                        </Link>
                        <span className="menu-route-id">Restaurant ID: {resId}</span>
                    </div>
                </div>

                <div className="menu-hero-banner">
                    <img
                        src={restaurant.image}
                        alt={restaurant.name}
                    />

                    <div className="menu-hero-overlay">
                        <div className="menu-hero-overlay-card">
                            <p>{restaurant.offerLabel}</p>
                            <strong>{restaurant.offerText}</strong>
                        </div>
                    </div>
                </div>
            </section>

            <section className="menu-layout">
                <div className="menu-main">
                    {restaurant.menuSections.map((section) => (
                        <article className="menu-section" key={section.title}>
                            <div className="menu-section-head">
                                <div>
                                    <h2>{section.title}</h2>
                                    <p>{section.subtitle}</p>
                                </div>
                                <span className="menu-section-badge">
                                    {section.items.length} items
                                </span>
                            </div>

                            <div className="menu-items">
                                {section.items.map((item) => (
                                    <div className="menu-item" key={item.name}>
                                        <div className="menu-item-copy">
                                            <div className="menu-item-topline">
                                                <span className="menu-item-type">
                                                    {item.type}
                                                </span>
                                                {item.badge ? (
                                                    <span className="menu-item-badge">
                                                        {item.badge}
                                                    </span>
                                                ) : null}
                                            </div>
                                            <h3>{item.name}</h3>
                                            <p>{item.description}</p>
                                        </div>

                                        <div className="menu-item-price">
                                            <strong>{item.price}</strong>
                                            <button type="button">Add</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

                <aside className="menu-sidebar">
                    <div className="menu-summary-card">
                        <h2>Restaurant summary</h2>

                        <div className="menu-summary-grid">
                            <div className="menu-summary-stat">
                                <span>Rating</span>
                                <strong>{restaurant.avgRating}</strong>
                            </div>
                            <div className="menu-summary-stat">
                                <span>Delivery</span>
                                <strong>{restaurant.deliveryTime} mins</strong>
                            </div>
                            <div className="menu-summary-stat">
                                <span>Cost for two</span>
                                <strong>{restaurant.costForTwo}</strong>
                            </div>
                            <div className="menu-summary-stat">
                                <span>Area</span>
                                <strong>{restaurant.area}</strong>
                            </div>
                        </div>

                        <div className="menu-summary-note">
                            <span>Offer</span>
                            <p>{restaurant.offerText}</p>
                        </div>
                    </div>

                    <div className="menu-trust-card">
                        <h3>Why people order here</h3>
                        <ul>
                            {restaurant.highlights.map((highlight) => (
                                <li key={highlight}>{highlight}</li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </section>
        </main>
    );
};

export default RestaurantMenu;
