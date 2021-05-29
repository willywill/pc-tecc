import React from 'react';

const articleFake = {
  title: 'Why I\'m Smarter Than Everyone Else',
  subtitle: 'A quick insight to facts and logic.',
  previewText: "Hey so uhhhh... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...",
  tags: ['nobodycares'],
  likes: '420',
  name: 'Will',
  avatar: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  userName: 'will.germany',
};
const BlogPost = () => (
  <div className="bg-white w-full md:w-auto mx-auto bg-opacity-10 rounded-3xl py-5 px-10 md:mt-5 " style={{ gridArea: 'main', width: '72%' }}>
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <h1 className="text-4xl font-semibold text-white tracking-wide">{articleFake.title}</h1>
        <p className="text-xl px-5 italic pt-3 text-gray-300 font-semibold"><li>{articleFake.subtitle}</li></p>
      </div>
      <img
        className="inline object-cover w-20 h-20 mr-3 rounded-full"
        src={articleFake.avatar}
        alt={`${articleFake.name} Avatar`}
      />
    </div>
    <p className="pt-5 font-bold text-2xl text-gray-200 tracking-tight ">{articleFake.previewText}</p>
    <div className="flex flex-">
      {articleFake.tags.map((tag) => (
        <p key={tag} className="text-red-400 font-bold mr-2">
          #
          {tag}
        </p>
      ))}
    </div>
  </div>

);

export default BlogPost;
