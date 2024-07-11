const EmptyState = () => {
  return (
    <div className="h-[70vh] gap-5 bg-gray-100 rounded-md flex flex-col justify-center items-center">
      <p className="text-gray-600 text-xl lg:text-3xl">No Tasks Found</p>
    </div>
  );
};

export default EmptyState;
