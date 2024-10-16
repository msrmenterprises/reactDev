const HOC = (Component) => {
    const isAuth = false;
    return function(props){
        if(isAuth){
            return <Component {...props}/>
        }
        else{
            return <h1>Please try again ! You are not a authorized user.</h1>
        }
    }
}

export default HOC