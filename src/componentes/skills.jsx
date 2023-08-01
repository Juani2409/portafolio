import React from "react";
import JavaScript from "../logos/JavaScript-logo.png";
import Node from "../logos/Node.js_logo.png"

function Skills() {

    let info=[
        {name: 'JavaScript' , img: JavaScript},
        {name: 'Node', img:Node},
        {name: 'JavaScript' , img: JavaScript},
        {name: 'Node', img:Node},
        {name: 'JavaScript' , img: JavaScript},
        {name: 'Node', img:Node},
        {name: 'JavaScript' , img: JavaScript},
        {name: 'Node', img:Node}
    ]
  return (
    <div className="container mt-4">
      <div className="row">
      {info.map((e) =>
        <div className="col-md-6 col-lg-3 mb-4">
          <a
            title="JavaScript"
            className="card rounded-3xl border border-outline-variant p-4 text-on-surface duration-100 hover:bg-primary-container hover:no-underline active:rounded-xl text-center"
            href="#"
          >
            <div className="d-flex justify-content-center">
              {/* Agrega la ruta de la imagen en el atributo src */}
              <img
                src={e.img}
                width="140"
                height="140"
                alt="logo de js"
                title="JavaScript"
                loading="lazy"
                className="h-16 w-16 max-w-full object-contain sm:h-36 sm:w-36"
              />
            </div>
            <div className="mt-4 font-weight-bold">{e.name}</div>
          </a>
        </div>
)}
      </div>
    </div>
  );
}

export default Skills;








// import React from "react";




// function Skills(){
//     return(
//       <div class="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols ma:gap-8">
//         <a title="javascript" class="relative overflow-hidden ronded-3xl border border-outline-variant p-6 text-on-surface duration-100 hover:bg-primary-container hover:no-underline active:rounded-xl" href="">
//             <div class="flex items-center justify-center">
//                 <img src="" width="140" height="140" alt="logo de js" title="JavaScript" loading="lazy" class="h-16 w-16 max-w-full object-contain sm:h-36 sm:w36"></img>
//             </div>
//             <div class="mt-4 hidden text-center sm:lock">
//                 <div class="font-bold">
//                     <font style="vertical-align: inherit;">
//                     <font style="vertical-align: inherit;">
//                         JavaScript
//                         </font>
//                     </font>
//                 </div>
//             </div>
//         </a>
//       </div>
//     )
// }


// export default Skills;