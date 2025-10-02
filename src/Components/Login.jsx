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
          <div className="flex">
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
                  <button
                    type="button"
                    className="bg-[#03143D] border-white border-2 text-white w-[100px] h-[40px] rounded-lg mt-1 hover:scale-x-105 cursor-pointer"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-10 pl-10 pt-5">
              <p className="text-7xl font-extrabold text-[#03143D]">Login</p>
              <form className="flex flex-col gap-5 items-center">
                <input
                  type="text"
                  className="h-[50px] w-[280px] border-1 border-[#bcbcbc] rounded-sm placeholder:text-black focus:text-lg focus:text-[#03143D] pl-2"
                  placeholder="Username/ Email"
                />
                <input
                  type="password"
                  className="h-[50px] w-[280px] border-1  border-[#bcbcbc] rounded-sm placeholder:text-black pl-2"
                  placeholder="Password"
                />
                <button
                  type="submit"
                  className="bg-[#03143D] border-white border-2 text-white w-[100px] h-[40px] rounded-lg mt-1 hover:scale-x-105 cursor-pointer"
                >
                  Submit
                </button>
              </form>

              <p className="text-sm text-gray-400 cursor-pointer">
                Forgot password!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
