import React from 'react';

function Result({ state }) {
  if (!state) {
    return null;
  }

  return (
    <div>
      <h3>Results:</h3>
      <div>
        <strong>Previous State:</strong> {JSON.stringify(state.windowPrevState)}
      </div>
      <div>
        <strong>Current State:</strong> {JSON.stringify(state.windowCurrState)}
      </div>
      <div>
        <strong>Numbers:</strong> {JSON.stringify(state.numbers)}
      </div>
      <div>
        <strong>Average:</strong> {state.avg}
      </div>
    </div>
  );
}

export default Result;
