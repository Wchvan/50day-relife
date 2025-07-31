import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';

const data = [
  { subject: '健身', A: 80, fullMark: 100 },
  { subject: '阅读', A: 70, fullMark: 100 },
  { subject: '早起', A: 90, fullMark: 100 },
  { subject: '冥想', A: 60, fullMark: 100 },
  { subject: '学习', A: 75, fullMark: 100 },
  { subject: '写作', A: 50, fullMark: 100 },
  { subject: '饮食', A: 85, fullMark: 100 },
  { subject: '社交', A: 65, fullMark: 100 },
];

const HabitAnalysis: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
      <h3 className="font-medium text-gray-800 mb-4">习惯养成分析</h3>
      <div className="h-[208px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#7B68EE', fontSize: 10 }} />
            <Radar
              name="习惯完成度"
              dataKey="A"
              stroke="#7B68EE"
              fill="#7B68EE"
              fillOpacity={0.3}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HabitAnalysis;