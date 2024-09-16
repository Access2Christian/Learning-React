import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

const Test = () => {
  const [code, setCode] = useState("# Markdown");

  return (
    <div>
      <MDEditor
        value={code}
        onChange={setCode}
      />
    </div>
  );
};

export default Test;
