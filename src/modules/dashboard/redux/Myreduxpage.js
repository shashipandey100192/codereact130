import React, { Fragment } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,mycustomfucntion } from './Myactions';

function Myreduxpage() {

const dispatch = useDispatch();
const count = useSelector((state)=> state.counter.value);
    return (
        <Fragment>
            <div>Myreduxpage</div>
            <div>
                <div>
                    <button onClick={() => dispatch(increment())}> Increment</button>
                    <span>{count}</span>
                    <button onClick={() => dispatch(decrement())}> Decrement</button>
                    <button onClick={() => dispatch(mycustomfucntion())}> Decrement</button>
                </div>
            </div>

        </Fragment>


    )
}

export default Myreduxpage