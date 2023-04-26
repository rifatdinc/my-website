import { FC, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import posts from "../../data/posts.json";
// 
const Home: FC = () => {
  const [postList] = useState(posts);

  return (
    <div className="container">
      <h1>Welcome to my Blog!</h1>
      <p>Merhaba, ben Rifat. Yazılım geliştirme ve veri bilimi alanlarında çalışıyorum. Kendimi sürekli geliştirmeye ve öğrenmeye adadım. Bu site, benim çalışmalarımı ve projelerimi paylaşmak için bir platformdur. Burada, yazılım geliştirme, veri bilimi, makine öğrenimi ve yapay zeka gibi konular hakkında yazılarımı ve projelerimi bulabilirsiniz. Ayrıca, benimle iletişime geçmek isterseniz, buradan bana ulaşabilirsiniz.</p>
      <div className="blog-posts">
        {postList.map((post) => (
          <div key={post.id} className="post">
            <h4>{post.title}</h4>
            <p>{post.body.substring(0, 100)}...</p>
            <Link className="read-more" to={`/blog/${post.id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>);

};

export default Home;

