import React, { useState } from 'react';
import QuestionForm from './QuestionForm';

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 text-left text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <span className="font-semibold">{title}</span>
        <span className={`float-right transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="px-4 py-2 bg-gray-50">
          {content}
        </div>
      )}
    </div>
  );
};

const CategoryQuestion: React.FC = () => {
  return (
    <div className="max-w-md mx-auto mt-10 border-2 border-red-500">
      <AccordionItem
        title="Question Category 1"
        content={<QuestionForm/>}
      />
      <AccordionItem
        title="Question Category 2"
        content="Content for the second item."
      />
      <AccordionItem
        title="Question Category 3"
        content="Content for the third item."
      />
    </div>
  );
};

export default CategoryQuestion;
