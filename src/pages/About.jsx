import React from "react";

export const About = () => {
  return (
    <div className="container">
      <h4>Developed By Kondrev Georgy {"<george.kondrev@yandex.ru>"}</h4>

      <h5>Simple TaskTracker with authorization</h5>

      <p> Provided By React - Node.js - Express - MySql </p>
      <p> Deployed By Heroku - GitHub Pages </p>

      <p>Приложение еще не закончено, но основной функционал присутствует.</p>
      <p>Любой пользователь может оставить заметку</p>
      <p>Редактировать заметки может толбко админ(login:admin, password:123)</p>
    </div>
  );
};
