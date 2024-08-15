
import './QuestionForm.css';

export default function QuestionForm(){

    return(
        <div>
            <form  action="">
            
                <div className="firstSection">
                    <h2 >01. Lorenipsum1</h2>
                    <textarea name="" id="" cols="30" rows="10" placeholder="enter details"/>
                </div>
                <div>
                    <h2>02. Lorenipsum</h2>
                    <div className='radio'>
                        <div className='radioItem'>
                            <input type="radio" id="option1" name="choice" value="Option 1"/>
                            <label for="option1">Yes</label>
                        </div>
                        <div className='radioItem'>
                            <input type="radio" id="option1" name="choice" value="Option 1"/>
                            <label for="option1">No</label>
                        </div>
                        
                    </div>
                    
                </div>
                <div>
                    <h2>03. Lorenipsum</h2>
                    <div className='checkbox'>
                        <div className='checkboxItem'>
                            <input type="checkbox" id="option1" name="options" value="Option 1"/>
                            <label for="option1">Option 1</label>
                        </div>
                        <div className='checkboxItem'>
                            <input type="checkbox" id="option2" name="options" value="Option 2"/>
                            <label for="option2">Option 2</label>
                        </div>
                        
                        
                    </div>
                    
                </div>
            
            </form>
        </div>
    )
}