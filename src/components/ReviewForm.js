import React from 'react';

const ReviewForm = () => (
  <div className="flex px-4 py-6 justify-center text-left">
    <div className="w-full md:w-2/3">
      <p className="py-3 text-gray-700 text-sm">There are no reviews yet.</p>
      <p className="py-3 text-gray-700 text-sm">
        Your email address will not be published. Required fields are marked *
      </p>
      <p className="pt-3 pb-2 text-black">Your rating</p>
      <div className="text-gray-700">
        <i className="fas fa-star mr-1" />
        <i className="fas fa-star mr-1" />
        <i className="fas fa-star mr-1" />
        <i className="fas fa-star mr-1" />
        <i className="fas fa-star mr-1" />
      </div>
      <form className="w-full mt-10">
        <div className="w-full mb-6">
          <label className="block text-sm text-black text-xs mb-2">
            Your review *
          </label>
          <textarea
            className="block w-full text-gray-700 border text-sm py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
            rows="8"
            id="message"
            type="text"
          />
        </div>
        <div className="block md:flex w-full-mx-3 mb-2">
          <div className="w-full md:w-1/2 mb-6 mr-0 md:mr-4">
            <label className="block text-sm text-black text-xs mb-2">
              Name *
            </label>
            <input
              className="block w-full text-gray-700 border text-sm py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>
          <div className="w-full md:w-1/2 mb-6 ml-0 md:ml-4">
            <label className="block text-sm text-black text-xs  mb-2">
              Email *
            </label>
            <input
              className="block w-full text-gray-700 border text-sm py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
            />
          </div>
        </div>
        <button className="bg-black hover:bg-gray-800 text-white py-2 px-10 focus:outline-none">
          Submit
        </button>
      </form>
    </div>
  </div>
);

export default ReviewForm;
