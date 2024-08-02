const TotalSection = () => {
  return (
    <div className="mr-5 mt-20 w-64 gap-6 justify-self-end text-right text-sm">
      <div className="flex flex-row justify-between gap-6">
        <div>
          <p className="font-semibold">Subtotal:</p>
          <p className="mt-2 text-gray-500">(20%)</p>
        </div>
        <div className="text-right">
          <p className="font-semibold">1000.00</p>
          <p className="mt-2 text-gray-500">200.00</p>
        </div>
      </div>
      <div className="my-4 h-0.5 bg-gray-300" />
      <div className="flex flex-row justify-between gap-6">
        <div>
          <p className="font-semibold">Total:</p>
          <p className="mt-2 text-gray-500">Amount Paid</p>
        </div>
        <div className="text-right">
          <p className="font-semibold">1200.00</p>
          <p className="mt-2 text-gray-500">0.00</p>
        </div>
      </div>
      <div className="my-4 h-0.5 bg-gray-300" />
      <div className="flex flex-row justify-between gap-6">
        <div>
          <p className="font-semibold">Amount Due (MAD):</p>
        </div>
        <div className="text-right">
          <p className="font-semibold">1200.00 DHS</p>
        </div>
      </div>
    </div>
  );
};

export default TotalSection;
