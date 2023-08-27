// import React from "react";

// export default function About() {
//   return (
//     <div>
//       <h1>About Us!</h1>
//       <h2>Our Purpose</h2>
//       <p>
//         The world is full of wonderful things! None more so than the wide array
//         of cuisines from across the globe.
//         <br />
//         As a result we have created this site to give you the opportunity to
//         experience different cuisines and dishes from all over the world. You
//         will be cooking up a storm, with wholesome dishes from different
//         countries, regions and continents. Master the menu's on offer and
//         experience one of life's greatest treasures ... good food!!
//         <br />
//         If you enjoy the site and have any questions you's like to ask, you can
//         contact us in the 'Contact' section.
//         <br />
//         We look forward to spreading our Global Delights with you!
//       </p>
//       <div>
//         <header className="App-header">
//           <h2>Meet the Team!</h2>
//         </header>
//         <h2>Anne</h2>
//         <ul>
//           <li>
//             My favourite cuisine is Vietnamese but for desserts I always head to
//             Italy.
//           </li>
//           <li>Outside the kitchen I like to run and cross-stitch.</li>
//           <li>
//             I like running because it is a reason to go outside while staying
//             healthy.
//           </li>
//         </ul>

//         <h2>Beth</h2>
//         <ul>
//           <li>I love watching tv shows and listening to music.</li>
//           <li>
//             When Im not chilling in bed.. I go to boxing, something I have
//             recently taken up.
//           </li>
//           <li>
//             I like boxing because it is active and requires working with others.
//           </li>
//         </ul>

//         <h2>Georgia</h2>
//         <ul>
//           <li>My favourite food is Chinese but I do love a pizza!</li>
//           <li>
//             My hobbies include rock climbing, snowboarding and playing with my
//             rabbits.
//           </li>
//           <li>
//             I like rock climbing because it requires problem solving skills as
//             well as physical strength.
//           </li>
//         </ul>

//         <h2>Sophia</h2>
//         <ul>
//           <li>My favorite food is toast.</li>
//           <li>I like to read books.</li>
//           <li>
//             {" "}
//             I like reading because it has the potential to transport you to a
//             whole new world.
//           </li>
//         </ul>

//         <h2>Sarah</h2>
//         <ul>
//           <li>My favorite food is Mexican! As long as it is vegan.</li>
//           <li>
//             I like to look after my plants, go charity shopping, and go jogging
//             or to the gym.
//           </li>
//           <li>
//             {" "}
//             I like looking after plants as it's interesting to learn about their
//             different needs and they brighten up a room.
//           </li>
//         </ul>

//         <h2>Grace</h2>
//         <ul>
//           <li>
//             My favorite food is Thai, it is so flavourful and the perfect
//             combination of taste profiles.
//           </li>
//           <li>I spend a lot of time playing video games -</li>
//           <li>
//             I love the way I use my brain when doing so, actively but also
//             passively.
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import './AboutUs.css';

const teamMembers = [
  { name: 'Anne', role: 'Junior Developer', bio: 'My favourite cuisine is Vietnamese but for desserts I always head to Italy. Outside the kitchen I like to run and cross-stitch. I like running because it is a reason to go outside while staying healthy.' },
  { name: 'Beth', role: 'Junior Developer', bio: 'I love watching tv shows and listening to music. When Im not chilling in bed.. I go to boxing, something I have recently taken up. I like boxing because it is active and requires working with others.' },
  { name: 'Georgia', role: 'Junior Developer', bio: 'My favourite food is Chinese but I do love a pizza! My hobbies include rock climbing, snowboarding and playing with my rabbits. I like rock climbing because it requires problem solving skills as well as physical strength.' },
  { name: 'Grace', role: 'Junior Developer', bio: 'My favorite food is Thai, it is so flavourful and the perfect combination of taste profiles. I spend a lot of time playing video games - I love the way I use my brain when doing so, actively but also passively.' },
  { name: 'Sarah', role: 'Junior Developer', bio: 'My favorite food is Mexican! As long as it is vegan. I like to look after my plants, go charity shopping, and go jogging or to the gym. I like looking after plants as its interesting to learn about their different needs and they brighten up a room.' },
  { name: 'Sophia', role: 'Junior Developer', bio: 'My favorite food is toast. I like to read books. I like reading because it has the potential to transport you to a whole new world.' }
];

const About= () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <h2>{member.name}</h2>
            <p className="role">{member.role}</p>
            <p className="bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
