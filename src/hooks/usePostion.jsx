import { useContext } from 'react';
import { positionContext } from '../context/positionContext';

function usePosition() {
  return useContext(positionContext)
}

export default usePosition
