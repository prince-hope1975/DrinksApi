import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>
          Oops its a dead end
        </h1>
        <Link className="btn btn-primary" to="/">Back home</Link>
      </div>
    </section>
  )
}

export default Error
