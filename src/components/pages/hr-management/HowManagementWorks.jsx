import Image from "next/image";

export default function HowManagementWorks() {
  return (
    <section className="w-full bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-16">
          How HR Management Works
        </h2>

        {/* Main container */}
        <div className="relative bg-[#0a0a0a] border border-neutral-800 rounded-2xl p-8 md:p-12">
          {/* Engine label */}
          <div className="text-center mb-12">
            <span className="text-[#fdd204] text-sm font-medium tracking-wider">
              HR MANAGEMENT PROCESS
            </span>
          </div>

          {/* Core HR workflow */}
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Employee Onboarding */}
              <div className="flex flex-col items-center mb-8 md:mb-0">
                <div className="w-14 h-14 bg-black border-2 border-white rounded-full flex items-center justify-center mb-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-sm text-gray-300 font-medium text-center">Employee Onboarding</p>
                <p className="text-xs text-gray-500 mt-1 text-center">Profile Setup & Documents</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center w-16">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              {/* Attendance & Leave */}
              <div className="text-center mb-8 md:mb-0">
                <div className="bg-black border border-neutral-800 p-6 rounded-xl min-w-[140px]">
                  <div className="w-8 h-8 bg-black border border-[#fdd204] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-[#fdd204] text-lg font-bold">A</span>
                  </div>
                  <p className="font-semibold text-white">Attendance & Leave</p>
                  <p className="text-xs text-gray-400 mt-1">Track Hours & Approvals</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center w-16">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              {/* Payroll */}
              <div className="text-center mb-8 md:mb-0">
                <div className="bg-black border border-neutral-800 p-6 rounded-xl min-w-[140px]">
                  <div className="w-8 h-8 bg-black border border-[#fdd204] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-[#fdd204] text-lg font-bold">P</span>
                  </div>
                  <p className="font-semibold text-white">Payroll</p>
                  <p className="text-xs text-gray-400 mt-1">Salaries & Benefits</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center w-16">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              {/* Performance Monitoring */}
              <div className="text-center mb-8 md:mb-0">
                <div className="bg-black border border-neutral-800 p-6 rounded-xl min-w-[140px]">
                  <div className="w-8 h-8 bg-black border border-[#fdd204] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-[#fdd204] text-lg font-bold">M</span>
                  </div>
                  <p className="font-semibold text-white">Performance Monitoring</p>
                  <p className="text-xs text-gray-400 mt-1">Track Goals & Reviews</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center w-16">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              {/* Employee Feedback */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-black border-2 border-[#fdd204] rounded-full flex items-center justify-center mb-3">
                  <div className="w-2 h-2 bg-[#fdd204] rounded-full"></div>
                </div>
                <p className="text-sm text-gray-300 font-medium text-center">Employee Feedback</p>
                <p className="text-xs text-gray-500 mt-1 text-center">Surveys & Engagement</p>
              </div>
            </div>

            {/* Mobile arrows */}
            <div className="md:hidden flex justify-center">
              <div className="flex flex-col items-center space-y-8">
                {[1, 2, 3, 4].map((arrow) => (
                  <div key={arrow} className="flex flex-col items-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            {/* Real-time Enhancements */}
            <div className="border-t border-neutral-800 pt-12">
              <h3 className="text-center text-gray-400 text-sm font-medium mb-8">
                REAL-TIME HR ENHANCEMENTS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  "Live Attendance Updates",
                  "Instant Leave Approvals",
                  "Payroll Notifications",
                  "Performance Alerts"
                ].map((text, i) => (
                  <div
                    key={i}
                    className="bg-black border border-neutral-800 rounded-xl p-4 text-center hover:border-neutral-700 transition-colors group"
                  >
                    <p className="text-sm text-white font-medium">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* HR Infrastructure */}
            <div className="border-t border-neutral-800 pt-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-black border border-neutral-800 rounded-full px-6 py-3">
                  <div className="w-8 h-8 bg-black border border-[#fdd204] rounded-lg flex items-center justify-center">
                    <span className="text-[#fdd204] text-lg font-bold">H</span>
                  </div>
                  <span className="text-white font-semibold">HR Infrastructure</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  "Centralized Database",
                  "Secure Cloud Storage",
                  "Role-based Access",
                  "Compliance Management"
                ].map((text, i) => (
                  <div
                    key={i}
                    className="bg-black border border-neutral-800 rounded-xl p-4 text-center hover:border-neutral-700 transition-colors"
                  >
                    <p className="text-sm text-white font-medium">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="text-center mt-12 pt-6 border-t border-neutral-800">
            <div className="inline-flex items-center gap-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-[#fdd204] rounded-full"></div>
              Real-time HR • Automated Processes • Employee Engagement
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
