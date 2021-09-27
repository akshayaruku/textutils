import React, {useState} from 'react'


export default function About(props) {
//   const [myStyle, setmyStyle] = useState({
//     color: 'black',
//     backgroundColor: 'white'
// })
let myStyle={
  color: props.mode === 'dark'?'white':'black',
  backgroundColor: props.mode === 'dark'?'black':'white'
  
}


    return (
       <>
       
      
       <h1 className = "container " style={myStyle}>About Page</h1>
       <div className="container"  style={myStyle} >
       <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Analyze Your Text</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
        Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or


      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingTwo"  style={myStyle} >
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
         TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.


      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree"  style={myStyle}>
      <button className="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
         This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
      </div>
    </div>
  </div> 
</div>
<div className="container my-3">
{/* <button type="button" onClick={toggleStyle} class="btn btn-primary">{btnText}</button> */}

</div>
</div>
<div className="container" >
  <div class="card text-center">
  <div class="card-header"  style={myStyle}>
    Contributed By Akshay Aruku
  </div>
  <div class="card-body"  style={myStyle}>
    <h5 class="card-title"  style={myStyle}>Visit Akshay's Github</h5>
    <p class="card-text"  style={myStyle}>This is completely react based web app</p>
    <a href="#" class="btn btn-primary" href="https://github.com/akshayaruku">visit now</a>
  </div>
  <div class="card-footer text-muted"  style={myStyle}>
    Few moments ago
  </div>
</div>
</div>
       </>
    )
}
