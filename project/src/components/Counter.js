import { increment,decrement} from "../redux/Action";
import {useDispatch,useSelector} from "react-redux";
export const Counter=()=>{
    const dispatch=useDispatch();
    const count=useSelector((state)=>state.count);
    return(
<div style={{margin:"20px"}}>
    <h1>Count:{count}</h1>
    <button onClick={ () => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
</div>
    );
};