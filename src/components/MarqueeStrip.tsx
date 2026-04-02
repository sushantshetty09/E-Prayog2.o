import React from 'react';

const MarqueeStrip: React.FC = () => {
  const items = [
    'Physics', 'Chemistry', 'Biology', 'Mathematics', 'Computer Science',
    'Virtual Lab', 'PUC 1 & 2', 'Karnataka Board', '40+ Experiments', 'YOG AI Tutor'
  ];

  return (
    <div className="w-full bg-navy-mid border-t border-b border-green-dim overflow-hidden">
      <div className="flex animate-marquee marquee-pause">
        {/* First set of items */}
        <div className="flex items-center space-x-8 px-4">
          {items.map((item, index) => (
            <span key={`first-${index}`} className="font-body text-xs uppercase tracking-wider text-muted whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center space-x-8 px-4">
          {items.map((item, index) => (
            <span key={`second-${index}`} className="font-body text-xs uppercase tracking-wider text-muted whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeStrip;
