import React, { FC, useRef, useState } from 'react';
import 'tailwindcss/dist/tailwind.css';

const Subscribe: FC = () => {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  const inputElFirst = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
        first_name: inputElFirst.current.value,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Success! 🎉 You are attending.');
  };

  return (
    <form onSubmit={subscribe} className="leading-10">
      <label className="text-xs uppercase" htmlFor="email-input">{'Email Address'}</label><br/>
      <input
        className="p-1 rounded text-black focus:text-purple-600"
        id="email-input"
        name="email"
        placeholder="you@awesome.com"
        ref={inputEl}
        type="email"
      /><br/>
      <label className="text-xs uppercase" htmlFor="email-input">{'Name'}</label><br/>
      <input 
        className="p-1 rounded text-black focus:text-purple-600"
        id="name-input"
        name="name"
        placeholder="your name"
        ref={inputElFirst}
        type="name"
      />
      <div>
        {message
          ? message
          : `I'll only send an invite for the expo and add you to our MS Teams for the event. No spam.`}
      </div>
      <button className="rounded bg-purple-600 px-6 py-2 hover:bg-purple-900 transition duration-300 ease-in-out"type="submit">{'✨ RSVP! 💌'}</button>
    </form>
  );
}

export default Subscribe;