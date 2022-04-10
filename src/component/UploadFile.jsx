import React, { useState } from 'react';
import { Upload } from 'antd';

const UploadFile = (limit, {enterPicList}) => {
    const [fileList, setFileList] = useState([]);
    
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const beforeUpload = (file) => {
        console.log(file.uid)
        // enterPicList(file.uid)
    }

    const onPreview = async file => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    };

    return (
        <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
            beforeUpload={beforeUpload}
        >
            {fileList.length < limit.limit && '+ Upload'}
        </Upload>
    );
};

export default UploadFile;