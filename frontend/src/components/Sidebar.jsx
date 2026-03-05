import { useState, useEffect, useMemo } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import DashboardIcon from './ui/DashboardIcon';
import UserIcon from './ui/UsersIcon';
import LogoutIcon from './ui/LogoutIcon';

export default function Sidebar() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const userRoute = user?._id ? `/user/${user._id}` : '';
  const navItems = useMemo(
    () => [
      { name: 'Dashboard', path: 'dashboard', icon: DashboardIcon },
      { name: 'Interns', path: 'interns', icon: UserIcon },
      ...(user?.role === 'hr'
        ? [{ name: 'Mentors', path: 'mentors', icon: UserIcon }]
        : []),
    ],
    [user],
  );

  // Handle Logout
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('accessToken');

      const response = await fetch(
        'https://intern-management-portal-api-backend.onrender.com/api/v1/auth/logout',
        {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.ok) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        navigate('/login');
      } else {
        console.error('Logout failed');
      }
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  // Fetch User Data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          'https://intern-management-portal-api-backend.onrender.com/api/v1/auth/current-user',
          {
            method: 'GET',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        const data = await response.json();
        if (data?.data?.user) {
          setUser(data.data.user);
        } else {
          console.error('User ID not found in response:', data);
        }
      } catch (error) {
        console.error('❌ Error:', error.message);
      }
    };

    fetchUserData();
  }, []);

  return (
    <aside className="bg-sidebar border-sidebar-border flex h-screen w-64 flex-col border-r">
      {/* LOGO */}
      <div className="border-sidebar-border border-b p-6">
        <NavLink
          className="flex items-center gap-3"
          to={`${userRoute}/dashboard`}
        >
          <div className="bg-sidebar-primary flex h-10 w-10 items-center justify-center rounded-lg font-bold text-white">
            IM
          </div>
          <div>
            <h2 className="text-sidebar-foreground font-bold">InternOps</h2>
            <p className="text-sidebar-accent-foreground text-xs">
              {user?.role == 'hr' ? 'HR Manager' : 'Mentor'}
            </p>
          </div>
        </NavLink>
      </div>

      {/* NAVBAR */}
      <nav className="flex-1 space-y-2 p-4">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={`${userRoute}/${item.path}`}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                isActive
                  ? 'bg-sidebar-primary text-white'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent'
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* LOGGED-IN INFO & LOGOUT Btn */}
      <div className="border-sidebar-border space-y-4 border-t p-4">
        <div className="bg-sidebar-accent rounded-lg p-3">
          <p className="text-sidebar-accent-foreground text-xs">Logged in as</p>
          <p className="text-sidebar-foreground font-medium">{user.fullName}</p>
          <p className="text-sidebar-accent-foreground text-xs">{user.email}</p>
        </div>
        <button
          className="text-sidebar-foreground hover:bg-sidebar-accent flex w-full cursor-pointer items-center gap-2 rounded-lg px-4 py-2 font-medium transition-colors"
          onClick={handleLogout}
        >
          <LogoutIcon />
          Logout
        </button>
      </div>
    </aside>
  );
}
