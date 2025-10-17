import React, { useEffect, useRef, useState } from 'react';

const Globe = ({ width = 400, height = 400, className = "" }) => {
  const globeRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  console.log('Globe component rendering with props:', { width, height, className });

  useEffect(() => {
    console.log('Globe useEffect running, globeRef.current:', globeRef.current);
    
    if (!globeRef.current) {
      console.log('No globeRef.current, returning early');
      return;
    }

    // Simple approach - just show the fallback for now to ensure it's visible
    console.log('Globe component mounted, showing fallback');
    setUseFallback(true);
    setIsLoaded(true);

    // Debug container dimensions
    setTimeout(() => {
      if (globeRef.current) {
        const rect = globeRef.current.getBoundingClientRect();
        console.log('Globe container dimensions:', {
          width: rect.width,
          height: rect.height,
          top: rect.top,
          left: rect.left
        });
      }
    }, 100);

    // Try to load the real globe in the background
    const loadGlobe = async () => {
      try {
        // Check if scripts are already loaded
        if (typeof window.THREE === 'undefined') {
          await new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/three@0.150.1/build/three.min.js';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        }

        if (typeof window.Globe === 'undefined') {
          await new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/globe.gl';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        }

        // Wait a bit for initialization
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (typeof window.Globe !== 'undefined') {
          console.log('Initializing real globe...');
          
          const globe = window.Globe()
            .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
            .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
            .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
            .width(width)
            .height(height)
            .showAtmosphere(true)
            .atmosphereColor('#3a82ff')
            .atmosphereAltitude(0.15);

          // Clear the fallback and add the real globe
          globeRef.current.innerHTML = '';
          globeRef.current.appendChild(globe.renderer().domElement);

          // Add some sample data
          const arcsData = [
            { startLat: 40.7128, startLng: -74.0060, endLat: 51.5074, endLng: -0.1278, color: '#ff6b6b' },
            { startLat: 40.7128, startLng: -74.0060, endLat: 35.6762, endLng: 139.6503, color: '#4ecdc4' },
            { startLat: 51.5074, startLng: -0.1278, endLat: 35.6762, endLng: 139.6503, color: '#45b7d1' },
            { startLat: 37.7749, startLng: -122.4194, endLat: 35.6762, endLng: 139.6503, color: '#96ceb4' },
            { startLat: 37.7749, startLng: -122.4194, endLat: 40.7128, endLng: -74.0060, color: '#feca57' }
          ];

          const pointsData = [
            { lat: 40.7128, lng: -74.0060, color: '#ff6b6b', size: 3 },
            { lat: 51.5074, lng: -0.1278, color: '#4ecdc4', size: 3 },
            { lat: 35.6762, lng: 139.6503, color: '#45b7d1', size: 3 },
            { lat: 37.7749, lng: -122.4194, color: '#96ceb4', size: 3 }
          ];

          globe.arcsData(arcsData);
          globe.pointsData(pointsData);
          globe.controls().autoRotate = true;
          globe.controls().autoRotateSpeed = 0.5;

          setUseFallback(false);
          console.log('Real globe loaded successfully');
        }
      } catch (error) {
        console.error('Error loading real globe:', error);
        // Keep the fallback
      }
    };

    loadGlobe();

    // Cleanup function
    return () => {
      if (globeRef.current && globeRef.current.globeInstance) {
        try {
          const globe = globeRef.current.globeInstance;
          if (globe.renderer && globe.renderer().domElement) {
            globeRef.current.removeChild(globe.renderer().domElement);
          }
        } catch (e) {
          console.log('Globe cleanup error:', e);
        }
      }
    };
  }, [width, height]);

  return (
    <div 
      ref={globeRef} 
      className={`${className} w-full h-full`}
      style={{ 
        width: '100%', 
        height: '100%',
        minHeight: '300px',
        border: '2px solid #ff0000', // Red border to make it very visible
        borderRadius: '8px',
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div 
        className="flex items-center justify-center h-full w-full rounded-lg relative overflow-hidden"
        style={{ 
          minHeight: '300px', 
          minWidth: '300px',
          backgroundColor: '#1a1a2e',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 animate-pulse"></div>
        <div className="relative z-10 text-center p-8">
          <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full animate-spin flex items-center justify-center shadow-2xl">
            <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full shadow-inner"></div>
          </div>
          <div className="text-white text-xl font-bold mb-2">Global Network</div>
          <div className="text-gray-200 text-base">Decentralized Infrastructure</div>
          <div className="text-gray-400 text-sm mt-2">XMTP Network Visualization</div>
        </div>
      </div>
    </div>
  );
};

export default Globe;
