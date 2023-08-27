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

const AboutUs = () => {
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

export default AboutUs;
