function Story({ story, choices, onChoice, loading }) {

  return (

    <div className="min-h-screen flex items-center justify-center bg-black p-6">

      <div className="bg-gray-900 p-8 rounded-2xl max-w-2xl w-full shadow-xl border border-gray-800">

        <h1 className="text-3xl font-bold mb-6 text-white">
          Interactive Story
        </h1>

        <p className="text-lg mb-8 leading-relaxed text-gray-200 whitespace-pre-line">
          {
            loading
              ? "Generating story..."
              : story
          }
        </p>

        <div className="flex flex-col gap-4">

          {
            choices.map((choice, index) => (

              <button
                key={index}
                onClick={() => onChoice(choice)}
                className="
                  bg-purple-700
                  hover:bg-purple-900
                  px-5
                  py-4
                  rounded-xl
                  transition
                  text-left
                  text-white
                "
              >
                {choice}
              </button>

            ))
          }

        </div>

      </div>

    </div>
  );
}

export default Story;