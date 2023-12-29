import React from 'react';

interface RevealSentenceProps {
  sentence: string;
}

const RevealSentence: React.FC<RevealSentenceProps> = ({ sentence }) => {
  return (
    <>
      <div className="px-2 mx-1 lg:px-4 lg:mx-2 border-l-2 border-gray-500/50 overflow-hidden ">
      <h2 className="text-md md:text-lg opacity-70">
        {sentence}
      </h2>
    </div>
    </>
  );
};

export default RevealSentence;
