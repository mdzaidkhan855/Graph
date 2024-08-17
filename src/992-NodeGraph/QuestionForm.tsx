
import React, { useEffect, useState } from 'react';
import './QuestionForm.css';

function QuestionForm({formData, setFormData}){
    
    // Handle changes for radio buttons
  const handleRadioChange = (event) => {
    setFormData({
      ...formData,
      radioSelection: event.target.value,
    });
  };

  // Handle changes for checkboxes
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      checkboxes: {
        ...prevData.checkboxes,
        [name]: checked,
      },
    }));
  };
    //const [isFormFilled, setIsFormFilled]
//     const [textAreaValue, setTextAreaValue] = useState("");

//     const [selectedOption, setSelectedOption] = useState('yes');

//     const handleRadioChange = (event) => {
//         setSelectedOption(event.target.value);
//     };

//     // Initialize state for checkboxes
//   const [checkedItems, setCheckedItems] = useState({
//     checkbox1: false,
//     checkbox2: false,
//     checkbox3: false,
//   });

//   // Handler to update the checkbox state
//   const handleCheckboxChange = (event) => {
//     const { name, checked } = event.target;
//     setCheckedItems({
//       ...checkedItems, 
//       [name]: checked
//     });
//   };

  function textAreaOnChange(){
    const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
  }

  // Determine if at least one checkbox is checked
//   const isAtLeastOneChecked = Object.values(checkedItems).some(Boolean);

    // useEffect(()=>{
    //     if(textAreaValue != "" && isAtLeastOneChecked){
           
            
    //         //formFilled();
    //     }
        
    // },[textAreaValue,checkedItems])

    return(
        <div>
            <form  action="">
            
                <div className="firstSection">
                    <h2 >01. Lorenipsum1</h2>
                    <textarea name="textArea" id="" cols="30" rows="10" 
                           value={formData.textArea} placeholder="enter details" onChange={textAreaOnChange}/>
                </div>
                <div>
                    <h2>02. Lorenipsum</h2>
                    <div className='radio'>
                        <div className='radioItem'>
                            <input type="radio" id="yes" 
                                    name="radioSelection" 
                                    value="yes"
                                    checked={formData.radioSelection === 'yes'}
                                    onChange={handleRadioChange}

                            />
                            <label className='ml-2' for="yes">Yes</label>
                        </div>
                        <div className='radioItem'>
                            <input type="radio" id="no" 
                                    name="radioSelection" 
                                    value="no"
                                    checked={formData.radioSelection === 'no'}
                                    onChange={handleRadioChange}
                            />
                            <label className='ml-2' for="no">No</label>
                        </div>
                        
                    </div>
                    
                </div>
                <div>
                    <h2>03. Lorenipsum</h2>
                    <div className='checkbox'>
                        <div className='checkboxItem'>
                            <input type="checkbox" 
                                    id="option1" 
                                    name="option1"
                                    checked={formData.checkboxes.option1}
                                    onChange={handleCheckboxChange}
                            />
                            <label className='ml-2' for="option1">Option 1</label>
                        </div>
                        <div className='checkboxItem'>
                            <input type="checkbox" 
                                    id="option2" 
                                    name="option2"
                                    checked={formData.checkboxes.option2}
                                    onChange={handleCheckboxChange}
                            />
                            <label className='ml-2' for="option2">Option 2</label>
                        </div>
                        <div className='checkboxItem'>
                            <input type="checkbox" 
                                    id="option3" 
                                    name="option3"
                                    checked={formData.checkboxes.option3}
                                    onChange={handleCheckboxChange}
                            />
                            <label className='ml-2' for="option3">Option 3</label>
                        </div>
                        
                        
                    </div>
                    
                </div>
            
            </form>
        </div>
    )
}

export default React.memo(QuestionForm);