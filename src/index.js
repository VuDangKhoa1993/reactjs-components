import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApproveCard from './ApproveCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApproveCard>
        <div>
          <h2>Warning!</h2>
          Are you sure you want to delete?  
        </div>
      </ApproveCard>      
      <ApproveCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="Nice blog post!"
          avatar={faker.image.avatar()}
        />
      </ApproveCard>

      <ApproveCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 9:10PM"
          content="I like the subject!"
          avatar={faker.image.avatar()}
        />
      </ApproveCard>

      <ApproveCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 8:23AM"
          content="I like the post!"
          avatar={faker.image.avatar()}
        />
      </ApproveCard>

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
