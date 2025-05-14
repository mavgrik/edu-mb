'use client';

import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('ended', handleEnded);

    // Mute the video by default since we don't need audio
    video.muted = true;

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('ended', handleEnded);
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

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="bg-card rounded-lg border">
      <div className="relative">
        <video ref={videoRef} className="w-full rounded-t-lg" src={src} playsInline onClick={togglePlay} />

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
            {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
          </Button>
        </div>
      </div>

      <div className="p-4">
        {/* Timeline slider */}
        <div className="mb-4">
          <Slider
            value={[currentTime]}
            min={0}
            max={duration || 100}
            step={0.01}
            onValueChange={handleTimelineChange}
            className="cursor-pointer"
          />
          <div className="text-muted-foreground mt-1 flex justify-between text-sm">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-2">
          <Button variant="outline" onClick={jumpBackward} className="flex items-center gap-1">
            <ChevronLeft className="h-5 w-5" />
            <span>{jumpSeconds}s</span>
          </Button>

          <Button variant="default" size="icon" onClick={togglePlay} className="mx-2">
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>

          <Button variant="outline" onClick={jumpForward} className="flex items-center gap-1">
            <span>{jumpSeconds}s</span>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
