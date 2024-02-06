import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <div className="h-screen bg-gradient-to-b from-[#2C3E50] to-[#bdc3c7] flex flex-col justify-center items-center">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Error 404</title>
        </Helmet>
        <h2 className="text-5xl font-semibold">Error 404</h2>
        <p className="mt-3 text-2xl"> This page not available </p>
        <p className="mt-3 text-2xl"> try in another page </p>
      </div>
    </>
  );
};

export default NotFound;
