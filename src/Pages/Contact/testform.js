import React from "react";

export default function TestForm() {
  const Data = {
    username: "",
  };
  const [formdata, setFormdata] = React.useState(Data);
  const Chagform = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
    console.log('From Test Change', e.target.value)
  };
  return (
    <>
      <input name="username" onChange={Chagform} value={formdata.username} />
    </>
  );
}
