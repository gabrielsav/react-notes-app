import {MdDeleteForever} from 'react-icons/md'

const Note = () => {
    return(
        <div className='note'>
            <span>Hello! This is the first note!</span>
            <div className="note-footer">
                <small>15/07/2022</small>
                <MdDeleteForever className='delete-icon' size='1.3em' />
            </div>
        </div>
    );
};

export default Note;