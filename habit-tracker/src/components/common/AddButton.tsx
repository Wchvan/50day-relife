const AddButton = () => {
  const handleAddClick = () => {
    console.log('添加新计划');
  };
  return (
    <button
      className='fixed bottom-20 right-5 w-14 h-14 rounded-full bg-purple-500 flex items-center justify-center shadow-lg border-none cursor-pointer z-90'
      onClick={handleAddClick}
    >
      <img
        src='https://cdn.qboost.woa.com/files/llmcode/2a9ce1/9f1e6a.png'
        alt='添加'
        className='w-6 h-6'
      />
    </button>
  );
};

export default AddButton;
