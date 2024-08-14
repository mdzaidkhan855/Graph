//import { useState } from 'react';

import './App.css';

import React from 'react';
import { nodes, links} from './992-NodeGraph/nodedata.js';
import NodeGraph from './992-NodeGraph/Graph.js';



function App() {
  

  

  return (
    <div className="root">
      
            
          <NodeGraph nodes={nodes} links={links} />
        
    </div>
  );
}

export default App;
