import React, { useEffect, useState, useCallback } from 'react';
import QuestionForm from './QuestionForm';
import Accordion from './Accordion';
import ProgressBar from './ProgressBar';


const CategoryQuestion = () => {

    const [percentage, setPercentage] = useState(0)

    
    // let percentageFilled = 100 * (noFormSubmitted/ 5)

    // function formFilled(){

    //     setNoFormSubmitted((noFormSubmitted)=> noFormSubmitted + 1)
    // }

    
  return (
    <>
            <div >
                <h3 className=' pl-8'>{percentage}% complete</h3>
                <div className='flex'>
                    <h2 className='mr-4 font-bold ml-2'>Questionaire</h2>
                    <ProgressBar percentage={percentage} />
                </div>                
            </div>
            <div className="max-w-md mx-auto mt-10" >
                <Accordion setPercentage={setPercentage}/>             
                
            </div>
    </>
    
  );
};

export default CategoryQuestion;
