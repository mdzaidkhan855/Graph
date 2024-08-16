import React, { useState } from 'react';
import QuestionForm from './QuestionForm';
import Accordion from './Accordion';
import ProgressBar from './ProgressBar';


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
            <div >
                <h3 className=' pl-8'>50% complete</h3>
                <div className='flex'>
                    <h2 className='mr-4 font-bold ml-2'>Questionaire</h2>
                    <ProgressBar percentage="50" />
                </div>
                
            </div>
            <div className="max-w-md mx-auto mt-10" >
                <Accordion items={accordionItems} />
                
                
            </div>
    </>
    
  );
};

export default CategoryQuestion;
