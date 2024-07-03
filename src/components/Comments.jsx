import React, { useState, useEffect } from 'react';

const Comments = ({ elementId }) => {
    const [comments, setComments] = useState([]); 
    console.log("comments", comments)

    useEffect(() => {
        const fetchComments = () => {
            fetch(`https://striveschool-api.herokuapp.com/api/comments/${elementId}`, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjgyYjg4MjJiNjYwYzAwMTUzZDhkZTgiLCJpYXQiOjE3MjAwMjA4MTUsImV4cCI6MTcyMTIzMDQxNX0.Py7ix89wgSZo8ayJyCfQAZ4M7dKPG4_MdMMaIAwOLFY'
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Errore nella richiesta');
                }
                return response.json();
            })
            .then(data => {
                setComments(data);
            })
            .catch(error => {
                console.error('Errore nel fetch dei commenti:', error);
            });
        };

        fetchComments();
    }, [elementId]);

     if (!comments || comments.length === 0) {
        return <div className="detail-text pb-3">No review available.</div>;
    }

    
   return (
       <div>
            <h2>Reviews: {elementId}</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment._id}>
                        <p>{comment.comment}</p>
                        <p>Author: {comment.author}</p>
                    </li>
                ))}
            </ul>
       </div>
       
    );
};


export default Comments;
