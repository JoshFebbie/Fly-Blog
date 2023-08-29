export default function Post() {
    return (
        <div className="post">
        <div className="image">
          <img
            src="https://static.wixstatic.com/media/59732e_f9514d3175fd41c7b29d94d1286dc7e4~mv2.png/v1/fill/w_440,h_330,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/59732e_f9514d3175fd41c7b29d94d1286dc7e4~mv2.png"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>Arizonas hidden gem: The Apache Trout</h2>
          <p className="info">
            <a className="author">Chuck Norris</a>
            <time>2023-08-28 15:00</time>
          </p>
          <p className="summary">
            Apache Trout have an olive-yellow body, with a yellow or golden
            belly. They can grow up to 20 inches long, but most grow only to 9
            inches due to environmental factors.
          </p>
        </div>
      </div>
    )
}