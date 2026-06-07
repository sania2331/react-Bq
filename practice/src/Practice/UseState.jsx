
import  react, { UseState} from react
 function Count () {
    const [add, setAdd]= UseState(0)
  return (
    <div className="count">
    <h1>{add}</h1>
    <button onClick={()=> setAdd(add+ 1)}>Addition
    </button>
    </div>
  );
}

export default  count