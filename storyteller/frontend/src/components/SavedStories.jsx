import { useEffect, useState } from "react";

function SavedStories({ onBack }) {

  const [stories, setStories] = useState([]);

  const [loading, setLoading] = useState(true);

  // -----------------------------
  // Fetch Saved Stories
  // -----------------------------

  useEffect(() => {

    fetchStories();

  }, []);

  const fetchStories = async () => {

    try {

      const res = await fetch(
        "http://127.0.0.1:8000/stories"
      );

      const data = await res.json();

      console.log(data);

      // Reverse so newest stories appear first
      setStories(data.reverse());

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);
    }
  };

  // -----------------------------
  // UI
  // -----------------------------

  return (

    <div className="min-h-screen bg-black text-white px-6 py-10">

      {/* Heading */}
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center justify-between mb-10">

          <div>

            <p
              className="
                uppercase
                tracking-[5px]
                text-sm
                text-gray-500
                mb-2
              "
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Archive
            </p>

            <h1
              className="text-5xl"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Saved Stories
            </h1>

          </div>

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

        {/* Loading */}
        {loading && (

          <p className="text-gray-400">
            Loading stories...
          </p>

        )}

        {/* Empty */}
        {!loading && stories.length === 0 && (

          <div
            className="
              text-center
              text-gray-500
              mt-20
            "
          >
            No saved stories yet.
          </div>

        )}

        {/* Story Grid */}
        <div className="grid gap-6">

          {stories.map((story) => (

            <div
              key={story.id}

              className="
                border
                border-white/10
                bg-white/5
                rounded-2xl
                p-6
                backdrop-blur-sm
              "
            >

              {/* Genre */}
              <p
                className="
                  uppercase
                  text-sm
                  tracking-[3px]
                  text-purple-400
                  mb-3
                "
              >
                {story.genre}
              </p>

              {/* Title */}
              <h2
                className="text-3xl mb-4"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {story.title}
              </h2>

              {/* Story Content */}
              <p
                className="
                  text-gray-300
                  whitespace-pre-line
                  leading-relaxed
                "
              >
                {story.content}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default SavedStories;