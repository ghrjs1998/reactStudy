import React from "react";
import Comment from "./Comment";

const comment = [
    {
        name: "Oper",
        comment: "안녕하세요 Oper입니다"
    },
    {
        name: "Park",
        comment: "안녕하세요 Park입니다"
    },
    {
        name: "Lee",
        comment: "안녕하세요 Lee입니다"
    },
]

function CommentList(props){
    return(
        <div>
            {comment.map((comment) => {
                return (
                    <Comment name={comment.name} comment = {comment.comment} />
                )
            })}
            
        </div>
    )
}

export default CommentList