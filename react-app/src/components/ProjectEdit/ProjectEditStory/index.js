import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editProject, deleteProject } from '../../../store/project'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
// import { ImageDrop } from 'quill-image-drop-module';
// Quill.register('modules/imageDrop', ImageDrop);



function ProjectEditStory({ project }) {

    const [storyInnerHTML, setStoryInnerHTML] = useState(project.story)
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([])
    // const modules = () => {
    //     return
    // }

    // let modules = {
    //     toolbar: [
    //         ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    //         [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    //         ['link', 'image'],
    //         ['clean'],
    //     ],
    //     imageDrop: true,
    // };
    const handleStorySubmit = async (e) => {
        e.preventDefault()

        const updatedProject = {
            ...project,
            story: storyInnerHTML === '<p><br></p>' ? null : storyInnerHTML
            // user_id: user.id,
            // title,
            // sub_title: subTitle,
            // category_id: +categoryId,
            // sub_category_id: subCategory === '' ? null : +subCategory,
            // country_id: countryId,
            // project_image_url: imageUrl,
            // campaign_duration: +campaignDuration,
            // funding_goal: +goal,

            // category: categoryId,
            // country: countryId,
        }
        // console.log("THIS IS WHAT YOU'll BE SENDING BACK!", updatedProject)
        let editedProject = await dispatch(editProject(updatedProject))
        console.log('YOUR EDITED PROJECT', editedProject)
        if (editedProject) {
            // setSaveProjectButtonText('Project Saved!')
            // setTimeout(() => {
            //     setSaveProjectButtonText('Save')

            // }, 2000)
            history.push(`/projects/${editedProject.id}`);
        }



    }
    // let formats = [
    //     'bold', 'italic', 'underline', 'strike', 'blockquote',
    //     'list', 'bullet', 'indent',
    //     'link', 'image',
    // ];
    // let quillObj;

    return (
        <div>
            <div>
                <h1>Enter your story</h1>
            </div>
            {/* <ReactQuill /> */}
            <ReactQuill
                // ref=((el)) => {
                // quillObj = el;
                // }
                modules={{
                    toolbar: [
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
                        ['link', 'image'],
                        ['clean'],
                    ],
                    // imageDrop: true,
                }}
                value={storyInnerHTML}
                onChange={e => setStoryInnerHTML(e)}
                formats={['bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', "header"]}
                placeholder="Write about your project like you're explaining it to a friend..."
            />

            {/* <ReactQuill
                ref={(el) => {
                    quillObj = el;
                }}
                // value={this.state.Description}
                modules={{
                    toolbar: {
                        container: [
                            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                            ['bold', 'italic', 'underline'],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                            [{ 'align': [] }],
                            ['link', 'image'],
                            ['clean'],
                            [{ 'color': [] }]
                        ],
                        handlers: {
                            image: imageHandler
                        }
                    },
                    table: true
                }}
                placeholder="Add a description of your event"
                // onChange={(content, delta, source, editor) => this.onDescriptionChange(content, editor)}
                id="txtDescription"
            /> */}
            {/* <textarea></textarea> */}
            <button onClick={handleStorySubmit}>Save Story</button>
        </div>
    )
}



export default ProjectEditStory
