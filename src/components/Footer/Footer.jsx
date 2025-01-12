const Footer = () => {
  return (
    <div className="bg-black py-9">
        <div className="flex justify-center pt-14">
            <img src="/src/assets/images/logo-footer.png" alt="" />
        </div>
      <footer className="footer justify-between text-white  p-10 container mx-auto">
        <nav>
          <h6 className="footer-title">Services</h6>
          <p className="md:w-96 w-72">We are a passionate team dedicated to providing the  best services to our customers.</p>
         
        </nav>
 
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">Subscribe to our newsletter <br /> for the latest updates.</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-warning join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      <footer className="footer footer-center bg-black text-white p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - @2024 Your Company All Rights Reserved.</p>
  </aside>
</footer>
    </div>
  );
};

export default Footer;
