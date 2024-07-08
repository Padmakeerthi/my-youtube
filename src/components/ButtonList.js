import React from "react";
import Button from "./Button";

const list = ["All", "Live", "Gaming", "Songs", "Valentines", "Live", "Soccer", "Cricket", "Cooking", "Soccer", "Cricket", "Cooking"];

const ButtonList = () => {
  return (
    <div className="flex">
        {list.map((name)=>
        <Button name = {name} />
        )}
   
    </div>
  );
};

export default ButtonList;