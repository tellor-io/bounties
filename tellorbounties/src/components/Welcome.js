import React from "react";
import PositiveVote from "../assets/positive-vote.png";
import NegativeVote from "../assets/negative-vote.png";
import Thinking from "../assets/thinking.png";
import Contact from "../assets/communicate.png";
import Disclaimer from "../assets/warning.png";

function Welcome() {
  return (
    <div className="Welcome">
      <h2 className="Welcome__Message">
        Welcome Tellor Developers and Bounty Hunters!
      </h2>
      <div className="Welcome__Rows">
        <img src={PositiveVote} alt="Thumbs up icon" />
        <h3>What this is.</h3>
        <p>
          The Tellor Bounties program is a way to reward developers who help us
          build out Tellor.
          <br />
          We have a dev fund that's for developing Tellor and we plan to use it!
        </p>
      </div>
      <div className="Welcome__Rows">
        <img src={NegativeVote} alt="Thumbs down icon" />
        <h3>What this is NOT.</h3>
        <p>
          This is not us paying teams to get this done. We're not selling off
          our dev share or hiring contractors. Instead, we want the community to
          become part of completing the network's development need.
          <br />
          The rewards should be seen as just bonuses for helping to build out
          Tellor, not nessecarily a salary or a fair market value for the work.
          <br />
          It's also not some anonymous thing. If you want the reward, you have
          to let me know you're working on it. Hell, let discord and the Tellor
          channel know you're on it. We want you to work on it alone, with
          people, and with the team.
        </p>
      </div>
      <div className="Welcome__Rows">
        <img src={Thinking} alt="Thinking face emoji" />
        <h3>How do I get started?</h3>
        <p>
          Scroll down to see available bounties, and see if anything tickles
          your fancy and then shoot me an email to find out more.
          <br />
          If it says yes, it's "available"! Then you can email me and I'll say
          it's yours. If you want to help someone else working on one not
          available, then also ask and I'll see if its a fit.
          <br />
          If you're building something else that's open source and fits with our
          mission...tell me to add it and lets keep building this out.
        </p>
      </div>
      <div className="Welcome__Rows">
        <img src={Contact} alt="Contact us icon" />
        <h3>Contact</h3>
        <p>
          nfett@tellor.io
          <br />
          @the_fett (Telegram)
        </p>
      </div>
      <div className="Welcome__Rows">
        <img src={Disclaimer} alt="Disclaimer icon" />
        <h3>Disclaimer!</h3>
        <p>
          This is crypto...no promises or guarantees in any way.
          <br />
          Rewards are subject to change given price changes.
        </p>
      </div>
    </div>
  );
}

export default Welcome;
