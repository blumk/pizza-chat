import React, { useState, useEffect } from "react";
import useSocket from "use-socket.io-client";
import { useImmer } from "use-immer";

import "./chat.css";

const Messages = (props: any) =>
  props.data.map((m: any) =>
    m[0] !== "" ? (
      <li key={m + Math.random()}>
        <strong>{m[0]}</strong> : <div className="innermsg">{m[1]}</div>
      </li>
    ) : (
      <li className="update">{m[1]}</li>
    )
  );

const Online = (props: any) =>
  props.data.map((m: any) => (
    <li key={m[0] + Math.random()} id={m[0]}>
      {m[1]}
    </li>
  ));

export const Chat = () => {
  const [id, setId] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [room, setRoom] = useState("");
  const [input, setInput] = useState("");

  const [socket] = useSocket("https://pizzas-chat.herokuapp.com/");
  socket.connect();

  const [messages, setMessages] = useImmer([]);
  const [online, setOnline] = useImmer([]);

  useEffect(() => {
    console.log("effect");
    socket.on("message que", (nick: any, message: any) => {
      setMessages((draft: any) => {
        draft.push([nick, message]);
      });
    });

    socket.on("update", (message: any) =>
      setMessages((draft: any) => {
        draft.push(["", message]);
      })
    );

    socket.on("people-list", (people: any) => {
      let newState: any[] = [];
      for (let person in people) {
        newState.push([people[person].id, people[person].nick]);
      }
      setOnline((draft: any) => {
        draft.push(...newState);
      });
      // console.log(online);
    });

    socket.on("add-person", (nick: any, id: any) => {
      setOnline((draft: any) => {
        draft.push([id, nick]);
      });
    });

    socket.on("remove-person", (id: any) => {
      setOnline((draft: any) => draft.filter((m: any) => m[0] !== id));
    });

    socket.on("chat message", (nick: any, message: any) => {
      setMessages((draft: any) => {
        draft.push([nick, message]);
      });
    });
  }, [setMessages, setOnline, socket]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!nameInput) {
      return alert("Name can't be empty");
    }
    setId(nameInput);
    socket.emit("join", nameInput, room);
  };

  const handleSend = (e: any) => {
    e.preventDefault();
    if (input !== "") {
      socket.emit("chat message", input, room);
      setInput("");
    }
  };

  return id ? (
    <section style={{ display: "flex", flexDirection: "row" }}>
      <ul id="messages">
        <Messages data={messages} />
      </ul>
      <ul id="online">
        {" "}
        &#x1f310; : <Online data={online} />{" "}
      </ul>
      <div id="sendform">
        <form onSubmit={e => handleSend(e)} style={{ display: "flex" }}>
          <input id="m" onChange={e => setInput(e.target.value.trim())} />
          <button style={{ width: "75px" }} type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  ) : (
    <div style={{ textAlign: "center", margin: "30vh auto", width: "70%" }}>
      <form onSubmit={event => handleSubmit(event)}>
        <input
          id="name"
          onChange={e => setNameInput(e.target.value.trim())}
          required
          placeholder="What is your name .."
        />
        <br />
        <input
          id="room"
          onChange={e => setRoom(e.target.value.trim())}
          placeholder="What is your room .."
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Chat;
