import truck from './truck.jpg'

export default function Main() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col items-center justify-center w-1/2 gap-5">
        <img src={truck} alt="logo" />
        <h1 className="text-4xl font-bold">Sign In</h1>
        <div className="flex flex-col gap-3">
          <input
            type="email"
            className="bg-[rgb(240,238,239)] w-[400px] p-3"
            placeholder="Email"
          />
          <input
            type="password"
            className="bg-[rgb(240,238,239)] w-[400px] p-3"
            placeholder="Password"
          />
        </div>
        <p className="text-2xl">Forgot your Password?</p>
        <button className="bg-[#FF7878] font-semibold py-2 px-4 rounded inline-flex items-center text-white">
          Sign In
        </button>
      </div>
      <div className="flex flex-col items-center justify-center w-1/2 gap-5 bg-[#FF7878] text-white">
        <h1 className="text-4xl font-bold">Hello Adrin!</h1>
        <p className="text-2xl">
          Enter your personal details and start journey with us!
        </p>
        <button class="border border-white text-white font-semibold py-2 px-4 rounded inline-flex items-center">
          Sign Up
        </button>
      </div>
    </div>
  );
}
