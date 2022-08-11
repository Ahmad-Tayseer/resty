import React, { useState } from 'react';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {

  const [result, setResult] = useState();
  const [method, setMethod] = useState();
  const [headers, setHeader] = useState();
  const [body, setBody] = useState();
  const [loading, setLoad] = useState(false);

  function updateBody(e) {
    setBody(e.target.value);
  }

  function updateMethod(e) {
    setMethod(e.target.value);
  }
  
  async function onSubmit(url) {
    setLoad(true);
    let headerObject = {};
    let response;
    let data;
    if (method === 'get') {
      try {
        response = await fetch(url, {});
        data = await response.json();
      } catch (err) {
        throw err;
      }
    }
    if (method === 'post') {
      try {
        response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: body,
        });
        data = await response.json();
      } catch (e) {
        console.log(e);
      }
    }
    if (method === 'put') {
      response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });
    }
    if (method === 'delete') {
      response = await fetch(url, {
        method: 'DELETE',
      });
    }
    const headers = await response.headers.entries();
    for (let pairs of headers) {
      headerObject[pairs[0]] = pairs[1];
    }
    if (method) {
      setResult(data);
      setHeader(headerObject);
    } else {
      setResult('please select method');
    }
    setLoad(false);
  }

    return (
      <>
      <React.Fragment>
        <Header />
        <br></br>
        <div className='flex'>
        <Form onSubmit={onSubmit} updateMethod={updateMethod} updateBody={updateBody} />
        <Results method={method || ''} url={result || ''} headers={headers || ''} loading={loading} />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </React.Fragment>
      </>
    );
}

// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//       requestParams: {},
//     };
//   }

//   callApi = (requestParams) => {
//     // mock output
//     const data = {
//       count: 2,
//       results: [
//         {name: 'fake thing 1', url: 'http://fakethings.com/1'},
//         {name: 'fake thing 2', url: 'http://fakethings.com/2'},
//       ],
//     };
//     this.setState({data, requestParams});
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Header />
//         <div>Request Method: {this.state.requestParams.method}</div>
//         <div>URL: {this.state.requestParams.url}</div>
//         <Form handleApiCall={this.callApi} />
//         <Results data={this.state.data} />
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }

export default App;