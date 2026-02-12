import React from 'react';
import { User, ShieldCheck } from 'lucide-react';

export default function KnownPersonCard({ person }) {
  // We use the first image from the array as the display photo
  const displayPhoto = person.images && person.images[0];

  return (
    <div className="group relative bg-white rounded-2xl p-4 shadow-md border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-center gap-4">
        {/* Profile Image */}
        <div className="h-16 w-16 rounded-full overflow-hidden bg-indigo-100 border-2 border-indigo-500 flex-shrink-0">
          {displayPhoto ? (
            <img 
              src={displayPhoto} 
              alt={person.name} 
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full w-full text-indigo-500">
              <User size={30} />
            </div>
          )}
        </div>

        {/* Info */}
        <div className="overflow-hidden">
          <h4 className="text-lg font-bold text-gray-800 truncate">{person.name}</h4>
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-indigo-500" />
            <span className="text-sm font-medium text-indigo-600">{person.role}</span>
          </div>
        </div>
      </div>
      
      {/* Decorative badge for Hover */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-[10px] bg-indigo-600 text-white px-2 py-0.5 rounded-full">
          Verified
        </span>
      </div>
    </div>
  );
}