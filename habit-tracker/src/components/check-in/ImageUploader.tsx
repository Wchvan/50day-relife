import React from 'react';

const ImageUploader: React.FC = () => {
  // 在实际应用中，这里会处理图片上传逻辑
  const handleImageUpload = () => {
    // 模拟文件选择器点击
    const fileInput = document.getElementById('image-upload');
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-base font-medium text-gray-700" id="image-upload-label">添加图片记录</h2>
        <span className="text-xs text-gray-400">0/9</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {/* 隐藏的文件输入 */}
        <input 
          type="file" 
          id="image-upload" 
          className="hidden" 
          accept="image/*" 
          multiple 
          aria-labelledby="image-upload-label"
        />
        
        {/* 上传按钮 */}
        <div className="w-full aspect-square border border-dashed border-gray-300 rounded-lg flex items-center justify-center">
          <button 
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={handleImageUpload}
            aria-label="上传图片"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
        
        {/* 预留的8个空位，实际应用中会根据已上传图片动态渲染 */}
        {Array(8).fill(0).map((_, index) => (
          <div 
            key={index} 
            className="w-full aspect-square border border-dashed border-gray-300 rounded-lg flex items-center justify-center"
            aria-hidden="true"
          >
            {/* 这里可以放置上传后的图片预览 */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;