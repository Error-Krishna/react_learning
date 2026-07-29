import User from "./User"
import UserClass from "./UserClass";
const About = () => {
    return (
        <section className="page-shell">
            <div className="page-hero">
                <p className="page-kicker">About Us</p>
                <h1>Fresh food, fast service, and a simple ordering flow.</h1>
                <p className="page-copy">
                    We built this app to keep the experience easy: browse restaurants,
                    compare options quickly, and get to checkout without extra noise.
                </p>
            </div>

            <div className="page-grid">
                <article className="info-card">
                    <h3>What we focus on</h3>
                    <p>
                        Clear menus, helpful filters, and a clean interface that keeps
                        the user journey straightforward.
                    </p>
                </article>

                <article className="info-card">
                    <h3>How we work</h3>
                    <p>
                        We keep the product lightweight and consistent with the existing
                        UI so every screen feels connected.
                    </p>
                </article>

                <article className="info-card">
                    <h3>Why it matters</h3>
                    <p>
                        A simple layout helps users move faster and makes the experience
                        feel familiar from page to page.
                    </p>
                </article>
                <UserClass name={"Krishna Goyal"} location={"kolkata"}/>
            </div>
        </section>
        
    );
};

export default About;


