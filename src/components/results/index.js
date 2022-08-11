import React from 'react';
import JSONPretty from 'react-json-pretty';
import './results.scss';


function Results(props) {
  if (!props.loading) {
    return (
      <>
      <div id='all' data-testid='results'>
        <div id='headers'>
          <h2>Headers</h2>
          <JSONPretty id='json-pretty' data={props.headers} />
        </div>
        <div id='results'>
          <h2>Results</h2>
          <JSONPretty id='json-pretty' data={props.url} />
        </div>
        </div>
      </>
    );
  } else {
    return <h3>Loading....</h3>;
  }
}

export default Results;