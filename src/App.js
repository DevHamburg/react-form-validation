import React, { useState } from 'react'
import './App.css'

const formInputs = {
  name: '',
  email: '',
  textarea: '',
  checkbox: false,
}

export default function App() {
  const [formData, setFormData] = useState(formInputs)

  function handleSubmit(e) {
    e.preventDefault()
  }

  function handleInputChange(e) {
    setFormData({
      ...formData,
      [e.target.value]: e.target.name,
    })
    console.log('value ' + e.target.value)
    console.log('name ' + e.target.name)
  }

  const { name, email, textarea, checkbox } = formData
  return (
    <div className="container">
      <h1>Hier stand ein Text...</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <p>Name</p>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="type name here..."
          onChange={handleInputChange}
        />
        <label htmlFor="email">
          <p>E-Mail </p>
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="type email here..."
          onChange={handleInputChange}
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
          onChange={handleInputChange}
        />
        <div />
        <div className="grid">
          <a href="www.google.de">
            <p>AGBs </p>
          </a>
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            onChange={handleInputChange}
          />
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
