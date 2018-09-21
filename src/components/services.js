import React from "react";

import DogWalkingImage from "../assets/images/dogwalk.png";
import DogTrainingImage from "../assets/images/dogtrain.png";
import MatchmakingImage from "../assets/images/dogmatch.png";

const Services = () => (
  <section id="services">
    <div className="row">
      <div className="four columns text-center">
				<img alt="dog walking" src={DogWalkingImage} />
        <h2>Dog Walking</h2>
				<p>Long walks, fast walks, evening strolls, pack walks; we do it all!</p>
      </div>
			<div className="four columns text-center">
				<img alt="dog training" src={DogTrainingImage} />
        <h2>Dog Training</h2>
				<p>From basic training, to a plan specifically detailed for you and your pet.</p>
      </div>
			<div className="four columns text-center">
				<img alt="matchmaking" src={MatchmakingImage} />
        <h2>Matchmaking</h2>
				<p>We find you dream pet for you from a high kill shelter in the greater LA area!</p>
      </div>
    </div>
  </section>
);

export default Services;
