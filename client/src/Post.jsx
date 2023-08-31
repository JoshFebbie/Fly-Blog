import { format } from 'date-fns'

export default function Post({ title, summary, cover, content, createdAt}) {
    
    return (
        <div className="post">
        <div className="image">
          <img src="https://static.wixstatic.com/media/59732e_f9514d3175fd41c7b29d94d1286dc7e4~mv2.png/v1/fill/w_440,h_330,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/59732e_f9514d3175fd41c7b29d94d1286dc7e4~mv2.png" alt=""/>
        </div>
        <div className="texts">
          <h2>{title}</h2>
          <p className="info">
            <a className="author">Chuck Norris</a>
            <time>{format(new Date (createdAt), "MMM d, yyyy HH:mm" )}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
    )
}