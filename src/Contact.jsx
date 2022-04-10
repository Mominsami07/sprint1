import React, { useState } from "react";

const Contact = () => {

  const [data, setData] = useState({
    fullname: " ",
    phone: " ",
    email: " ",
    msg: " ",
  });

  const inputEvent = (event) => {
      const {name, value} = event.target;

      setData((prevVal) => {
        return {
            ...prevVal,
            [name] : value,
        };
      });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert("Your form has been submitted");
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us </h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Contact Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Enter your contact number"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary my-5" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
