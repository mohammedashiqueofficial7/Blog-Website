import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogView from './pages/BlogView';
import AddEditBlog from './pages/AddEditBlog';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogView />} />
        <Route path="/add-blog" element={<AddEditBlog />} />
        <Route path="/edit-blog/:id" element={<AddEditBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
