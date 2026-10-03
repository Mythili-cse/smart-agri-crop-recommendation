import React from 'react';
import { Recommendation } from './Recommendation';

/**
 * Result page route wrapper that delegates to Recommendation view
 */
export const ResultPage: React.FC = () => {
  return <Recommendation />;
};
