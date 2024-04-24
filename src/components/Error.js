import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const errObj = useRouteError();
  const { status, statusText } = errObj;
  console.log(errObj);
  return (
    <div className="error-container">
      <h1>{status}</h1>
      <h2>{status === 404 ? `Page ${statusText}` : statusText}</h2>
      {status === 404 ? (
        <div className="error-btn-container">
          <p>
            The page you are looking for is not available at this moment. Please
            go back to home page.
          </p>
          <Link to="/"><button>Go Back To Home</button></Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Error;
