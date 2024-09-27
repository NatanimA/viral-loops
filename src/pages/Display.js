import React, { useEffect, useState } from 'react';
import Preview from '../components/cards/Preview';
import { useParams } from 'react-router-dom';
import useLayout from '../hooks/useLayout';
import { RingLoader } from 'react-spinners';
import Error from '../components/cards/Error';


const override = {
    display: "block",
    margin: "auto auto",
    color: "#36d7b7",
  };
function Display() {
  const {id} = useParams()
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const {getLayout} = useLayout()

  useEffect(() => {
    const init = async () => {
        try{
            setLoading(true);
            await getLayout(id);
        }catch(err){
            setError(err);
        }finally{
            setLoading(false);
        }
    }

    if(id){
        init()
    }
  },[])
  return (
    <>
     {error && !loading && (<Error />)}
     {loading && (<RingLoader color="#36d7b7" cssOverride={override} size={100}  loading={loading} />)}
     {!loading && !error && (
        <div className="w-full flex flex-col min-h-screen dark:bg-gray-100 mx-auto">
          <div className="flex-grow flex flex-col sm:flex-row items-center  justify-around p-4">
              <div className="w-full sm:w-2/3 lg:w-3/4 xl:w-3/4 p-4 mx-auto"> {/* Card Width */}
                  <Preview />
              </div>
          </div>
      </div>)}
    </>
    
      
  );
}


export default Display;
