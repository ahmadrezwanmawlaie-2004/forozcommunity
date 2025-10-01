const Login = () => {
  const myStyle = {
    background: `
    radial-gradient(circle at top left, #03143D 60%, transparent 40%),
    radial-gradient(circle at bottom left, #03143D 60%, transparent 40%),
    #E8E8E8
  `,
  };
  return (
    <div className="bg-[#E8E8E8]">
      <div className="flex justify-center items-center mb-5">
        <div className="bg-[#E8E8E8] w-[700px] h-[400px] shadow-[10px_0_12px_#3b3b3b] rounded-3xl">
          <div className="flex justify-between">
            <div style={myStyle} className="h-[400px] w-[350px]">
              <div className="flex flex-col items-start pl-3 pt-5 h-full gap-8">
                <div className="flex flex-col">
                  <p className="text-white text-8xl">Hello!</p>
                  <p className="text-white text-6xl">Welcome</p>
                </div>
                <div>
                  <p className="text-white text-sm">
                    You don't have an account!
                  </p>
                  <button className="bg-[#03143D] border-white border-2 text-white w-[100px] h-[40px] rounded-lg mt-1">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
