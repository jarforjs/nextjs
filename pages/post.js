import { useRouter } from 'next/router';
import Layout from './components/MyLayoutHoc';

const Post = () => {
  const router = useRouter();

  return (
    <div>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </div>
  )
};

export default Layout(Post)
