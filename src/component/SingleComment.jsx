import React, { useState } from 'react';
import { Comment, Input, Form, Button } from 'antd'

function SingleComment({ item }) {
    const [comment, setComment] = useState(true)
    return (
        <li>
            <Comment
                author={item.author}
                avatar={item.avatar}
                content={item.content}
                datetime={item.datetime}
            />
            <a style={{color: "green"}} onClick={() => setComment(!comment)}>reply to</a>
            {!comment && <Editor />}
        </li>
    );
}

export default SingleComment;


const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item>
            <Input.TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Comment
        </Button>
        </Form.Item>
    </>
);