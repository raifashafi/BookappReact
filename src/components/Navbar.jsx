import React from 'react'

const Navbar = () => {
  return (
    <div>


<nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">BOOKS APP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="AddBook.jsx">ADD BOOK</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="SearchBook.jsx">SEARCH</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="DeleteBook.jsx">DELETE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="ViewBook.jsx">VIEW</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar