import React from 'react';

const Footer = () => {
  return (
    <>

      <footer className="bg-base-200 text-base-content">

        <div className='mb-4 text-center items-center py-10'>
          <h2 className='text-xl font-bold'>Gadget Heaven</h2>
          <p className='text-gray-600 text-center'>Gadget Heaven offers the latest gadgets, expert reviews, and unbeatable deals daily.</p>
        </div>
        <hr />
        <div className="footer bg-base-200 text-black pt-10 max-w-7xl mx-auto px-4">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;