import React, { useEffect, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import QuestionForm from './QuestionForm';
import CircularProgress from './CircularProgress';
const AccordionItem = ({ id,title, content, isOpen, onClick, formItemSaved }) => {

    const [formData, setFormData] = useState({ 
                                                textArea: '',
                                                radioSelection: '',
                                                checkboxes: {
                                                option1: false,
                                                option2: false,
                                                }, 
                                            });

    
  
  
  function percentageItemFilled(){
    let elementFormFilled = 0;
    const isTextAreaFilled = formData.textArea.trim() !== '';
    const isRadioSelected = formData.radioSelection !== '';
    const isAtLeastOneCheckboxChecked = Object.values(formData.checkboxes).includes(true);

    if(isTextAreaFilled) elementFormFilled++;
    if(isRadioSelected) elementFormFilled++;
    if(isAtLeastOneCheckboxChecked) elementFormFilled++;

    return Math.floor( 100 * (elementFormFilled/ 3))
  }

  function isFormComplete(){
    // Check if textarea is not empty, radio is selected, and at least one checkbox is checked
    const isTextAreaFilled = formData.textArea.trim() !== '';
    const isRadioSelected = formData.radioSelection !== '';
    const isAtLeastOneCheckboxChecked = Object.values(formData.checkboxes).includes(true);

   
    return isTextAreaFilled && isRadioSelected && isAtLeastOneCheckboxChecked;
  };

    useEffect(()=>{

        console.log(" form data: " , formData)
        if(isFormComplete())
        {
            console.log("Data enterd: " ,[id])
            formItemSaved([id], true)
        }else{
            formItemSaved([id], false)
        }

    },[formData])

    
  return (
    <div className="border border-gray-300 rounded-md mb-2">
      <button
        className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none flex"
        onClick={onClick}
      >
        <span className="mr-3">
          {isOpen ? (
            <ChevronUpIcon className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDownIcon className="w-5 h-5 text-gray-600" />
          )}
          
        </span>
        <span className='flex'>
            <div className='mr-10'>{title}</div>
            <div className=""><CircularProgress progress={percentageItemFilled()} size={30} strokeWidth={2} /></div>
        </span>
        
      </button>
      {isOpen && (
        <div className="p-4 border-t border-gray-300">
          {/* {<QuestionForm formData={formData} setFormData={setFormData} handleChange={handleChange}/>} */}
          {<QuestionForm formData={formData} setFormData={setFormData} />}
        </div>
      )}
    </div>
  );
};

const items = [
    {
        id:1,
        title:"Question Category 1",
        content:<QuestionForm />,
    },
    {
        id:2,
        title:"Question Category 2",
        content:<QuestionForm />,
    },
    {
        title:"Question Category 3",
        content:<QuestionForm />,
    },
    {
        title:"Question Category 4",
        content:<QuestionForm />,
    },
    {
        title:"Question Category 5",
        content:<QuestionForm />,
    },
   
  ];

const Accordion = ({setPercentage}) => {

  const [formItems, setFormItems] = useState({});

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  function formItemSaved(key, value){
    console.log("incrementCounter called")
     
    setFormItems((prevData) => ({
        ...prevData,
        [key]: value,
      }));
    
  }
  useEffect(()=>{
    console.log("Total form submitted : " ,formItemSaved)
    // Calculate the total number of true values
    let no = Object.values(formItems).filter(value => value === true).length
    let percentageFilled = 100 * (no/ items.length)
    setPercentage(percentageFilled );
  
  },[formItems])

  return (
    <>
        <div>
            {items.map((item, index) => (
                <AccordionItem
                key={index}
                id={item.id}
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                formItemSaved = {formItemSaved}
                onClick={() => handleToggle(index)}
                />
            ))}
        </div>
        <div className='flex space-x-14'>
            <div className='flex justify-center items-center h-20 ml-2'>
                <button className='bg-white-500 text-black rounded hover:bg-gray-600 hover:text-white py-2 px-4'>Save</button>
            </div>

            <div className='flex justify-center items-center space-x-2'>
                <button className='bg-white-500 text-black rounded hover:bg-gray-600 hover:text-white py-2 px-4'>Cancel</button>
                <button className="bg-white-500 text-black rounded hover:bg-gray-600 hover:text-white py-2 px-4">Submit</button>
            </div>
            

        </div>
    </>
        
  );
};

export default React.memo(Accordion);
