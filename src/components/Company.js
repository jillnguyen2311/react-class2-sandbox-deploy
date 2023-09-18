function Company(props) {
  return (
    <li>
      <h2 className="work-title">
        <span className="company">{props.company}</span>
        <span className="from">from: {props.from}</span>
        <span className="until">to: {props.until}</span>
      </h2>
      <p>blah blah blah</p>
    </li>
  );
}

export default Company;
