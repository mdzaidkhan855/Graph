//import { useState } from 'react';

import './App.css';


import { nodes, links, interlinks } from './992-NodeGraph/nodedata.tsx';
import NodeGraph from './992-NodeGraph/Graph.tsx';




function App() {
  

  return (
    <div className="root">
      
       
       
          <NodeGraph nodes={nodes} links={links} interlinks={interlinks} />
       
      
    </div>
  );
}

export default App;
