const Loading = () => {
  return (
    <div className="w-16 h-16 mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="w-full h-full"
      >
        <circle fill="#F4F4F4" stroke="#F4F4F4" strokeWidth="15" r="15" cx="40" cy="65">
          <animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4" />
        </circle>
        <circle fill="#F4F4F4" stroke="#F4F4F4" strokeWidth="15" r="15" cx="100" cy="65">
          <animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2" />
        </circle>
        <circle fill="#F4F4F4" stroke="#F4F4F4" strokeWidth="15" r="15" cx="160" cy="65">
          <animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0" />
        </circle>
      </svg>
    </div>
  );
};

export default Loading;