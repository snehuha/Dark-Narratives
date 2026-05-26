import { useState, useEffect } from "react";

function StoryTemplate({
  genre,
  title,
  glowColor,
  borderColor,
  buttonHover,
  onBack
}) {

  // -----------------------------
  // States
  // -----------------------------

  const [fullStory, setFullStory] = useState("");

  const [currentScene, setCurrentScene] = useState("");

  const [displayedText, setDisplayedText] = useState("");

  const [choices, setChoices] = useState([]);

  const [loading, setLoading] = useState(false);

  const [showChoices, setShowChoices] = useState(false);

  const [turnCount, setTurnCount] = useState(0);

  const [storyEnded, setStoryEnded] = useState(false);

  // -----------------------------
  // Typing Animation
  // -----------------------------

  useEffect(() => {

    if (!currentScene) return;

    let i = 0;

    setDisplayedText("");

    setShowChoices(false);

    const interval = setInterval(() => {

      if (i < currentScene.length) {

        setDisplayedText(
          currentScene.slice(0, i + 1)
        );

        i++;

      } else {

        clearInterval(interval);

        // Add finished scene
        setFullStory(prev =>
          prev
            ? prev + "\\n\\n" + currentScene
            : currentScene
        );

        setDisplayedText("");

        setTimeout(() => {
          setShowChoices(true);
        }, 500);
      }

    }, 20);

    return () => clearInterval(interval);

  }, [currentScene]);

  // -----------------------------
  // Generate Story
  // -----------------------------

  const generateStory = async (userChoice = "") => {

    try {

      setLoading(true);

      // Ending
      if (turnCount >= 5) {

        const endingText = `
✨ Your journey has finally reached its end.

The echoes of your choices will remain forever.
        `;

        setCurrentScene(endingText);

        setChoices([]);

        setStoryEnded(true);

        setLoading(false);

        return;
      }

      const res = await fetch(
        "http://127.0.0.1:8000/generate-story",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            genre,
            choice: userChoice
          })
        }
      );

      const data = await res.json();

      console.log(data);

      setCurrentScene(data.story);

      setChoices(data.choices || []);

      setTurnCount(prev => prev + 1);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }
  };

  // -----------------------------
  // Save Story
  // -----------------------------

  const saveStory = async () => {

    try {

      await fetch(
        "http://127.0.0.1:8000/stories",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            genre,
            title,
            content: fullStory
          })
        }
      );

      alert("Story saved successfully!");

    } catch (err) {

      console.error(err);
    }
  };

  // -----------------------------
  // UI
  // -----------------------------

  return (

    <div className="min-h-screen w-full flex flex-col items-center bg-black text-white relative overflow-y-auto">

      <div className={`absolute inset-0 ${glowColor}`}></div>

      <div className="relative z-10 text-center px-6 max-w-3xl w-full py-10">

        {/* Title */}
        <h1
          className="text-5xl mb-6"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {title}
        </h1>

       {/* Start Button */}
{!fullStory && (

  <div className="flex flex-col items-center gap-4">

    <button
      onClick={() => generateStory()}

      className={`
        px-8
        py-4
        border
        ${borderColor}
        rounded-xl
        ${buttonHover}
        transition
      `}
    >
      Begin Story
    </button>

    {/* Back Button */}
    <button
      onClick={onBack}

      className="
        px-6
        py-3
        border
        border-white/20
        rounded-xl
        hover:bg-white/10
        transition
      "
    >
      Back
    </button>

  </div>

)}


        {/* Story */}
        {(fullStory || displayedText) && (

          <div
            className="
              mt-8
              text-left
              bg-white/5
              p-6
              rounded-2xl
              border
              border-white/10
              backdrop-blur-sm
            "
          >

            {fullStory && (

              <p
                className="
                  whitespace-pre-line
                  text-gray-400
                  leading-relaxed
                  text-lg
                "
              >
                {fullStory}
              </p>

            )}

            {displayedText && (

              <div
                className="
                  mt-6
                  text-white
                  whitespace-pre-line
                  leading-relaxed
                  text-lg
                "
              >
                {displayedText}
              </div>

            )}

          </div>

        )}

        {/* Choices */}
        {showChoices && choices.length > 0 && !storyEnded && (

          <div className="mt-6 flex flex-col gap-4">

            {choices.map((choice, index) => (

              <button
                key={index}

                onClick={() => generateStory(choice)}

                className={`
                  border
                  ${borderColor}
                  p-4
                  rounded-xl
                  ${buttonHover}
                  transition-all
                  duration-200
                  text-left
                `}
              >
                {choice}
              </button>

            ))}

          </div>

        )}

        {/* Loading */}
        {loading && (

          <p className="mt-6 text-gray-400 italic">
            Thinking...
          </p>

        )}

        {/* Ending */}
        {storyEnded && (

          <div className="mt-10">

            <h2
              className="text-4xl text-yellow-400 mb-3"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              The End
            </h2>

          </div>

        )}

        {/* Buttons */}
        {fullStory && (

          <div className="flex gap-4 justify-center mt-10">

            <button
              onClick={saveStory}

              className="
                px-6
                py-3
                border
                border-green-400
                rounded-xl
                hover:bg-green-500/20
                transition
              "
            >
              Save Story
            </button>

            

          </div>

        )}

      </div>

    </div>
  );
}

export default StoryTemplate;