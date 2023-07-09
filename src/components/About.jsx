import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
        I am Rob Martel, a full-stack developer. 
         I have spent the past 18+ years as a police officer, and recently decided 
         to follow my passion for coding.
         I graduated from an intense full stack boot camp with Nucamp in July of 2022. I am 
         excited to have developed skills in HTML, CSS, JavaScript, React, Redux, React Native, Node js, MongoDb and 
         Express to name a few. 
        </p>
        <br />
        <p className="text-xl">
          I really look forward to bringing my past experiences, along with these new skills to become a new addition to someone's team.

        </p>
      </div>
    </div>
  );
};

export default About;
