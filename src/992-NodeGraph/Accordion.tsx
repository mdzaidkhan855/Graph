import React, { useEffect, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import QuestionForm from './QuestionForm';
import CircularProgress from './CircularProgress';
import Toaster from './Toaster';



const AccordionItem = ({ id,title, content, isOpen, onClick, formItemSaved , searchQuery}) => {

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

        //console.log(" form data: " , formData)
        if(isFormComplete())
        {
            //console.log("Data enterd: " ,[id])
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
          {<QuestionForm formData={formData} setFormData={setFormData} searchQuery={searchQuery} content={content}/>}
        </div>
      )}
    </div>
  );
};

const accordionData = [
  {
    id: 1,
    title: 'Question Category 1',
    content: [
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.',
    ],
},
{
    id: 2,
    title: 'Question Category 2',
    content: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
    ],
},
{
    id: 3,
    title: 'Question Category 3',
    content: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
    ],
},
   
  ];

const Accordion = ({setPercentage}) => {

  const[isFormSubmitted, setIsFormSubmitted] = useState(false)
  const[isFormSaved, setIsFormSaved] = useState(false)

  const [formItems, setFormItems] = useState({});

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  function formItemSaved(key, value){
    // console.log("incrementCounter called")
     
    setFormItems((prevData) => ({
        ...prevData,
        [key]: value,
      }));
    
  }
  useEffect(()=>{
    console.log("Total form submitted : " ,formItems)
    // Calculate the total number of true values
    let no = Object.values(formItems).filter(value => value === true).length
    let percentageFilled = Math.floor(100 * (no/ accordionData.length))
    setPercentage(percentageFilled );
  
  },[formItems]);

  function formSubmit(){
    setIsFormSubmitted(true)
  }

  function formSave(){
    setIsFormSaved(true)
  }


  // ######################################### Applying serach functionality : starts ############################

    const [searchQuery, setSearchQuery] = useState('');
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [filteredData, setFilteredData] = useState([]);
    const [expandedItem, setExpandedItem] = useState(null);

    useEffect(() => {
        const results = accordionData.reduce((acc, item) => {
            const matchingContent = item.content
                .map((content, index) => ({ content, index }))
                .filter(({ content }) => content.toLowerCase().includes(searchQuery.toLowerCase()));

            if (matchingContent.length > 0) {
                acc.push({ ...item, matchingContent });
            }
            return acc;
        }, []);

        setFilteredData(results);
        setCurrentIndex(results.length > 0 ? 0 : -1);
    }, [searchQuery]);

    useEffect(() => {
        if (currentIndex >= 0 && currentIndex < filteredData.length) {
            setExpandedItem(filteredData[currentIndex].id);
        } else {
            setExpandedItem(null);
        }
    }, [currentIndex, filteredData]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleNext = () => {
        if (filteredData.length > 0) {
            setCurrentIndex((currentIndex + 1) % filteredData.length);
        }
    };

    const handlePrevious = () => {
        if (filteredData.length > 0) {
            setCurrentIndex((currentIndex - 1 + filteredData.length) % filteredData.length);
        }
    };

    const highlightText = (text) => {
        if (!searchQuery) return text;

        const regex = new RegExp(`(${searchQuery})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    };

  // ######################################## Applying serach functionality : end ############################

  return (
    <>      <div className='mb-2 flex space-x-10'>
                <input
                className='w-50 rounded ml-2'
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                />
                
                <button className='w-30 text-left p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none flex' onClick={handlePrevious} disabled={filteredData.length === 0}>
                  <span className="mr-3"><ChevronUpIcon className="w-4 text-gray-600" /></span>
                  <span className="mr-3"><ChevronDownIcon className="w-4  text-gray-600" /></span>
                </button>
                
            </div>
            
            <div>
            {accordionData.map((item, index) => (
                <AccordionItem
                key={index}
                id={item.id}
                title={item.title}
                content={item.content}
                isOpen={expandedItem === item.id}
                formItemSaved = {formItemSaved}
                onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
                searchQuery={searchQuery}
                />
            ))}
        </div>
        <div className='flex space-x-14'>
            <div className='flex justify-center items-center h-20 ml-2'>
                <button onClick={formSave} className='bg-white-500 text-black rounded hover:bg-gray-600 hover:text-white py-2 px-4'>Save</button>
                {isFormSaved && <Toaster message="Form saved succefully"/>}
            </div>

            <div className='flex justify-center items-center space-x-2'>
                <button className='bg-white-500 text-black rounded hover:bg-gray-600 hover:text-white py-2 px-4'>Cancel</button>
                <button onClick={formSubmit} className="bg-white-500 text-black rounded hover:bg-gray-600 hover:text-white py-2 px-4">Submit</button>
                {isFormSubmitted && <Toaster message="Form submitted succefully"/>}
            </div>
            

        </div>
    </>
        
  );
};

export default Accordion;
