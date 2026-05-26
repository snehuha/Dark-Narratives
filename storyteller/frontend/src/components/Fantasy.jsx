import StoryTemplate from "./StoryTemplate";

function Fantasy({ onBack }) {

  return (
    <StoryTemplate
      genre="fantasy"
      title="Fantasy Realm"
      glowColor="bg-gradient-to-br from-purple-900/30 via-black to-indigo-900/30"
      borderColor="border-purple-400"
      buttonHover="hover:bg-purple-500/20"
      onBack={onBack}
    />
  );
}

export default Fantasy;