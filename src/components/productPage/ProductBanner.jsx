import React from 'react';
import { ArrowDown, Zap } from 'lucide-react';

const ProductBanner = () => {
  return (
    <div className="mt-20">
      <div className="max-w-7xl mx-auto ">

        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center space-y-6 md:space-y-0">

          <div className="">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-extrabold  mb-6 flex items-center text-center mx-auto">
              Intelligent AI Agent Product Suite
            </h1>

            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-10 text-gray-700 py-10">

              <div className="sm:w-1/2">
                <p className="text-xl leading-relaxed">
                  Our agents are capable of handling complex, multi-step workflows, minimizing human intervention and accelerating your business processes end-to-end.
                </p>
              </div>

              <div className="sm:w-1/2">
                <p className="text-xl leading-relaxed">
                  Leverage Google Search grounding for verifiable and up-to-date information, ensuring all agent outputs are accurate, relevant, and trustworthy for critical tasks.
                </p>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default ProductBanner;