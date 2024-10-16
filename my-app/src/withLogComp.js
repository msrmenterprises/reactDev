import WithLogging from '../src/utils/withLogging'
const WithLogComp = () => {

   return(
    <>
    <button>Click Me</button>
    </>
   )

}
export default WithLogging(WithLogComp)