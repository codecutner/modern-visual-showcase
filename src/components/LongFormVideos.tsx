
import React from 'react';
import VideoCard from './VideoCard';
import AnimatedSection from './AnimatedSection';

// Sample long-form video data (you should replace this with your actual data)
const longVideos = [
  {
    id: 1,
    title: "Documentary Film",
    description: "A 15-minute documentary exploring urban architecture and its impact on community development.",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Corporate Brand Story",
    description: "Cinematic brand story video showcasing the company's journey, values, and vision for the future.",
    thumbnail: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop&q=60",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Tutorial Series",
    description: "In-depth tutorial explaining advanced video editing techniques with practical examples.",
    thumbnail: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&auto=format&fit=crop&q=60",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 4,
    title: "Event Highlight Reel",
    description: "Comprehensive event coverage highlighting key moments, speakers, and audience reactions.",
    thumbnail: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&auto=format&fit=crop&q=60",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];

const LongFormVideos: React.FC = () => {
  return (
    <AnimatedSection id="long-form" className="py-24 bg-medium-gray relative">
      {/* Background accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-accent-blue font-medium mb-3 tracking-wider text-sm uppercase">In-depth storytelling</p>
          <h2 className="text-4xl font-bold text-white mb-6">Long-Form Videos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cinematic, narrative-driven content that establishes authority and creates deeper connections.
            Ideal for brand stories, documentaries, and comprehensive product showcases.
          </p>
        </div>
        
        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {longVideos.map((video, index) => (
            <AnimatedSection key={video.id} delay={index * 150} className="h-full">
              <VideoCard
                title={video.title}
                description={video.description}
                thumbnail={video.thumbnail}
                videoUrl={video.videoUrl}
                className="h-full"
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default LongFormVideos;
