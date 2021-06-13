import React, { useState, useEffect } from "react";
import Markdown from 'markdown-to-jsx';

const fm = require('front-matter');

const articleFake = {
  tags: ['nobodycares', 'irrelevant', 'so?', 'sowhat', 'whatever'],
  likes: '420'
};

function MdPost() {
  const file_name = 'firstpost.md';
  const [post, setPost] = useState("");

  useEffect(() => {
    import(`./${file_name}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  const content = fm(post);

  return (
    <div className="bg-white w-full md:w-auto mx-auto bg-opacity-10 rounded-3xl py-5 px-10 md:mt-5 " style={{ gridArea: 'main', width: '80%' }}>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-xl md:text-4xl font-semibold text-white tracking-wide">{content.attributes.title}</h1>
          <p className="md:text-xl px-5 italic pt-3 text-gray-300 font-semibold"><li>{content.attributes.subtitle}</li></p>
        </div>
        <img
          className="inline object-cover w-20 h-20 m-7 md:m-0 md:mr-3 rounded-2xl md:rounded-full"
          src={content.attributes.avatar}
          alt={`${content.attributes.author} Avatar`}
        />
      </div>
      <div className="flex flex-col">
        <Markdown  className="pt-5 font-bold text-xl md:text-2xl h-full  text-gray-200 tracking-tight ">{content.body}</Markdown>
        <div className="flex flex-row flex-wrap pt-5">
          {articleFake.tags.map((tag) => (
            <p key={tag} className="text-red-400 font-bold mr-2">
              #
              {tag}
            </p>
          ))}
        </div>
        <p className="pt-2 text-gray-200 font-bold">{` @${content.attributes.author}`}</p>
      </div>
    </div>
  );
}

export default MdPost;
