import { Link, useRouteError } from "react-router-dom";


const Error = () => {
  const error = useRouteError();

  return (
    <>
      <div className="place-items-center text-center">
        <h1>There is nothing here</h1>
        <p className="alert alert-warning">{error.statusText || error?.message}</p>
        <p>
          <Link to="/" className="font-bold">
            Go Home
          </Link>
        </p>
      </div>
    </>
  );
};

export default Error;
