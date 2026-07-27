const Contact = () => {
    return (
        <section className="page-shell">
            <div className="page-hero">
                <p className="page-kicker">Contact</p>
                <h1>Let&apos;s talk about your next order or a support question.</h1>
                <p className="page-copy">
                    Reach out through the details below and we&apos;ll keep the process
                    quick and simple.
                </p>
            </div>

            <div className="contact-layout">
                <div className="info-card contact-card">
                    <h3>Contact details</h3>
                    <p>Email: support@foodapp.com</p>
                    <p>Phone: +91 98765 43210</p>
                    <p>Hours: Mon - Sat, 9:00 AM - 8:00 PM</p>
                </div>

                <div className="info-card contact-card">
                    <h3>Send a message</h3>
                    <form className="contact-form">
                        <input type="text" placeholder="Your name" />
                        <input type="email" placeholder="Your email" />
                        <textarea rows="5" placeholder="Write your message..." />
                        <button type="button" className="filter-btn">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
