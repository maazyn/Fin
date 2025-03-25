import { useAuth } from "../../hooks/useAuth";

const SplashPage = () => {
  const { user, login, logout } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center">
      {user ? (
        <div className="p-6 bg-blue rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4 text-white">Welcome, {user.displayName}</h1>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={login}
        >
          Sign in with Google
        </button>
      )}
    </div>
  );
};

export default SplashPage;
