import React, { useState } from 'react';
import { Comment, Avatar, List, Input, Form, Button } from 'antd'
import moment from 'moment'

const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
      itemLayout="horizontal"
      renderItem={props => <Comment {...props} />}
    />
  );

const EditorHelper = ({ onChange, onSubmit, submitting, value }) => (
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

export default function Editor() {
    const [comments, setComments] = useState([])
    const [submitting, setSubmitting] = useState(false)
    const [value, setValue] = useState('')

    function handleSubmit() {
        if (!value) {
            return;
        }

        setSubmitting(true)

        setTimeout(() => {
            setSubmitting(false)
            setValue('')
            setComments([comments, {
                author: 'NM',
                avatar: 'https://joeschmoe.io/api/v1/random',
                content: <p>{value}</p>,
                datetime: moment().fromNow(),
            }])
        }, 1000)
    }
    
    function handleChange(e) {
        setValue(e.target.value)
    }

    return (
        <>
            {comments.length > 0 && <CommentList comments={comments} />}
            <Comment
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                content={
                    <EditorHelper
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        submitting={submitting}
                        value={value}
                    />
                }
            />
        </>
    )
}
