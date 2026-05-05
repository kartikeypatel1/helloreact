import Card from "./Card";
function Tours({ tours, removeTour }) {
  return (
    <div className='min-h-screen bg-gray-100 py-8'>
      <div className='text-center mb-8'>
        <h2 className='text-4xl font-bold text-gray-800'>Plan with Love</h2>
      </div>
        <div className='flex flex-wrap justify-center gap-6 px-4'>
            {tours.map((tour) => {
                return (
                    <Card key={tour.id} {...tour} removeTour={removeTour} />
                );
            })}
        </div>
    </div>
  );
}
export default Tours;