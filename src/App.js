import React from 'react'
import './App.css'

export default function App() {
  return (
    <div className="container">
      <h1>Hier stand ein Text...</h1>
      <form action="">
        <label htmlFor="name">
          <p>Name</p>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="type name here..."
        />
        <label htmlFor="email">
          <p>E-Mail </p>
        </label>
        <input
          type="text"
          id="email"
          email="email"
          placeholder="type email here..."
        />
        <label htmlFor="textarea">
          <p>Message </p>
        </label>
        <textarea
          name="textarea"
          id="textarea"
          cols="10"
          rows="3"
          placeholder="type text here..."
        />
        <div />
        <div className="grid">
          <a href="www.google.de">
            <p>AGBs </p>
          </a>
          <input type="checkbox" id="checkbox" name="checkbox" />
          <label htmlFor="checkbox">
            <p> gelesen</p>
          </label>
        </div>
        <div />
        <div className="button">
          <button>Send</button>
        </div>
      </form>
    </div>
  )
}
