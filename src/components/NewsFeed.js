import React from 'react';
import ArticlePreview from './ArticlePreview';

const authorFake = {
  name: 'Markus',
  avatar: 'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?cs=srgb&dl=pexels-mike-241316.jpg&fm=jpg',
  userName: 'markus.company',
};

const articleFake = {
  title: 'Why I\'m Smarter Than Everyone Else',
  subtitle: 'A quick insight to facts and logic.',
  previewText: "Hey so uhhhh... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...",
  tags: ['nobodycares'],
  likes: '420',
};

const authorFake2 = {
  name: 'Will',
  avatar: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  userName: 'will.germany',
};

const articleFake2 = {
  title: 'Why HackerNews Is A Shitty Website',
  subtitle: "The most bullshit I've ever seen.",
  previewText: 'Last time I spoke to him he was acting very weird, not sure what was going on so I asked him ‘What’s wrong hun?’. He then went ahead and said he leaked my entire OnlyFans collection which I have been posting and now it is out there on some weird subreddit that I do not want to mention the name of...',
  tags: ['shadergod', 'handsome'],
  likes: '69',
};

const articles = [
  {
    ...articleFake,
    author: authorFake,
  },
  {
    ...articleFake2,
    author: authorFake2,
  },
];

// TODO: Pagination? Does this act as some top articles based on X data?
// Should the user click some link to drill down more into the blog area?
// If so we probably need more content in general area of the site
const NewsFeed = () => (
  <section className="pr-20" style={{ gridArea: 'main' }}>
    <h2 className="text-white text-left text-2xl font-bold px-10">
      News Feed
    </h2>
    <div className="flex">
      <ArticlePreview article={articles[0]} />
      <ArticlePreview article={articles[1]} />
    </div>
    <div className="flex">
      <ArticlePreview article={articles[1]} />
    </div>
    <div className="flex">
      <ArticlePreview article={articles[0]} />
      <ArticlePreview article={articles[1]} />
    </div>
  </section>
);

NewsFeed.displayName = 'NewsFeed';

export default NewsFeed;
