import './style.scss'

function Tags ({ tags }) {
 
  return (
    <div className="tag-info">
      {tags.map((tag, index) => (
        <span className="tag-info-span" key={index}>{tag}</span>
      ))}
    </div>
  );
}

export default Tags;