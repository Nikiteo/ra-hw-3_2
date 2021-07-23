import './App.css';
import Listing from './components/Listing/Listing';
import getDatas from './getDatas';

export default function App() {
  const data = getDatas().map((item) => (item));
  return (
    <div className="item-list">
      {data.map((item) => (<Listing key={item.listing_id} items={item} />))}
    </div>
  );
}
