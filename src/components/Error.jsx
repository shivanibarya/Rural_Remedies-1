import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="error-page">
        <div className="content">
          <h2 className="header">404</h2>
          <h4>Sorry Page not Found !!</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, ea
            distinctio quos esse ullam asperiores, ipsum laborum dolore deleniti
            debitis nostrum tempora vitae et fuga aut eaque accusamus reiciendis
            quisquam! Eos, accusamus. Nemo harum adipisci explicabo repellendus
            incidunt inventore aut, obcaecati, consectetur molestiae aspernatur
            molestias odio saepe voluptate distinctio minima. Eligendi illum
            maiores quidem inventore nihil laudantium consectetur voluptates
            facere. Qui autem laboriosam sed inventore, quia eaque consectetur
            minima numquam doloremque recusandae delectus nesciunt quidem quod
            sunt, libero alias rem obcaecati, earum nulla error illo odio?
            Dolores unde laboriosam non.
          </p>
          <div className="btns">
            <NavLink to="/">Return Home</NavLink>
            <NavLink to="/contact">Report Problem</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
