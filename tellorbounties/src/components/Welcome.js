import React from "react";
import PositiveVote from "../assets/positive-vote.png";
import NegativeVote from "../assets/negative-vote.png";
import Thinking from "../assets/thinking.png";

function Welcome() {
  return (
    <div>
      <h2>Welcome Tellor Developers and Bounty Hunters!</h2>
      <div>
        <img
          src={PositiveVote}
          className="Welcome__Icons"
          alt="Thumbs up icon"
        />
        <h3>What this is</h3>
        <p>
          The Tellor Bounties program is a way to reward developers who help us
          build out Tellor.
        </p>
        <p>
          We have a dev fund that's for developing Tellor and we plan to use it.
        </p>
      </div>
      <div>
        <img
          src={NegativeVote}
          className="Welcome__Icons"
          alt="Thumbs down icon"
        />
        <h3>What this is not</h3>
        <p>
          This is not us paying teams to get this done. We're not selling off
          our dev share or hiring contractors. Instead, we want the community to
          become part of completing the network's development need.
        </p>
        <p>
          The rewards should be seen as just bonuses for helping to build out
          Tellor, not nessecarily a salary or a fair market value for the work.
        </p>
        <p>
          It's also not some anonymous thing. If you want the reward, you have
          to let me know you're working on it. Hell, let discord and the Tellor
          channel know you're on it. We want you to work on it alone, with
          people, and with the team.
        </p>
      </div>
      <div>
        <img
          src={Thinking}
          className="Welcome__Icons"
          alt="Thinking face emoji"
        />
        <h3>How do I get started?</h3>
        <p>
          Scroll down to see available bounties, and see if anything tickles
          your fancy and then shoot me an email to find out more.
        </p>
        <p>
          If it says yes its "available" , then you can email me and I'll say
          it's yours. If you want to help someone else working on one not
          available, then also ask and I'll see if its a fit.
        </p>
        <p>
          If you're building something else that's open source and fits with our
          mission...tell me to add it and lets keep building this out.
        </p>
      </div>
      <div>
        <h3>Contact</h3>
        <p>nfett@tellor.io</p>
        <p>@the_fett (Telegram)</p>
      </div>
      <div>
        <h3>Disclaimer!</h3>
        <p>This is crypto...no promises or guarantees in any way. </p>
        <p>Rewards are subject to change given price changes.</p>
      </div>
    </div>
  );
}

export default Welcome;
