import Layout from './components/layout/index';
import Profile from './components/profile/index';

function App() {
  return (
    <main >
      <Layout>
        <Profile/>
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
