import StoryTemplate from "./StoryTemplate";

function Scifi({ onBack }) {

  return (
    <StoryTemplate
      genre="sci-fi"
      title="Beyond The Stars"
      glowColor="bg-gradient-to-br from-cyan-900/30 via-black to-black"
      borderColor="border-cyan-400"
      buttonHover="hover:bg-cyan-500/20"
      onBack={onBack}
    />
  );
}

export default Scifi;