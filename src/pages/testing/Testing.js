import './Testing.css';
// import React, { useState } from 'react';
// import { Swipeable } from 'react-swipeable';

// function Testing() {

//     return (
//         <div class="layout">
//             <h1>Testing</h1>
//             <p style={{ fontFamily: "giveer-bold", padding: "10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
//                 exercitationem.</p>
//             <p style={{ fontFamily: "giveer-liter", padding: "10px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
//                 exercitationem.</p>
//             <p style={{ fontFamily: "giveer-medium", padding: "10px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
//                 exercitationem.</p>
            
//         </div>
//     );
// }

// function Testing () {
//   const [showOnDisplay, setShowOnDisplay] = useState(true);

//   const handleSwipe = (direction) => {
//     if (direction === 'left') {
//       setShowOnDisplay(false);
//     } else if (direction === 'right') {
//       setShowOnDisplay(true);
//     }
//   };

//   return (
//     <Swipeable onSwiped={(eventData) => handleSwipe(eventData.dir)}>
//       <div className={`swipeable-div ${showOnDisplay ? 'on-display' : 'given'}`}>
//         {/* Your content for on-display div */}
//         <h1>On Display Content</h1>
//       </div>
//     </Swipeable>
//   );
// };


// export default Testing;

import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const Testing = () => {
  // State to manage the content display
  const [showOnDisplay, setShowOnDisplay] = useState(true);

  // Function to handle swipes
  const handleSwipe = () => {
    // Toggle content on swipe
    setShowOnDisplay(!showOnDisplay);
  };

  // Swipeable hook
  const handlers = useSwipeable({ onSwiped: handleSwipe });

  return (
    <div {...handlers} className={`swipeable-div ${showOnDisplay ? 'on-display' : 'given'}`}>
      {/* Display content based on the state */}
      {showOnDisplay ? (
        <h1>On Display Content</h1>
      ) : (
        <h1>Other Content</h1>
      )}
    </div>
  );
};

export default Testing;
