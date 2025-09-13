import React from 'react';

const Banner = () => {
    return (
     <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-9 my-10'>
          <div>
            <h1 className='text-4xl font-bold text-rose-600' >Find Help or Offer Support —<br />Right in Your Neighborhood!</h1>

            <h3 className=' my-3 text-lg text-justify'>Connect with people nearby who need urgent help with blood, food, tutoring, and more. Make a difference in your local community — anytime, anywhere.</h3>
            <div className=''>
                <button className='btn btn-primary mr-10'>Post a Need</button>
                <button className='btn btn-secondary'>Help Someone</button>
            </div>
        </div>
        <div>
            <p>image</p>
        </div>
     </div>
      
    );
};

export default Banner;