import React from 'react'

function Header() {
  return (
    <>
    <section class="hero is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Movie Fight
          <span class="icon">
            <i class="fas fa-film"></i>
          </span>
        </h1>
      </div>
    </div>
  </section>
  <div class="container">
    <div class="column is-half notification is-primary tutorial">
      <h1 class="title">Search For a Movie on Both Sides</h1>
      <p class="subtitle">We will tell you which is best</p>
    </div>
  </div>
  <script src="utils.js"></script>
  <script src="autocomplete.js"></script>
  <script src="index.js"></script>
  </>
  )
}

export default Header