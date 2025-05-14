'use client';

import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Slider } from '@/components/ui/slider';

interface TimelapsePlayerProps {
  src: string;
  jumpSeconds?: number;
}

export default function TimelapsePlayer({ src, jumpSeconds = 5 }: TimelapsePlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => setIsLoading(false);
    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    const handleEnded = () => setIsPlaying(false);

    // Check if video is already loaded from cache
    if (video.readyState >= 3) {
      setIsLoading(false);
    }

    // Multiple event listeners to catch all possible loading states
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('canplaythrough', handleCanPlay);
    video.addEventListener('loadeddata', handleCanPlay);
    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('ended', handleEnded);

    // Backup timeout to ensure loading state is cleared
    loadingTimeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 second backup timeout

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('canplaythrough', handleCanPlay);
      video.removeEventListener('loadeddata', handleCanPlay);
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('ended', handleEnded);

      // Clear timeout on cleanup
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimelineChange = (value: number[]) => {
    const video = videoRef.current;
    if (!video) return;

    const newTime = value[0];
    if (newTime !== undefined) {
      video.currentTime = newTime;
    }
    if (newTime !== undefined) {
      setCurrentTime(newTime);
    }
  };

  const jumpForward = () => {
    const video = videoRef.current;
    if (!video) return;

    const newTime = Math.min(video.currentTime + jumpSeconds, duration);
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const jumpBackward = () => {
    const video = videoRef.current;
    if (!video) return;

    const newTime = Math.max(video.currentTime - jumpSeconds, 0);
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="bg-muted rounded-lg border">
      <div className="relative">
        <video
          ref={videoRef}
          className={`w-full rounded-t-lg ${isLoading ? 'hidden' : 'block'}`}
          src={src}
          playsInline
          onClick={togglePlay}
          muted
          onLoadedData={() => setIsLoading(false)}
          onCanPlay={() => setIsLoading(false)}
          onCanPlayThrough={() => setIsLoading(false)}
        />
        {/* Play/Pause overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity hover:opacity-100"
          onClick={togglePlay}
        >
          <Button
            variant="secondary"
            size="icon"
            className="h-16 w-16 rounded-full bg-black/50 text-white hover:bg-black/70"
          >
            {isPlaying ? <Pause /> : <Play />}
          </Button>
        </div>
      </div>
      {isLoading && (
        <div className="flex items-center justify-center">
          <Skeleton className="aspect-video w-full" />
        </div>
      )}

      <div className="mx-6 mt-4 mb-6">
        {/* Timeline slider */}
        <Slider
          value={[currentTime]}
          min={0}
          max={28}
          step={1.99}
          onValueChange={handleTimelineChange}
          className="mb-4 cursor-pointer"
        />

        {/* Controls */}
        <div className="flex items-center justify-center space-x-4">
          <Button variant="outline" onClick={jumpBackward} className="flex items-center">
            <ChevronLeft className="h-5 w-5" />
            <span>{jumpSeconds}s</span>
          </Button>

          <Button variant="default" size="icon" onClick={togglePlay}>
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>

          <Button variant="outline" onClick={jumpForward} className="flex items-center">
            <span>{jumpSeconds}s</span>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
