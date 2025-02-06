import React from 'react';

const InfiniteMarquee = () => {
  const text = "COMING SOON";
  
  return (
    <div className="relative w-full overflow-hidden bg-yellow-500">
      {/* Primary scrolling container */}
      <div className="inline-block animate-scroll whitespace-nowrap">
        {[...Array(70)].map((_, i) => (
          <span key={i} className="inline-block text-sm font-bold text-black mx-4">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;