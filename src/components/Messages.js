import React from "react";
import "./Messages.css";

const Messages = () => {
  return (
    <div className="body-poem">
      <section className="container">
        <div className="poem-container-left">
          <h1 className="title">Poison and Antidote</h1>
          <span className="arrow"></span>
          <div className="row">
            <p id="p1" className="col t-1 bg-image">
              In this friendship of ours, an interesting twist, <br />
              You're my Poison & Antidote, a funny mix. <br />
              With your words, you sting like a mischievous bee, <br />
              Yet your presence brings healing, just wait and see. <br />
              <br />
              You poke and tease, a master of mischief and fun, <br />
              But when I'm feeling down, you're the only one, <br />
              Who can magically turn my frown upside down, <br />
              Your jokes and laughter, a remedy I've found. <br />
              <br />
              You're the Poison that pricks, a jolt to my soul, <br />
              Yet you're also the Antidote that makes me whole. <br />
              No one else can hurt me quite like you do, <br />
              But your friendship's healing power is tried and true. <br />
              <br />
            </p>
            <p
              id="p2"
              className="col text bg-image"
              style={{
                backgroundImage:
                  "url('https://i.pinimg.com/564x/7e/d9/a5/7ed9a53d9dc40c502b02d24d569d8fc6.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "calc(100% - -110px ) 0px",
                backgroundSize: "cover",
              }}
            >
              So here's to our unique bond, a funny charade, <br />
              Where hurt and healing intertwine, unafraid. <br />
              Through laughter and tears, we navigate this ride, <br />
              With you by my side, there's nowhere to hide. <br />
              <br />
              Just remember, my Poison & Antidote friend, <br />
              Our quirky connection, it knows no end. <br />
              You may sting me with words, but I'll always find, <br />
              That healing touch, one of a kind. <br />
              <br />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Messages;

// import React from "react";
// import Typewriter from "react-typewriter-effect";
// import "./Messages.css";

// const Messages = () => {
//   return (
//     <div className="body-poem">
//       <section className="flipbook">
//         <h1 className="title">
//           <Typewriter
//             onInit={(typewriter) => {
//               typewriter.typeString("Poison and Antidote").start();
//             }}
//           />
//         </h1>
//         <div className="poem-container">
//           <div className="poem-content p1">
//             <div className="poem-typing">
//               <Typewriter
//                 onInit={(typewriter) => {
//                   typewriter
//                     .typeString(
//                       "In this friendship of ours, an interesting twist, <br />"
//                     )
//                     .start();
//                 }}
//               />
//               ...
//               {"You're my Poison & Antidote, a funny mix. <br></br>"}
//               {"With your words, you sting like a mischievous bee, <br></br>"}
//               {"Yet your presence brings healing, just wait and see. <br></br>"}
//               <br></br>
//               {"You poke and tease, a master of mischief and fun, <br></br>"}
//               {"But when I'm feeling down, you're the only one, <br></br>"}
//               {"Who can magically turn my frown upside down, <br></br>"}
//               {"Your jokes and laughter, a remedy I've found. <br></br>"}
//               <br></br>
//               {"You're the Poison that pricks, a jolt to my soul, <br></br>"}
//               {"Yet you're also the Antidote that makes me whole. <br></br>"}
//               ...
//             </div>
//           </div>
//           <div className="poem-content p2">
//             <div className="poem-typing">
//               <Typewriter
//                 onInit={(typewriter) => {
//                   typewriter
//                     .typeString(
//                       "No one else can hurt me quite like you do, <br />"
//                     )
//                     .start();
//                 }}
//               />
//               ...
//               {
//                 "But your friendship's healing power is tried and true. <br></br>"
//               }
//               <br></br>
//               {"So here's to our unique bond, a funny charade, <br></br>"}
//               {"Where hurt and healing intertwine, unafraid. <br></br>"}
//               {"Through laughter and tears, we navigate this ride, <br></br>"}
//               {"With you by my side, there's nowhere to hide. <br></br>"}
//               <br></br>
//               {"Just remember, my Poison & Antidote friend, <br></br>"}
//               {"Our quirky connection, it knows no end. <br></br>"}
//               {"You may sting me with words, but I'll always find, <br></br>"}
//               {"That healing touch, one of a kind. <br></br>"}
//               ...
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Messages;

// {/* <div className="body-poem">
//   <section className="container-poem">
//     <h1 className="title">Poison and Antidote</h1>
//     <p>
//       In this friendship of ours, an interesting twist, <br></br>
//       You're my Poison & Antidote, a funny mix. <br></br>
//       With your words, you sting like a mischievous bee, <br></br>
//       Yet your presence brings healing, just wait and see. <br></br>
//       <br></br>
//       You poke and tease, a master of mischief and fun, <br></br>
//       But when I'm feeling down, you're the only one, <br></br>
//       Who can magically turn my frown upside down, <br></br>
//       Your jokes and laughter, a remedy I've found. <br></br>
//       <br></br>
//       You're the Poison that pricks, a jolt to my soul, <br></br>
//       Yet you're also the Antidote that makes me whole. <br></br>
//       No one else can hurt me quite like you do, <br></br>
//       But your friendship's healing power is tried and true. <br></br>
//       <br></br>
//     </p>
//     <p>
//       So here's to our unique bond, a funny charade, <br></br>
//       Where hurt and healing intertwine, unafraid. <br></br>
//       Through laughter and tears, we navigate this ride, <br></br>
//       With you by my side, there's nowhere to hide. <br></br>
//       <br></br>
//       Just remember, my Poison & Antidote friend, <br></br>
//       Our quirky connection, it knows no end. <br></br>
//       You may sting me with words, but I'll always find, <br></br>
//       That healing touch, one of a kind. <br></br>
//     </p>
//   </section>
// </div>; */}

// .scale-up-center {
// 	-webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
// 	        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
// }

//  /* ----------------------------------------------
//  * Generated by Animista on 2023-8-2 2:53:50
//  * Licensed under FreeBSD License.
//  * See http://animista.net/license for more info.
//  * w: http://animista.net, t: @cssanimista
//  * ---------------------------------------------- */

// /**
//  * ----------------------------------------
//  * animation scale-up-center
//  * ----------------------------------------
//  */
// @-webkit-keyframes scale-up-center {
//   0% {
//     -webkit-transform: scale(0.5);
//             transform: scale(0.5);
//   }
//   100% {
//     -webkit-transform: scale(1);
//             transform: scale(1);
//   }
// }
// @keyframes scale-up-center {
//   0% {
//     -webkit-transform: scale(0.5);
//             transform: scale(0.5);
//   }
//   100% {
//     -webkit-transform: scale(1);
//             transform: scale(1);
//   }
// }
