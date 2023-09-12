import './App.css';
import Button from './components/Button';
import Card from './components/Card';

export default function App() {
  return (
    <>
    <Card>
    <Button
    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
    onClick={()=>{alert('Hello')}}
    >Alert</Button>
    <Button>Primary</Button>
    </Card>
    </>
  )
}