import React, { useState } from 'react';
import { 
  VeryBadIcon, 
  BadIcon, 
  NeutralIcon, 
  GoodIcon, 
  VeryGoodIcon 
} from './icons/MoodIcons';
import { MoodType } from '../../stores/PlanStore';

interface MoodSelectorProps {
  onMoodChange: (mood: MoodType) => void;
}

const MoodSelector: React.FC<MoodSelectorProps> = ({ onMoodChange }) => {
  const [selectedMood, setSelectedMood] = useState<MoodType>('good');

  const moods = [
    { 
      id: 'very-bad', 
      label: '很差', 
      icon: VeryBadIcon
    },
    { 
      id: 'bad', 
      label: '较差', 
      icon: BadIcon
    },
    { 
      id: 'neutral', 
      label: '一般', 
      icon: NeutralIcon
    },
    { 
      id: 'good', 
      label: '较好', 
      icon: GoodIcon
    },
    { 
      id: 'very-good', 
      label: '很好', 
      icon: VeryGoodIcon
    }
  ];

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <h2 className="text-base font-medium text-gray-700 mb-3" id="mood-selection">今天的心情如何？</h2>
      <div className="flex justify-between" role="radiogroup" aria-labelledby="mood-selection">
        {moods.map((mood) => {
          const IconComponent = mood.icon;
          return (
            <div key={mood.id} className="flex flex-col items-center">
              <button
                className={`w-12 h-12 mb-1 focus:outline-none ${selectedMood === mood.id ? 'scale-120 transition-transform' : ''}`}
                onClick={() => {
                  setSelectedMood(mood.id as MoodType);
                  onMoodChange(mood.id as MoodType);
                }}
                aria-checked={selectedMood === mood.id}
                role="radio"
                aria-label={`心情：${mood.label}`}
              >
                <IconComponent 
                  className="w-full h-full object-contain"
                  aria-hidden="true"
                />
              </button>
              <span 
                className={`text-xs ${selectedMood === mood.id ? 'text-purple-500 font-medium' : 'text-gray-500'}`}
              >
                {mood.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoodSelector;