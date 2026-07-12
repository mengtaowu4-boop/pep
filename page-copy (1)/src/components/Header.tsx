import React, { useState } from 'react';
import { Heart, Bookmark, MessageSquare, Check, UserPlus } from 'lucide-react';
import { UserInteractionState } from '../types';

interface HeaderProps {
  interaction: UserInteractionState;
  setInteraction: React.Dispatch<React.SetStateAction<UserInteractionState>>;
  onContactClick: () => void;
}

export default function Header({ interaction, setInteraction, onContactClick }: HeaderProps) {
  const [heartExplode, setHeartExplode] = useState(false);

  const toggleLike = () => {
    const isLiking = !interaction.liked;
    setInteraction(prev => ({
      ...prev,
      liked: isLiking,
      likesCount: isLiking ? prev.likesCount + 1 : prev.likesCount - 1
    }));
    if (isLiking) {
      setHeartExplode(true);
      setTimeout(() => setHeartExplode(false), 800);
    }
  };

  const toggleSave = () => {
    setInteraction(prev => ({
      ...prev,
      saved: !prev.saved
    }));
  };

  const toggleFollow = () => {
    setInteraction(prev => ({
      ...prev,
      following: !prev.following
    }));
  };

  return (
    <header id="portfolio-header" className="relative z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 py-3 md:px-8 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Left Side: Title */}
        <div className="flex flex-col">
          <h1 className="text-lg md:text-xl font-display font-bold text-gray-900 tracking-tight flex items-center gap-2">
            Guangzhou Jike Biotechnology Co., Ltd.
          </h1>
        </div>

        {/* Right Side: Creator Info & Interaction */}
        <div className="flex flex-wrap items-center gap-4 justify-between sm:justify-end">
          {/* Creator Profile Card */}
          <div className="flex items-center gap-3 bg-gray-50/50 p-1.5 pr-3 rounded-full border border-gray-100">
            {/* Blue Styled SVG Avatar */}
            <div className="relative w-9 h-9 flex items-center justify-center bg-blue-600 rounded-full shadow-inner">
              <svg viewBox="0 0 100 100" className="w-full h-full p-1.5">
                <path
                  d="M50 20 C25 20, 20 40, 20 50 C20 65, 30 80, 50 80 C68 80, 75 68, 78 55 C65 65, 48 65, 38 52 C30 42, 35 25, 50 20 Z"
                  fill="white"
                />
                <circle cx="76" cy="74" r="10" fill="#10b981" />
              </svg>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-medium text-gray-900">Leo</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-50 text-green-700 font-medium font-mono uppercase tracking-wide">Available</span>
                <button 
                  onClick={toggleFollow}
                  className={`text-[11px] font-medium transition-colors cursor-pointer ${
                    interaction.following 
                      ? 'text-gray-400 hover:text-gray-600' 
                      : 'text-blue-600 hover:text-blue-800 font-semibold'
                  }`}
                >
                  {interaction.following ? 'Following' : 'Follow'}
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Like Button */}
            <button
              onClick={toggleLike}
              className={`relative p-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                interaction.liked
                  ? 'bg-rose-50 border-rose-100 text-rose-500'
                  : 'bg-white border-gray-200 text-gray-500 hover:text-gray-800 hover:border-gray-300'
              }`}
              title="Like this project"
            >
              <Heart className={`w-4.5 h-4.5 ${interaction.liked ? 'fill-rose-500 scale-110' : ''}`} />
              {interaction.liked && (
                <span className="absolute -top-1 -right-1.5 bg-rose-500 text-white text-[9px] font-bold px-1 rounded-full scale-90">
                  {interaction.likesCount}
                </span>
              )}
              {heartExplode && (
                <span className="absolute inset-0 rounded-full border-2 border-rose-400 animate-ping opacity-75" />
              )}
            </button>

            {/* Bookmark Button */}
            <button
              onClick={toggleSave}
              className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                interaction.saved
                  ? 'bg-amber-50 border-amber-100 text-amber-500'
                  : 'bg-white border-gray-200 text-gray-500 hover:text-gray-800 hover:border-gray-300'
              }`}
              title="Save this project"
            >
              <Bookmark className={`w-4.5 h-4.5 ${interaction.saved ? 'fill-amber-500' : ''}`} />
            </button>

            {/* Contact Us Button */}
            <button
              onClick={onContactClick}
              className="bg-gray-900 hover:bg-gray-800 text-white font-medium text-xs md:text-sm px-4 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
