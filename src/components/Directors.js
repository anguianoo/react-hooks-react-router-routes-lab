import React from "react"
import { directors } from "../data"

export default function Directors() {
  const directorItems = directors.map(director => (
    <div key={director.name}>
      <h2>{director.name}</h2>
      <ul>
        {director.movies.map(movie => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))
  return (
    <div>
      <div>
        <h1>Directors Page</h1>
        {directorItems}
      </div>
    </div>
  )
}
