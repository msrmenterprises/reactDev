import { forwardRef } from "react"

const ChildRef = forwardRef((props,ref) => {

    return(
        <>
            <h3>Child Component Rendering Ref</h3>
            <input type="text" ref={ref}/>
        </>

    )


})

export default ChildRef