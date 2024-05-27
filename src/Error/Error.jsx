import { Link, useRouteError } from "react-router-dom";


const Error = () => {
  const error = useRouteError();

  return (
    <>
      <div className="jumbotron" style={{textAlign:"center", paddingTop:"100px"}}>
        <h1>There is nothing here</h1>
        <p className="alert alert-warning">{error.statusText || error?.message}</p>
        <p>
          <Link to="/" className="">
            Go back to home page
          </Link>
        </p>
      </div>
    </>
  );
};

export default Error;
