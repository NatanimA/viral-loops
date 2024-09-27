import React from 'react';
import Card from '../cards'; // Ensure the path is correct
import Footer from '../footer';
import Accordion from '../components/toolbar/Accordion';

function Home() {
  return (
      <div className="w-full flex flex-col min-h-screen dark:bg-gray-100 mx-auto">
          <div className="flex-grow flex flex-col sm:flex-row items-center  justify-around p-4">
              <div className="w-full sm:w-3/6 lg:w-3/6 xl:w-2/6 p-4 mx-auto"> {/* Accordion Width */}
                  <Accordion />
              </div>
              <div className="w-full sm:w-3/6  lg:w-3/6 xl:w-4/6 p-4 mx-auto"> {/* Card Width */}
                  <Card />
              </div>
          </div>
          <Footer className="mt-auto" />
      </div>
  );
}


export default Home;
