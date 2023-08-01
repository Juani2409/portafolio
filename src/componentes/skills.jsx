import React from "react";
import JavaScript from "../logos/JavaScript-logo.png";
import Node from "../logos/Node.js_logo.png"
import Postgre from "../logos/Logo-PostgreSQL.png"
import Bootstrap from "../logos/Bootstrap.png"
import ReactLogo from "../logos/React.png";
import Github from "../logos/Github.png"
import HtmlCss from "../logos/HTML-CSS.png"
import Java from "../logos/Java.png"


function Skills() {

  let info = [
    { name: 'JavaScript', img: JavaScript },
    { name: 'Node', img: Node },
    { name: 'PostgreSQL', img: Postgre },
    { name: 'Bootstrap', img: Bootstrap },
    { name: 'React', img: ReactLogo },
    { name: 'GitHub', img: Github },
    { name: 'HTML-CSS', img: HtmlCss },
    { name: 'Java', img: Java }
  ]
  return (
    <div className="container mt-4">
      <h1 style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>Herramientas</h1>

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