import { useEffect, useState } from 'react';

export const useLoader = (steps: number = 20, delay: number = 700) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stepAmount = 100 / steps; // Define max increment per step
    let currentProgress = 0;

    const updateProgress = () => {
      if (currentProgress >= 100) {
        setProgress(100); // Ensure it completes at exactly 100%
        return;
      }

      // Calculate remaining progress and apply a random increment
      const remainingProgress = 100 - currentProgress;
      const randomIncrement = Math.min(
        stepAmount * Math.random(), // Random increment within allowed step amount
        remainingProgress,
      );

      currentProgress += randomIncrement;
      setProgress(currentProgress);

      // Set a 0.7-second delay before the next increment
      setTimeout(() => {
        requestAnimationFrame(updateProgress);
      }, delay);
    };

    requestAnimationFrame(updateProgress);

    return () => setProgress(0); // Reset progress on unmount
  }, [steps, delay]);

  return progress;
};
