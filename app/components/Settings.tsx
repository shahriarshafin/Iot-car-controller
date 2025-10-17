import React, { useState } from 'react';

interface CarSettings {
  carIp: string;
  commands: {
    forward: string;
    backward: string;
    left: string;
    right: string;
    stop: string;
  };
}

interface CameraSettings {
  streamUrl: string;
  quality: 'low' | 'medium' | 'high';
}

const Settings = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState<'car' | 'camera'>('car');
  const [carSettings, setCarSettings] = useState<CarSettings>({
    carIp: 'http://192.168.0.238:8080',
    commands: {
      forward: '/forward',
      backward: '/backward',
      left: '/left',
      right: '/right',
      stop: '/stop',
    },
  });

  const [cameraSettings, setCameraSettings] = useState<CameraSettings>({
    streamUrl: 'http://192.168.0.238:8080/video',
    quality: 'high',
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-black/80 w-[500px] rounded-xl border border-white/10 p-6 text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6">Settings</h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'car'
                ? 'bg-white/10 text-white'
                : 'text-white/60 hover:text-white'
            }`}
            onClick={() => setActiveTab('car')}
          >
            Car Settings
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'camera'
                ? 'bg-white/10 text-white'
                : 'text-white/60 hover:text-white'
            }`}
            onClick={() => setActiveTab('camera')}
          >
            Camera Settings
          </button>
        </div>

        {/* Car Settings */}
        {activeTab === 'car' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-white/60 mb-1">Car IP</label>
              <input
                type="text"
                value={carSettings.carIp}
                onChange={(e) =>
                  setCarSettings({ ...carSettings, carIp: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {Object.entries(carSettings.commands).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm text-white/60 mb-1 capitalize">
                    {key} Command
                  </label>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) =>
                      setCarSettings({
                        ...carSettings,
                        commands: {
                          ...carSettings.commands,
                          [key]: e.target.value,
                        },
                      })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Camera Settings */}
        {activeTab === 'camera' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-white/60 mb-1">Stream URL</label>
              <input
                type="text"
                value={cameraSettings.streamUrl}
                onChange={(e) =>
                  setCameraSettings({ ...cameraSettings, streamUrl: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
              />
            </div>

            <div>
              <label className="block text-sm text-white/60 mb-1">Quality</label>
              <select
                value={cameraSettings.quality}
                onChange={(e) =>
                  setCameraSettings({
                    ...cameraSettings,
                    quality: e.target.value as CameraSettings['quality'],
                  })
                }
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        )}

        {/* Save Button */}
        <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;