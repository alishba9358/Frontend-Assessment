import React, { useState } from 'react';

const IndividualComment = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      username: 'Maria',
      text: 'I was very glad to have you after such a long time. Can you plan a meetup? Maybe this weekend?',
      likes: 1,
      isLiked: false,
      replies: [],
      image: '/maria.png', 
    },
    {
      id: 2,
      username: 'Tania',
      text: 'I was very glad to have you after such a long time. Can you plan a meetup? Maybe this weekend?',
      likes: 0,
      isLiked: false,
      replies: [],
      image: '/tania.png', 
    },
    {
      id: 3,
      username: 'Alex',
      text: 'Home sweet home! Im glad you are back. Its been two year and miss the football matches we have together.A lot has been changed since you left.Lets meet at the ground tomorrow evening?',
      likes: 2,
      isLiked: false,
      replies: [],
      image: '/john.png', 
    },
    
  ]);

  const [newCommentText, setNewCommentText] = useState('');
  const [replyText, setReplyText] = useState('');
  const [activeCommentId, setActiveCommentId] = useState(null);

  const handleAddComment = () => {
    if (newCommentText.trim() !== '') {
      const newComment = {
        id: comments.length + 1,
        username: 'Alishba', 
        text: newCommentText,
        likes: 0,
        isLiked: false,
        replies: [],
        image: '/alex.png', 
      };

      setComments([...comments, newComment]);
      setNewCommentText('');
    }
  };

  const handleAddReply = () => {
    if (replyText.trim() !== '' && activeCommentId !== null) {
      const updatedComments = [...comments];
      const commentIndex = updatedComments.findIndex((comment) => comment.id === activeCommentId);

      if (commentIndex !== -1) {
        const newReply = {
          id: updatedComments[commentIndex].replies.length + 1,
          username: 'Alishba', 
          text: replyText,
          likes: 0,
          isLiked: false,
          image: '/alex.png', 
        };

        updatedComments[commentIndex].replies.push(newReply);
        setComments(updatedComments);
        setReplyText('');
        setActiveCommentId(null);
      }
    }
  };

  const handleRemoveComment = (commentId) => {
    const updatedComments = comments.filter((comment) => comment.id !== commentId);
    setComments(updatedComments);
  };

  const handleRemoveReply = (commentId, replyId) => {
    const updatedComments = [...comments];
    const commentIndex = updatedComments.findIndex((comment) => comment.id === commentId);

    if (commentIndex !== -1) {
      updatedComments[commentIndex].replies = updatedComments[commentIndex].replies.filter(
        (reply) => reply.id !== replyId
      );
      setComments(updatedComments);
    }
  };

  const handleLikeComment = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, likes: comment.likes + 1, isLiked: true };
      }
      return comment;
    });
    setComments(updatedComments);
  };
  
  const handleUnlikeComment = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, likes: comment.likes - 1, isLiked: false };
      }
      return comment;
    });
    setComments(updatedComments);
  };
  
  const handleLikeReply = (commentId, replyId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        const updatedReplies = comment.replies.map((reply) => {
          if (reply.id === replyId) {
            return { ...reply, likes: reply.likes + 1, isLiked: true };
          }
          return reply;
        });
        return { ...comment, replies: updatedReplies };
      }
      return comment;
    });
    setComments(updatedComments);
  };
  
  const handleUnlikeReply = (commentId, replyId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        const updatedReplies = comment.replies.map((reply) => {
          if (reply.id === replyId) {
            return { ...reply, likes: reply.likes - 1, isLiked: false };
          }
          return reply;
        });
        return { ...comment, replies: updatedReplies };
      }
      return comment;
    });
    setComments(updatedComments);
  };
  
  

  return (
    <div className="relative rounded-8xs box-border mt-2 w-full max-w-screen-xl mx-auto overflow-hidden flex flex-col p-4 items-center justify-center gap-[12px] text-left text-sm text-black font-subheading-small border-[1px] border-dashed border-mediumslateblue" >
      {/* Render comments and replies */}
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="bg-white shadow-[0px_6px_20px_rgba(140,_151,_164,_0.2)] w-full sm:w-[636px] flex flex-row p-3 box-border items-start justify-start gap-[12px]"
        >
          <img
            className="relative rounded-81xl w-9 h-9 object-cover"
            alt=""
            src={comment.image} 
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
            <div className="self-stretch relative tracking-[0.03em] leading-[20px] font-medium">
              {comment.username}
            </div>
            <div className="self-stretch relative tracking-[0.03em] leading-[20px] font-light text-text-gray">
              {comment.text}
            </div>
            <div className="flex flex-row pt-2 px-0 pb-0 items-center justify-between gap-[16px] text-neutral-70-light-gray">
            <div className="flex flex-row items-center gap-[4px]">
  {comment.isLiked ? (
    <img
      className="relative w-5 h-5 object-cover cursor-pointer text-red-500"
      alt=""
      src="/like.png" 
      onClick={() => handleUnlikeComment(comment.id)}
    />
  ) : (
    <img
      className="relative w-5 h-5 object-cover cursor-pointer text-gray-500"
      alt=""
      src="/unfilledHeart.png" 
      onClick={() => handleLikeComment(comment.id)}
    />
  )}
  <div className="relative tracking-[0.03em] leading-[20px] font-light">
    {comment.likes}
  </div>
</div>


              <div className="relative rounded-81xl bg-text-gray w-1 h-1" />
              <div
                className="relative tracking-[0.03em] leading-[20px] font-medium text-focused cursor-pointer"
                onClick={() => setActiveCommentId(comment.id)}
              >
                Reply
              </div>
              {comment.username === 'Alishba' && (
  <div
    className="relative tracking-[0.03em] leading-[20px] font-medium text-danger-main cursor-pointer"
    onClick={() => handleRemoveComment(comment.id)}
  >
    Remove
  </div>
)}
            </div>
            {/* Render replies */}
            {comment.replies.map((reply) => (
              <div
                key={reply.id}
                className="self-stretch flex flex-row py-0 pr-0 pl-[45px] items-start justify-start gap-[12px]"
              >
                <img
                  className="relative rounded-81xl w-9 h-9 object-cover"
                  alt=""
                  src={reply.image} 
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                    <div className="relative tracking-[0.03em] leading-[20px] font-medium">
                      {reply.username}
                    </div>
                  </div>
                  <div className="self-stretch relative tracking-[0.03em] leading-[20px] font-light text-text-gray">
                    {reply.text}
                  </div>
                  {comment.username === 'Alishba' && (
  <div
    className="relative tracking-[0.03em] leading-[20px] font-medium text-danger-main cursor-pointer"
    onClick={() => handleRemoveComment(comment.id)}
  >
    Remove
  </div>
)}

{reply.username === 'Alishba' && (
  <div
    className="relative tracking-[0.03em] leading-[20px] font-medium cursor-pointer flex flex-row "
  >
    {reply.isLiked ? (
      <img
        className="relative w-5 h-5 object-cover cursor-pointer text-red-500"
        alt=""
        src="/like.png" 
        onClick={() => handleUnlikeReply(comment.id, reply.id)}
      />
    ) : (
      <img
        className="relative w-5 h-5 object-cover cursor-pointer text-gray-500"
        alt=""
        src="/unfilledHeart.png" 
        onClick={() => handleLikeReply(comment.id, reply.id)}
      />
    )}
    <div className="relative tracking-[0.03em] leading-[20px] font-light ">
      {reply.likes}
    </div>
    {reply.username === 'Alishba' && (
      <div
        className="relative tracking-[0.03em] leading-[20px] font-medium text-danger-main cursor-pointer"
        onClick={() => handleRemoveReply(comment.id, reply.id)} >
        Remove
      </div>
    )}
  </div>
)}
                </div>
              </div>
            ))}
            {/* Add reply input */}
            {activeCommentId === comment.id && (
              <div className="self-stretch flex flex-row py-0 pr-0 pl-[45px] items-start justify-start gap-[12px]">
                <img
                  className="relative rounded-81xl w-9 h-9 object-cover"
                  alt=""
                  src={`/alex${comment.id}.png`} 
                />
                <div className="flex-1 flex flex-row items-start justify-start gap-[4px]">
                  <textarea
                    placeholder="Write your reply..."
                    className="border-2 border-solid border-primary-main rounded-md p-2"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                  />
                  <button
                    className="bg-primary-main text-black py-1 px-3 rounded-md"
                    onClick={handleAddReply}
                  >
                    Add Reply
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Add comment input */}
      <div className="self-stretch flex flex-col sm:flex-row py-0 pr-0 pl-[45px] items-center justify-center gap-[12px] max-w-[600px] mx-auto" >
        <img
          className="relative rounded-81xl w-9 h-9 object-cover"
          alt=""
          src="/alex.png"
        />
        <div className="flex-1 flex flex-row items-start justify-start gap-[300px]  ">
          <textarea
            placeholder="Write your comment..."
            className="border-2 border-solid border-primary-main rounded-md p-2"
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}
          />
          <button
            className="bg-primary-main text-white py-1 px-3 rounded-md"
            onClick={handleAddComment}
          >
            <img src="/telegram.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndividualComment;