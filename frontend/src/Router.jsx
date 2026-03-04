import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import PublicLayout from './layouts/PublicLayout.jsx';

import Login from './pages/LoginPage.jsx';

import UserLayout from './layouts/UserLayout.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';

import HRPage from './pages/HRPage/HRPage.jsx';
import MentorPage from './pages/MentorPage/MentorPage.jsx';
import NewInternsList from './components/InternsList/NewInternsList.jsx';
import UndergoingInternsList from './components/InternsList/UndergoingInternsList.jsx';
import CompletedInternsList from './components/InternsList/CompletedInternsList.jsx';
import CertifiedInternsList from './components/InternsList/CertifiedInternsList.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="login" element={<Login />} />
      </Route>

      {/* <Route path="/user/:userid">
        <Route path="mentor" element={<MentorPage />}>
          <Route path="interns">
            <Route index element={<NewInternsList />} />
            <Route path="new" element={<NewInternsList />} />
            <Route path="undergoing" element={<UndergoingInternsList />} />
            <Route path="completed" element={<CompletedInternsList />} />
          </Route>
        </Route>
        <Route path="hr" element={<HRPage />}>
          <Route path="interns">
            <Route index element={<NewInternsList />} />
            <Route path="new" element={<NewInternsList />} />
            <Route path="undergoing" element={<UndergoingInternsList />} />
            <Route path="completed" element={<CompletedInternsList />} />
            <Route path="certify" element={<CertifiedInternsList />} />
          </Route>
        </Route>
      </Route> */}

      <Route path="/user/:userid" element={<UserLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        {/* <Route path="interns" element={<Interns />} /> */}
        {/* <Route path="mentors" element={<Mentors />} /> */}
      </Route>
    </>,
  ),
);

export default router;
