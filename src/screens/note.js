<div className="form">
  <form onSubmit={submitHandler}>
    <ul className="form-container">
      <li>{loading && <div>Loading...</div>}</li>
      <li>{error && <div>{error}</div>}</li>

      <li>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </li>
      <li>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </li>
      <li>
        <label htmlFor="repassword">rePassword</label>
        <input
          type="password"
          name="password"
          id="repassword"
          onChange={(e) => setRepassword(e.target.value)}
        />
      </li>
      <li>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
      </li>
      <li>
        <button className="button primary" type="submit">
          Rigester
        </button>
      </li>
      <li>have un acconut ?? </li>
      <li>
        <Link
          to={redirect === "/" ? "signin" : "signin?redirect=" + redirect}
          className="button full-width"
        >
          signin
        </Link>
      </li>
    </ul>
  </form>
</div>;
