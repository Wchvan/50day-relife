import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { name: '周一', value: 60 },
  { name: '周二', value: 80 },
  { name: '周三', value: 45 },
  { name: '周四', value: 90 },
  { name: '周五', value: 75 },
  { name: '周六', value: 30 },
  { name: '周日', value: 65 },
];

const CompletionTrend: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
      <h3 className="font-medium text-gray-800 mb-4">计划完成趋势</h3>
      <div className="h-48 relative">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 5, bottom: 20, left: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis hide={true} />
            <Bar dataKey="value" fill="#22C55E" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CompletionTrend;