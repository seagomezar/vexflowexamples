import React from "react";
import Vex from "vexflow";

export default class Example1 extends React.Component {
  componentDidMount() {
    const VF = Vex.Flow;
    // Create an SVG renderer and attach it to the DIV element named "boo".
    const partitura = document.getElementById("partitura1");
    const partituraRenderizada = new VF.Renderer(
      partitura,
      VF.Renderer.Backends.SVG
    );
    // Size our SVG:
    partituraRenderizada.resize(820, 200);
    // And get a drawing context:
    const contextoDeLaPartirura = partituraRenderizada.getContext(); // Create a stave at position 10, 40 of width 400 on the canvas.
    const compas1 = new VF.Stave(10, 40, 400);
    // Add a clef and time signature.
    compas1.addClef("treble").addTimeSignature("4/4");
    compas1.setEndBarType(VF.Barline.type.SINGLE);
    // Connect it to the rendering context and draw!
    compas1.setContext(contextoDeLaPartirura).draw();

    const notasCompas1 = [
      // A quarter-note C.
      new VF.StaveNote({ clef: "treble", keys: ["c/4"], duration: "4" }),

      // A quarter-note D.
      new VF.StaveNote({ clef: "treble", keys: ["d/4"], duration: "4" }),

      // A quarter-note rest. Note that the key (b/4) specifies the vertical
      // position of the rest.
      new VF.StaveNote({ clef: "treble", keys: ["e/4"], duration: "4" }),
      new VF.StaveNote({ clef: "treble", keys: ["f/4"], duration: "4" }),
    ];

    // Create a voice in 4/4 and add the notes from above
    const voiceCompas1 = new VF.Voice({ num_beats: 4, beat_value: 4 });
    voiceCompas1.addTickables(notasCompas1);

    // Format and justify the notes to 350 pixels.
    new VF.Formatter().joinVoices([voiceCompas1]).format([voiceCompas1], 350);

    // Render voice
    voiceCompas1.draw(contextoDeLaPartirura, compas1);

    const compas2 = new VF.Stave(410, 40, 400);
    compas2.setEndBarType(VF.Barline.type.END);
    // Connect it to the rendering context and draw!
    compas2.setContext(contextoDeLaPartirura).draw();

    const notasCompas2 = [
      new VF.StaveNote({ clef: "treble", keys: ["g/4"], duration: "4" }),
      new VF.StaveNote({ clef: "treble", keys: ["a/4"], duration: "4" }),
      new VF.StaveNote({ clef: "treble", keys: ["b/4"], duration: "4" }),
      new VF.StaveNote({ clef: "treble", keys: ["c/5"], duration: "4" }),
    ];

    // Create a voice in 4/4 and add the notes from above
    const voiceCompas2 = new VF.Voice({ num_beats: 4, beat_value: 4 });
    voiceCompas2.addTickables(notasCompas2);

    // Format and justify the notes to 350 pixels.
    new VF.Formatter().joinVoices([voiceCompas2]).format([voiceCompas2], 350);

    // Render voice
    voiceCompas2.draw(contextoDeLaPartirura, compas2);
  }

  render() {
    return <div id="partitura1"></div>;
  }
}
