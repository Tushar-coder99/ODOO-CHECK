import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = () => {
    onSearch?.(query);
  };

  return (
    <>
      <button onClick={() => setShowSearch(!showSearch)} style={{ border: 'none', background: 'none', fontSize: '1.2rem' }}>
        🔍
      </button>
      {showSearch && (
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              marginLeft: '1rem'
            }}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button onClick={() => { handleSearch(); setShowSearch(false); }} style={{ marginLeft: '0.5rem' }}>Search</button>
        </div>
      )}
    </>
  );
};

export default SearchBar;
