import React, { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean | null>(null);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic email validation
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setIsValidEmail(isValid);
    if (isValid) {
      // Redirect to the welcome page
      window.location.href = "https://app.loch.one/welcome";
    }
  };

  return (
    <>
      <section className="sidebar">
        <div className="signup-container">
          <h1>Sign up for exclusive access.</h1>
          <div className="signup-form">
            <form onSubmit={handleSignUp}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={handleEmailChange}
              />
              <button type="submit">Get Started</button>
            </form>
          </div>
          {isValidEmail === false && (
            <p style={{ color: "#D4D4D4" }}>Please enter a valid email</p>
          )}
          <p>You'll receive an email with an invite link to join.</p>
        </div>
      </section>
    </>
  );
}

export default SignUp;
