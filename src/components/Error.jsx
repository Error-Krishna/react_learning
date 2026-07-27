import { useRouteError } from "react-router";
import { Link } from "react-router";

const Error = () => {
    const err = useRouteError();
    const status = err?.status || 500;
    const statusText = err?.statusText || "Something went wrong";

    return (
        <div className="error-page">
            <div className="error-card">
                <p className="page-kicker">Error</p>
                <h1>Oops, we hit a rough edge.</h1>
                <h3>
                    {status}: {statusText}
                </h3>
                <p>
                    The page you tried to open could not be loaded. You can head back
                    to the home page and continue browsing.
                </p>
                <Link className="filter-btn error-link" to="/">
                    Go to Home
                </Link>
            </div>
        </div>
    );
};

export default Error;
