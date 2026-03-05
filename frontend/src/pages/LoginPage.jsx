import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Send login request to backend
    try {
      const response = await fetch(
        'https://intern-management-portal-api-backend.onrender.com/api/v1/auth/login',
        {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        },
      );

      // Check if the login was successful
      if (!response.ok) {
        throw new Error('Invalid credentials'); // Handle invalid login
      }

      const data = await response.json();

      // Print the entire response to the browser console
      // console.log('Login response:', data);

      // Store JWT token in localStorage (or a cookie)
      localStorage.setItem('accessToken', data.data.accessToken);
      localStorage.setItem('refreshToken', data.data.refreshToken);

      // Redirect based on role (hr or mentor)
      const user = data.data.user;

      localStorage.setItem('userRole', user.role); // set user role
      localStorage.setItem('userId', user._id); // set user id

      navigate(`/user/${user._id}/dashboard`);
    } catch (error) {
      setError(error.message); // Error message if login fails
    }
  };

  // Login as Demo Accounts
  const loginDemo = (role) => {
    if (role === 'hr') {
      setEmail('john.doe@company.com');
      setPassword('securePass!2025');
    } else {
      setEmail('alice.smith@company.com');
      setPassword('mentorPass1CSE!2025');
    }
  };

  return (
    <div className="from-background via-background to-secondary/20 flex min-h-screen items-center justify-center bg-linear-to-br px-4 py-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 text-center">
          <div className="bg-primary text-primary-foreground mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg text-2xl font-bold">
            IM
          </div>

          <h1 className="text-foreground mb-2 text-3xl font-bold">InternOps</h1>

          <p className="text-muted-foreground">Sign in to your account</p>
        </div>

        {/* Form Card */}
        <div className="bg-card border-border space-y-6 rounded-xl border p-8">
          <form className="space-y-4" onSubmit={handleLogin}>
            {/* Email */}
            <div className="space-y-2">
              <label className="text-foreground text-sm font-medium">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={email}
                onChange={handleChange}
                required
                className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary w-full rounded-lg border px-4 py-3 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-foreground text-sm font-medium">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={password}
                onChange={handleChange}
                required
                className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary w-full rounded-lg border px-4 py-3 focus:outline-none"
              />
            </div>

            {/* Error */}
            {error && <p className="text-sm text-red-500">{error}</p>}

            {/* Submit */}
            <button
              type="submit"
              className="bg-primary text-primary-foreground w-full cursor-pointer rounded-md px-4 py-3 text-base font-medium transition hover:opacity-90"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="border-border absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>

            <div className="relative flex justify-center text-sm">
              <span className="bg-card text-muted-foreground px-2">
                Or try demo accounts
              </span>
            </div>
          </div>

          {/* Demo Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => loginDemo('hr')}
              className="border-border hover:bg-secondary/50 flex cursor-pointer flex-col items-center gap-2 rounded-lg border px-4 py-4 transition"
            >
              <span className="text-2xl">👩‍💼</span>
              <span className="text-xs font-medium">HR Manager</span>
            </button>

            <button
              onClick={() => loginDemo('mentor')}
              className="border-border hover:bg-secondary/50 flex cursor-pointer flex-col items-center gap-2 rounded-lg border px-4 py-4 transition"
            >
              <span className="text-2xl">👨‍🏫</span>
              <span className="text-xs font-medium">Mentor</span>
            </button>
          </div>
        </div>

        {/* Back */}
        <div className="mt-8 text-center">
          <Link to="/">
            <button className="border-border hover:bg-muted w-full cursor-pointer rounded-md border px-4 py-2 text-sm font-medium transition">
              Back to Home
            </button>
          </Link>
        </div>

        {/* DEMO */}
        <div className="bg-card/50 border-border text-muted-foreground mt-8 space-y-2 rounded-lg border p-4 text-xs">
          <p className="text-foreground font-medium">Demo Credentials:</p>
          <div className="space-y-1">
            <p>HR: john.doe@company.com / securePass!2025</p>
            <p>Mentor: alice.smith@company.com / mentorPass1CSE!2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
