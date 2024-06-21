import React, { Fragment, useState } from 'react'

function Myconditionpage() {
    const [myrender, mysetrender]=useState("first");

   const changerender = (e)=>{
        mysetrender(e.target.value);
        if(e.target.value==="first")
            {
                return <h1>skdfjksdjfksdjfksd</h1>
            }
            else if(e.target.value==="second")
                {
                    return <h2>ppppppppppppppppppppppppppp</h2>
                }
                else
                {
                    return <h3>ooooooooooooooooooooooooooooooooooo</h3>
                }
   }
  return (
    <Fragment>
    <div>Myconditionpage</div>
    <input type='text' onInput={changerender} value={myrender}/>
    


    </Fragment>
  )
}

export default Myconditionpage