import React, { Dispatch, SetStateAction } from 'react';

interface JournalInputProps {
  onContentChange: Dispatch<SetStateAction<string>>;
}

const JournalInput: React.FC<JournalInputProps> = ({ onContentChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onContentChange(e.target.value);
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <h2 className="text-base font-medium text-gray-700 mb-3">今日记录</h2>
      <textarea
        className="w-full min-h-[120px] p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="记录今天的点滴..."
        onChange={handleChange}
      />
    </div>
  );
};

export default JournalInput;