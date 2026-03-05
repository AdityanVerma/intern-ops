import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

function UserLayout() {
  // const navPath = `/user/${user._id}/`;

  return (
    <div className="bg-background min-h-screen">
      <Sidebar />

      <main className="flex flex-col lg:ml-64">
        <Outlet />
      </main>
    </div>
  );
}

export default UserLayout;
