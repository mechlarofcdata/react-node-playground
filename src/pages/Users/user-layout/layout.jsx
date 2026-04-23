import { Outlet } from "react-router-dom";
import Header from './header/headers';

// layout functional component
function UserLayout() {
  return (
    <>
      <Header />
      {/* Outlet : react router for nested children */}
      <Outlet />   
    </>
  );
}

export default UserLayout;