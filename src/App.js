import React from 'react';
import './styles.css'
var myimg = require('./assets/img.JPG')
var mydata = [
  { name: "emp1", desg: "emp1desg", imageurl: myimg },
  { name: "emp2", desg: "emp2desg", imageurl: myimg },
  { name: "emp3", desg: "emp3desg", imageurl: myimg },
  { name: "emp4", desg: "emp4desg", imageurl: myimg },
  { name: "emp5", desg: "emp5desg", imageurl: myimg }
];

function Bha(str1, str2, imageurl) {
  return (
    <div className="Bha">
      <img className="Photo" src={imageurl} alt={"Hello"} />
      <h3 className="str1">{str1}</h3>
      <h4 className="str1">{str2}</h4>
    </div>
  );
} 

function App() {
  
  return (
     <div className = "container">
       {
         mydata.forEach(element => {
           console.log(element.name);
           console.log(element.imageurl);
         })
       }
       {/* {Bha('bharti','bhatia',myimg)}
       {Bha('chinki','bhatia',myimg)}
       <Bha str1={'bharti'} str2={'bhatia'} imageurl={myimg}/> */}
       </div>
         );
         
  
}

export default App;
