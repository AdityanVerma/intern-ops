import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <div className="from-background via-background to-secondary/20 font-geist min-h-screen bg-linear-to-br">
      <header className="border-border flex items-center justify-between border-b px-8 py-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-primary text-primary-foreground flex h-10 w-10 cursor-default items-center justify-center rounded-lg font-bold transition hover:opacity-80">
            IM
          </div>
          <span className="text-xl font-bold text-gray-900">InternOps</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Link to="/login">
            <button className="cursor-pointer rounded-md border border-gray-300 px-4 py-2 text-sm font-medium transition hover:bg-gray-100">
              Sign In
            </button>
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-8 py-20">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="mb-6 text-5xl leading-tight font-bold md:text-6xl">
              Manage Internships with Ease
            </h1>

            <p className="text-muted-foreground mb-8 max-w-xl text-lg leading-relaxed">
              Streamline your internship program with powerful tools for HR
              managers and mentors. Track progress, manage assignments, and
              foster growth.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/login">
                <button className="bg-primary text-primary-foreground rounded-md px-8 py-3 text-lg font-medium transition hover:opacity-80">
                  Get Started
                </button>
              </Link>

              <button className="rounded-md border border-gray-300 px-8 py-3 text-lg font-medium transition hover:bg-gray-100">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Glow Background */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-gray-400 to-gray-300 opacity-40 blur-3xl"></div>

            {/* Card */}
            <div className="bg-card border-border relative rounded-2xl border p-8 shadow-sm">
              <div className="space-y-6">
                {/* Row 1 */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                    <span className="text-xl">📊</span>
                  </div>

                  <div className="flex-1">
                    <div className="mb-2 h-3 w-24 rounded bg-gray-300"></div>
                    <div className="h-2 w-40 rounded bg-gray-200"></div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                    <span className="text-xl">👥</span>
                  </div>

                  <div className="flex-1">
                    <div className="mb-2 h-3 w-24 rounded bg-gray-300"></div>
                    <div className="h-2 w-40 rounded bg-gray-200"></div>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                    <span className="text-xl">✅</span>
                  </div>

                  <div className="flex-1">
                    <div className="mb-2 h-3 w-24 rounded bg-gray-300"></div>
                    <div className="h-2 w-40 rounded bg-gray-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-border border-t px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-4xl font-bold">
            Powerful Features for Every Role
          </h2>

          <p className="text-muted-foreground mx-auto mb-16 max-w-2xl text-center">
            Whether you're managing the program or mentoring interns, we have
            the tools you need.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* HR Card */}
            <div className="bg-card border-border rounded-xl border p-8 transition hover:border-gray-400 hover:shadow-md">
              <div className="mb-4 text-5xl">👨‍💼</div>

              <h3 className="mb-3 text-xl font-bold">For HR Managers</h3>

              <p className="text-muted-foreground">
                Full oversight of all interns, mentor assignments, analytics,
                and program management.
              </p>
            </div>

            {/* Mentor Card */}
            <div className="bg-card border-border rounded-xl border p-8 transition hover:border-gray-400 hover:shadow-md">
              <div className="mb-4 text-5xl">👨‍🏫</div>

              <h3 className="mb-3 text-xl font-bold">For Mentors</h3>

              <p className="text-muted-foreground">
                Track your assigned interns, monitor progress, provide feedback,
                and guide growth.
              </p>
            </div>

            {/* Analytics Card */}
            <div className="bg-card border-border rounded-xl border p-8 transition hover:border-gray-400 hover:shadow-md">
              <div className="mb-4 text-5xl">📈</div>

              <h3 className="mb-3 text-xl font-bold">Real-time Analytics</h3>

              <p className="text-muted-foreground">
                Comprehensive dashboards with key metrics and insights at a
                glance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-8 py-20">
        <div className="bg-card border-border rounded-xl border p-8 md:p-12">
          <h3 className="mb-6 text-2xl font-bold">Demo Access</h3>

          <p className="text-muted-foreground mb-8">
            Try the platform with these demo credentials:
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* HR Account */}
            <div className="border-border rounded-lg border p-6">
              <h4 className="mb-3 flex items-center gap-2 font-bold">
                👩‍💼 HR Manager Account
              </h4>

              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Email:</span>
                  <code className="bg-muted ml-2 rounded px-2 py-1 font-sans">
                    hr@internship.com
                  </code>
                </div>

                <div>
                  <span className="text-muted-foreground">Password:</span>
                  <code className="bg-muted ml-2 rounded px-2 py-1 font-sans">
                    hr123
                  </code>
                </div>
              </div>
            </div>

            {/* Mentor Account */}
            <div className="border-border rounded-lg border p-6">
              <h4 className="mb-3 flex items-center gap-2 font-bold">
                👨‍🏫 Mentor Account
              </h4>

              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Email:</span>
                  <code className="bg-muted ml-2 rounded px-2 py-1 font-sans">
                    mentor@internship.com
                  </code>
                </div>

                <div>
                  <span className="text-muted-foreground">Password:</span>
                  <code className="bg-muted ml-2 rounded px-2 py-1 font-sans">
                    mentor123
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <Link to="/login">
              <button className="bg-primary text-primary-foreground cursor-pointer rounded-md px-8 py-3 text-lg font-medium transition hover:opacity-80">
                Sign In Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default LandingPage;
