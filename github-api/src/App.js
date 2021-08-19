import Layout from './components/layout/index';
import Profile from './components/profile/index';
import Repositories from './components/repositories/index';
import GithubProvider from './providers/github-provider';
import { ResetCSS } from './global/resetCSS';

function App() {
  return (
    <main >
      <GithubProvider>
        <ResetCSS />
        <Layout>
          <Profile />
          <Repositories />
        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
