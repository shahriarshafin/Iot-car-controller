import React from 'react';

interface CarControlUIProps {
  speed: number;
  batteryLevel: number;
  range: number;
  gear: 'P' | 'R' | 'N' | 'D';
}

const CarControlUI: React.FC<CarControlUIProps> = ({
  speed,
  batteryLevel,
  range,
  gear
}) => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Center Speed Display */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center text-white">
        <div className="text-8xl font-bold">{speed}</div>
        <div className="text-xl">mph</div>
      </div>

      {/* Battery Status */}
      <div className="absolute bottom-8 left-8 text-white">
        <div className="flex items-center gap-2">
          <div className="w-20 h-2 bg-gray-600 rounded-full">
            <div 
              className="h-full bg-green-500 rounded-full"
              style={{ width: `${batteryLevel}%` }}
            />
          </div>
          <span>{batteryLevel}%</span>
        </div>
        <div className="text-sm mt-1">
          {range} mi
        </div>
      </div>

      {/* Gear Indicator */}
      <div className="absolute bottom-8 right-8 text-white text-2xl font-bold">
        {gear}
      </div>

      {/* Navigation Map */}
      <div className="absolute top-8 right-8 w-64 h-64 bg-gray-900 rounded-lg overflow-hidden">
        {/* Add your map component here */}
      </div>

      {/* Car Visualization */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2">
        <div className="w-48 h-24 border-2 border-white rounded-lg"></div>
      </div>
    </div>
  );
};

export default CarControlUI;
