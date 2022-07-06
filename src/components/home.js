import React from 'react'


const Home=({setLoginUser})=>{

    return(
        <>
         <div className="main">
         <section className="header ">
    <nav className="navbar fixed-top  navbar-expand-lg navbar-light bg-primary  ">
        <div className="container-fluid ">
          <a className="navbar-brand " href="#">Welcome</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
              
            
              
            </ul>
            <form className="d-flex">
              <input className=" me-2"  placeholder="Search here" aria-label="Search"/>
              <button className="btn btn-danger me-2" type="submit">Search</button>
              <button className='btn btn-success ' onClick={()=>{setLoginUser({})}}>Logout</button>
            </form>
          </div>
        </div>
      </nav>
      </section>
      <section className="home p-5 ">
<div className="hello text-align-left text-white col-lg-6 col-sm-10 mt-5   ">
  <h1>welcome to my website</h1>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam repellendus accusantium dolorem nemo ex ipsum cumque possimus facere praesentium natus. Eum earum quos expedita dolore.</p>
<button className="btn btn-success">Read More</button>
</div>
</section>
</div>
        </>
    )
}
export default Home;