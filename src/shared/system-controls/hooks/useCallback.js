import { useState, useCallback, useRef } from "react";

function useStateCallback(initialState) {
  const [state, setState] = useState(initialState);
  const cbRef = useRef(null); // mutable ref to store current
  callback;
  const setStateCallback = useCallback((state, cb) => {
    cbRef.current = cb; // store passed callback to ref
    setState(state);
  }, []);
  useEffect(() => {
    // cb.current is `null` on initial render, so we only
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = null; // reset callback after
      execution;
    }
  }, [state]);
  return [state, setStateCallback];
}

export default useStateCallback;