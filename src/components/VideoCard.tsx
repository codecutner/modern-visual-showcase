
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  className?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  description,
  thumbnail,
  videoUrl,
  className
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoClick = () => {
    window.open(videoUrl, '_blank');
  };

  return (
    <div
      className={cn(
        'video-card video-card-hover group cursor-pointer',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleVideoClick}
    >
      <div className="relative overflow-hidden">
        {/* Thumbnail */}
        <div className={cn(
          'relative w-full video-aspect-ratio transition-transform duration-700 ease-out-expo',
          isHovered ? 'scale-105' : 'scale-100'
        )}>
          <div className={cn(
            'absolute inset-0 bg-black/30 z-10 transition-opacity duration-300',
            isHovered ? 'opacity-30' : 'opacity-0'
          )} />
          
          <img
            src={thumbnail}
            alt={title}
            className={cn(
              'w-full h-full object-cover transition-all duration-700',
              isLoading ? 'blur-sm scale-105' : 'blur-0 scale-100'
            )}
            onLoad={() => setIsLoading(false)}
          />
          
          {/* Play button overlay */}
          <div className={cn(
            'absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-300',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}>
            <div className="w-16 h-16 rounded-full bg-black/70 flex items-center justify-center backdrop-blur-sm border border-white/20">
              <Play className="w-6 h-6 text-white ml-1" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className={cn(
          'font-semibold text-lg mb-1 text-white transition-colors duration-300',
          isHovered ? 'text-accent-blue' : 'text-white'
        )}>
          {title}
        </h3>
        <p className="text-sm text-gray-300 line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
