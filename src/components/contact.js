import React from "react";

const Contact = () => (
  <section id="contact">
    <div className="row">
      <div className="ten columns offset-1 text-center">
				<h1>Contact Us</h1>
				<form name="contact" method="POST" netlify-honeypot="bot-field" netlify>
					<p className="none">
						<label>Don’t fill this out: </label>
						<input name="bot-field" />
					</p>
					<p>
						<label>Name: </label>
						<input type="text" name="name" required/>
					</p>
					<p>
						<label>Email: </label>
						<input type="email" name="email" required/>
					</p>
					<p>
						<label>Phone: </label>
						<input type="tel" name="phone" required/>
					</p>
					<p>
						<label>Message: </label>
						<textarea type="text" name="message" required></textarea>
					</p>
					<div data-netlify-recaptcha></div>
					<p>
						<button type="submit">Send</button>
					</p>
				</form>	
      </div>
    </div>
  </section>
);

export default Contact;