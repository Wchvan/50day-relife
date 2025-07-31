import React, { useState, Dispatch, SetStateAction } from 'react';

interface TagSelectorProps {
  onTagsChange: Dispatch<SetStateAction<string[]>>;
}

const TagSelector: React.FC<TagSelectorProps> = ({ onTagsChange }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>(['努力', '成长']);

  const tags = [
    '努力', '坚持', '突破', '成长', '挑战', 
    '专注', '感恩', '反思'
  ];

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
    onTagsChange(tags)
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <h2 className="text-base font-medium text-gray-700 mb-3">选择标签</h2>
      <div className="flex flex-wrap gap-2" role="group" aria-labelledby="tag-selection">
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.slice(0, 5).map(tag => (
            <button
              key={tag}
              className={`px-4 py-2.5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                selectedTags.includes(tag)
                  ? 'bg-purple-100 text-purple-600 font-medium'
                  : 'bg-gray-100 text-gray-600'
              }`}
              onClick={() => toggleTag(tag)}
              aria-pressed={selectedTags.includes(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.slice(5).map(tag => (
            <button
              key={tag}
              className={`px-4 py-2.5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                selectedTags.includes(tag)
                  ? 'bg-purple-100 text-purple-600 font-medium'
                  : 'bg-gray-100 text-gray-600'
              }`}
              onClick={() => toggleTag(tag)}
              aria-pressed={selectedTags.includes(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TagSelector;