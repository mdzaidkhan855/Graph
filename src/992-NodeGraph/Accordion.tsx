import React, { useEffect, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import QuestionForm from './QuestionForm';

const AccordionItem = ({ id,title, content, isOpen, onClick, formItemSaved }) => {

    const [formData, setFormData] = useState({ 
                                                textArea: '',
                                                radioSelection: '',
                                                checkboxes: {
                                                option1: false,
                                                option2: false,
                                                }, 
                                            });

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormData((prevData) => ({
    //       ...prevData,
    //       [name]: value,
    //     }));
        

    //   };
    // Check if the form is complete
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
        <span>
            {title}
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
    // {
    //     title:"Question Category 3",
    //     content:<QuestionForm formFilled={formFilled}/>,
    // },
    // {
    //     title:"Question Category 4",
    //     content:<QuestionForm formFilled={formFilled}/>,
    // },
   
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
  );
};

export default React.memo(Accordion);
