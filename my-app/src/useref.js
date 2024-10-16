import { useRef } from "react"
import ChildRef from "./childRef";

const UseRef = () => {
    const inputref = useRef(null)
    const handleRef = ()=> {
        inputref.current.focus();
    }
    const inputChildRef = useRef(null)
    const handleChildRef = ()=> {
        inputChildRef.current.focus();
    }
    return(
        <>
            <h1>Welcome to manage and see how the Ref are done.</h1>
            <h2>Also known as Uncontrolled Component</h2>
            <input type="text" ref={inputref}/>
            <button onClick={handleRef}>Submit</button>

            <h1>Welcome to handle the Forfard Ref</h1>
            <h2>Forward Ref are used to pass the reference from Parent to Child for the DOM Element</h2>
            <ChildRef ref={inputChildRef}/>
            <button onClick={handleChildRef}>Child ref</button>
        </>
    )
}
export default UseRef