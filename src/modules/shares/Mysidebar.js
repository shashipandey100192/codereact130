import React from 'react'
import { Link } from 'react-router-dom'

function Mysidebar() {
  return (
    <div className="flex-shrink-0 p-3">
    <a href="/" className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
                            
      <span className="fs-5 fw-semibold">Collapsible</span>
    </a>
    <ul className="list-unstyled ps-0">
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
          Home
        </button>
        <div className="collapse" id="home-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to="/dashboard" className="link-body-emphasis d-inline-flex text-decoration-none rounded">mainpage</Link></li>
            <li><Link to="contactus" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Contactus</Link></li>
            <li><Link to="crender" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Cond render</Link></li>
            <li><Link to="props" className="link-body-emphasis d-inline-flex text-decoration-none rounded">props</Link></li>
            <li><Link to="myaxios" className="link-body-emphasis d-inline-flex text-decoration-none rounded">axios</Link></li>
            <li><Link to="mygrap" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Charts</Link></li>
            <li><Link to="myform" className="link-body-emphasis d-inline-flex text-decoration-none rounded">myforms</Link></li>
            <li><Link to="lazy" className="link-body-emphasis d-inline-flex text-decoration-none rounded">lazyloading</Link></li>
            <li><Link to="redux" className="link-body-emphasis d-inline-flex text-decoration-none rounded">redux</Link></li>
            <li><Link to="ccomponent" className="link-body-emphasis d-inline-flex text-decoration-none rounded">classcompo</Link></li>
            <li><Link to="myfilter" className="link-body-emphasis d-inline-flex text-decoration-none rounded">filterpro</Link></li>
          </ul>
        </div>
      </li>
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          Dashboard
        </button>
        <div className="collapse" id="dashboard-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Weekly</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Monthly</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Annually</a></li>
          </ul>
        </div>
      </li>
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
          Orders
        </button>
        <div className="collapse" id="orders-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Processed</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Shipped</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Returned</a></li>
          </ul>
        </div>
      </li>
      <li className="border-top my-3"></li>
      
    </ul>
  </div>
  )
}

export default Mysidebar