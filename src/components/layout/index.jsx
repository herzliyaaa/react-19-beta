// components/layout.js

import Sidebar from "../common/sidebar";

// PageLayout is a higher-order component (HOC) that wraps another component
// eslint-disable-next-line react/prop-types
const PageLayout = (Component) => (props) => {
  return (
    <div className="container flex row h-screen w-screen">
      <div className="w-1/12">
        <Sidebar />
      </div>
      <div className="w-11/12">
        <Component {...props} /> {/* Ensure Component is correctly rendered */}
      </div>
    </div>
  );
};

export default PageLayout;
