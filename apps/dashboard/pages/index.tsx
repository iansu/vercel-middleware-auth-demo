import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hello, World!</h2>
        <h5 className="text-lg tracking-tight text-gray-900 sm:text-xl mt-2">You should only see this page after you&rsquo;ve logged in</h5>
      </div>
    </div>
  </Layout>
)

export default IndexPage
