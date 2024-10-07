import React from "react";
import quantum from "../assets/quantum.png";

export const SubBlog = () => {
  return (
    <div className="rounded-lg w-1/4">
      <img src={quantum} alt="quantum" width={600} height={1000} className="rounded-lg " />
      <div>
        <p>Quantum Computer Doom Challenge</p>
        <p>
          According to PC Gamer, the quantum computer adaptation of the iconic
          game DOOM, known as Quandoom, faces significant technical challenges
          due to its requirement for 72,376 qubits and 80 million quantum gates,
          far exceeding the capabilities of today's most advanced quantum
          computers.
        </p>
        <div>
            <p>elymc</p>
        </div>
      </div>
    </div>
  );
};
