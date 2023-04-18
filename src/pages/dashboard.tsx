import { FC, FormEvent, useState } from "react";
import { HeroMovie } from "../components/HeroMovie/HeroMovie";
import { NavBarLeft } from "../components/ComplexNavbar/NavBarLeft";

interface IDashboard { }

export const Dashboard: FC<IDashboard> = () => {
  const [inputValue, setInputValue] = useState("");
  const [answer, setAnswer] = useState("");

  const sendRequest = async () => {
    //const data = new FormData()
    // fetch from server
    const response = await fetch("http://localhost:8000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: inputValue,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const parsedData = data.answer.trim();
      console.log("parsedData: ", { parsedData });

      setAnswer(parsedData);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    sendRequest();
  };

  return (
    <div className="flex px-3 gap-4">
      <NavBarLeft />
      <div>
        <HeroMovie />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <div>{answer}</div>
      </div>

    </div>
  );
};
