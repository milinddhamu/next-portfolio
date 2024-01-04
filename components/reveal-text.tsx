import React from 'react';

interface RevealSentenceProps {
  sentence: string;
}

const RevealSentence: React.FC<RevealSentenceProps> = ({ sentence }) => {
  return (
    <>
      <div className="overflow-hidden text-center py-4">
      <h2 className="text-sm md:text-base opacity-70 font-mono font-medium">
        {sentence}
      </h2>
    </div>
    </>
  );
};

export default RevealSentence;
