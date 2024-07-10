import react from 'react';
import './App.css';

function App(){

  return (
  <section className="posts-container">
    <Profile/>
  </section>
  );
}

function Profile(){
  return(
    <article className="profile-card">
      <img src="https://via.placeholder.com/150/b2fed" alt="image" />
      <h2 className='title'>accusamus beatae ad facilis cum similique qui sunt  </h2>
      <a href="https://via.placeholder.com/600/92c952" className='button'>Details</a>
    </article>
  )
}

export default App;