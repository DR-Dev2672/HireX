import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-900 text-white py-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      
      <div>
        <h2 className="text-2xl font-bold">JobFinder</h2>
        <p className="mt-2 text-gray-400">Connecting talent with opportunity.</p>
      </div>

      
      <div>
        <h3 className="text-xl font-semibold mb-4">Job Seekers</h3>
        <ul className="space-y-2">
          <li><a href="/jobs" className="hover:underline text-gray-300">Browse Jobs</a></li>
          <li><a href="/sign-up" className="hover:underline text-gray-300">Create Account</a></li>
          <li><a href="/resume-builder" className="hover:underline text-gray-300">Resume Builder</a></li>
        </ul>
      </div>

      
      <div>
        <h3 className="text-xl font-semibold mb-4">Employers</h3>
        <ul className="space-y-2">
          <li><a href="/post-job" className="hover:underline text-gray-300">Post a Job</a></li>
          <li><a href="/dashboard" className="hover:underline text-gray-300">Employer Dashboard</a></li>
          <li><a href="/pricing" className="hover:underline text-gray-300">Pricing</a></li>
        </ul>
      </div>


      <div>
        <h3 className="text-xl font-semibold mb-4">Contact</h3>
        <p className="text-gray-400">Email: support@HireX.com</p>
        <p className="text-gray-400">Phone: +91 98765 43210</p>
        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
      &copy; 2025 HireX. All rights reserved.
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer