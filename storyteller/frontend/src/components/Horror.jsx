import StoryTemplate from "./StoryTemplate";

function Horror({ onBack }) {

  return (
    <StoryTemplate
      genre="horror"
      title="Nightmare Hollow"
      glowColor="bg-gradient-to-br from-red-900/30 via-black to-black"
      borderColor="border-red-400"
      buttonHover="hover:bg-red-500/20"
      onBack={onBack}
    />
  );
}

export default Horror;