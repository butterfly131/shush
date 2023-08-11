import React from "react";
import Typewriter from "react-typewriter-effect";
import "./Poem.css";

const Poem = () => {
  return (
    <div className="body-poem">
      <section className="container">
        <div className="poem-container-left">
          <h1 className="title">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Poison and Antidote").start();
              }}
            />
          </h1>
          <div className="row">
            <p className="col t-1">
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

export default Poem;
