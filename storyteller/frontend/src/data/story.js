const story = {
  start: {
    text: "You wake up on a cold floor. The room is unfamiliar… yet something about it feels personal. A door stands in front of you. A mirror hangs to your left.",
    choices: [
      { text: "Look into the mirror", next: "mirror" },
      { text: "Open the door", next: "door" }
    ]
  },

  mirror: {
    text: "Your reflection stares back… but it looks tired. Hollow. It whispers: 'You remember what you did, don’t you?'",
    choices: [
      { text: "Ask 'What did I do?'", next: "truth1" },
      { text: "Look away", next: "avoid1" }
    ]
  },

  door: {
    text: "The door opens into a long hallway. The lights flicker. You hear faint crying somewhere far away.",
    choices: [
      { text: "Follow the sound", next: "crying" },
      { text: "Go the opposite direction", next: "escape1" }
    ]
  },

  truth1: {
    text: "The mirror cracks. A memory flashes — someone reaching out to you… and you turning away.",
    choices: [
      { text: "Try to remember more", next: "truth2" },
      { text: "Step back in fear", next: "avoid2" }
    ]
  },

  avoid1: {
    text: "You turn away. The room feels colder.",
    choices: [{ text: "Go to the door", next: "door" }]
  },

  crying: {
    text: "You follow the sound. It leads to a child sitting in the corner, crying. When they look up… it’s you.",
    choices: [
      { text: "Comfort the child", next: "accept1" },
      { text: "Step back", next: "reject1" }
    ]
  },

  escape1: {
    text: "You walk away. The hallway stretches endlessly.",
    choices: [
      { text: "Keep walking", next: "lost" },
      { text: "Turn back", next: "door" }
    ]
  },

  truth2: {
    text: "You remember now. Someone needed you. And you chose not to stay.",
    choices: [
      { text: "Accept it", next: "accept2" },
      { text: "Deny it", next: "reject2" }
    ]
  },

  avoid2: {
    text: "The mirror shatters. Everything goes silent.",
    choices: [{ text: "Sit down", next: "empty" }]
  },

  accept1: {
    text: "You sit beside the child. They stop crying. 'You finally came back.'",
    choices: [{ text: "Stay", next: "ending_peace" }]
  },

  reject1: {
    text: "You step back. The child fades away.",
    choices: [{ text: "Run", next: "lost" }]
  },

  accept2: {
    text: "It hurts. But you accept it. The door opens to light.",
    choices: [{ text: "Walk into the light", next: "ending_acceptance" }]
  },

  reject2: {
    text: "No. It wasn’t your fault. The walls feel closer.",
    choices: [{ text: "Keep denying", next: "ending_loop" }]
  },

  lost: {
    text: "You keep running. The hallway never ends.",
    choices: []
  },

  empty: {
    text: "You sit in silence. Nothing remains.",
    choices: []
  },

  ending_peace: {
    text: "For the first time, the room feels warm.",
    choices: []
  },

  ending_acceptance: {
    text: "The past doesn’t disappear. But you move forward.",
    choices: []
  },

  ending_loop: {
    text: "You are back in the room. The same choices await.",
    choices: [{ text: "Start again", next: "start" }]
  }
};

export default story;