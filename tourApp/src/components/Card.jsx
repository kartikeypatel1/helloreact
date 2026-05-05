import { useState } from "react";   

function Card({ id, image, price, name, description, removeTour }) {

  const [readMore, setReadMore] = useState(true);

  const shortDescription = readMore
    ? description.slice(0, 200)
    : description;

  return (
    <>
      <div className='border border-gray-300 rounded-lg p-4 m-4 max-w-sm bg-white shadow-md'>
        <img src={image} alt={name} className='w-full h-48 object-cover rounded-lg' />

        <div className='mt-3'>
          <h4 className='text-green-600 font-bold text-lg'>₹{price}</h4>
          <h4 className='mt-2 text-xl font-semibold'>{name}</h4>
        </div>

        <div className='mt-3'>
          <p className='text-gray-700'>
            {shortDescription}
            <span
              className='text-blue-500 cursor-pointer ml-1'
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "... Read more" : " Show less"}
            </span>
          </p>
        </div>
      </div>

      <button onClick={() => removeTour(id)} className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors mt-2'>
        Not Interested
      </button>
    </>
  );
}

export default Card;