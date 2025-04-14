'use client';
import { useState } from 'react';
import { generatePresentation } from '../lib/generatePresentation';
import { Presentation } from '../components/Presentation';

export default function Home() {
  const [topic, setTopic] = useState('');
  const [slides, setSlides] = useState([]);

  const handleGenerate = async () => {
    const data = await generatePresentation(topic);
    setSlides(data);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">SlideGenie</h1>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter your topic"
        className="border p-2 w-full mb-4"
      />
      <button onClick={handleGenerate} className="bg-blue-600 text-white px-4 py-2 rounded">
        Generate Slides
      </button>
      {slides.length > 0 && <Presentation slides={slides} />}
    </div>
  );
}