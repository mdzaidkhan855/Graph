import CategoryQuestion from './CategoryQuestion.tsx'

export default function Panel({ leafLabel }) {
  return (
    <div>
      <h3> ORM Input: {leafLabel}</h3>
      
      <br />
      <CategoryQuestion/>
    </div>
  );
}
