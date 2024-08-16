import CategoryQuestion from './CategoryQuestion.tsx'

export default function Panel({ leafLabel }) {
  return (
    <div className='vh-600'>
      <h2 className='ml-4 mt-2'> {leafLabel}</h2>
      
      <br />
      <CategoryQuestion/>
    </div>
  );
}
