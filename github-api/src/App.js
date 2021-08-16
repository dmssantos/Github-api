import Layout from './components/layout/index';
import Profile from './components/profile/index';
import { resetCSS } from './global/resetCSS';

function App() {
  return (
    <main >
      <resetCSS />
      <Layout>
        <Profile/>
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
