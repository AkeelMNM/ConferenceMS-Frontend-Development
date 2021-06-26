import React, {Component} from 'react';
import '../../styles/user/TemplatesDownload.css';

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

const files =[
    {
        name: "Photo 1",
        thumb:
            "https://images.unsplash.com/photo-1604263439201-171fb8c0fddc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=427&q=80 427w",
        file:
            "https://images.unsplash.com/photo-1604263439201-171fb8c0fddc?rnd=" +
            Math.random(),
        filename: "photo-1.jpg",

    },
    {
        name: "Photo 2",
        thumb:
            "https://images.unsplash.com/photo-1604164388977-1b6250ef26f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80 401w",
        file:
            "https://images.unsplash.com/photo-1604164388977-1b6250ef26f3?rnd=" +
            Math.random(),
        filename: "photo-2.jpg",
    }
];

class TemplatesDownload extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div className={'div-style-TemDow'}>
                <h1> Templates download </h1>

                <div className={'TemDow-container'}>
                    {files.map((file, idx) => (
                        <div className={'TemDow-row'}>
                            <div className={'TemDow-body'}>
                                {/*<img src={file.thumb} />*/}
                                <h1> {file.filename}</h1>
                                <h5> {file.name} </h5>

                                <a> Download  </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    }
}

export default TemplatesDownload;