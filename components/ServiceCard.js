// import { useRef, useEffect } from "react";
// import Tilt from "tilt.js";

// const TiltedDiv = () => {
//   const tiltRef = useRef(null);

//   useEffect(() => {
//     const tilt = new Tilt(tiltRef.current, {
//       max: 25,
//       perspective: 1000,
//       speed: 400,
//       transition: true,
//     });

//     tilt.glare(true);

//     return () => {
//       tilt.destroy();
//     };
//   }, []);

//   return (
//     <div ref={tiltRef} className="tilted-div">
//       <h1>Tilted Div</h1>
//       <p>This div is tilted using Tilt.js</p>
//     </div>
//   );
// };

// export default TiltedDiv;