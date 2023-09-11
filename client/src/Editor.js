import ReactQuill from "react-quill"

export default function Editor({value, onChange}) {

    const modules = {
        toolbar: [
            [ { 'font': [] }],
            [{size: []}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'},
            {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image', 'video'],
            ['clean'], [{ 'header': '1'}, {'header': '2'}],
        ]
    }
    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
    ]

    return (
        <ReactQuill 
            value={value}
            theme={"snow"}
            onChange={onChange} 
            modules={modules} 
            formats={formats} />
    )
}