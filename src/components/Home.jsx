import { Link } from "react-router";

const Home = () => {
    return (
        <main className="home-page page-shell">
            <section className="home-hero">
                <div className="home-copy">
                    <p className="page-kicker">Fresh picks</p>
                    <h1>Discover meals you'll want to order again.</h1>
                    <p className="page-copy">
                        Browse a clean, simple food ordering experience with quick
                        navigation, helpful recommendations, and a warm, familiar look.
                    </p>

                    <div className="home-actions">
                        <Link className="filter-btn home-primary" to="/restaurants">
                            Browse Restaurants
                        </Link>
                        <Link className="home-secondary" to="/contact">
                            Contact Us
                        </Link>
                    </div>
                </div>

                <div className="home-panel">
                    <div className="home-panel-top">
                        <span className="home-live-dot"></span>
                        <span>Live city picks</span>
                    </div>

                    <div className="home-stats">
                        <div className="stat-card">
                            <strong>200+</strong>
                            <span>Restaurants</span>
                        </div>
                        <div className="stat-card">
                            <strong>4.3+</strong>
                            <span>Top rated</span>
                        </div>
                        <div className="stat-card">
                            <strong>30 min</strong>
                            <span>Fast delivery</span>
                        </div>
                    </div>

                    <div className="home-note">
                        Simple menus, clear filters, and the same orange-first style
                        throughout the app.
                    </div>
                </div>
            </section>

            <section className="home-features">
                <article className="info-card">
                    <h3>Quick browsing</h3>
                    <p>
                        Jump into restaurants with a lightweight interface that keeps
                        the focus on food.
                    </p>
                </article>
                <article className="info-card">
                    <h3>Easy decisions</h3>
                    <p>
                        Compare ratings, delivery time, and offers without extra noise.
                    </p>
                </article>
                <article className="info-card">
                    <h3>Consistent flow</h3>
                    <p>
                        The same layout language runs across the app so every page feels
                        connected.
                    </p>
                </article>
            </section>
        </main>
    );
};

export default Home;
