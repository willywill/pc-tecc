import { shape } from 'prop-types';
import React from 'react';
import Heart from './Heart';

const ArticlePreview = ({ article }) => (
  <div className="bg-white w-full md:w-auto bg-opacity-10 rounded-3xl py-5 px-10 mt-5 mx-4">
    <div className="flex items-center mt-3">
      <img
        className="inline object-cover w-16 h-16 mr-3 rounded-full"
        src={article.author.avatar}
        alt={`${article.author.name} Avatar`}
      />
      <div className="flex flex-col">
        <h3 className="text-white text-left text-xl font-bold">
          {article.title}
        </h3>
        <p className="text-white text-opacity-50">
          {article.subtitle}
        </p>
      </div>
    </div>
    <div className="mt-5">
      <p className="text-white">
        {article.previewText}
      </p>
    </div>
    <div className="flex flex-col md:flex-row md:flex-row justify-between mt-5">
      <div className="flex flex-col">
        <p className="text-white font-bold mr-4">
          @
          {article.author.userName}
        </p>
        {/* TODO: Handle too many tags */}
        {article.tags.map((tag) => (
          <p key={tag} className="text-red-400 font-bold mr-2">
            #
            {tag}
          </p>
        ))}
      </div>
      <div className="flex items-center">
        <p className="text-white mr-2">
          {article.likes}
        </p>
        <Heart />
      </div>
    </div>
  </div>
);

ArticlePreview.displayName = 'ArticlePreview';

ArticlePreview.propTypes = {
  article: shape({
    author: shape({}).isRequired,
  }).isRequired,
};

export default ArticlePreview;
