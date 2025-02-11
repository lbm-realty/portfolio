const Connect = () => {
  return (
      <div id="connect" className="p-8 sm:px-64 flex flex-col justify-center items-center">
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-black to-transparent mb-16"></div>
        <div className="flex flex-col items-center bg-gray-200 opacity-85 py-8 px-12 sm:px-20 rounded-3xl w-full">
          <h2 className="text-xl sm:text-4xl font-bold pb-4 text-green-800">Connect With Me!</h2>
          <form className="w-full flex flex-col gap-2" action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              value="186791b1-d1ae-409f-b3fb-f5cb2e2db13e"
            />
            <div className="flex flex-col gap-1">
              <label for="name">Name*</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div class="flex flex-col gap-1">
              <label for="email">Email*</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div class="flex flex-col gap-1">
              <label for="message">Message*</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <div className="px-12 pt-2 sm:px-64">
                <button type="submit" className="bg-gray-50 border-gray-300 border-2 py-2 rounded-3xl w-full  hover:bg-blue-50 duration-300 hover:scale-105">
                Submit
                </button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default Connect;