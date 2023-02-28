import './Style.css'

function Main(props) {
     console.log (props);
     
  return <div className='wrapper'>
    <div className='box' dangerouslySetInnerHTML = {{_html:props.text}}>

    </div>
  </div>
 }


export default Main