import React from 'react';

interface Post {
  id: number;
  title: string;
  time: string;
  content: string;
  imageUrl?: string;
  likes: number;
  comments: number;
}

const posts: Post[] = [
  {
    id: 1,
    title: "每日阅读计划",
    time: "3天前",
    content: "今天完成了《原子习惯》的阅读，这本书真的改变了\n我对习惯养成的认知！推荐大家也读一读。",
    imageUrl: "https://cdn.qboost.woa.com/files/llmcode/788ece/c512f9.png",
    likes: 28,
    comments: 12
  },
  {
    id: 2,
    title: "晨跑锻炼计划",
    time: "1周前",
    content: "连续晨跑一周了，感觉整个人的精神状态都不一样\n了！坚持真的很重要。",
    likes: 42,
    comments: 8
  }
];

const CommunitySharing: React.FC = () => {
  return (
    <div className="mb-5 p-4 bg-white rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-medium text-gray-800">社区分享区</h3>
        <button className="text-sm text-purple-500">更多</button>
      </div>
      
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-base font-medium text-gray-800">{post.title}</h4>
              <span className="text-xs text-gray-500">{post.time}</span>
            </div>
            
            <p className="text-sm text-gray-600 mb-3 whitespace-pre-line">{post.content}</p>
            
            {post.imageUrl && (
              <div className="mb-3">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            )}
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img 
                  src="https://cdn.qboost.woa.com/files/llmcode/788ece/ecebda.png" 
                  alt="点赞" 
                  className="w-3 h-3 mr-1"
                />
                <span className="text-xs text-gray-500">{post.likes}</span>
              </div>
              
              <div className="flex items-center">
                <img 
                  src="https://cdn.qboost.woa.com/files/llmcode/788ece/f35c1e.png" 
                  alt="评论" 
                  className="w-3 h-3 mr-1"
                />
                <span className="text-xs text-gray-500">{post.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunitySharing;