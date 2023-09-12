import { useState, useEffect } from "react";
import './App.css';

// authenticate Spotify API
const token = 'BQDaw-YeZVkPBHwgXDF2Qw_fDVloeMHMCNoEvlShD8JXbkh5HQOfoZw-EbUS2UTMfQbCZsxjJ1JSjUeJ6KPVe56BFWSzNwJTLXA49ojigA-V5F81xiuNFQgy9ofliJdidfZk5Fj7SqUFN09U4mL3bAXquHcoA9ePOgn28Ote046lyoTbc_9I8Mlc3pKtxOYNMrnVOtbLjWk5-HbERovzBa1mq-iV3JBrOiezefUImUk-Wp3ovnnjw2lMCSMroUI0_AA3KhM';

const App = () => {
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {

    // fetching top tracks data from the Spotify API
    async function getTopTracks() {
      try {
        const res = await fetch('https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (res.ok) {
          const data = await res.json();
          setTopTracks(data.items)
        } else {
          console.error('Error fetching top tracks:', res.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    getTopTracks();
  }, [])

  return (
    <main className='w-[100vw] h-[100vh] bg-sky-500 text-white'>
      <h1>Your Top Tracks:</h1>
      <ul>
        {topTracks.map(({ name, album }) => (
          <li key={name}>
            {name} by {album.name}
          </li>
        ))}
      </ul>
      <iframe src="https://open.spotify.com/embed/playlist/2RsQSA4QdIgbjFW7RhtlW9?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </main>
  )
}

export default App;