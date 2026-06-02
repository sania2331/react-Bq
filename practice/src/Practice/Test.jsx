import honda from '../assets/honda.jpg'
function Test() {
  
    const user = "react "
    const arr = [ 'yellow' ,' pink ',' blue']
     console.log( user , arr) ;
return(
    <>
<h1>Hello {user}</h1>
<img src={honda}  width={200}/>
</>
)
}
export default Test;