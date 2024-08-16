import React, { useState } from 'react';
import QuestionForm from './QuestionForm';
import Accordion from './Accordion';
// interface AccordionItemProps {
//   title: string;
//   content: React.ReactNode;
// }

// const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="border-b border-gray-200">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full px-4 py-2 text-left text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//       >
//         <span className="font-semibold">{title}</span>
//         <span className={`float-right transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
//           ▼
//         </span>
//       </button>
//       {isOpen && (
//         <div className="px-4 py-2 bg-gray-50">
//           {content}
//         </div>
//       )}
//     </div>
//   );
// };

const CategoryQuestion = () => {    

    const accordionItems = [
        {
            title:"Question Category 1",
            content:<QuestionForm/>,
        },
        {
            title:"Question Category 2",
            content:<QuestionForm/>,
        },
        {
            title:"Question Category 3",
            content:<QuestionForm/>,
        },
        {
            title:"Question Category 4",
            content:<QuestionForm/>,
        },
       
      ];
    
  return (
    <>
            <div>
                <h2 className='ml-4'>Quetionaire</h2>
            </div>
            <div className="max-w-md mx-auto mt-10" >
                <Accordion items={accordionItems} />
                
                
            </div>
    </>
    
  );
};

export default CategoryQuestion;
