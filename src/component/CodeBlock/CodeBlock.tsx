import React from "react";

type Props = {
  value: string;
};

const CodeBlock: React.FC<Props> = ({ value }) => {
  return (
    <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
      <code>{value}</code>
    </pre>
  );
};

export default CodeBlock;
