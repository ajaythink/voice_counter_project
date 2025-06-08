const loginmodel = ({onClose, setRegisterPopModel}) => {
  return (
    <>
      <div className="fixed inset-0 bg-blue-200/80 flex items-center justify-center z-50">
        <div className="relative bg-white p-6 rounded-lg shadow-lg w-96 blur-none">
          <h2 className="text-xl font-bold mb-4">Login</h2>
          <span className="text-5xl absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursore-pointer rounded-full hover:bg-gray-200 w-[35px] h-[35px] text-center " onClick={onClose}>
            &times;
          </span>

          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors" >Login</button>
          </form>
          <button className="cursor-pointer text-gray-500" onClick={setRegisterPopModel}>If you do not have account <span className="text-blue-400 font-bold pt-4">Register</span></button>
        </div>
      </div>
    </>
  );
};
export default loginmodel;
