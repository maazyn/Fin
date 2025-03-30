import { useAuth } from "../../hooks/useAuth";

const SplashPage = () => {
  const { user, login, logout } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-[full] bg-gradient-to-br from-orange-400 to-blue-500">
      {user ? (
        <div className="p-8 bg-white rounded-xl shadow-lg text-center">
          <h1 className="text-3xl font-semibold mb-4 text-gray-800">
            Welcome, {user.displayName}
          </h1>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded-lg transition duration-300"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      ) : (
        <>
          <h1 className="mb-[10px]">Fin is a compact budget and finance helper</h1>
          <p className="mb-[50px]">Get a clear snapshot of what goes in and what goes out</p>
          <button
            className="bg-white/10 hover:bg-orange-600/40 backdrop-blur-md mb-[300px] text-white font-medium px-6 py-3 rounded-xl transition duration-300 shadow-xl"
            onClick={login}
            >
            Sign in with Google
          </button>
        </>
      )}
    </div>
  );
};

export default SplashPage;
