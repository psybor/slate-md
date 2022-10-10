import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Editor } from '../dist';

const App = () => {
  return (
    <div style={{ border: '1px solid gray' }}>
      <Editor placeholder="PlaceHolder" onBlur={() => console.log('blur')} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
