import { useState } from 'react';
import { XCircleIcon } from '@heroicons/react/20/solid';
import Cookies from 'js-cookie';

import Layout from '../components/layout';

const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL;
const cookieDomain = process.env.NEXT_PUBLIC_COOKIE_DOMAIN;

const IndexPage = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ password: event.target.password.value }),
      });
      const data = await response.json();

      if (response.status !== 201) {
        setErrorMessage(data.message);
      } else {
        setErrorMessage('');
        Cookies.set('VERCEL_MIDDLEWARE_AUTH_DEMO_AUTHORIZED', '1', { domain: cookieDomain, expires: 1 });
        window.location.href = dashboardUrl;
      }
    } catch (error) {
      setErrorMessage(error.message);
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-20 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
          {errorMessage && (
            <div className="rounded-md bg-red-100 mt-8 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <XCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                  <p className="text-sm text-red-700">{errorMessage}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
