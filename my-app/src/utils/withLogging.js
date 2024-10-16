const WithLogging = (Component) => {
return function withLogFun(props){
    const logInteraction = () => {
        console.log('Component is clicked')
    }

    return (
        <div onClick={logInteraction}><Component {...props}/></div>
    )
}
}

export default WithLogging