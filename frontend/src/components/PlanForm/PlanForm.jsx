import "./PlanForm.css";
export default function PlanForm() {
  return (
    <main>
      <div></div>
      <form>
        <div>
          <input type="text" name="name" placeholder="First Name" required />
          <label>First Name</label>
        </div>
        <div>
          <input
            type="text"
            name="last-name"
            placeholder="Last Name"
            required
          />
          <label>Last Name</label>
        </div>
        <div>
          <input type="email" name="email" placeholder="Email" required />
          <label>Email</label>
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            minlength="10"
            required
          />
          <label>Phone Number</label>
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            title="Minimum length of password is 6 characters and don't forget to include small letters, capital letters, numbers, and at least one special character."
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?]).{8,}$"
            required
          />
          <label>Password</label>
        </div>
        <div>
          <input type="password" placeholder="Confirm Password" required />
          <label>Confirm Password</label>
        </div>
      </form>
    </main>
  );
}
