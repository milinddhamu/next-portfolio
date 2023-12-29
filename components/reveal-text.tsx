import React from 'react';

interface RevealSentenceProps {
  sentence: string;
}

const RevealSentence: React.FC<RevealSentenceProps> = ({ sentence }) => {
  return (
    <>
      <div className="overflow-hidden text-center">
      <h2 className="text-md md:text-lg opacity-70">
        {sentence}
      </h2>
    </div>
    </>
  );
};

export default RevealSentence;
