import { Navigate, useNavigate } from 'react-router-dom';
import './PostCard.css'

function PostCard() {

  const navigate = useNavigate();

  return (
    <div className='card-container'>
        <h1>
            Post Card
        </h1>

    <div className="post-card">
      <div className="post-card-input">
        Title : <input type="text" name="Title" placeholder='Enter Title' />
      </div>
      <div className="post-card-input">
        Description : <input type="text" name="Description" placeholder='Enter Description'  />
      </div>
      <div className="post-card-input">
        Tags : <input type="text" name="Tags" placeholder='Enter Tags' />
      </div>
      <div className="post-card-input">
        Author : <input type="text" name="Author" placeholder='Enter Author' />
      </div>
      <div >
        <button className='bottom-button'>Submit</button>
      <button className='bottom-button'  onClick={() => navigate('/')} >Go to home</button>
      </div>


    </div>
    </div>

  );
}

export default PostCard;
