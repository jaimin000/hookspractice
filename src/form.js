import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  return (
    <div>
      <form>
        <label>Name:</label>
        <input
          placeholder="firstname"
          name="firstname"
          value={name.firstname}
          onChange={(e) =>
            setName({ ...name, [e.target.name]: e.target.value })
          }
        ></input>
        <input
          placeholder="lastname"
          name="lastname"
          value={name.lastname}
          onChange={(e) =>
            setName({ ...name, [e.target.name]: e.target.value })
          }
        ></input>
        <h1>
          Name:{name.firstname} {name.lastname}
        </h1>
      </form>
    </div>
  );
};

export default Form;
