
import React from 'react';
import VideoCard from './VideoCard';
import AnimatedSection from './AnimatedSection';

// Sample short-form video data (you should replace this with your actual data)
const shortVideos = [
  {
    id: 1,
    title: "Brand Promo",
    description: "A 30-second promotional video for a fashion brand featuring dynamic transitions and bold typography.",
    thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Product Showcase",
    description: "Quick and engaging product demonstration highlighting key features and benefits.",
    thumbnail: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&auto=format&fit=crop&q=60",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Lifestyle Reel",
    description: "Fast-paced lifestyle compilation showcasing an active, urban lifestyle with smooth transitions.",
    thumbnail: "https://images.unsplash.com/photo-1551854638-aacd9947c48e?w=800&auto=format&fit=crop&q=60",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 4,
    title: "Social Media Ad",
    description: "Attention-grabbing social media advertisement designed for maximum engagement in the first 3 seconds.",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 5,
    title: "Motion Graphics Explainer",
    description: "Short explainer video using custom motion graphics to simplify complex concepts.",
    thumbnail: "https://images.unsplash.com/photo-1620674156044-52b714665ddf?w=800&auto=format&fit=crop&q=60",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 6,
    title: "Story Highlight",
    description: "Instagram story highlight reel with custom transitions and branded elements.",
    thumbnail: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=800&auto=format&fit=crop&q=60",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];

const ShortFormVideos: React.FC = () => {
  return (
    <AnimatedSection id="short-form" className="py-24 bg-dark relative">
      {/* Background accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-accent-blue font-medium mb-3 tracking-wider text-sm uppercase">Bite-sized content</p>
          <h2 className="text-4xl font-bold text-white mb-6">Short-Form Videos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Engaging, scroll-stopping content optimized for social media platforms. 
            Perfect for brand awareness, product launches, and increasing engagement.
          </p>
        </div>
        
        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {shortVideos.map((video, index) => (
            <AnimatedSection key={video.id} delay={index * 100} className="h-full">
              <VideoCard
                title={video.title}
                description={video.description}
                thumbnail={video.thumbnail}
                videoUrl={video.videoUrl}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ShortFormVideos;
