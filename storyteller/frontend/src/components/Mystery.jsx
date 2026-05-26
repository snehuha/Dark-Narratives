import StoryTemplate from "./StoryTemplate";

function Mystery({ onBack }) {

  return (
    <StoryTemplate
      genre="mystery"
      title="The Hidden Truth"
      glowColor="bg-gradient-to-br from-yellow-900/20 via-black to-black"
      borderColor="border-yellow-400"
      buttonHover="hover:bg-yellow-500/20"
      onBack={onBack}
    />
  );
}

export default Mystery;