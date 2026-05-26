function Ending({ text, onRestart }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">

      <p className="text-xl mb-6 text-center max-w-md">
        {text}
      </p>

      <button
        onClick={onRestart}
        className="bg-purple-700 px-6 py-3 rounded-xl hover:bg-purple-900"
      >
        Start Again
      </button>

    </div>
  );
}

export default Ending;